function random(arr) {
  var n;
  var r = [];
  for (n = 1; n <= 10; ++n) {
    var i = Math.floor(Math.random() * (10 - n) + 1);

    r.push(i);
  }
  return r;
}

var a = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(random(a));

// console.log(arr);
