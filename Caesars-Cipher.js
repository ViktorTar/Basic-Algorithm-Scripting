
function rot13(str) { 

  var c = '';

  var  d = [];

  var a, b = 0;
  
  
  for (var i = 0; i < str.length; i++) {
    
    if (str[i] !== " ") {

       a = str.charCodeAt(i); 

       c = d.push(a);

     } else {
       
       c = d.push(" ");
       
     }
    
  }
  

  for (var j = 0; j < d.length; j++) {
    
    if (d[j] > 64 && d[j] !== " ") {
      
      if ((d[j] > 77)) {

      d[j] = String.fromCharCode(d[j] - 13);

      } else {

        d[j] = String.fromCharCode(d[j] + 13);

      } 

    } else if (d[j] !== " "){

      d[j] = String.fromCharCode(d[j]);

    }
    
  }
  
  c = d.join('');

  return c;
}


rot13("LBH QVQ VG!");
