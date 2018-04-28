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
		$input.on("input change", function(e){
			val = parseFloat($input.val()) ? parseFloat($input.val()) : 0;
		});
		$down.on("click", function(e){
			e.preventDefault();
			return !1;
		}).on("mousedown touchstart", function(){
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
		}).on("mousedown touchstart", function(){
			clearInterval(ani);
			clearTimeout(updown);
			setDownUpVal('max');
			updown = setTimeout(function(){
				ani = setInterval(function(){
					setDownUpVal('max');
				}, speed);
			}, pause);
		});
		$(document).on('mouseup touchend touchcancel', function(e){
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
		$artmodal = null,
		$artedit = null,
		$block = $('#loto'),
		$prizes = $('#prizes'),
		$result = $('#result'),
		$btnraffle = $("button.rf-raffle"),
		$btnclear = $("#btnclear"),
		$btnadd = $("#btnadd"),
		loopRaffle = function(){
			var r, t, n,
				childs = $prizes.children(),
				len = childs.length;
			clearTimeout(loop);
			$("span[data-number]", $block).removeClass('pre-active');
			if(!$btnraffle.hasClass('active'))
				$btnraffle.addClass('active');
			++raffle;
			if(len){
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
						loop = setTimeout(function(){
							loopRaffle();
						}, 3500);
					}else{
						stopRaffle();
					}
				}
			}else{
				stopRaffle();
				setTimeout(function(){
					alert("Все призы разиграны!");
				}, 310);
			}
		},
		stopRaffle = function(){
			$btnraffle.removeClass('active').slideUp(300);
			[].forEach.call($("button, input"), function(el){
				if($(el).attr('id') != 'btnclear')
					el.removeAttribute('disabled');
			});
			$(".inputnumber").removeClass('disabled');
			$("#btnadd")[0].removeAttribute("disabled");
			raffleing = false;
			raffle = 0;
			//$(".columns-settings-label").addClass("hidden");
			var $childs = $prizes.children(),
				len = $childs.length;
			if(len){
				$("#btnclear")[0].removeAttribute("disabled");
			}else{
				$("#btnclear").attr("disabled", "disabled");
			}
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
			$('span.dateyear').text(jDate.getFullYear());
			return ' от ' + jDate.getDate() + ' ' + month[jDate.getMonth()] + ' ' + jDate.getFullYear() + ' г.';
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
								var childs = $prizes.children(),
									len = childs.length;
								if(!len){
									$('.columns-settings-label').slideUp(500);
								}
							});
						});
					});
				}, 1000);
			}
		},
		readFile = function(input, cropper) {
			var $parent = $(input).closest('.addprize');
 			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
					cropper.croppie('bind', {
						url: e.target.result
					}).then(function(){
						//console.log(cropper);
					});
					$parent.data({
						'original': this.result
					});
				};
				reader.readAsDataURL(input.files[0]);
				return reader;
			}
			setFocus();
			return false;
		},
		setFocus = function(){
			if($artmodal){
				setTimeout(function(){
					if($artmodal.length) {
						var $ntext = $(".addprize-name", $artmodal),
							len = $ntext.val().length * 2;
						if($ntext[0]){
							$ntext.focus();
							$ntext[0].setSelectionRange(len, len);
						}
					}
				}, 50);
			}
		},
		editPrize = function(el){
			console.log(el.data('parent'));
		};
		
		
		
	if(typeof MutationObserver == 'function'){
		var $prz = $("#prizes")[0],
			$btc = $("#btnclear")[0],
			$titleresult = $(".resultraffle h2"),
			observer,
			result,
			config = {
				childList: true,
				characterData: true,
				subtree: true,
				characterDataOldValue: true
			},
			callbackPrize = function(mutationsList) {
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
			},
			callbackResult = function(mutationsList) {
				var $childs = $result.children(),
					len = $childs.length;
				if(len){
					if($titleresult.hasClass('hidden')) {
						$titleresult.removeClass('hidden');
					}
				}else{
					if(!$titleresult.hasClass('hidden')) {
						$titleresult.addClass('hidden');
					}
				}
			};
		observer = new MutationObserver(callbackPrize);
		observer.observe($prz, config);
		result = new MutationObserver(callbackResult);
		result.observe($result[0], config);
		$($prz).text("GO").empty();
		$result.text("GO").empty();
		
	}
	
	$btnraffle.on('click', function(e){
		e.preventDefault();
		var childs = $prizes.children(),
			len = childs.length;
		if(!raffleing){
			if(len==0){
				alert("Нет призов для розыгрыша!");
				return !1;
			}
			if(len > arr.length){
				alert("Призов для розыгрыша больше, чем учавствующих номеров!");
				return !1;
			}
		}
		if(!raffleing && arr.length){
			$('body').addClass('raffleing');
			rafdef = arr.length;
			raffleing = true;
			raffle = 0;
			$(".inputnumber").addClass('disabled');
			$("input[type=number], #btnadd").attr('disabled',"disabled");
			loopRaffle();
			$(this).addClass("active");
			$(".columns-settings-label-buttons, .columns-settings-label-number").slideUp(500);
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
			len = childs.length;
		if(arr.length <= len){
			alert("Вы не можете добавить приз.\nПризов больше чем номеров");
			return !1;
		}
		
		var $temp = $("#artic-template .addprize").clone(),
			$crp = $(".preview-image", $temp),
			$submit = $(".addprize-button", $temp),
			$name = $(".addprize-name", $temp),
			c = $('<div class="box-modal" />'),
			addHandle = function(){
				var childs = $prizes.children(),
					len = childs.length,
					$lich;
				if(arr.length <= len){
					alert("Вы не можете добавить приз.\nПризов больше чем номеров");
					return !1;
				}
				var val = $.trim($name.val());
				if(val==""){
					alert("Вы не ввели название приза.");
					setTimeout(setFocus, 50);
					return !1;
				}
				$temp.data({
					'name': val
				});
				var data = $temp.data(),
					$li = $('<li></li>', {
						'class': 'prize'
					}).attr({
						'data-number': "?"
					}).data({
						bg: data.original
					}),
					$bg = $('<span></span>', {
						'class': 'bg'
					}).css({
						backgroundImage: "url(" + data.crop + ")"
					}).data({
						'parent': $li
					}),
					$text = $('<span></span>', {
						'class': 'text'
					}).text(data.name),
					$close = $('<span></span>', {
						'class': 'rf-clear btn btn-remove'
					}).data({
						'parent': $li
					}).attr({
						'title': 'Удалить приз'
					}),
					$edit = $('<span></span>', {
						'class': 'rf-edit btn btn-edit'
					}).data({
						'parent': $li
					}).attr({
						'title':'Редактировать'
					});
				$close.on("click", function(e){
					e.preventDefault();
					var parent = $(this).data('parent');
					parent.remove();
					return !1;
				});
				$edit.on('click', function(e){
					e.preventDefault();
					editPrize($(this));
					return !1;
				});
				if(data.original){
					$bg.addClass('pointer');
				}
				$bg.on("click", function(e){
					var $this = $(this),
						$parent = $this.data('parent'),
						uri = $parent.data('bg'),
						num = $parent.attr('data-number'),
						txt = "";
					if(uri){
						if(num && num != "?"){
							txt = " --- Выиграл номер " + num + " ";
						}
						$.fancybox.open([
							{
								src  : uri,
								opts : {
									caption : $text.text() + txt
								}
							}
						]);
					}
				});
				$li.append([$bg, $text, $close, $edit]);
				$prizes.append($li);
				$.arcticmodal('close');
			};
		c.append($temp);
		$crp.croppie({
			viewport: {
				width: 300,
				height: 300
			},
			boundary: {
				width: 300,
				height: 300
			},
			showZoomer: false,
			enableOrientation: true,
			mouseWheelZoom: 'ctrl',
			enableExif: true
		});
		$crp.on('update.croppie', function(ev, cropData) {
			$crp.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				$temp.data({
					'crop': resp
				});
			});
			setTimeout(setFocus, 50);
		});
		$crp.croppie('bind', 'assets/images/nophoto.jpg');
		c.prepend('<div class="box-modal_close arcticmodal-close rf-remove"></div>');
		$submit.on("click", function(e){
			e.preventDefault();
			addHandle();
			return !1;
		});
		$name.on('keydown', function(e){
			if(e.keyCode == 13 && !e.ctrlKey && !e.altKey){
				e.preventDefault();
				addHandle();
				return !1;
			}
		}).focus();
		$.arcticmodal({
			content: c,
			closeOnOverlayClick: false,
			beforeOpen: function(d, f){
				$artmodal = f;
				setTimeout(setFocus, 50);
			},
			afterClose: function(){
				$artmodal = null;
				$artedit = null;
			}
		});
		return !1;
	});
	$(document).on('keydown', function(e){
		if(e.keyCode===13 && $artmodal && !e.altKey && !e.ctrlKey){
			e.preventDefault();
			$(".addprize-button", $artmodal).focus().trigger("click");
			return !1;
		}
	});
	$(document).on("input change focus", "input[type=file]", function(e){
		$(".preview-image").croppie('destroy');
		var $this = $(this),
			$data = $this.closest('.addprize'),
			$parent = $this.parent(),
			$crop = $(".preview-image", $data).croppie({
				viewport: {
					width: 300,
					height: 300
				},
				boundary: {
					width: 300,
					height: 300
				},
				showZoomer: false,
				enableOrientation: true,
				mouseWheelZoom: 'ctrl',
				enableExif: true
			}),
			clear = function(){
				$parent.attr({
					'data-file': "Файл не выбран"
				});
				$data.data({
					'original': false
				});
				$crop.croppie('bind', 'assets/images/nophoto.jpg');
				setFocus();
			};
		if(this.files && this.files[0]){
			readFile(this, $crop);
			$crop.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				$data.data({
					'crop': resp
				});
				setFocus();
			});
			$parent.attr({
				'data-file': this.files[0].name
			});
		}else{
			clear();
		}
		$(this).blur();
		setFocus();
	}).on('click focus', "input[type=file]", function(e){
		$(this).blur();
		setFocus();
	});
	
})(jQuery);