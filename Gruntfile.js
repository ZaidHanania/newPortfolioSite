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
	watch: {
		sass: {
			files: ['*.scss', '*.jade'],
			tasks: ['sass', 'autoprefixer', 'jade']
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

 // Default task(s).
 grunt.registerTask('default', ['connect', 'watch']);
};