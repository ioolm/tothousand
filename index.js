/**
 * auth: liuming
 * home: https://ioolm.com
 * version: 0.0.1
 * date: 2022.03.16
 * time: 22:00
 *
 */

export default function tothousand(num, isnone = '-') {
  if (!num) return isnone
  let result = ''
  num = Number(num.toString() || 0).toFixed(2)
  let numArr = num.toString().split('.')
  let preNum = numArr[0]
  let lastNum = numArr[1]
  while (preNum.length > 3) {
    result = ',' + preNum.slice(-3) + result
    preNum = preNum.slice(0, preNum.length - 3)
  }
  if (preNum) {
    result = preNum + result
  }
  result = result + '.' + lastNum
  return result
}
