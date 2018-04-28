/*! raffle v1.0.0 | ISC License | https://github.com/avon-world/raffle */
Array.prototype.shuffle=function(a){var b=[],c=Object.assign([],this),d=c.length,e=null,f=null;for(e=0;e<d;e++)f=~~(Math.random()*c.length),b.push(c[f]),c.splice(f,1);return Object.assign(this,b),this},function(a){window.debuger="boolean"==typeof window.debuger&&window.debuger,a(".inputnumber").each(function(){var b=a(this),c=a(".up",b),d=a(".down",b),e=a("input[type=number]",b),f=parseFloat(e.val())?parseFloat(e.val()):0,g=parseFloat(e.attr("step"))?parseFloat(e.attr("step")):1,h=0,i=0,j=function(a){if(!e[0].disabled){var b=parseFloat(e.val())?parseFloat(e.val()):0;switch(f=b,a){case"min":if(parseFloat(e.attr("min"))){var c=parseFloat(e.attr("min"));b=f-g,f=b<c?f:b}else f-=g;break;case"max":if(parseFloat(e.attr("max"))){var d=parseFloat(e.attr("max"));b=f+g,f=b>d?f:b}else f+=g}e.val(f).trigger("input")}};e.on("input change",function(a){f=parseFloat(e.val())?parseFloat(e.val()):0}),d.on("click",function(a){return a.preventDefault(),!1}).on("mousedown touchstart",function(){clearInterval(h),clearTimeout(i),j("min"),i=setTimeout(function(){h=setInterval(function(){j("min")},50)},250)}),c.on("click",function(a){return a.preventDefault(),!1}).on("mousedown touchstart",function(){clearInterval(h),clearTimeout(i),j("max"),i=setTimeout(function(){h=setInterval(function(){j("max")},50)},250)}),a(document).on("mouseup touchend touchcancel",function(a){clearInterval(h),clearTimeout(i)}).on("mouseleave",".up, .down",function(a){clearInterval(h),clearTimeout(i)})});var b=[],c=0,d=0,e=0,f=!1,g=null,h=null,i=a("#loto"),j=a("#prizes"),k=a("#result"),l=a("button.rf-raffle"),m=a("#btnclear"),n=a("#btnadd"),o=function(){var c,f,g,h=j.children(),k=h.length;clearTimeout(d),a("span[data-number]",i).removeClass("pre-active"),l.hasClass("active")||l.addClass("active"),++e,k?e<70?(b.shuffle(),c=b.length-1,f=Math.round(Math.random()*c+c-c),g=b[f],a("span[data-number='"+g+"']",i).addClass("pre-active"),d=setTimeout(o,60)):(e=0,c=b.length-1,f=Math.round(Math.random()*c+c-c),g=b[f],a("span[data-number="+g+"]",i).addClass("active"),b.splice(f,1),s(g),b.length?(1==b.length&&(e=70),d=setTimeout(function(){o()},3500)):p()):(p(),setTimeout(function(){alert("Все призы разиграны!")},310))},p=function(){l.removeClass("active").slideUp(300),[].forEach.call(a("button, input"),function(b){"btnclear"!=a(b).attr("id")&&b.removeAttribute("disabled")}),a(".inputnumber").removeClass("disabled"),a("#btnadd")[0].removeAttribute("disabled"),f=!1,e=0,j.children().length?a("#btnclear")[0].removeAttribute("disabled"):a("#btnclear").attr("disabled","disabled")},q=function(){setTimeout(function(){a(window).trigger("resize")},5)},r=function(d){i.empty(),b=[],ret=parseInt(d),c=ret;for(var e=0;e<ret;++e){var f=e+1,g=a(document.createElement("span")).attr("data-number",f);b.push(f),i.append(g.append(document.createElement("span")))}q()},s=function(b){var c,d,e=j.children(),f={};e.length&&(c=e.first(),d=c.parent(),c.addClass("active").attr({"data-number":b}),{top:c.offset().top,left:c.offset().left,width:c.width(),height:c.height()},f={left:k.offset().left,width:k.width()},setTimeout(function(){c.css({position:"absolute","z-index":1e3,top:c.offset().top,left:c.offset().left,width:c.width(),height:c.height()}).parent().css({paddingTop:c.height()}),a("body").prepend(c),c.animate(f,1e3,function(){c.animate({top:k.offset().top+k.height()},500,function(){k.append(c.removeAttr("style")),d.animate({padding:0},500,function(){d.removeAttr("style"),j.children().length||a(".columns-settings-label").slideUp(500)})})})},1e3))},t=function(b,c){var d=a(b).closest(".addprize");if(b.files&&b.files[0]){var e=new FileReader;return e.onload=function(b){a(".upload-demo").addClass("ready"),c.croppie("bind",{url:b.target.result}).then(function(){}),d.data({original:this.result})},e.readAsDataURL(b.files[0]),e}return u(),!1},u=function(){g&&setTimeout(function(){if(g.length){var b=a(".addprize-name",g),c=2*b.val().length;b[0]&&(b.focus(),b[0].setSelectionRange(c,c))}},50)},v=function(a){console.log(a.data("parent"))};if("function"==typeof MutationObserver){var w,x,y=a("#prizes")[0],z=a("#btnclear")[0],A=a(".resultraffle h2"),B={childList:!0,characterData:!0,subtree:!0,characterDataOldValue:!0},C=function(b){a(y).children().length?z.disabled&&z.removeAttribute("disabled"):z.disabled||a(z).attr("disabled","disabled"),f&&a(z).attr("disabled","disabled")},D=function(a){k.children().length?A.hasClass("hidden")&&A.removeClass("hidden"):A.hasClass("hidden")||A.addClass("hidden")};w=new MutationObserver(C),w.observe(y,B),x=new MutationObserver(D),x.observe(k[0],B),a(y).text("GO").empty(),k.text("GO").empty()}l.on("click",function(d){d.preventDefault();var g=j.children(),h=g.length;if(!f){if(0==h)return alert("Нет призов для розыгрыша!"),!1;if(h>b.length)return alert("Призов для розыгрыша больше, чем учавствующих номеров!"),!1}return!f&&b.length&&(a("body").addClass("raffleing"),c=b.length,f=!0,e=0,a(".inputnumber").addClass("disabled"),a("input[type=number], #btnadd").attr("disabled","disabled"),o(),a(this).addClass("active"),a(".columns-settings-label-buttons, .columns-settings-label-number").slideUp(500)),!1}),a("input[type='number']").on("blur",function(b){var c=a(this),d=c.attr("id"),e=parseInt(c.val());e||(e=1,c.val(e)),"sizenum"==d&&r(e)}).on("input change",function(b){var c=a(this),d=c.attr("id"),e=parseInt(c.val());e=e||0,"sizenum"==d&&r(e)}),a("input[type='number']").trigger("input"),a(".date").attr({"data-date":function(){var b=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],c=new Date;return a("span.dateyear").text(c.getFullYear())," от "+c.getDate()+" "+b[c.getMonth()]+" "+c.getFullYear()+" г."}()}),m.on("click",function(a){return a.preventDefault(),j.empty(),!1}),n.on("click",function(c){c.preventDefault();var d=j.children(),e=d.length;if(b.length<=e)return alert("Вы не можете добавить приз.\nПризов больше чем номеров"),!1;var f=a("#artic-template .addprize").clone(),i=a(".preview-image",f),k=a(".addprize-button",f),l=a(".addprize-name",f),m=a('<div class="box-modal" />'),n=function(){var c=j.children(),d=c.length;if(b.length<=d)return alert("Вы не можете добавить приз.\nПризов больше чем номеров"),!1;var e=a.trim(l.val());if(""==e)return alert("Вы не ввели название приза."),setTimeout(u,50),!1;f.data({name:e});var g=f.data(),h=a("<li></li>",{class:"prize"}).attr({"data-number":"?"}).data({bg:g.original}),i=a("<span></span>",{class:"bg"}).css({backgroundImage:"url("+g.crop+")"}).data({parent:h}),k=a("<span></span>",{class:"text"}).text(g.name),m=a("<span></span>",{class:"rf-clear btn btn-remove"}).data({parent:h}).attr({title:"Удалить приз"}),n=a("<span></span>",{class:"rf-edit btn btn-edit"}).data({parent:h}).attr({title:"Редактировать"});m.on("click",function(b){return b.preventDefault(),a(this).data("parent").remove(),!1}),n.on("click",function(b){return b.preventDefault(),v(a(this)),!1}),g.original&&i.addClass("pointer"),i.on("click",function(b){var c=a(this),d=c.data("parent"),e=d.data("bg"),f=d.attr("data-number"),g="";e&&(f&&"?"!=f&&(g=" --- Выиграл номер "+f+" "),a.fancybox.open([{src:e,opts:{caption:k.text()+g}}]))}),h.append([i,k,m,n]),j.append(h),a.arcticmodal("close")};return m.append(f),i.croppie({viewport:{width:300,height:300},boundary:{width:300,height:300},showZoomer:!1,enableOrientation:!0,mouseWheelZoom:"ctrl",enableExif:!0}),i.on("update.croppie",function(a,b){i.croppie("result",{type:"canvas",size:"viewport"}).then(function(a){f.data({crop:a})}),setTimeout(u,50)}),i.croppie("bind","assets/images/nophoto.jpg"),m.prepend('<div class="box-modal_close arcticmodal-close rf-remove"></div>'),k.on("click",function(a){return a.preventDefault(),n(),!1}),l.on("keydown",function(a){if(13==a.keyCode&&!a.ctrlKey&&!a.altKey)return a.preventDefault(),n(),!1}).focus(),a.arcticmodal({content:m,closeOnOverlayClick:!1,beforeOpen:function(a,b){g=b,setTimeout(u,50)},afterClose:function(){g=null,h=null}}),!1}),a(document).on("keydown",function(b){if(13===b.keyCode&&g&&!b.altKey&&!b.ctrlKey)return b.preventDefault(),a(".addprize-button",g).focus().trigger("click"),!1}),a(document).on("input change focus","input[type=file]",function(b){a(".preview-image").croppie("destroy");var c=a(this),d=c.closest(".addprize"),e=c.parent(),f=a(".preview-image",d).croppie({viewport:{width:300,height:300},boundary:{width:300,height:300},showZoomer:!1,enableOrientation:!0,mouseWheelZoom:"ctrl",enableExif:!0});this.files&&this.files[0]?(t(this,f),f.croppie("result",{type:"canvas",size:"viewport"}).then(function(a){d.data({crop:a}),u()}),e.attr({"data-file":this.files[0].name})):function(){e.attr({"data-file":"Файл не выбран"}),d.data({original:!1}),f.croppie("bind","assets/images/nophoto.jpg"),u()}(),a(this).blur(),u()}).on("click focus","input[type=file]",function(b){a(this).blur(),u()})}(jQuery);
//# sourceMappingURL=appinit.js.map