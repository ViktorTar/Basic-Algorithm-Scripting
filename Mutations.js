
function mutation(arr) {

  var str1, str2 = '';

  var newArr1 = [];
  
  newArr1 = arr.slice(0, 1);

  str1 = newArr1.join('');

  newArr1 = arr.slice(1, 2);

  str2 = newArr1.join('');

  var newStr1 =str1.toLowerCase();

  var newStr2 = str2.toLowerCase();

  for (var i = 0; i < str2.length; i++) {

    var a = newStr1.indexOf(newStr2[i]);

    if (a === -1) {

      return false;

    } 

  }
  
  return true;
  
}

mutation(["hello", "Hello"]);
