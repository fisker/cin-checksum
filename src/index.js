// http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E
const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const code = '10X98765432'

function generateCinCheckNumber(masterNumber) {
  if (typeof masterNumber !== 'string' || !/^\d{17}$/.test(masterNumber)) {
    throw new Error(`The master number should be a 17 digits string, got '${masterNumber}'.`)
  }

  let sum = 0
  for (let digit = 0; digit < masterNumber.length; digit += 1) {
    sum += Number(masterNumber[digit]) * weights[digit]
  }

  return code[sum % 11]
}

function isInvalidCinNumber(cinNumber) {
  return !(
    typeof cinNumber === 'string'
    && /^\d{17}[\dxX]$/.test(cinNumber)
    && generateCinCheckNumber(cinNumber.slice(0, 17)) === cinNumber[17].toUpperCase()
  )
}

export {generateCinCheckNumber, isInvalidCinNumber}
