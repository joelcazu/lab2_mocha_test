const chai = require('chai')
const expect = chai.expect
const calculator = require('../app/calculator')
// var assert = require('assert');



describe('Calculator', () => {
  describe('Addition', () => {
    it('Sum of two numbers', () => {
        expect(calculator.add(5, 2)).to.equal(7)
        // expect(calculator.add(5, 2)).to.equal(8)
        
      })
  })
  describe('Subtraction', () => {
     it('Subtraction of two numbers', () => {
         expect(calculator.sub(5, 2)).to.equal(3)
        //  expect(calculator.subtract(5, 2)).to.equal(5)
         })
   })
  describe('Multiplication', () => {
     it('Multiplication of two numbers', () => {
         expect(calculator.mul(5, 2)).to.equal(10)
        //  expect(calculator.multiply(5, 2)).to.equal(12)
        })
   })

 describe('Division', () => {
   it('Division of two numbers', () => {
       expect(calculator.div(10, 2)).to.equal(5)
    //    expect(calculator.divide(10, 2)).to.equal(2)
    })

  })
})

