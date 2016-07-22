
function chunkArrayInGroups(arr, size) {

  var newArr, newArr1 = [];

  var b = size;

  var inLength = arr.length;

  var diff = inLength/b;

  var a = 0;

  var c = inLength%b;
  
  if ((c) !== 0) {

    newArr = arr.slice(inLength - c, inLength);

    newArr = newArr1.push(newArr);
 
  }
  
  for (var i = 0; i <= diff - 1; i++) {
    
    newArr = arr.slice(a, b);

    newArr = arr.push(newArr); 

    a += size;

    b += size;
  }
  
 
  arr = arr.slice(inLength, inLength + diff);
  
  if ((c) !== 0) {
  
    newArr = arr.push(newArr1[0]);
  }
  
  return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
