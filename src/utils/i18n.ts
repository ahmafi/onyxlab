const distance = "0".charCodeAt(0) - "۰".charCodeAt(0);

export function localizeDigits(input: string) {
  const charCodes: number[] = [];
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if (charCode <= "9".charCodeAt(0) && charCode >= "0".charCodeAt(0)) {
      charCodes.push(charCode - distance);
    } else {
      charCodes.push(charCode);
    }
  }
  return String.fromCharCode(...charCodes).replaceAll("%", "٪");
}

console.log(localizeDigits("1234567890"));
