/**
 * Add Function#wrap and Function.wrap
 * @fileOverview boooosh nozel
 * @namespace Function
 */
'use strict';

/*
 * This is here instead of Function.wrap.js because
 * you shouldn't have the instance method without
 * the class method. It would just be confusing.
 */



if (!Function.wrap){
  /**
   * @name Function.wrap
   * @function
   * @memberOf! Function
   * @param {object}
   * @param {string} [property]
   * @param {function} [wrapper] A function to wrap the left function
   * @return {function} [wrapped] A function that calls the given function
   * @example
   *    Function.wrap(object, 'property', function($super){
   *       return $super.apply(this, arguments);
   *    })
   */
  Function.wrap = function(object, property, wrapper){
    var func = object[property];
    return object[property] = func.wrap(wrapper);
  };
}

if (!Function.prototype.wrap){
  /**
   * @name Function#wrap
   * @function
   * @memberOf! Function.prototype
   * @instance
   * @param {function}  [wrapper] A function to wrap the left function
   * @return {function} [wrapped] A function that calls the given function
   * @return {function}
   * @example
   *     (function(n){ return n + 10; }).wrap(function($super, n){
   *       return $super(n) - 5;
   *     });
   */
  Function.prototype.wrap = function(wrapper){
    var func = this;
    return function(){
      var args = [].slice.apply(arguments)
      args.unshift(func)
      return wrapper.apply(this, args);
    };
  };
}
