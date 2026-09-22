// question 1 solution
function describeValue(value) {
  const $valueType = typeof value;
  if (value) {
    return `${$valueType} | truthy`;
  } else {
    return `${$valueType} | falsy`;
  }
}

// question 2 solution
function getDayType(day) {
  const dayName = day.toLowerCase();

  switch (dayName) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}
