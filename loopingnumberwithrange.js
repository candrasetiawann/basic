//membuat 2 input angka untuk mencetak angka tertentu
//dari input pertama dan input kedua

//a = 1
//b = 10
// output 1,2,3,4,5,6,7,8,9,10

function loopingNumberWithRange (a, b) {
  let arr = [];
  for (a; a <= b; a++) {
    arr.push(a);
  }
  return arr;
}

console.log(loopingNumberWithRange(1, 10)); //output [1,2,3,4,5,6,7,8,9,10]