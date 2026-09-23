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

// Question 4 solution
function getCngFare(distance, isNight = false, waitingMinutes = 0){
  const minFare = 50;
  const perKmFare = 15; // every 1 km fare 15 taka after 2 km
  const nightTransportCharge = .20; // add 20% in total cost
  const waitingCharge = 2; // every 1 minute waiting charge 2 taka
  let calculateCharge = minFare;
  if(distance > 2){
    const remainingDistance = distance - 2;
    calculateCharge += remainingDistance * perKmFare;
  }
  if(waitingMinutes > 0){
    calculateCharge += waitingCharge * waitingMinutes;
  } 
  if(isNight){
    calculateCharge += calculateCharge * nightTransportCharge;
  }
  return calculateCharge;
}
