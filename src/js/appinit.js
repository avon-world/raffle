Array.prototype.shuffle = function( b ){
	var newArr=[],
		arr = Object.assign([], this),
		count=arr.length,
		i=null,
		rnd=null;
	for (i=0; i<count; i++) {
		rnd=~~(Math.random() * arr.length);
		newArr.push(arr[rnd]);
		arr.splice(rnd,1);
	}
	Object.assign(this, newArr);
	return this;
};
window.debuger = true;
;(function($){
	window.debuger = (typeof window.debuger == "boolean") ? window.debuger : false;
	$('.inputnumber').each(function(){
		var $this = $(this),
			$up = $(".up", $this),
			$down = $(".down", $this),
			$input = $("input[type=number]", $this),
			val = parseFloat($input.val()) ? parseFloat($input.val()) : 0,
			step = parseFloat($input.attr("step")) ? parseFloat($input.attr("step")) : 1,
			ani = 0,
			updown = 0,
			pause = 250,
			speed = 50,
			setDownUpVal = function(type){
				if($input[0].disabled){
					return;
				}
				var virt = parseFloat($input.val()) ? parseFloat($input.val()) : 0;
				val = virt;
				switch(type){
					case 'min':
						if(parseFloat($input.attr("min"))){
							var min = parseFloat($input.attr("min"));
							virt = val - step;
							val = virt < min ? val : virt;
						}else{
							val = val - step;
						}
						break;
					case 'max':
						if(parseFloat($input.attr("max"))){
							var max = parseFloat($input.attr("max"));
							virt = val + step;
							val = virt > max ? val : virt;
						}else{
							val = val + step;
						}
						break;
					default:
						break;
				}
				$input.val(val).trigger('input');
			};
		/*$(".up, .down", $this).css({
			cursor: 'pointer'
		});*/
		$input.on("input change", function(e){
			val = parseFloat($input.val()) ? parseFloat($input.val()) : 0;
		});
		$down.on("click", function(e){
			e.preventDefault();
			return !1;
		}).on("mousedown", function(){
			clearInterval(ani);
			clearTimeout(updown);
			setDownUpVal('min');
			updown = setTimeout(function(){
				ani = setInterval(function(){
					setDownUpVal('min');
				}, speed);
			}, pause);
		});
		$up.on("click", function(e){
			e.preventDefault();
			return !1;
		}).on("mousedown", function(){
			clearInterval(ani);
			clearTimeout(updown);
			setDownUpVal('max');
			updown = setTimeout(function(){
				ani = setInterval(function(){
					setDownUpVal('max');
				}, speed);
			}, pause);
		});
		$(document).on('mouseup', function(e){
			clearInterval(ani);
			clearTimeout(updown);
		}).on("mouseleave", ".up, .down", function(e){
			clearInterval(ani);
			clearTimeout(updown);
		});
	});
	var arr = [],
		interval = 0,
		rafdef = 0,
		rafloop = 70,
		loop = 0,
		raffle = 0,
		raffleing = false,
		$block = $('#loto'),
		$prizes = $('#prizes'),
		$result = $('#result'),
		$btnraffle = $("button.rf-raffle"),
		$btnclear = $("#btnclear"),
		$btnadd = $("#btnadd"),
		loopRaffle = function(){
			var r, t, n;
			clearTimeout(loop);
			$("span[data-number]", $block).removeClass('pre-active');
			if(!$btnraffle.hasClass('active'))
				$btnraffle.addClass('active');
			++raffle;
			if(raffle < rafloop){
				arr.shuffle();
				r = arr.length-1;
				t = Math.round((Math.random() * r + r)- r);
				n = arr[t];
				$("span[data-number='"+n+"']", $block).addClass('pre-active');
				loop = setTimeout(loopRaffle, 60);
			}else{
				raffle = 0;
				r = arr.length-1;
				t = Math.round((Math.random() * r + r)- r);
				n = arr[t];
				$("span[data-number="+n+"]", $block).addClass('active');
				// Перемещение приза к номеру
				arr.splice(t, 1);
				getPrize(n);
				if(arr.length){
					if(arr.length == 1)
						raffle = rafloop;
					loop = setTimeout(loopRaffle, 3000);
				}else{
					stopRaffle();
				}
			}
			
		},
		stopRaffle = function(){
			[].forEach.call($("button, input"), function(el){
				if($(el).attr('id') != 'btnclear')
					el.removeAttribute('disabled');
			});
			$(".inputnumber").removeClass('disabled');
			$btnraffle.removeClass('active');
			$("#btnadd")[0].removeAttribute("disabled");
			raffleing = false;
			raffle = 0;
			
			var $childs = $prizes.children(),
				len = $childs.length;
			if(len)
				$("#btnclear")[0].removeAttribute("disabled");
			else
				$("#btnclear").attr("disabled", "disabled");
		},
		log = function(){
			if(window.debuger){
				console.log.apply(console, arguments);
			}
		},
		winResize = function(){
			setTimeout(function(){
				$(window).trigger('resize');
			}, 5);
		},
		build = function(val){
			$block.empty();
			arr = [];
			ret = parseInt(val);
			rafdef = ret;
			for(var i = 0; i<ret; ++i){
				var k = i+1,
					$span = $(document.createElement("span")).attr('data-number', k);
				arr.push(k);
				$block.append($span.append(document.createElement("span")));
			}
			winResize();
		},
		getDateFormat = function(){
			var month = [
					'января', 'февраля', 'марта', 'апреля',
					'мая', 'июня', 'июля', 'августа',
					'сентября', 'октября', 'ноября', 'декабря'
				],
				jDate = new Date();
			return ' от ' + jDate.getDate() + month[jDate.getMonth()] + ' ' + jDate.getFullYear()+' г.';
		},
		getPrize = function(nn){
			var childs = $prizes.children(),
				el, pzpt,
				pos = {},
				win = {};
			if(childs.length){
				el = childs.first();
				pzpt = el.parent();
				el.addClass('active').attr({
					'data-number': nn
				});
				pos = {
					top: el.offset().top,
					left: el.offset().left,
					width: el.width(),
					height: el.height()
				};
				win = {
					left: $result.offset().left,
					width: $result.width(),
				};
				setTimeout(function(){
					el.css({
						position: 'absolute',
						'z-index': 1000,
						top: el.offset().top,
						left: el.offset().left,
						width: el.width(),
						height: el.height()
					}).parent().css({
						paddingTop: el.height()
					});
					$('body').prepend(el);
					el.animate(win, 1000, function(){
						el.animate({
							top: $result.offset().top + $result.height()
						}, 500, function(){
							$result.append(el.removeAttr("style"));
							pzpt.animate({
								"padding" : 0
							}, 500, function(){
								pzpt.removeAttr("style");
							});
						});
					});
				}, 1000);
			}
		};
		
		
		
	if(typeof MutationObserver == 'function'){
		var $prz = $("#prizes")[0],
			$btc = $("#btnclear")[0],
			config = {
				childList: true,
				characterData: true,
				subtree: true,
				characterDataOldValue: true
			},
			callback = function(mutationsList) {
				var $childs = $($prz).children(),
					len = $childs.length;
				if(len){
					if($btc.disabled)
						$btc.removeAttribute("disabled");
				}else{
					if(!$btc.disabled)
						$($btc).attr("disabled", "disabled");
				}
				if(raffleing){
					$($btc).attr("disabled", "disabled");
				}
			};
		var observer = new MutationObserver(callback);
		observer.observe($prz, config);
		//$($prz).text("GO").empty();
	}
	
	$btnraffle.on('click', function(e){
		e.preventDefault();
		if(!raffleing && arr.length){
			rafdef = arr.length;
			raffleing = true;
			raffle = 0;
			$(".inputnumber").addClass('disabled');
			$("input[type=number], #btnadd").attr('disabled',"disabled");
			loopRaffle();
			$(this).addClass("active");
		}
		return !1;
	});
	$("input[type='number']").on("blur", function(e){
		var $this = $(this),
			id = $this.attr('id'),
			val = parseInt($this.val());
		if(!val){
			val = 1;
			$this.val(val);
		}
		if(id=="sizenum"){
			build(val);
		}
	}).on('input change', function(e){
		var $this = $(this),
			id = $this.attr('id'),
			val = parseInt($this.val());
		val = val ? val : 0;
		if(id=="sizenum"){
			build(val);
		}
	});
	$("input[type='number']").trigger('input');
	$(".date").attr({
		'data-date': getDateFormat()
	});
	$btnclear.on('click', function(e){
		e.preventDefault();
		$prizes.empty();
		return !1;
	});
	$btnadd.on('click', function(e){
		e.preventDefault();
		var childs = $prizes.children(),
			el, pzpt,
			pos = {},
			win = {};
		if(childs.length){
			el = childs.first();
			pzpt = el.parent();
			el.addClass('active').attr({
				'data-number': 50
			});
			pos = {
				top: el.offset().top,
				left: el.offset().left,
				width: el.width(),
				height: el.height()
			};
			win = {
				left: $result.offset().left,
				width: $result.width(),
			};
			setTimeout(function(){
				el.css({
					position: 'absolute',
					'z-index': 1000,
					top: el.offset().top,
					left: el.offset().left,
					width: el.width(),
					height: el.height()
				}).parent().css({
					paddingTop: el.height()
				});
				$('body').prepend(el);
				el.animate(win, 1000, function(){
					el.animate({
						top: $result.offset().top + $result.height()
					}, 500, function(){
						$result.append(el.removeAttr("style"));
						pzpt.animate({
							"padding" : 0
						}, 500, function(){
							pzpt.removeAttr("style");
						});
					});
				});
			}, 1000);
		}
		return !1;
	});
})(jQuery);