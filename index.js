//expand("(x+1)^2"),"x^2+2x+1")

function expand(expr) {
  let objBinom = getObjBinom(expr);

  console.log("objBinom :", objBinom);
}
expand("(-5r+154)^203");

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
