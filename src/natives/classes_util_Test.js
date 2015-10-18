// This entire object is exported. Feel free to define private helper functions above it.
registerNatives({
  'classes/util/Test': {

    'runNativeCode()V': function(thread) {
      // get Integer class
      thread.getBsCl().initializeClass(thread, 'Ljava/lang/Integer;', function(cls) {
        // null means an exception was thrown when Integer was loaded. If you do nothing, it'll propagate
        // up the stack and end your program, which is likely what you want.
        if (cls !== null) {
          var m = cls.methodLookup('toHexString(I)Ljava/lang/String;');
          cls.getConstructor(thread)[m.signature](thread, [42], function (e, rv) {
            if (e) {
              // exception occurred. propagate it up the stack.
              thread.throwException(e);
            } else {
              // 'return' from this method. returns control to public static void main, ending program.
              thread.asyncReturn();
            }
            console.log('Hex of 42 is ' + rv);
          });
        }
      });
    }

  }
});
