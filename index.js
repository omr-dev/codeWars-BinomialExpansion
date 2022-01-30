//expand("(x+1)^2"),"x^2+2x+1")

function expand(expr) {
  let regExp = /\((\-*\d*)(\w)(\+|\-)(\d+)\)\^(\d+)+/;
  let decodedArrayOfExpression = expr.match(regExp);
  let factorOfA = decodedArrayOfExpression[1];
  let letterOfA = decodedArrayOfExpression[2];
  let typeOfCalculation = decodedArrayOfExpression[3];
  let b = decodedArrayOfExpression[4];
  let exponent = decodedArrayOfExpression[5];
  console.log(
    "factorOfA:",
    factorOfA,
    "letterOfA:",
    letterOfA,
    "typeOfCalculation:",
    typeOfCalculation,
    "b:",
    b,
    "exponent:",
    exponent
  );
}
expand("(-5r+154)^203");
function AninCarpaniniBul(expr) {
  let regExpAninCarpani = /\((\-?\d*)/g;
  if (expr.match(regExpAninCarpani)[1] != "") {
    let result = expr.match(regExpAninCarpani).join("").substring(1);
    console.log(expr.match(regExpAninCarpani));
    return result;
  } else {
    return 1;
  }
}
