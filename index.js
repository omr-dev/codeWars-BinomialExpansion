//expand("(2f+4)^6"); // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"

function expand(expr) {
  let objBinom = getObjBinom(expr);
  let result = [];
  let exponent = Number(objBinom.exponent);

  for (let k = 0; k <= exponent; k++) {
    let subResult = "";
    let beforExtension =
      getFactorFromPascalsTriangle(exponent, k) *
      objBinom.factorOfA ** (exponent - k) *
      objBinom.b ** k;
    subResult = beforExtension + getExtension(k, exponent, objBinom.letterOfA);

    result.push(subResult);
  }

  result = result.join("+");
  console.log(result);
  return result;
}
expand("((2f+4)^6");

function getObjBinom(expr) {
  let regExp = /\((\-*\d*)(\w)(\+|\-)(\d+)\)\^(\d+)+/;
  let decodedArrayOfExpression = expr.match(regExp);
  let factorOfA = decodedArrayOfExpression[1];
  let letterOfA = decodedArrayOfExpression[2];
  let typeOfCalculation = decodedArrayOfExpression[3];
  let b = decodedArrayOfExpression[4];
  let exponent = decodedArrayOfExpression[5];

  return {
    factorOfA: factorOfA,
    letterOfA: letterOfA,
    typeOfCalculation: typeOfCalculation,
    b: b,
    exponent: exponent,
  };
}

function getFactorFromPascalsTriangle(exponent, column) {
  let table = [[1], [1, 1]];
  for (let lineNo = 2; lineNo <= exponent; lineNo++) {
    let line = [];

    for (let colNo = 0; colNo <= lineNo; colNo++) {
      let num = 0;
      if (colNo == 0 || colNo == lineNo) {
        num = 1;
      } else {
        num = table[lineNo - 1][colNo - 1] + table[lineNo - 1][colNo];
      }

      line.push(num);
    }

    table.push(line);
  }

  let result = table[table.length - 1][column];

  return result;
}
function getExtension(k, exponent, letter) {
  if (k == exponent) {
    return "";
  } else if (k == exponent - 1) {
    return letter;
  } else {
    return letter + "^" + (exponent - k);
  }
}
