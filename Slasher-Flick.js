
function slasher(arr, howMany) {

  var newArr = [];

  var a = howMany;
    
  newArr = arr.splice(0, a);
     
  return arr;
}

slasher([1, 2, 3], 2);
