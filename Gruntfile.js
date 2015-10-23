module.exports = function(grunt) {
      grunt.initConfig({
            postcss: {
                  options: {
                        map: true, // inline sourcemaps
                        
                        // or
                        map: {
                              inline: false, // save all sourcemaps as separate files...
                              annotation: 'dist/css/maps/' // ...to the specified directory
                        },
                        
                        processors: [
                              require('autoprefixer')({browsers: 'last 12 versions'}), // add vendor prefixes
                              require('postcss-autoreset')({
                                    rulesMatcher: 'bem',
                                    reset: {
                                          'margin': '0',
                                          'padding': '0',
                                          'border-radius': '0'
                                    }
                              }),
                              require('postcss-pxtorem')({
                                    root_value: 18
                              }),
                              require('postcss-fakeid'),
                              require('postcss-custom-properties'),
                              require('postcss-calc')
                        ]
                  },
                  dist: {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'css/',      // Src matches are relative to this path.
                        src: ['**/*.css'], // Actual pattern(s) to match.
                        dest: 'dist/',   // Destination path prefix.
                        ext: '.min.css'   // Dest filepaths will have this extension.
                  }
            }
      });
      
      grunt.loadNpmTasks('grunt-postcss');
      
      grunt.registerTask('default', ['postcss']);
      
};