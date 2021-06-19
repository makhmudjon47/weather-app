class MyCustomPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.done.tapAsync(
      'MyCustomPlugin',
      (compilation, callback) => {
        console.log('compiled successfully')
        process.exit()
      }
    );
  }
}

module.exports = MyCustomPlugin