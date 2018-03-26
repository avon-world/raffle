module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	var tasksConfig = {
		pkg: grunt.file.readJSON("package.json"),
		meta: {
			banner: '/**\n' +
					' * \n'+
					' * Copyright 2018 @ProjectSoft<projectsoft2009@yandex.ru> \n'+
					' * Licensed under the MIT license. \n'+
					' * \n'+
					' */\n',
			bannercss: '/*!\n' +
					' * \n'+
					' * Copyright 2018 @ProjectSoft<projectsoft2009@yandex.ru> \n'+
					' * Licensed under the MIT license. \n'+
					' * \n'+
					' */\n'
		},
		usebanner: {
			taskName: {
				options: {
					position: 'top',
					banner: '<%= meta.bannercss %>',
					linebreak: true
				},
				files: {
					src: ['docs/assets/css/main.css']
				}
			}
		},
		uglify: {
			compile: {
				options: {
					sourceMap: true,
					banner: '<%= meta.banner %>'
				},
				files: {
					'docs/assets/js/main.js': 'src/js/main.js'
				}
			}
		},
		jshint: {
            src: [
				'src/js/main.js'
            ],
        },
		less: {
			demo: {
				files : {
					'test/css/main.css' : [
						'src/css/main.less'
					]
				},
				options : {
					compress: false,
					ieCompat: false
				}
			}
		},
		autoprefixer:{
			options: {
				browsers: ['last 2 versions', 'Android 4', 'ie 8', 'ie 9', 'Firefox >= 27', 'Opera >= 12.0', 'Safari >= 6'],
				cascade: true
			},
			css: {
				files: {
					'docs/assets/css/main.css' : [
						'test/css/main.css'
					]
				}
			},
		},
		pug: {
			files: {
				options: {
					pretty: '\t',
					separator: '\n',
					data: {
						debug: true
					}
				},
				files: {
					"docs/index.html": ['src/html/index.pug']
				}
			}
		},
		imagemin: {
			compile: {
				options: {
					optimizationLevel: 7,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{png,jpg,gif,svg}'
						],
						dest: 'docs/assets/images/',
						filter: 'isFile'
					}
				]
			}
		},
		delta: {
			options: {
				livereload: true,
			},
			compile: {
				files: [
					'src/css/**/*.*',
					'src/js/**/*.*',
					'src/images/**/*.*',
					'src/html/**/*.*'
				],
				tasks: [
					'notify:watch',
					'imagemin',
					'less',
					'autoprefixer',
					'jshint',
					'uglify',
					'pug',
					'usebanner',
					'notify:done'
				]
			}
		},
		notify: {
			watch: {
				options: {
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: 'Запуск',
					image: __dirname+'\\src\\notify.png'
				}
			},
			done: {
				options: {
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: "Успешно Завершено",
					image: __dirname+'\\src\\notify.png'
				}
			}
		}
	};
	
	grunt.initConfig(tasksConfig);
	
	grunt.renameTask('watch',		'delta');
    grunt.registerTask('dev',		[ 'jshint', 'delta']);
	grunt.registerTask('default',	tasksConfig.delta.compile.tasks);
}