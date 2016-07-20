
function confirmEnding(str, target) {

  if (str.substr(-1) === target || str.substr(-2) === target ||
      str.substr(-4) === target) {
  
  	return true;

  } else {
  	
    return false;
  }
  
}

confirmEnding("Bastian", "n");
