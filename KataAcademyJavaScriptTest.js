function calculator(string) {
  let flag = 0;
  const rome = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    L: 50,
  };
  const arr = string.split(" ");

  if (arr.length !== 3) {
    throw "Error";
  }
  if (
    arr[1].localeCompare("-") &&
    arr[1].localeCompare("+") &&
    arr[1].localeCompare("*") &&
    arr[1].localeCompare("/")
  ) {
    throw "Error";
  }
  if (
    (isNaN(Number(arr[0])) && !isNaN(Number(arr[2]))) ||
    (isNaN(Number(arr[2])) && !isNaN(Number(arr[0])))
  ) {
    throw "Error";
  }
  if (!isNaN(Number(arr[0]))) {
    arr[0] = Number(arr[0]);
    arr[2] = Number(arr[2]);
    if (arr[0] < 1 || arr[0] > 10 || arr[2] < 1 || arr[2] > 10) {
      throw "Error";
    }
    if (arr[0] !== Math.floor(arr[0]) || arr[2] !== Math.floor(arr[2])) {
      throw "Error";
    }
  } else {
    for (const key in rome) {
      if (key.localeCompare("L") === 0) {
        throw "Error";
      }
      if (key.localeCompare(arr[0]) === 0) {
        arr[0] = rome[key];
        flag = 1;
        break;
      }
    }
    for (const key in rome) {
      if (key.localeCompare("L") === 0) {
        throw "Error";
      }
      if (key.localeCompare(arr[2]) === 0) {
        arr[2] = rome[key];
        break;
      }
    }
  }

  let result = null;
  if (arr[1] === "-" && flag && arr[2] >= arr[0]) {
    return "";
  }
  if (arr[1] === "-") {
    result = arr[0] - arr[2];
  } else if (arr[1] === "+") {
    result = arr[0] + arr[2];
  } else if (arr[1] === "/") {
    result = Math.floor(arr[0] / arr[2]);
    if (result === 0 && flag) {
      return "";
    }
  } else if (arr[1] === "*") {
    result = arr[0] * arr[2];
  }
  if (!flag) {
    return String(result);
  }
  let reminder = result % 10;
  switch (Math.floor(result / 10)) {
    case 0:
      result = "";
      break;
    case 1:
      result = "X";
      break;
    case 2:
      result = "XX";
      break;
    case 3:
      result = "XXX";
      break;
    case 4:
      result = "XL";
      break;
    case 5:
      result = "L";
      break;
    case 6:
      result = "LX";
      break;
    case 7:
      result = "LXX";
      break;
    case 8:
      result = "LXXX";
      break;
    case 9:
      result = "XC";
      break;
    default:
      return "C";
  }
  for (const key in rome) {
    if (rome[key] === reminder) {
      return result + key;
    }
  }
  return result;
}
