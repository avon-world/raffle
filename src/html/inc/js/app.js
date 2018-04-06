yepnope('https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js', undefined, function() {
	if(typeof WebFont == 'object') {
		WebFont.load({
			google: {
				families: [
					"Roboto:100,100italic,300,300italic,regular,italic,400,400italic,regular,italic,500,500italic,700,700italic,900,900italic:latin,cyrillic,cyrillic-ext",
				]
			}
		});
	}
});
var time = (new Date()).getTime();
yepnope('assets/js/jquery.min.js?'+time, undefined, function() {
	yepnope('assets/js/appinit.js?'+time, undefined, function() {
		yepnope('assets/js/jquery.forestedglass.min.js?'+time, undefined, function() {
			yepnope('assets/css/appcss.css?'+time, undefined, function() {
				yepnope('assets/js/appjs.js?'+time, undefined, function() {
					yepnope('assets/js/main.js?'+time, undefined, function() {
						
					})
				})
			})
		})
	})
})
