module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	var pugMinify = true,
		optionsPug = {
			pretty: !pugMinify ? '\t' : '',
			separator:  !pugMinify ? '\n' : ''
		},
		tasksConfig = {
			pkg: grunt.file.readJSON("package.json"),
			meta: {
				banners: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */'
			},
			json_generator: {
				nwjs: {
					dest: "docs/package.json",
					options: {
						"app_name": "RafflePrizesRelease",
						"dependencies": {
							"deck": "latest"
						},
						"main": "index.html",
						"name": "generatorprize",
						"nodejs": true,
						"version": "1.6",
						"webkit": {
							"plugin": true
						},
						"winIco": "favicon.ico",
						"window": {
							"exe_icon": "assets/images/icon.png",
							"frame": true,
							"height": 400,
							"icon": "assets/images/icon.png",
							"id": "generatorprize",
							"kiosk_emulation": true,
							"mac_icon": "assets/images/icon.png",
							"min_height": 400,
							"min_width": 800,
							"position": "center",
							"resizable": true,
							"show_in_taskbar": true,
							"title": "Генератор Лотереи",
							"toolbar": true,
							"visible": true,
							"visible_on_all_workspaces": true,
							"width": 800
						},
						"zip": true
					}
				}
			},
			requirejs: {
				ui: {
					options: {
						baseUrl: __dirname+"/bower_components/jquery-ui/ui/widgets/",//"./",
						paths: {
							jquery: __dirname+'/bower_components/jquery/dist/jquery'
						},
						preserveLicenseComments: false,
						optimize: "uglify",
						findNestedDependencies: true,
						skipModuleInsertion: true,
						exclude: [ "jquery" ],
						include: [ 
									"../disable-selection.js",
									"sortable.js",
								],
						out: "test/js/jquery.vendors.js",
						done: function(done, output) {
							grunt.log.writeln(output.magenta);
							grunt.log.writeln("jQueryUI Custom Build ".cyan + "done!\n");
							done();
						},
						error: function(done, err) {
							grunt.log.warn(err);
							done();
						}
					}
				}
			},
			uglify: {
				compile: {
					options: {
						//sourceMap: true,
						banner: '<%= meta.banners %>',
						mangle: {
							reserved: ['jQuery']
						},
						sourceMap: false, 
					},
					files: [
						{
							expand: true,
							flatten : true,
							src: [
								'test/js/appjs.js',
								'src/js/*.js'
							],
							dest: 'docs/assets/js/',
							filter: 'isFile'
							//'docs/assets/js/main.js': 'src/js/main.js'
						},
						{
							expand: true,
							flatten : true,
							src: [
								'src/tooltip/tooltip.js'
							],
							dest: 'tests/js/',
							filter: 'isFile'
							//tooltip.js
						}
					]
				}
			},
			jshint: {
				src: [
					'src/js/*.js'
				],
			},
			less: {
				demo: {
					files : {
						'test/css/main.css' : [
							'src/css/main.less'
						],
						'test/css/normalize.css' : [
							'bower_components/normalize-css/normalize.css',
						],
						'test/css/croppie.css' : [
							'bower_components/Croppie/croppie.css',
						],
						'test/css/arcticmodal.css' : [
							'bower_components/arcticModal/arcticmodal/jquery.arcticmodal.css',
						],
						'test/css/theme.css' : [
							'bower_components/arcticModal/arcticmodal/themes/dark.css',
						],
						'test/css/fancybox.css' : [
							'src/css/jquery.fancybox.css',
						]
					},
					options : {
						compress: false,
						ieCompat: false,
						banner: '<%= meta.banners %>',
						plugins: [
							new (require('less-plugin-clean-css'))({
								level: {
									1: {
										specialComments: 0
									}
								}
							})
						],
					}
				}
			},
			autoprefixer:{
				options: {
					browsers: ['last 2 versions'],
					cascade: true
				},
				css: {
					files: {
						'tests/css/main.css' : ['test/css/main.css'],
						'tests/css/normalize.css' : ['test/css/normalize.css'],
						'tests/css/croppie.css' : ['test/css/croppie.css'],
						'tests/css/arcticmodal.css' : ['test/css/arcticmodal.css'],
						'tests/css/theme.css' : ['test/css/theme.css'],
						'tests/css/fancybox.css' : ['test/css/fancybox.css'],
					}
				},
			},
			concat: {
				options: {
					separator: "\n",
				},
				dist: {
					src: [
						'tests/css/normalize.css',
						'tests/css/main.css'
					],
					dest: 'docs/assets/css/main.css',
				},
				appcss: {
					src: [
						'bower_components/fancybox/dist/jquery.fancybox.css',
						'tests/css/arcticmodal.css',
						'tests/css/theme.css',
						'bower_components/Croppie/croppie.css'
					],
					dest: 'docs/assets/css/appcss.css',
				},
				appjs: {
					src: [
						'bower_components/jquery/dist/jquery.js',
						'test/js/jquery.vendors.js',
						'bower_components/jquery.cookie/jquery.cookie.js',
						'bower_components/fancybox/dist/jquery.fancybox.min.js',
						'bower_components/exif-js/exif.js',
						'bower_components/Croppie/croppie.min.js',
						'bower_components/arcticModal/arcticmodal/jquery.arcticmodal.js',
						'bower_components/jquery.forestedglass/dist/jquery.forestedglass.js',
						'tests/js/tooltip.js'
					],
					dest: 'test/js/appjs.js'
				}
			},
			copy: {
				fonts: {
					expand: true,
					cwd: 'src/fonts',
					src: [
						'**.*'
					],
					dest: 'docs/assets/fonts/',
				},
				icon: {
					expand: true,
					cwd: 'src/images',
					src: [
						'favicon.ico'
					],
					dest: 'docs',
				},
			},
			pug: {
				files: {
					options: optionsPug,
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
			nwjs: {
				options: {
					platforms: ['win'],
					buildDir: __dirname+'/test',
					flavor: 'normal',
					version: '0.35.2',
					cacheDir: __dirname+'/.cache'
				},
				src: [__dirname+'/docs/**/*']
			},
			exec: {
				win32: {
					cmd: "win32.bat"
				},
				win64: {
					cmd: "win64.bat"
				},
				install: {
					cmd: "install.bat"
				},
				test: {
					cmd: "test.bat"
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
						'clean',
						'jshint',
						'requirejs',
						'less',
						'autoprefixer',
						'concat',
						'imagemin',
						'uglify',
						'pug',
						'json_generator',
						'copy',
						'nwjs',
						'exec',
						'notify:done'
					]
				}
			},
			clean: {
				start: {
					src: ['test/raffle*','test/raffleprizes','test/generator*', 'docs']
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
    //grunt.registerTask('dev',		[ 'jshint', 'delta']);
	grunt.registerTask('default',	tasksConfig.delta.compile.tasks);
	grunt.registerTask('dev',		['notify:watch', 'jshint', 'clean', 'less', 'autoprefixer',  'concat', 'uglify', 'imagemin', 'pug', 'copy', 'json_generator', 'exec:test', 'notify:done']);
	grunt.registerTask('node',		['notify:watch', 'jshint', 'clean', 'less', 'autoprefixer', 'concat', 'uglify', 'imagemin', 'pug', 'copy', 'json_generator', 'nwjs', 'exec:win32', 'exec:win64', 'notify:done']);
	//grunt.registerTask('build',		['clean','nwjs','exec']);
}