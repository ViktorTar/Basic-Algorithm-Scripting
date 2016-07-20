
function truncateString(str, num) {

  var end = "...";
  var newStr = '';
  
  if (num <= 3 || ((num <= 3) && str.length < 3 )) {
 
    newStr = str.slice(0, num);
    str = newStr + end;
    return str;
   
  } else if (num < str.length) {
    
    newStr = str.slice(0, num - 3); 
    str = newStr + end;
    return str; 

  } else {
  
    return str;
  }
  
}

truncateString("A-", 1);
