var time = (new Date()).getTime();
yepnope('assets/js/jquery.min.js?'+time, undefined, function() {
	yepnope('assets/js/jquery.forestedglass.min.js?'+time, undefined, function() {
		yepnope('assets/css/appcss.css?'+time, undefined, function() {
			yepnope('assets/js/appjs.js?'+time, undefined, function() {
				yepnope('assets/js/main.js?'+time, undefined, function() {
					
				})
			})
		})
	})
})
