// question 1 solution
function describeValue(value) {
  const $valueType = typeof value;
  if (value) {
    return `${$valueType} | truthy`;
  } else {
    return `${$valueType} | falsy`;
  }
}
