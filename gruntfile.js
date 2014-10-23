module.exports = function(grunt) {
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            
            build: ['gruntfile.js', 'src/**/*.js']
        },
        
        uglify: {
            build: {
                files: {
                    'dist/js/magic.min.js': 'src/js/magic.js' //['src/js/magic.js, src/**/*.js']
                }
            }
        },
        
        less: {
            build: {
                files: {
                    'dist/css/pretty.css': 'src/css/pretty.less'
                }
            }
        },
        
        cssmin: {
            build: {
                files: {
                'dist/css/style.min.css': 'src/css/style.css'
                }
            }
        },
        
        watch: {
            stylesheets: {
                files: ['src/**/*.css', 'src/**/*.less'],
                tasks: ['less', 'cssmin']
            },
            scripts: {
                files: 'src/**/*.js',
                tasks: ['jshint', 'uglify']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);
};