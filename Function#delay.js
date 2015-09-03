if (!Function.prototype.delay){
  Function.prototype.delay = function(milliseconds){
    setTimeout(this, milliseconds)
  };
}
