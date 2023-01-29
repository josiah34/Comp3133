// test cases using mocha
// Josiah Galloway 101296257
var assert = require("assert")
var calculator = require("../app/calculator")

// Passing Addition Test
describe("Calculator", function () {
  describe("add", function () {
    it("should return 5", function () {
      assert.equal(calculator.add(2, 3), 5)
    })
  })
})

// Failing Addition Test
describe("Calculator", function () {
  describe("add", function () {
    it("should return 6", function () {
      assert.equal(calculator.add(2, 3), 6)
    })
  })
})

// Passing Subtraction Test
describe("Calculator", function () {
  describe("subtract", function () {
    it("should return -1", function () {
      assert.equal(calculator.sub(2, 3), -1)
    })
  })
})

// Failing Subtraction Test
describe("Calculator", function (){
    describe("subtract", function () {
        it("should return -1", function(){
            assert.equal(calculator.sub(2,3), 1)
        })
    })
})

// Passing Multiplication Test
describe("Calculator", function () {
  describe("multiply", function () {
    it("should return 6", function () {
      assert.equal(calculator.mul(2, 3), 6)
    })
  })
})

// Failing Multiplication Test
describe("Calculator", function () {
    describe("multiply", function () {
        it("should return 6", function () {
            assert.equal(calculator.mul(2, 3), 7)
        })
    })

})

// Passing Division Test

describe("Calculator", function () {
  describe("divide", function () {
    it("should return 2", function () {
      assert.equal(calculator.div(6, 3), 2)
    })
  })
})

// Failing Division Test
describe("Calculator", function () {
    describe("divide", function () {
        it("should return 2", function () {
        assert.equal(calculator.div(6, 3), 3)
        })
    })
    }
)
