//expand("(2f+4)^6"); // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"

function expand(expr) {
  let objBinom = getObjBinom(expr);
  let result = [];
  let k = 0;
  for (let n = objBinom.exponent; n >= 0; n--) {
    let subElement = getSubA(n, k, objBinom) + getSubB(k, objBinom);

    if (n != objBinom.exponent && n != 0) {
      subElement =
        getFactorFromPascalsTriangle(objBinom.exponent, k) + subElement;
    }
    result.push(subElement);
    k++;
  }
  result = result.join("+");
  console.log(result);
  return result;
}
expand("(x+1)^2");

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
function getSubA(n, k, objBinom) {
  let result = "";
  if (k == objBinom.exponent) {
    return "";
  } else {
    if (objBinom.exponent - k == 1) {
      result = "" + objBinom.letterOfA;
    } else {
      result = "" + objBinom.letterOfA + "^" + (objBinom.exponent - k);
    }
    if (objBinom.factorOfA) {
      result = objBinom.factorOfA ** (n - k) + result;
    }
  }

  return result;
}
function getSubB(k, objBinom) {
  if (k == 0) {
    return "";
  } else if (objBinom.b ** k == 1 && k != objBinom.exponent) {
    return "";
  } else {
    return "" + objBinom.b ** k;
  }
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
getFactorFromPascalsTriangle(5, 2);
