module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	var pugMinify = false,
		optionsPug = {
			pretty: !pugMinify ? '\t' : '',
			separator:  !pugMinify ? '\n' : ''
		},
		tasksConfig = {
			pkg: grunt.file.readJSON("package.json"),
			meta: {
				banners: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */'
			},
			uglify: {
				compile: {
					options: {
						//sourceMap: true,
						banner: '<%= meta.banners %>',
						mangle: {
							reserved: ['jQuery']
						},
						sourceMap: {
							includeSources: true
						},
					},
					files: [
						{
							expand: true,
							flatten : true,
							src: [
								'src/js/*.js'
							],
							dest: 'docs/assets/js/',
							filter: 'isFile'
							//'docs/assets/js/main.js': 'src/js/main.js'
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
				},
				normalize: {
					files : {
						'test/css/normalize.css' : [
							'bower_components/normalize-css/normalize.css',
						]
					},
					options : {
						compress: false,
						ieCompat: false,
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
					browsers: ['last 2 versions', 'Android 4', 'ie 8', 'ie 9', 'Firefox >= 27', 'Opera >= 12.0', 'Safari >= 6'],
					cascade: true
				},
				css: {
					files: {
						'tests/css/main.css' : ['test/css/main.css'],
						'tests/css/normalize.css' : ['test/css/normalize.css'],
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
			},
			copy: {
				main: {
					expand: true,
					cwd: 'bower_components/jquery/dist',
					src: [
						'jquery.min.js',
						'jquery.min.map'
					],
					dest: 'docs/assets/js/',
				},
				fonts: {
					expand: true,
					cwd: 'src/fonts',
					src: [
						'**.*'
					],
					dest: 'docs/assets/fonts/',
				},
				forested: {
					expand: true,
					cwd: 'bower_components/jquery.forestedglass/dist',
					src: [
						'jquery.forestedglass.min.js',
						'jquery.forestedglass.min.js.map'
					],
					dest: 'docs/assets/js/',
				}
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
						'concat',
						'jshint',
						'copy',
						'uglify',
						'pug',
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