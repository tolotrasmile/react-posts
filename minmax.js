let a = 1, b = 1, c = 1
let min, max


// Test 1
if (a > b) {

  if (a > c) {
    max = a
  } else {
    max = c
  }

  if (b > c) {
    min = c
  } else {
    min = b
  }

} else {
  if (b > c) {
    max = b
  } else {
    max = c
  }

  if (a > c) {
    min = c
  } else {
    min = a
  }

}

console.log('a = ' + a)
console.log('b = ' + b)
console.log('c = ' + c)

console.log('min = ' + min)
console.log('max = ' + max)
