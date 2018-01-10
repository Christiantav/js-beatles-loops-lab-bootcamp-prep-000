function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
    for (var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
    }
  return newArray
}

function johnLennonFacts(array) {
  var newArray = [];
  var start = 0;
  while (array.length > start) {
    newArray.push(array[count] + "!!!");
    start++;
  }
  return array
}
