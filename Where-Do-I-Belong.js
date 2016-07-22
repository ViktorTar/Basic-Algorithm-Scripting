
function getIndexToIns(arr, num) {

  var c = 0;

  arr.sort(function(a, b) {

    return a - b;

  });
  
  for (var i = 0; i < arr.length; i++) {

    if(num <= arr[i]) {

      c = i;

      break;

    }

  }

  return i;
}

getIndexToIns([10, 20, 30, 40, 50], 30);
