import { textInput } from './input.js'

function verify(id, userName, email, age, location) {
  const alphaNumeric = /^[a-zA-Z0-9]+$/
  const emailRegularExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (!id || !alphaNumeric.test(id)) {
    return false
  }
  if (!userName || !alphaNumeric.test(userName)) {
    return false
  }
  if (!email || !emailRegularExp.test(email)) {
    return false
  }
  if (!typeof age === 'number') {
    return false
  }
  if (!typeof location === 'string') {
    return false
  }
  return true
}

const users = textInput.split('\n')
const message = users.reduce((acc, user) => {
  const [id, userName, email, age, location] = user.split(',')
  const isValid = verify(id, userName, email, age, location)
  if (!isValid) {
    return (acc += `${userName.substring(0, 1)}`)
  }
  return acc
}, '')

console.log(message)
