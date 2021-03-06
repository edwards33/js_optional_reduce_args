function reducer(accumulator, value, index, array) {
  var intermediaryValue = accumulator + value;

  if (index === array.length - 1) {
    return intermediaryValue / array.length;
  }

  return intermediaryValue;
}

var data = [1, 7, 3, 3, 7, 5, 3, 1];
var mean = data.reduce(reducer, 0);

console.log("Mean:", mean)
