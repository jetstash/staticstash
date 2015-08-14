/**
Version: 0.0.1

Build: Fri, 14 Aug 2015 22:47:45 GMT

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see https://github.com/jetstash/staticstash/blob/master/LICENSE.

Copyright (c) 2015 Jetstash LLC
**/
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
