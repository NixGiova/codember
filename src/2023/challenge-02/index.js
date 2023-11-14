import { textInput } from './input.js'

const miniCompiler = (message) => {
  const output = textInput.split('').reduce(
    (result, item) => {
      if (item === '#') return { ...result, value: result.value + 1 }
      if (item === '@') return { ...result, value: result.value - 1 }
      if (item === '*') return { ...result, value: result.value ** 2 }
      if (item === '&')
        return { ...result, result: `${result.result}${result.value}` }
    },
    { value: 0, result: '' }
  )
  return output.result
}

console.log(miniCompiler(textInput))
