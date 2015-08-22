// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.remove) {
  Array.prototype.remove = function(target) {
    do {
      index = this.indexOf(target)
      array.splice(index, 1);
    }while(index !== -1)
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
