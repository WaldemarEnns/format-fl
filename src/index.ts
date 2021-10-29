/**
 * Formats numbers to floating points numbers and returns them as strings. It allows disabling rounding and defining custom characters for the thousands-separation and decimal place separation. One can also specify the amount of decimal places.
 * @param num 
 * @param decimalPlaces 
 * @param decimalChar 
 * @param thousandsChar 
 * @param rounding 
 * @returns 
 */
export function format(
  num: number|string|undefined|null,
  decimalPlaces: number = 2,
  decimalChar: string = ',',
  thousandsChar: string = '.',
  rounding: boolean = true
) {
  let stringifiedNumber: string
  if (num === undefined || num === null) {
    /**
     * Handles the cases for num = undefined
     * and num = null
     */
     stringifiedNumber = 0.0.toFixed(decimalPlaces)
  } else {
    /**
     * Handles the case for num being of type string
     * Simply converts the string into a number
     */
    if (typeof num === 'string') num = Number(num)

    /**
     * Compute how many positions should be rounded.
     * If rounding is set to false, we are rounding one more position
     * and cut off the last character to ensure the actual last
     * digit to NOT be rounded.
     * 
     * Else, if rounding is enabled, use the passed amount
     * of positions and round the last digit.
     * 
     * For rounding, we are using toFixed & toLocaleString.
     * Both methods round to the next floating point number.
     */
    const roundingPositions: number = rounding ? decimalPlaces : decimalPlaces + 1

    /**
     * This piece of code is responsible for rounding the numbers.
     * It accounts if rounding is active or not by using the
     * previously defined `roudingPositions` variable.
     * 
     * The `.toFixed()` method rounds positive and negative numbers correcly.
     */
    let roundedNumber: number = Number(num.toFixed(roundingPositions))

    /**
     * If rounding is deactivated explicitly, we need to cut off the last
     * digit. By using the roundedNumber, we ensure that the passed
     * float was rounded on one more position then requested so that
     * we can cut the rounded float off and remain the passed float.
     */
    if (!rounding) roundedNumber = Number(String(roundedNumber).slice(0, String(roundedNumber).length - 1))

    /**
     * This piece of code ensure that we format the floating point number
     * into a source of trugh, ensuring it will always be formatted
     * as a en-GB strigified float. That means it provides a '.' as
     * the thousands separator and ',' for the decimal place separator.
     * 
     * maximumFractionDigits & minimumFractionDigits are being defined
     * via the passed amount of requested positions after the comma.
     */
     stringifiedNumber = roundedNumber
      .toLocaleString(
        'en-GB',
        {
          maximumFractionDigits: decimalPlaces,
          minimumFractionDigits: decimalPlaces
        }
      )
  }

  /**
   * These replacement variable defines for the following
   * regexp which characters should be exchanged with the
   * passed, requested thousands and decimal place
   * separator characters.
   */
  const replacement: { [char: string]: string } = {
    '.': decimalChar,
    ',': thousandsChar
  }
  
  /**
   * This returns a the formatted strigified number with
   * the exchanged characters defined in the upper replacement
   * variable.
   */
  return stringifiedNumber
    .replace(/[.,]/g, (char: string) => replacement[char])
}

