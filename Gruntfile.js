module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost',
      },
      server: {
        options: {
          open: true,
          base: [
            'app/'
          ]
        }
      }
    },
    watch: {
      project: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/**/*.js', 
          'app/**/*.html', 
          'app/**/*.json', 
          'app/**/*.css'
        ]
      }
    },
    copy: {
      assets: {
      	files: [
    	  	{
      		'./app/assets/jquery/jquery.min.js': ['./bower_components/jquery/dist/jquery.min.js'],
          './app/assets/firebase/firebase.js': ['./bower_components/firebase/firebase.js'],
      		'./app/assets/angular/angular.min.js': ['./bower_components/angular/angular.min.js'],
      		'./app/assets/angular/angular-route.min.js': ['./bower_components/angular-route/angular-route.min.js'],
          './app/assets/angular/angularfire.min.js': ['./bower_components/angularfire/dist/angularfire.min.js']
    	    },
		      {
            expand: true,
            cwd: './bower_components/font-awesome/',
            src: ['./css/*.*', './fonts/*.*'],
            dest: './app/assets/font-awesome/'
          },
          {
            expand: true,
            cwd: './bower_components/bootstrap/dist',
            src: ['./css/*.min.css','./fonts/*.*','./js/*.min.js'],
            dest: './app/assets/bootstrap/'
          }
      	]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy','connect', 'watch']);

};
