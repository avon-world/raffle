window.debuger = true;
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
;(function(window, document, $, undefined){
	
	/*
	 *
	 * input type number
	 * Autor: ProjectSoft
	 * 
	 * 
	*/
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
		}).on("mousedown touchstart", function(e){
			if(e.type == 'mousedown'){
				if(e.which != 1){
					return;
				}
			}
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
}(window, document, window.jQuery || jQuery));

;(function(window, document, $, undefined){
	
	/*
	 * 
	 * Raffle Plugin
	 * Autor: ProjectSoft
	 * 
	*/
	var i18n = {
			'en-us': {
				'PAGE_TITLE': 'Lottery Generator',
				'H1_TITLE': 'LOTTERY DRAWING',
				'PLAYED_TITLE': 'Prizes to be played',
				'PLAYED_RESULT': 'The result of lottery drawing',
				'NUMBER_TITLE':	'Number of numbers played',
				'BTN_RAFFLE_TITLE': 'Play the lottery',
				'BTN_ADD_TITLE': 'Add a prize',
				'BTN_EDIT_TITLE': 'Edit the prize',
				'BTN_DELETE_TITLE': 'Delete a prize',
				'BTN_CLEAR_TITLE': 'Delete all prizes',
				'NOT_SELECT_FILE': 'No file selected',
				'BTN_SUBMIT': 'Apply',
				'BTN_CANCEL': 'Cancel',
				'NAME_LABEL': 'Name',
				'PHOTO_LABEL': 'Photo',
				'PREVIEW_LABEL': 'Preview',
				'ADD_LABEL': 'Add',
				'MODAL_TITLE':'Add a prize',
				'SELECT_FILE': 'Select File',
				'NOT_ADD': 'You can not add a prize.\nThere are more prizes than numbers',
				'NOT_NAME': 'You did not enter the prize name',
				'WON_NUMBER': 'Won the number',
				'ALERT_DEL_PRIZE': 'First remove the prize',
				'END_RAFFLE': 'Все призы разыграны!',
				'NEW_RAFFLE': 'New Lottery drawing',
				'PRINT': 'Print result',
				'month0': 'January',
				'month1': 'February',
				'month2': 'March',
				'month3': 'April',
				'month4': 'May',
				'month5': 'June',
				'month6': 'July',
				'month7': 'Augustus',
				'month8': 'September',
				'month9': 'October',
				'month10': 'November',
				'month11': 'December'
			},
			'ru-ru': {
				'PAGE_TITLE': 'Генератор розыгрыша лотереи',
				'H1_TITLE': 'РОЗЫГРЫШ ЛОТЕРЕИ',
				'PLAYED_TITLE': 'Разыгрываемые призы',
				'PLAYED_RESULT': 'Результат розыгрыша лотереи',
				'NUMBER_TITLE':	'Количество разыгрываемых номеров',
				'BTN_RAFFLE_TITLE': 'Разыграть лотерею',
				'BTN_ADD_TITLE': 'Добавить приз',
				'BTN_EDIT_TITLE': 'Редактировать приз',
				'BTN_DELETE_TITLE': 'Удалить приз',
				'BTN_CLEAR_TITLE': 'Удалить все призы',
				'NOT_SELECT_FILE': 'Файл не выбран',
				'BTN_SUBMIT': 'Применить',
				'BTN_CANCEL': 'Отмена',
				'NAME_LABEL': 'Название',
				'PHOTO_LABEL': 'Фотография',
				'PREVIEW_LABEL': 'Предпросмотр',
				'ADD_LABEL': 'Добавить',
				'MODAL_TITLE':'Добавить приз',
				'SELECT_FILE': 'Выбрать Файл',
				'NOT_ADD': 'Вы не можете добавить приз.\nПризов больше чем номеров',
				'NOT_NAME': 'Вы не ввели название приза',
				'WON_NUMBER': 'Выиграл номер',
				'ALERT_DEL_PRIZE': 'Сначало удалите приз',
				'END_RAFFLE': 'Все призы разыграны!',
				'NEW_RAFFLE': 'Новый розыгрыш лотереи',
				'PRINT': 'Распечатать',
				'month0': 'Января',
				'month1': 'Февраля',
				'month2': 'Марта',
				'month3': 'Апреля',
				'month4': 'Мая',
				'month5': 'Июня',
				'month6': 'Июля',
				'month7': 'Августа',
				'month8': 'Сентября',
				'month9': 'Октября',
				'month10': 'Ноября',
				'month11': 'Декабря'
			}
		},
		userLang = ($.cookie('lang') || navigator.language || navigator.userLanguage).toLowerCase(),
		_lang = i18n[userLang] ? userLang : 'en-us',
		_raffleing = false,
		_array = [],
		_loop;
	if(!$){
		return;
	}
	
	Raffle = function(element){
		
		var self = this;
		
		Object.defineProperties(self, {
			lang: {
				get: function() {
					return _lang;
				},
				set: function(value){
					_lang = value;
					$('[data-i18n]', document).each(function(){
						if(typeof i18n[value] == 'object'){
							_lang = value;
							$.cookie('lang', _lang, { expires: 360, path: '/' });
							var $this = $(this),
								TEXT = i18n[_lang][$this.data('i18n')];
							if(TEXT){
								$this.text(TEXT);
							}
						}
					});
					$('[data-i18n-title]', document).each(function(){
						if(typeof i18n[value] == 'object'){
							_lang = value;
							$.cookie('lang', _lang, { expires: 360, path: '/' });
							var $this = $(this),
								TEXT = i18n[_lang][$this.data('i18n-title')];
							if(TEXT){
								$this[0].title = TEXT;
							}
						}
					});
					$('[data-i18n-file]', document).each(function(){
						if(typeof i18n[value] == 'object'){
							_lang = value;
							$.cookie('lang', _lang, { expires: 360, path: '/' });
							var $this = $(this),
								TEXT = i18n[_lang][$this.data('i18n-file')],
								BTNTEXT = i18n[_lang][$this.data('i18n-file-title')];
							if(TEXT){
								$this.attr({
									'data-file': TEXT,
									'data-file-title': BTNTEXT
								});
							}
						}
					});
					$("#langs > li > a[data-lang]").removeClass('active');
					$("#langs > li > a[data-lang="+_lang+"]").addClass('active');
					
					self.date();
				}
			},
			raffleing: {
				get: function(){
					return _raffleing;
				},
				set: function(value){
					if(typeof value == 'boolean'){
						_raffleing = value;
					}else if(Object.prototype.toString.call(value) ==='[object Number]'){
						_raffleing = (value > 0);
					}
				}
			},
			array: {
				get: function(){
					if(Object.prototype.toString.call(_array)==='[object Array]'){
						return _array;
					}else{
						_array = [];
					}
					return _array;
				},
				set: function(value){
					if(Object.prototype.toString.call(value)==='[object Array]'){
						_array = value;
					}
				}
			},
			block: {
				get: function(){
					return $('#loto', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			prizes: {
				get: function(){
					return $('#prizes', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			result: {
				get: function(){
					return $('#result', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			btnraffle: {
				get: function(){
					return $('button.rf-raffle', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			btnclear: {
				get: function(){
					return $('#btnclear', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			btnadd: {
				get: function(){
					return $('#btnadd', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			sizenum: {
				get: function(){
					return $('#sizenum', this.element);
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			},
			addprize: {
				get: function(){
					return $("#artic-template .addprize").clone();
				},
				set: function(value){
					throw new Error('Нельзя установить данное значение!');
				}
			}
		});
		self.element = element;
		
		self.artmodal = null;
		self.artedit = null;
		
		self.countloop = 70;
		self.raffle = 0;
		self.raffleing = false;
		self.rafdef = 0;
		
		self.lang = _lang;
		self
			.init()
			.date()
			.build(self.sizenum.val());
		$(document).on('click', 'button.cancel-button', function(e){
			e.preventDefault();
			$.arcticmodal('close');
			return !1;
		});
		return self;
	};
	$.extend(Raffle.prototype, {
		init: function(){
			var self = this;
			$(document).on('click', "#langs > li > a[data-lang]", function(e){
				e.preventDefault();
				$("#langs > li > a[data-lang]").removeClass('active');
				self.lang = $(this).data('lang');
				return !1;
			});
			$(document).on('click', '.ok-button', function(e){
				e.preventDefault();
				$.arcticmodal('close');
				return !1;
			});
			$(self.sizenum).on("input change", function(e){
				var $this = $(this),
					val = parseInt($this.val()),
					childs = self.prizes.children();
				val = val ? val : 0;
				if(val < childs.length){
					$this.val(childs.length);
					//alert(i18n[self.lang].ALERT_DEL_PRIZE);
					return !1;
				}
				self.build(val);
			});
			$(self.btnadd).bind('click', function(e){
				e.preventDefault();
				self.add();
				return !1;
			});
			$(self.btnclear).on('click', function(e){
				e.preventDefault();
				self.clear();
				return !1;
			});
			self.btnraffle.on('click', function(e){
				e.preventDefault();
				self.start();
				return !1;
			});
			$('.git a').unbind('click');
			if(typeof MutationObserver == 'function'){
				var $prz = self.prizes,
					$btc = self.btnclear,
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
						var $childs = self.prizes.children(),
							len = $childs.length;
						if(len){
							if(self.btnclear[0].disabled)
								self.btnclear.removeAttr("disabled");
							
						}else{
							if(!self.btnclear[0].disabled)
								self.btnclear.attr("disabled", "disabled");
						}
						
						if(!self.prizes.children().length){
							self.btnraffle.attr({disabled: 'disabled'}).removeClass('active');
						}else{
							if(!self.raffleing){
								self.btnraffle.removeAttr('disabled');
							}
						}
						
						if(self.raffleing){
							$($btc).attr("disabled", "disabled");
							self.btnraffle.attr({disabled: 'disabled'});
						}
						
						
						
						if(self.prizes.children().length < self.block.children().length && self.prizes.children().length >= 0){
							self.btnadd.removeAttr('disabled');
						}else{
							self.btnadd.attr('disabled', 'disabled');
						}
						
						var $childsres = self.result.children(),
							lens = $childsres.length;
						if(lens){
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
				observer.observe(self.element, config);
				$($prz).text("GO").empty();
				self.result.text("GO").empty();
				
			}
			return self;
		},
		loopraffle: function() {
			//_loop;
			var self = this,
				r, t, n,
				childs = self.prizes.children(),
				len = childs.length;
			clearTimeout(_loop);
			$("span[data-number]", self.block).removeClass('pre-active');
			if(!self.btnraffle.hasClass('active'))
				self.btnraffle.addClass('active');
			++self.raffle;
			self.log(len);
			if(len){
				if(self.raffle < self.countloop){
					self.array.shuffle();
					r = self.array.length-1;
					t = Math.round((Math.random() * r + r)- r);
					n = self.array[t];
					$("span[data-number='"+n+"']", self.block).addClass('pre-active');
					_loop = setTimeout(self.loopraffle.bind(self), 60);
				}else{
					self.raffle = 0;
					r = self.array.length-1;
					t = Math.round((Math.random() * r + r)- r);
					n = self.array[t];
					$("span[data-number="+n+"]", self.block).addClass('active');
					// Перемещение приза к номеру
					self.array.splice(t, 1);
					self.prize(n);
					self.log('self.array.length', self.array.length);
					if(self.array.length){
						if(self.array.length == 1)
							self.raffle = self.countloop;
						_loop = setTimeout(self.loopraffle.bind(self), 3500);
					}
				}
			}else{
				self.stop();
			}
		},
		start: function(){
			var self = this,
				childs = self.prizes.children(),
				len = childs.length;
			if(!self.raffleing){
				if(len==0){
					alert("Нет призов для розыгрыша!");
					return !1;
				}
				if(len > self.array.length){
					alert("Призов для розыгрыша больше, чем учавствующих номеров!");
					return !1;
				}
			}
			self.log('bool',(!self.raffleing && self.array.length));
			self.log('bool 1', !self.raffleing);
			self.log(self.array.length);
			if(!self.raffleing && self.array.length){
				$('body').addClass('raffleing');
				self.rafdef = self.array.length;
				self.raffleing = true;
				self.raffle = 0;
				$(".inputnumber").addClass('disabled');
				$("input[type=number], #btnadd").attr('disabled',"disabled");
				self.btnraffle.addClass("active");
				//$('.columns-settings-label').slideUp(500);
				$('.columns-settings-label-buttons').slideUp(500);
				$(".columns-settings").slideUp(500);
				self.loopraffle();
			}
			return self;
		},
		stop: function(){
			var self = this;
			clearTimeout(_loop);
			self.btnraffle.removeClass('active').slideUp(300);
			[].forEach.call($("button, input"), function(el){
				if($(el).attr('id') != 'btnclear')
					el.removeAttribute('disabled');
			});
			$(".inputnumber").removeClass('disabled');
			self.btnadd.removeAttr("disabled");
			self.raffleing = false;
			self.raffle = 0;
			var $childs = self.prizes.children(),
				len = $childs.length;
			if(len){
				self.btnclear.removeAttr("disabled");
			}else{
				self.btnclear.attr("disabled", "disabled");
			}
			var reload = $('<div></div>', {
				class: 'reload text-center print-hidden'
			}).append(
				$('<a></a>', {
					class: 'reload-link',
					href: '',
					text: i18n[self.lang].NEW_RAFFLE
				}).on('click', function(e){
					e.preventDefault();
					$('a', reload).unbind('click');
					reload.remove();
					self.reload();
					return !1;
				}).attr({
					'data-i18n': 'NEW_RAFFLE'
				})
			).append(
				$('<a></a>', {
					class: 'print-link',
					href: '',
					text: i18n[self.lang].PRINT
				}).on('click', function(e){
					e.preventDefault();
					window.print();
					return !1;
				}).attr({
					'data-i18n': 'PRINT'
				})
			);
			$('.columns-result.full').prepend(reload);
			$('body').addClass('end');
			setTimeout(function(){
				
				var c = $('<div class="box-modal reload-modal text-center">' + 
							'<h2 class="text-center">' + i18n[self.lang].END_RAFFLE + '</h2>' + 
							'<button class="ok-button">OK</button>' + 
							'</div>');
				//c.prepend('<div class="box-modal_close arcticmodal-close rf-remove"></div>');
				$.arcticmodal({
					content: c,
					closeOnOverlayClick: false,
					beforeOpen: function(d, f){
						self.artmodal = f;
						
					},
					afterClose: function(){
						self.artmodal = null;
						self.artedit = null;
					}
				});
			}, 3500);
			return self;
		},
		prize: function(val){
			var self = this;
			var childs = self.prizes.children(),
				el, pzpt,
				pos = {},
				win = {},
				ch = false;
			if(childs.length){
				el = childs.first();
				el.addClass('active').attr({
					'data-number': val
				});
				pos = {
					top: el.offset().top,
					left: el.offset().left,
					width: el.width(),
					height: el.height()
				};
				win = {
					left: self.result.offset().left,
					width: self.result.width(),
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
							top: self.result.offset().top + self.result.height()
						}, 500, function(){
							// self.result.append(el.removeAttr("style"));
							if(!self.result.children().length){
								ch = true;
								self.result.append("<div style=\"height: 0px !important; overflow: hidden;\">&nbsp;</div>");
							}
							self.result.animate({
								paddingBottom: el.height()
							}, 500, function(){
								self.result.css({
									paddingBottom: 0
								});
								if(ch){
									self.result.empty();
								}
								self.result.append(el.removeAttr("style"));
							});
							self.prizes.animate({
								"padding" : 0
							}, 500, function(){
								self.prizes.removeAttr("style");
								var childs = self.prizes.children(),
									len = childs.length;
								if(!len){
									clearTimeout(_loop);
									self.stop();
									$('.columns-settings-label > h2').slideUp(500);
								}
							});
						});
					});
				}, 1000);
			}
			return self;
		},
		build: function(val){
			var self = this,
				ret = 0;
			self.block.empty();
			self.array = [];
			ret = parseInt(val);
			self.rafdef = ret;
			for(var i = 0; i<ret; ++i){
				var k = i+1,
					$span = $(document.createElement("span")).attr('data-number', k);
				self.array.push(k);
				self.block.append($span.append(document.createElement("span")));
			}
			return self;
		},
		reload: function(){
			var self = this;
			$('.columns-settings-label > h2').slideDown(500);
			$('.columns-settings-label-buttons').slideDown(500);
			$(".columns-settings").slideDown(500);
			$('body').removeClass('raffleing end');
			self.btnraffle.slideDown(500);
			self.prizes.empty();
			self.result.empty();
			$(self.sizenum).val(1);
			self.build(self.sizenum.val());
			return self;
		},
		setFocus: function(){
			var self = this;
			setTimeout(function(){
				if(self.artmodal.length) {
					var $ntext = $(".addprize-name", self.artmodal),
						len = $ntext.val().length * 2;
					if($ntext[0]){
						$ntext.focus();
						$ntext[0].setSelectionRange(len, len);
					}
				}
			}, 50);
			return self;
		},
		edit: function(el){
			var self = this,
				element = el;
			if(el.length != 1)
				return self;
			var $temp = $("#artic-template .addprize").clone(),
				$crp = $(".preview-image", $temp),
				$submit = $(".addprize-button", $temp),
				$name = $(".addprize-name", $temp),
				$file,
				$fileparent = $('.input-file', $temp),
				h2 = $('.addprize > h2', $temp),
				c = $('<div class="box-modal" />'),
				originalUri = el.data('bg'),
				cropUri = el.data('crop'),
				name = el.data('name'),
				file = el.data('file'),
				addHandle = function(){
					
					$.arcticmodal('close');
				};
			$file = $(el.data('files')).on('input change', function(){
				var $this = $(this),
					$parent = $this.parent(),
					clear = function(){
						$parent.attr({
							'data-file': i18n[self.lang].NOT_SELECT_FILE
						});
						$temp.data({
							'original': false,
							'file': false 
						});
						$crp.croppie('bind', 'assets/images/nophoto.jpg');
						self.setFocus();
					};
				$crp.croppie('destroy');
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
				
				if(this.files && this.files[0]){
					var reader = new FileReader();
					reader.onload = function (e) {
						$('.upload-demo').addClass('ready');
						$crp.croppie('bind', {
							url: e.target.result
						}).then(function(){
							
						});
						$temp.data({
							'original': this.result
						});
					};
					reader.readAsDataURL(this.files[0]);
					$crp.croppie('result', {
						type: 'canvas',
						size: 'viewport'
					}).then(function (resp) {
						$temp.data({
							'crop': resp
						});
						self.setFocus();
					});
					$parent.attr({
						'data-file': this.files[0].name
					});
					$temp.data({
						file: this.files[0].name
					});
				}else{
					clear();
				}
				self.setFocus();
			});
			$fileparent.empty().append($file);
			c.append($temp);
			$temp.data({
				original: originalUri,
				crop: cropUri,
				name: name,
				file: file
			});
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
				setTimeout(self.setFocus.bind(self), 50);
			});
			$crp.croppie('bind', {
				url: originalUri ? originalUri : 'assets/images/nophoto.jpg'
			}).then(function(){
				
			});
			c.prepend('<div class="box-modal_close arcticmodal-close rf-remove"></div>');
			$submit.on("click", function(e){
				e.preventDefault();
				addHandle();
				return !1;
			}).text(i18n[self.lang].BTN_SUBMIT);
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
					self.artmodal = f;
					
					$('[data-i18n=MODAL_TITLE]').text(i18n[self.lang].BTN_EDIT_TITLE);
					$name.val(name);
					$fileparent.attr({
						'data-file': file ? file : i18n[self.lang].NOT_SELECT_FILE
					});
				},
				afterClose: function(){
					var val = $.trim($name.val()),
						data = $temp.data(),
						$bg = $('.bg', el),
						$text = $('.text', el);
					if(val==""){
						alert(i18n[self.lang].NOT_NAME);
						setTimeout(self.setFocus.bind(self), 50);
						return !1;
					}
					$file.unbind('input change');
					el.data({
						bg: data.original,
						crop: data.crop,
						name: val,
						file: data.file,
						files: $file[0]
					});
					$bg.css({
						backgroundImage: "url(" + data.crop + ")"
					}).data({
						'parent': el
					});
					if(data.original){
						$bg.addClass('pointer');
					}else{
						$bg.removeClass('pointer');
					}
					$text.text(val);
					self.artmodal = null;
					self.artedit = null;
				}
			});
			return self;
		},
		add: function(){
			var self = this,
				childs = self.prizes.children(),
				len = childs.length;
			if(self.array.length <= len){
				alert(i18n[self.lang].NOT_ADD);
				return self;
			}
			var $temp = $("#artic-template .addprize").clone(),
				$crp = $(".preview-image", $temp),
				$submit = $(".addprize-button", $temp),
				$name = $(".addprize-name", $temp),
				$file = $("[type=file]", $temp),
				c = $('<div class="box-modal" />'),
				addHandle = function(){
					var val = $.trim($name.val());
					if(val==""){
						alert(i18n[self.lang].NOT_NAME);
						setTimeout(self.setFocus.bind(self), 50);
						return !1;
					}
					$temp.data({
						'name': val,
						'file': $file.parent().data('file')
					});
					$file.unbind('input change');
					var data = $temp.data(),
						$li = $('<li></li>', {
							'class': 'prize'
						}).attr({
							'data-number': "?"
						}).data({
							bg: data.original,
							crop: data.crop,
							name: data.name,
							file: data.file,
							files: $file[0]
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
							'title': i18n[self.lang].BTN_DELETE_TITLE,
							'data-i18n-title': 'BTN_DELETE_TITLE'
						}),
						$edit = $('<span></span>', {
							'class': 'rf-edit btn btn-edit'
						}).data({
							'parent': $li,
							'original': data.original
						}).attr({
							'title': i18n[self.lang].BTN_EDIT_TITLE,
							'data-i18n-title': 'BTN_EDIT_TITLE'
						});
					$close.on("click", function(e){
						e.preventDefault();
						var parent = $(this).data('parent');
						parent.remove();
						return !1;
					});
					$edit.on('click', function(e){
						e.preventDefault();
						self.edit($(this).data('parent'));
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
								txt = " --- " + i18n[self.lang].WON_NUMBER + " " + num + " ";
							}
							$.fancybox.open([
								{
									src  : uri,
									opts : {
										caption : $text.text() + txt
									},
									animationEffect: 'zoom-in-out',
									transitionEffect: 'circular',
									transitionDuration: 700
								}
							]);
						}
					});
					$li.append([$bg, $text, $close, $edit]);
					self.prizes.append($li);
					$submit.unbind('click');
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
				setTimeout(self.setFocus.bind(self), 50);
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
			$file.on('input change', function(e){
				var $this = $(this),
					$parent = $this.parent(),
					clear = function(){
						$parent.attr({
							'data-file': i18n[self.lang].NOT_SELECT_FILE
						});
						$temp.data({
							'original': false
						});
						$crp.croppie('bind', 'assets/images/nophoto.jpg');
						self.setFocus();
					};
				$crp.croppie('destroy');
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
				
				if(this.files && this.files[0]){
					var reader = new FileReader();
					reader.onload = function (e) {
						$('.upload-demo').addClass('ready');
						$crp.croppie('bind', {
							url: e.target.result
						}).then(function(){
							
						});
						$temp.data({
							'original': this.result
						});
					};
					reader.readAsDataURL(this.files[0]);
					$crp.croppie('result', {
						type: 'canvas',
						size: 'viewport'
					}).then(function (resp) {
						$temp.data({
							'crop': resp
						});
						self.setFocus();
					});
					$parent.attr({
						'data-file': this.files[0].name
					});
					$temp.data({
						file: this.files[0].name
					});
				}else{
					clear();
				}
				self.setFocus();
			}).parent().attr({
				'data-file': i18n[self.lang].NOT_SELECT_FILE
			});
			$.arcticmodal({
				content: c,
				closeOnOverlayClick: false,
				beforeOpen: function(d, f){
					self.artmodal = f;
					
				},
				afterClose: function(){
					self.artmodal = null;
					self.artedit = null;
				}
			});
			return self;
		},
		clear: function(){
			var self = this;
			self.prizes.empty();
			return self;
		},
		date: function(){
			var self = this,
				jDate = new Date(),
				month = i18n[self.lang]['month'+jDate.getMonth()];
			$('span.dateyear').text(jDate.getFullYear());
			$(".date").attr({
				'data-date': ' ' + jDate.getDate() + ' ' + month + ' ' + jDate.getFullYear()
			});
			return self;
		},
		windowresize: function(){
			setTimeout(function(){
				$(window).trigger('resize');
			}, 5);
		},
		log: function(){
			if(window.debuger){
				console.log.apply(console, arguments);
			}
		}
	});
	function Plugin() {
		return this.each(function () {
			var $this   = $(this),
				data    = $this.data('ps.raffle');
			if (!data){
				data = new Raffle(this);
				$this.data('ps.raffle', data);
			}
		});
	}
	
	var old = $.fn.raffle;
	
	$.fn.raffle             = Plugin;
	
	$.fn.raffle.Constructor = Raffle;
	
	$.fn.raffle.noConflict = function () {
		$.fn.raffle = old;
		return this;
	};
	
	
	
	/* main */
	$.cookie('lang', _lang, { expires: 360, path: '/' });
	window.ds = $($('#lotereya > .row')[0]).raffle().data('ps.raffle');
	$(window).on('load', function(e){
		
		setTimeout(function(){
			$('body').addClass('load ');
			setInterval(function(){
				$(window).trigger('resize');
			},200);
		}, 1000);
	});
	
}( window, document, window.jQuery || jQuery ));