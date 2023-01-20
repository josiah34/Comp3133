console.log("Week01- Buffer")

var a = Buffer.from("A Hello")
console.log(a)
console.log(a.toString())
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a.length)

a[0] = 97
console.log(a.toString())
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }
