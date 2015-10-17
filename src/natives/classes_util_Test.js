// This entire object is exported. Feel free to define private helper functions above it.
registerNatives({
  'classes/util/Test': {

    'addTwo(I)I': function(thread, arg0) {
      return (arg0 + 2)|0;
    }

  }
});
