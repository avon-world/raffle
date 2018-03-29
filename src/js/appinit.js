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
		$(".up, .down", $this).css({
			cursor: 'pointer'
		});
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
		});
	});
	var arr = [],
		interval = 0,
		$block = $('#loto'),
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
		arrShufle = function(){
			arr.shuffle();
		},
		startShufle = function(){
			interval = setInterval(arrShufle, 100);
		},
		stopShufle = function(){
			clearInterval(interval);
		},
		build = function(val){
			stopShufle();
			$block.empty();
			arr = [];
			ret = parseInt(val);
			for(var i = 0; i<ret; ++i){
				var k = i+1,
					$span = $('<span></span>').attr('data-number', k);
				arr.push(k);
				$block.append($span);
			}
			winResize();
			startShufle();
		};
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
	$("#btnresult").on("click", function(){
		stopShufle();
		if(arr.length){
			
		}
	});
	build(1);
})(jQuery);