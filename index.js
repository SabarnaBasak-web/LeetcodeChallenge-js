const phoneNumberInput = document.getElementById("phone");

export const extractDigits = (inputString) => {
  let len = inputString.length;
  let validNumber = "";
  for (let i = 0; i < len; i++) {
    let ascValue = inputString.charCodeAt(i);
    if (ascValue >= 48 && ascValue <= 57) {
      validNumber += inputString.charAt(i);
    }
  }
  return validNumber;
};

export const formatFirstThreeDigits = (phoneNumber) => {
  return `(${phoneNumber.substring(0, 3)}) ` + phoneNumber.substring(3);
};

export const formatFirstSixDigits = (phoneNumber) => {
  return `(${phoneNumber.substring(0, 3)}) ` + phoneNumber.substring(3, 6);
};

export const formatMorethanSixDigits = (phoneNumber) => {
  return formatFirstSixDigits(phoneNumber) + "-" + phoneNumber.substring(6);
};

export function inputChangeHandler(event) {
  let formattedPhoneNumber = "";
  let inputValue = event.target.value;
  let phoneNumber = extractDigits(inputValue);

  // move cursor to end of the line
  if (event.data === "") {
    phoneNumberInput.setSelectionRange(inputValue.length, inputValue.length);
  }

  if (phoneNumber.length >= 4) {
    formattedPhoneNumber = formatFirstThreeDigits(phoneNumber);
    inputValue = "";
  }

  if (phoneNumber.length === 3) {
    formattedPhoneNumber = phoneNumber;
    inputValue = "";
  }

  if (phoneNumber.length >= 7) {
    formattedPhoneNumber = formatMorethanSixDigits;
    inputValue = "";
  }

  if (phoneNumber.length === 6) {
    formattedPhoneNumber = formatFirstSixDigits(phoneNumber);

    inputValue = "";
  }

  phoneNumberInput.value = formattedPhoneNumber + inputValue;
}
