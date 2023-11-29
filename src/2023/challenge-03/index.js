import { textInput } from './input.js'

const result = textInput.split('\n').filter((line) => {
  const split = line.split(':')
  const policy = split[0].split(' ')
  const key = split[1].trim()
  const range = policy[0].split('-')
  const numberLetter = key
    .split('')
    .filter((letra) => letra === policy[1]).length
  return !(numberLetter >= range[0] && numberLetter <= range[1])
})
console.log(result[41])

console.log(result[41])
