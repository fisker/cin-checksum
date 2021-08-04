// http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E
const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const code = '10X98765432'

function generate(parts) {
  let sum = 0
  for (let digit = 0; digit < 17; digit += 1) {
    sum += Number(parts[digit]) * weights[digit]
  }

  return code.charAt(sum % 11)
}

function validate(id, checkBit = id[17]) {
  return generate(id) === checkBit.toUpperCase()
}

export {generate, validate}
