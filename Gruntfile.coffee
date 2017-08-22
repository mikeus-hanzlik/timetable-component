module.exports = (grunt) ->

  grunt.initConfig

    watch:
      less:
        files: ['./src/style/less/*.less']
        tasks: ['less:timetable']
        options:
          spawn: false

    less:
      timetable:
        options:
          compress: true
          sourceMap: true
        files :
          './src/styles/styles.css' : './src/styles/less/timetable.less'

    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-watch'

    grunt.registerTask 'default', 'Build app and run stack.', () ->
      grunt.task.run [
        'less:timetable',
      ]