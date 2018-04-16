"use strict";

/**
 * @file    filename.js
 * @brief   template of the javascript module pattern 
 * @authors Sarah Busch
 * @date    2017
 */

var filename = (function() {
  var that = 
  {
    debug:false,
    op:{}   ///< used for public functions
    //any other 'global' variables declared here
  };

  function puts(str) 
  {
    if ((debug && that.debug)) console.log(str);
  }

  /// Initializes view
  function show()
  {
    //invoked from main_swapinFrame() whenever the frame is selected
  }

  function unshow()
  {
    //runs whenever the user navigates away from this frame
  }

  //all other functions go here

  //the following functions are made public:
  that.op.show = show;
  that.op.unshow = unshow;

  return that;
}());
