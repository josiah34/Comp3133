console.log("Week01- Buffer")

var a = Buffer.from("A Hello")
console.log(a)
console.log(a.toString())
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a.length)

a[0] = 88
console.log(a.toString())
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

var data = "😀😀"
var buf = Buffer.from(data)

console.log(buf)
console.log(buf.toString())
console.log(buf.length)
console.log(buf[0])

var values = "©️©️"
var buf2 = Buffer.from(values)
console.log(buf2)
console.log(buf2.toString())
console.log(buf2.length)

// using alloc
 var buf3 = Buffer.alloc(10, "HELLO")
 console.log(buf3.toString())


 var buf4 = Buffer.alloc(15)
 buf4.write("Hello")
 console.log(buf4.toString())


 // Concate Buffer

 var newBuffer = a + buf
    console.log(newBuffer)
    newBuffer = Buffer.concat([a, buf, buf2])
    print = newBuffer.toString()