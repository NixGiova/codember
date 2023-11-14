import { textInput } from './input.js'

const countWords = (message) => {
  const split = textInput.split(' ')
  const group = Object.groupBy(split, (word) => {
    return word.toLowerCase()
  })
  const finalResult = Object.entries(group)
    .map((item) => {
      return `${item[0]}${item[1].length}`
    })
    .join('')
  return finalResult
}

console.log(countWords(textInput))
