
function repeatStringNumTimes(str, num) {

  var arr = [];

  if(num > 0) {

    while(arr.length < num) {

      arr.push(str);

    }

    str = arr.join('');
    return str;

  } else {
    
    str = '';
    return str;
  
  }

}

repeatStringNumTimes("abc", 3);
