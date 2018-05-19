/*! raffle v2.0.2 | ISC License | https://github.com/avon-world/raffle */
window.debuger=!0,Array.prototype.shuffle=function(a){var b=[],c=Object.assign([],this),d=c.length,e=null,f=null;for(e=0;e<d;e++)f=~~(Math.random()*c.length),b.push(c[f]),c.splice(f,1);return Object.assign(this,b),this},function(a,b,c,d){c(".inputnumber").each(function(){var a=c(this),d=c(".up",a),e=c(".down",a),f=c("input[type=number]",a),g=parseFloat(f.val())?parseFloat(f.val()):0,h=parseFloat(f.attr("step"))?parseFloat(f.attr("step")):1,i=0,j=0,k=function(a){if(!f[0].disabled){var b=parseFloat(f.val())?parseFloat(f.val()):0;switch(g=b,a){case"min":if(parseFloat(f.attr("min"))){var c=parseFloat(f.attr("min"));b=g-h,g=b<c?g:b}else g-=h;break;case"max":if(parseFloat(f.attr("max"))){var d=parseFloat(f.attr("max"));b=g+h,g=b>d?g:b}else g+=h}f.val(g).trigger("input")}};f.on("input change",function(a){g=parseFloat(f.val())?parseFloat(f.val()):0}),e.on("click",function(a){return a.preventDefault(),!1}).on("mousedown touchstart",function(){clearInterval(i),clearTimeout(j),k("min"),j=setTimeout(function(){i=setInterval(function(){k("min")},50)},250)}),d.on("click",function(a){return a.preventDefault(),!1}).on("mousedown touchstart",function(a){"mousedown"==a.type&&1!=a.which||(clearInterval(i),clearTimeout(j),k("max"),j=setTimeout(function(){i=setInterval(function(){k("max")},50)},250))}),c(b).on("mouseup touchend touchcancel",function(a){clearInterval(i),clearTimeout(j)}).on("mouseleave",".up, .down",function(a){clearInterval(i),clearTimeout(j)})})}(window,document,window.jQuery||jQuery),function(a,b,c,d){function e(){return this.each(function(){var a=c(this),b=a.data("ps.raffle");b||(b=new Raffle(this),a.data("ps.raffle",b))})}var f,g={"en-us":{ALERT_ERROR:'<span class="error">ERROR!!!</span>',ERROR_MIN_NUMBER:"First remove the prize.",ALERT_SUCCESS:'<span class="success">Well Done Lottery Drawing!!!</span>',SUCCESS_LOTERY:"Congratulations!<br>All prizes are played.",NOT_PRIZES:"There are no prizes for the draw!",PRIZES_NUM_ERROR:"There are more prizes to draw than participating rooms!",PAGE_TITLE:"Lottery Generator",H1_TITLE:"LOTTERY DRAWING",PLAYED_TITLE:"Prizes to be played",PLAYED_RESULT:"The result of lottery drawing",NUMBER_TITLE:"Number of numbers played",BTN_RAFFLE_TITLE:"Play the lottery",BTN_ADD_TITLE:"Add a prize",BTN_EDIT_TITLE:"Edit the prize",BTN_DELETE_TITLE:"Delete a prize",BTN_CLEAR_TITLE:"Delete all prizes",NOT_SELECT_FILE:"No file selected",BTN_SUBMIT:"Apply",BTN_CANCEL:"Cancel",NAME_LABEL:"Name",PHOTO_LABEL:"Photo",PREVIEW_LABEL:"Preview",ADD_LABEL:"Add",MODAL_TITLE:"Add a prize",SELECT_FILE:"Select File",NOT_ADD:"You can not add a prize.\nThere are more prizes than numbers",NOT_NAME:"You did not enter the prize name",WON_NUMBER:"Won the number",ALERT_DEL_PRIZE:"First remove the prize",END_RAFFLE:"Все призы разыграны!",NEW_RAFFLE:"New Lottery drawing",PRINT:"Print result",month0:"January",month1:"February",month2:"March",month3:"April",month4:"May",month5:"June",month6:"July",month7:"Augustus",month8:"September",month9:"October",month10:"November",month11:"December"},"ru-ru":{ALERT_ERROR:'<span class="error">ОШИБКА!!!</span>',ERROR_MIN_NUMBER:"Сначало удалите приз.",ALERT_SUCCESS:'<span class="success">Лотерея Разыграна!!!</span>',SUCCESS_LOTERY:"Поздравляем!<br>Все призы разыграны.",NOT_PRIZES:"Нет призов для розыгрыша!",PRIZES_NUM_ERROR:"Призов для розыгрыша больше, чем участвующих номеров!",PAGE_TITLE:"Генератор розыгрыша лотереи",H1_TITLE:"РОЗЫГРЫШ ЛОТЕРЕИ",PLAYED_TITLE:"Разыгрываемые призы",PLAYED_RESULT:"Результат розыгрыша лотереи",NUMBER_TITLE:"Количество разыгрываемых номеров",BTN_RAFFLE_TITLE:"Разыграть лотерею",BTN_ADD_TITLE:"Добавить приз",BTN_EDIT_TITLE:"Редактировать приз",BTN_DELETE_TITLE:"Удалить приз",BTN_CLEAR_TITLE:"Удалить все призы",NOT_SELECT_FILE:"Файл не выбран",BTN_SUBMIT:"Применить",BTN_CANCEL:"Отмена",NAME_LABEL:"Название",PHOTO_LABEL:"Фотография",PREVIEW_LABEL:"Предпросмотр",ADD_LABEL:"Добавить",MODAL_TITLE:"Добавить приз",SELECT_FILE:"Выбрать Файл",NOT_ADD:"Вы не можете добавить приз.\nПризов больше чем номеров",NOT_NAME:"Вы не ввели название приза",WON_NUMBER:"Выиграл номер",ALERT_DEL_PRIZE:"Сначало удалите приз",END_RAFFLE:"Все призы разыграны!",NEW_RAFFLE:"Новый розыгрыш лотереи",PRINT:"Распечатать",month0:"Января",month1:"Февраля",month2:"Марта",month3:"Апреля",month4:"Мая",month5:"Июня",month6:"Июля",month7:"Августа",month8:"Сентября",month9:"Октября",month10:"Ноября",month11:"Декабря"}},h=(c.cookie("lang")||navigator.language||navigator.userLanguage).toLowerCase(),i=g[h]?h:"en-us",j=!1,k=[];if(c){Raffle=function(a){var d=this;return Object.defineProperties(d,{lang:{get:function(){return i},set:function(a){i=a,c("[data-i18n]",b).each(function(){if("object"==typeof g[a]){i=a,c.cookie("lang",i,{expires:360,path:"/"});var b=c(this),d=g[i][b.data("i18n")];d&&b.html(d)}}),c("[data-i18n-title]",b).each(function(){if("object"==typeof g[a]){i=a,c.cookie("lang",i,{expires:360,path:"/"});var b=c(this),d=g[i][b.data("i18n-title")],e=c("<div></div>").html(d).text();e&&b.attr({"data-tooltips-title":e,"data-original-title":e}).removeAttr("title")}}),c("[data-i18n-file]",b).each(function(){if("object"==typeof g[a]){i=a,c.cookie("lang",i,{expires:360,path:"/"});var b=c(this),d=g[i][b.data("i18n-file")],e=g[i][b.data("i18n-file-title")],f=c("<div></div>").html(d).text(),h=c("<div></div>").html(e).text();d&&b.attr({"data-file":f,"data-file-title":h})}}),c("#langs > li > a[data-lang]").removeClass("active"),c("#langs > li > a[data-lang="+i+"]").addClass("active"),c("[data-tooltips-title]").tooltip({title:function(){return c(this).attr("data-tooltips-title")},container:"body"}).removeAttr("title"),d.date()}},raffleing:{get:function(){return j},set:function(a){"boolean"==typeof a?j=a:"[object Number]"===Object.prototype.toString.call(a)&&(j=a>0)}},array:{get:function(){return"[object Array]"===Object.prototype.toString.call(k)?k:k=[]},set:function(a){"[object Array]"===Object.prototype.toString.call(a)&&(k=a)}},block:{get:function(){return c("#loto",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},prizes:{get:function(){return c("#prizes",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},result:{get:function(){return c("#result",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},btnraffle:{get:function(){return c("button.rf-raffle",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},btnclear:{get:function(){return c("#btnclear",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},btnadd:{get:function(){return c("#btnadd",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},sizenum:{get:function(){return c("#sizenum",this.element)},set:function(a){throw new Error("Нельзя установить данное значение!")}},addprize:{get:function(){return c("#artic-template .addprize").clone()},set:function(a){throw new Error("Нельзя установить данное значение!")}}}),d.element=a,d.artmodal=null,d.alertmodal=null,d.artedit=null,d.countloop=70,d.raffle=0,d.raffleing=!1,d.rafflestart=!1,d.rafdef=0,d.lang=i,d.init().build(d.sizenum.val()).date(),d},c.extend(Raffle.prototype,{init:function(){var d=this;if(c(b).on("click","#langs > li > a[data-lang]",function(a){return a.preventDefault(),c("#langs > li > a[data-lang]").removeClass("active"),d.lang=c(this).data("lang"),!1}),c(b).on("click",".ok-button",function(a){return a.preventDefault(),d.alertmodal?d.alertmodal.arcticmodal("close"):c.arcticmodal("close"),!1}),c(b).on("click","button.cancel-button",function(a){return a.preventDefault(),c.arcticmodal("close"),!1}),c(d.sizenum).on("input change",function(a){var b=c(this),e=parseInt(b.val()),f=d.prizes.children();if(e=e||1,b.val(e),e<f.length)return b.val(f.length),d.alert.apply(d,[g[d.lang].ALERT_ERROR,g[d.lang].ALERT_DEL_PRIZE]),!1;d.build(e)}),c(d.btnadd).bind("click",function(a){return a.preventDefault(),d.add(),!1}),c(d.btnclear).on("click",function(a){return a.preventDefault(),d.clear(),!1}),d.btnraffle.on("click",function(a){return c(".tooltip").remove(),a.preventDefault(),d.prizes.sortable("option","disabled",!0),d.start(),!1}),d.prizes.sortable({axis:"y",stop:function(a,b){d.prizes.children().each(function(){c(this).removeAttr("style")})},cursor:"n-resize",handle:".handle"}),c(".git a").unbind("click"),c("[data-tooltips-title]").tooltip({title:function(){return c(this).attr("data-tooltips-title")}}),c(".help > a").tooltip({html:!0,placement:"bottom",container:".help",trigger:"click"}),"function"==typeof MutationObserver){var e,f=d.prizes,h=d.btnclear,i=c(".resultraffle h2"),j={childList:!0,characterData:!0,subtree:!0,characterDataOldValue:!0},k=function(a){d.prizes.children().length?d.btnclear[0].disabled&&d.btnclear.removeAttr("disabled"):d.btnclear[0].disabled||d.btnclear.attr("disabled","disabled"),d.prizes.children().length?d.raffleing?d.btnraffle.tooltip("destroy"):d.btnraffle.removeAttr("disabled"):d.btnraffle.attr({disabled:"disabled"}).removeClass("active"),d.raffleing&&c(h).attr("disabled","disabled"),d.prizes.children().length<d.block.children().length&&d.prizes.children().length>=0?d.btnadd.removeAttr("disabled"):d.btnadd.attr("disabled","disabled"),d.result.children().length?i.hasClass("hidden")&&i.removeClass("hidden"):i.hasClass("hidden")||i.addClass("hidden")};e=new MutationObserver(k),e.observe(d.element,j),c(f).text("GO").empty(),d.result.text("GO").empty()}return c(a).data({selfrafle:d}),c(a).on("keydown",d.keycommand),d},keycommand:function(b){var d=c(a).data("selfrafle");if(d){if(d.alertmodal)return 13!=b.keyCode?void 0:(d.alertmodal.arcticmodal("close"),b.preventDefault(),!1);if(!d.raffleing&&!d.rafflestart&&b.altKey&&b.ctrlKey&&18!=b.keyCode&&17!=b.keyCode){var e=d.sizenum.val();switch(b.keyCode){case 65:d.btnadd.trigger("click");break;case 40:--e,d.sizenum.val(e).trigger("change");break;case 38:d.sizenum.is(":focus")||(++e,d.sizenum.val(e).trigger("change"))}}}},alert:function(a,b){var d=c('<div class="box-modal reload-modal text-center alert-modal"><div class="reload-modal-wrapper"><h2 class="text-center">'+a+'</h2><p class="text-center">'+b+'</p></div><button class="ok-button">OK</button></div>'),e=this;return c.arcticmodal({content:d,closeOnOverlayClick:!1,closeOnEsc:!1,beforeOpen:function(a,b){e.sizenum.blur(),e.alertmodal=b,e.artmodal&&c("input, button",e.artmodal).attr({disabled:"disabled"})},afterClose:function(a,b){e.alertmodal=null,e.artmodal&&(c("input, button",e.artmodal).removeAttr("disabled"),e.setFocus())}}),e},loopraffle:function(){var a,b,d,e=this,g=e.prizes.children(),h=g.length;clearTimeout(f),c("span[data-number]",e.block).removeClass("pre-active"),e.btnraffle.hasClass("active")||e.btnraffle.addClass("active"),++e.raffle,h?e.raffle<e.countloop?(e.array.shuffle(),a=e.array.length-1,b=Math.round(Math.random()*a+a-a),d=e.array[b],c("span[data-number='"+d+"']",e.block).addClass("pre-active"),f=setTimeout(e.loopraffle.bind(e),60)):(e.raffle=0,a=e.array.length-1,b=Math.round(Math.random()*a+a-a),d=e.array[b],c("span[data-number="+d+"]",e.block).addClass("active"),e.array.splice(b,1),e.prize(d),e.array.length&&(1==e.array.length&&(e.raffle=e.countloop),f=setTimeout(e.loopraffle.bind(e),4500))):e.stop()},start:function(){var a=this,b=a.prizes.children(),d=b.length;if(a.btnraffle.tooltip("destroy"),!a.raffleing){if(0==d)return a.alert.apply(a,[g[a.lang].ALERT_ERROR,g[a.lang].NOT_PRIZES]),!1;if(d>a.array.length)return a.alert.apply(a,[g[a.lang].ALERT_ERROR,g[a.lang].PRIZES_NUM_ERROR]),!1}return!a.raffleing&&a.array.length&&(c("body").addClass("raffleing"),a.rafdef=a.array.length,a.raffleing=a.rafflestart=!0,a.raffle=0,c(".inputnumber").addClass("disabled"),c("input[type=number], #btnadd").attr("disabled","disabled"),a.btnraffle.addClass("active"),c(".columns-settings-label-buttons").slideUp(500),c(".columns-settings").slideUp(500),a.loopraffle()),a},stop:function(){var b=this;clearTimeout(f),b.btnraffle.removeClass("active").slideUp(300),[].forEach.call(c("button, input"),function(a){"btnclear"!=c(a).attr("id")&&a.removeAttribute("disabled")}),c(".inputnumber").removeClass("disabled"),b.btnadd.removeAttr("disabled"),b.raffleing=!1,b.rafflestart=!0,b.raffle=0,b.prizes.children().length?b.btnclear.removeAttr("disabled"):b.btnclear.attr("disabled","disabled");var d=c("<div></div>",{class:"reload text-center print-hidden"}).append(c("<a></a>",{class:"reload-link",href:"",text:g[b.lang].NEW_RAFFLE}).on("click",function(a){return a.preventDefault(),c("a",d).unbind("click"),d.remove(),b.reload(),!1}).attr({"data-i18n":"NEW_RAFFLE"})).append(c("<a></a>",{class:"print-link",href:"",text:g[b.lang].PRINT}).on("click",function(b){return b.preventDefault(),a.print(),!1}).attr({"data-i18n":"PRINT"}));return c(".columns-result.full").prepend(d),c("body").addClass("end"),b.prizes.sortable("option","disabled",!1),setTimeout(function(){b.alert.apply(b,[g[b.lang].ALERT_SUCCESS,g[b.lang].SUCCESS_LOTERY])},500),b},prize:function(a){var b,d=this,e=d.prizes.children(),g={},h=!1;return e.length&&(b=e.first(),b.addClass("active").attr({"data-number":a}),{top:b.offset().top,left:b.offset().left,width:b.width(),height:b.height()},g={left:d.result.offset().left,width:d.result.width()},setTimeout(function(){b.css({position:"absolute","z-index":1e3,top:b.offset().top,left:b.offset().left,width:b.width(),height:b.height()}).parent().css({paddingTop:b.height()}),c(".handle",b).removeClass("ui-sortable-handle"),c("body").prepend(b),b.animate(g,1e3,function(){b.animate({top:d.result.offset().top+d.result.height()},1500,function(){d.result.children().length||(h=!0,d.result.append('<div style="height: 0px !important; overflow: hidden;">&nbsp;</div>')),d.result.animate({paddingBottom:b.height()},500,function(){d.result.css({paddingBottom:0}),h&&d.result.empty(),d.result.append(b.removeAttr("style"))}),d.prizes.animate({padding:0},500,function(){d.prizes.removeAttr("style"),d.prizes.children().length||(clearTimeout(f),d.stop(),c(".columns-settings-label > h2").slideUp(500))})})})},1e3)),d},build:function(a){var d=this,e=0;d.block.empty(),d.array=[],e=parseInt(a),d.rafdef=e;for(var f=0;f<e;++f){var g=f+1,h=c(b.createElement("span")).attr("data-number",g);d.array.push(g),d.block.append(h.append(b.createElement("span")))}return d},reload:function(){var a=this;return c(".columns-settings-label > h2").slideDown(500),c(".columns-settings-label-buttons").slideDown(500),c(".columns-settings").slideDown(500),c("body").removeClass("raffleing end"),a.btnraffle.slideDown(500),a.prizes.empty(),a.result.empty(),c(a.sizenum).val(1),a.build(a.sizenum.val()),a.lang=i,a.rafflestart=!1,a.raffleing=!1,a},setFocus:function(){var a=this;return setTimeout(function(){if(a.artmodal.length){var b=c(".addprize-name",a.artmodal),d=2*b.val().length;b[0]&&(b.focus(),b[0].setSelectionRange(d,d))}},50),a},edit:function(a){c(".tooltip").remove();var b=this;if(1!=a.length)return b;var d,e=c("#artic-template .addprize").clone(),f=c(".preview-image",e),h=c(".addprize-button",e),i=c(".addprize-name",e),j=c(".input-file",e),k=(c(".addprize > h2",e),c('<div class="box-modal" />')),l=a.data("bg"),m=a.data("crop"),n=a.data("name"),o=a.data("file"),p=function(){if(b.alertmodal)return!1;var f=c.trim(i.val()),h=e.data(),j=c(".bg",a),k=c(".text",a);if(""==f)return b.alert.apply(b,[g[b.lang].ALERT_ERROR,g[b.lang].NOT_NAME]),!1;d.unbind("input change"),a.data({bg:h.original,crop:h.crop,name:f,file:h.file,files:d[0]}),j.css({backgroundImage:"url("+h.crop+")"}).data({parent:a}),h.original?j.addClass("pointer"):j.removeClass("pointer"),k.text(f),b.artmodal.arcticmodal("close")};return d=c(a.data("files")).on("input change",function(){var a=c(this),d=a.parent();if(f.croppie("destroy"),f.croppie({viewport:{width:300,height:300},boundary:{width:300,height:300},showZoomer:!1,enableOrientation:!0,mouseWheelZoom:"ctrl",enableExif:!0}),this.files&&this.files[0]){var h=new FileReader;h.onload=function(a){c(".upload-demo").addClass("ready"),f.croppie("bind",{url:a.target.result}).then(function(){}),e.data({original:this.result})},h.readAsDataURL(this.files[0]),f.croppie("result",{type:"canvas",size:"viewport"}).then(function(a){e.data({crop:a}),b.setFocus()}),d.attr({"data-file":this.files[0].name}),e.data({file:this.files[0].name})}else!function(){d.attr({"data-file":g[b.lang].NOT_SELECT_FILE}),e.data({original:!1,file:!1}),f.croppie("bind","assets/images/nophoto.jpg"),b.setFocus()}();b.setFocus()}),j.empty().append(d),k.append(e),e.data({original:l,crop:m,name:n,file:o}),f.croppie({viewport:{width:300,height:300},boundary:{width:300,height:300},showZoomer:!1,enableOrientation:!0,mouseWheelZoom:"ctrl",enableExif:!0}),f.on("update.croppie",function(a,c){f.croppie("result",{type:"canvas",size:"viewport"}).then(function(a){e.data({crop:a})}),setTimeout(b.setFocus.bind(b),50)}),f.croppie("bind",{url:l||"assets/images/nophoto.jpg"}).then(function(){}),h.on("click",function(a){if(!b.alertmodal)return a.preventDefault(),p(),!1}).text(g[b.lang].BTN_SUBMIT),i.on("keydown",function(a){if(13==a.keyCode&&!a.ctrlKey&&!a.altKey&&!b.alertmodal)return a.preventDefault(),p(),!1}).focus(),c.arcticmodal({content:k,closeOnOverlayClick:!1,beforeOpen:function(a,d){b.artmodal=d,c("[data-i18n=MODAL_TITLE]").text(g[b.lang].BTN_EDIT_TITLE),i.val(n),j.attr({"data-file":o||g[b.lang].NOT_SELECT_FILE})},afterClose:function(){b.artmodal=null,b.artedit=null}}),b},add:function(){c(".tooltip").remove();var a=this,b=a.prizes.children(),d=b.length;if(a.array.length<=d)return a.alert.apply(a,[g[a.lang].ALERT_ERROR,g[a.lang].NOT_ADD]),a;if(a.artmodal)return a;var e=c("#artic-template .addprize").clone(),f=c(".preview-image",e),h=c(".addprize-button",e),i=c(".addprize-name",e),j=c("[type=file]",e),k=c('<div class="box-modal" />'),l=function(){var b=c.trim(i.val());if(""==b)return void(a.alertmodal||a.alert.apply(a,[g[a.lang].ALERT_ERROR,g[a.lang].NOT_NAME]));e.data({name:b,file:j.parent().data("file")}),j.unbind("input change");var d=e.data(),f=c("<li></li>",{class:"prize"}).attr({"data-number":"?"}).data({bg:d.original,crop:d.crop,name:d.name,file:d.file,files:j[0]}),k=c("<span></span>",{class:"bg"}).css({backgroundImage:"url("+d.crop+")"}).data({parent:f}),l=c("<span></span>",{class:"text"}).text(d.name),m=c("<span></span>",{class:"rf-clear btn btn-remove"}).data({parent:f}).attr({title:g[a.lang].BTN_DELETE_TITLE,"data-i18n-title":"BTN_DELETE_TITLE"}),n=c("<span></span>",{class:"rf-edit btn btn-edit"}).data({parent:f,original:d.original}).attr({title:g[a.lang].BTN_EDIT_TITLE,"data-i18n-title":"BTN_EDIT_TITLE"});m.on("click",function(a){a.preventDefault();var b=c(this).data("parent");return c([m,n]).tooltip("destroy"),b.remove(),!1}),n.on("click",function(b){return b.preventDefault(),a.edit(c(this).data("parent")),!1}),d.original&&k.addClass("pointer"),k.on("click",function(b){var d=c(this),e=d.data("parent"),f=e.data("bg"),h=e.attr("data-number"),i="";f&&(h&&"?"!=h&&(i=" --- "+g[a.lang].WON_NUMBER+" "+h+" "),c.fancybox.open([{src:f,opts:{caption:l.text()+i},animationEffect:"zoom-in-out",transitionEffect:"circular",transitionDuration:700}]))}),f.append([c('<span class="handle"></span>'),k,l,m,n]),a.prizes.append(f),a.prizes.sortable("refresh"),h.unbind("click"),a.artmodal.arcticmodal("close")};return k.append(e),f.croppie({viewport:{width:300,height:300},boundary:{width:300,height:300},showZoomer:!1,enableOrientation:!0,mouseWheelZoom:"ctrl",enableExif:!0}),f.on("update.croppie",function(b,c){f.croppie("result",{type:"canvas",size:"viewport"}).then(function(a){e.data({crop:a})}),setTimeout(a.setFocus.bind(a),50)}),f.croppie("bind","assets/images/nophoto.jpg"),h.on("click",function(b){if(!a.alertmodal)return b.preventDefault(),l(),!1}),i.on("keydown",function(b){if(13!=b.keyCode||b.ctrlKey||b.altKey);else if(!a.alertmodal)return b.preventDefault(),l(),!1}).focus(),j.on("input change",function(b){var d=c(this),h=d.parent();if(f.croppie("destroy"),f.croppie({viewport:{width:300,height:300},boundary:{width:300,height:300},showZoomer:!1,enableOrientation:!0,mouseWheelZoom:"ctrl",enableExif:!0}),this.files&&this.files[0]){var i=new FileReader;i.onload=function(a){c(".upload-demo").addClass("ready"),f.croppie("bind",{url:a.target.result}).then(function(){}),e.data({original:this.result})},i.readAsDataURL(this.files[0]),f.croppie("result",{type:"canvas",size:"viewport"}).then(function(b){e.data({crop:b}),a.setFocus()}),h.attr({"data-file":this.files[0].name}),e.data({file:this.files[0].name})}else!function(){h.attr({"data-file":g[a.lang].NOT_SELECT_FILE}),e.data({original:!1}),f.croppie("bind","assets/images/nophoto.jpg"),a.setFocus()}();a.setFocus()}).parent().attr({"data-file":g[a.lang].NOT_SELECT_FILE}),c.arcticmodal({content:k,closeOnOverlayClick:!1,beforeOpen:function(b,c){a.artmodal=c},afterClose:function(){a.artmodal=null,a.artedit=null,c("[title]").tooltip({title:function(){return c(this).attr("data-tooltips-title")},container:"body"})}}),a},clear:function(){c(".tooltip").remove();var a=this;return c("[data-original-title]",a.prizes).tooltip("destroy"),a.prizes.empty(),a},date:function(){var a=this,b=new Date,d=g[a.lang]["month"+b.getMonth()];return c("span.dateyear").text(b.getFullYear()),c(".date").attr({"data-date":" "+b.getDate()+" "+d+" "+b.getFullYear()}),a},windowresize:function(){setTimeout(function(){c(a).trigger("resize")},5)},log:function(){a.debuger&&console.log.apply(console,arguments)}});var l=c.fn.raffle;c.fn.raffle=e,c.fn.raffle.Constructor=Raffle,c.fn.raffle.noConflict=function(){return c.fn.raffle=l,this},c.cookie("lang",i,{expires:360,path:"/"}),a.ds=c(c("#lotereya > .row")[0]).raffle().data("ps.raffle"),c(a).on("load",function(b){setTimeout(function(){c("body").addClass("load "),setTimeout(function(){c(a).trigger("resize")},2e3)},3e3)})}}(window,document,window.jQuery||jQuery);