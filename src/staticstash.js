/*global $, jQuery*/

(function($) {

  "use strict";

  /**
   * Instantiate it
   *
   * @return void
   */
  function StaticStash(el, options) {
    var defaultOptions = {
      form   : null,
      thanks : "Thanks",
      submit : "Submit"
    };

    this.el       = el;
    this.options  = $.extend(defaultOptions, options);
    this.messages = {
      general : "Something went wrong, check your implementation.",
      error   : "Error, error not found.",
      form    : "A valid form id was not provided, this is required."
    };
  }

  /**
   * Error it
   *
   * @param message string
   *
   * @return void
   */
  StaticStash.prototype.printError = function(message) {
    if(this.messages.hasOwnProperty(message)) {
      console.log(this.messages[message]);
    } else {
      console.log(this.message.error);
    }
  };

  /**
   * Run it
   *
   * @return void
   */
  StaticStash.prototype.run = function() {
    if(this.form === null) {
      console.log(this.messages.form);
      return;
    }


  };

  /**
   * Gets it
   *
   * @return markup
   */
  StaticStash.prototype.getFormStructure = function() {

  };

  /**
   * Add a method for jquery elements
   *
   * @param options object
   *
   * @return void
   */
  $.fn.staticstash = function(options) {
    var staticstash = new StaticStash(this, options);
    staticstash.run();
  };


}(jQuery));
