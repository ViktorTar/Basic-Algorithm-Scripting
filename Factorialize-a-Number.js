function factorialize(num) {

  var num2 = 1;

  for (i = 0; num > i; i++) {
    
    num2 *= (num - i);
    
  }
  
  num = num2;
  return num;

}

factorialize(5);
