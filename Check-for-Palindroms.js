function palindrome(str) {

  var newStr = str.replace(/([\s]*)([\W]*)([_]*)/g, '');
  console.log(newStr);
  var lowerCaseStr = newStr.toLowerCase();
  var array = [];
  array = lowerCaseStr.split('');
  array.reverse();
  var reversedStr = array.join('');
  
  if (lowerCaseStr === reversedStr) {

    return  true;

  } else {

    return false;
    
  }
  
}



palindrome("eye");