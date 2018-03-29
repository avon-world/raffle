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
			val = parseInt($this.val()),
			numbers = $("#size");
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