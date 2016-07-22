
function destroyer(arr, val1, val2, val3) {
  
  function removeVal(value) {

    if (val3 !== 0) {

      return value !== val1 && value !== val2 && value !== val3;
    
    } else {

      return value !== val1 && value !== val2;
    
    }
    
  }
  
  var filtered = arr.filter(removeVal);
  
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
