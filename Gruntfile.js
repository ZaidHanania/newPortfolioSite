module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
 	pkg: grunt.file.readJSON('package.json'),
	sass: {
		dist: {
			files: {
				'main.css' : 'main.scss'
			} 
		}
	},
	jade: {
		release: {
		   options: {
		     data: {
		       debug: false
		     }
		   },
		   files: {
		     "index.html": "index.jade"
		   }
		 }
	},
	stylus: {
		compile: {
		    files: {
		      'styles.css': 'styles.styl' // 1:1 compile
		    }
		}
  },
	watch: {
		sass: {
			files: ['*.scss'],
			tasks: ['sass', 'autoprefixer']
		},
		jade: {
			files: ['*.jade'],
			tasks: ['jade']
		},
		stylus: {
			files: ['*.styl'],
			tasks: ['stylus']
		},
		options: {
			livereload: true
		}
	},
	autoprefixer: {
		options: {
			browsers: ['last 5 version' ,'ie 7', 'ie 8', 'ie 9']
		},
		no_dest: {
			src: 'main.css'
		}
	},
	connect: {
		server: {
			options: {
				port: 1111,
				base: ''
			}
		}
	}
});

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-jade');
 grunt.loadNpmTasks('grunt-contrib-stylus');
 grunt.loadNpmTasks('grunt-svgmin');

 // Default task(s).
 grunt.registerTask('default', ['connect', 'watch']);
};