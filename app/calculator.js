const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => b !== 0 ? (a / b) : undefined 
module.exports = {
  add,
  sub,
  mul,
  div,
}