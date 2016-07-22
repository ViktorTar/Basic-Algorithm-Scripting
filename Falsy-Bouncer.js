
function bouncer(arr) {

  var newArr1 = [];

  newArr1 = arr.filter(Boolean);

  return newArr1;

}

bouncer([1, NaN, null, 2, undefined]);
