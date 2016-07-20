
function titleCase(str) {
  
  var newArr = [];
  newArr = str.split(' ');
  
  for(var i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1).toLowerCase();
  } 
 
  str = newArr.join(' ');
  
  return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
