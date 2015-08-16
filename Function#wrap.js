/*
 * This is here instead of Function.wrap.js because
 * you shouldn't have the instance method without
 * the class method. It would just be confusing.
 *
 * Function.wrap(object, 'property', function(){
 *
 * })
 *
 */
if (!Function.wrap){
  Function.wrap = function(object, property, wrapper){
    var func = object[property];
    return object[property] = func.wrap(wrapper);
  };
}

/*
 *
 * Function.wrap(object, 'property', function(){
 *
 * })
 *
 */
if (!Function.prototype.wrap){
  Function.prototype.wrap = function(wrapper){
    var func = this;
    return function(){
      var args = [].slice.apply(arguments)
      args.unshift(func)
      return wrapper.apply(this, args);
    };
  };
}
