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

// question 3 solution
function validateUsername(username) {
  // check username is less than 4 chr
  if (username.length < 4) {
    return "Too Short";
  }

  // check username contain any space
  if(username.includes(" ")){
      return "No Space Allowed";
  }

  // check username contains (admin) reserved word
  if(username.toLowerCase().includes("admin")){
    return "Reserved Word";
  }

  return "Available";
}
