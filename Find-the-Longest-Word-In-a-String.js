
function findLongestWord(str) {
  
  var array = [];
  array =  str.split(' ');
   
  var lengths = array.map(function(word) {
      
        return word.length;

      });
  
  

  lengths.sort(function(a, b) {

    return a < b;

  });

  
  str = lengths[0];
  return str;

}

findLongestWord("The quick brown fox jumped over the lazy dog");
