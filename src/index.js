const isMasterNumber = (value) =>
  typeof value === 'string' && /^\d{17}$/.test(value)

const isCinNumber = (value) =>
  // eslint-disable-next-line regexp/use-ignore-case
  typeof value === 'string' && /^\d{17}[\dXx]$/.test(value)

// See /docs/GB_11643-1999_公民身份号码.pdf
const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const code = '10X98765432'
function generate(digits) {
  let sum = 0

  for (let index = 0; index < 17; index += 1) {
    sum += Number(digits[index]) * weights[index]
  }

  return code[sum % 11]
}

function generateCinCheckNumber(masterNumber) {
  if (!isMasterNumber(masterNumber)) {
    throw new Error(
      `The master number should be a 17 digits string, got '${masterNumber}'.`,
    )
  }

  return generate(masterNumber)
}

function isInvalidCinNumber(cinNumber) {
  return !(
    isCinNumber(cinNumber) &&
    cinNumber[17].toUpperCase() === generate(cinNumber)
  )
}

export {generateCinCheckNumber, isInvalidCinNumber}
