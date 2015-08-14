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
      form: null,
      thanks: "Thanks",
      submit: "Submit"
    };

    this.el      = el;
    this.options = $.extend(defaultOptions, options);
  }

  /**
   * Run it
   *
   * @return void
   */
  StaticStash.prototype.run = function() {
    console.log("Loading... not really just didn't want the linter to fail. Huehuehue.");
  };

  /**
   * Add a method for jquery elements
   *
   * @param options object
   *
   * @return void
   */
  $.fn.jpop = function(options) {
    var staticstash = new StaticStash(this, options);
    staticstash.run();
  };


}(jQuery));
