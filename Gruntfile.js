module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
    })
    grunt.initConfig({
        watch: {
            files: 'sass/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        '*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            },
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};