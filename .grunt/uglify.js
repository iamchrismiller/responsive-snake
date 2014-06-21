module.exports = {

  build: {
    options : {
      banner: '/*! <%= package.name %> - v<%= package.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    files: {
      'build/snake.build.min.js': ['build/snake.build.js']
    }
  }

};