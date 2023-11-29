import { textInput } from './input.js'

function verify(fileName) {
  const [chain, checksum] = fileName.split('-')
  const uniqueChars = chain.split('').filter((char, index, self) => {
    return (
      chain.slice(index + 1).indexOf(char) === -1 &&
      self.indexOf(char) === index
    )
  })
  return checksum === uniqueChars.join('')
}

const filesName = textInput.split('\n')
const result = filesName.map((fileName) => {
  return { fileName, isValid: verify(fileName) }
})

console.log(verify('abcca1-ab1'))
console.log(result.filter((result) => result.isValid)[32])
console.log(result)
