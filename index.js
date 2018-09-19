function distanceFromHqInBlocks(distance){
  let result;
  if (distance >= 42){
  result = distance - 42;
  } else {
    result = 42 - distance;
  }
  return result;
}

function distanceFromHqInFeet(distance){
  let result;
  if (distance >= 42){
  result = (distance - 42) * 264;
  } else {
    result = (42 - distance) * 264;
  }
  return result;
}

function distanceTravelledInFeet(start, end){
  let result;
  if (start >= end){
   result = (start - end) * 264;
  } else {
    result = (end - start) * 264;
  }
  return result;
}
function calculatesFarePrice(start, end){
  let result;
  let fare;
  if (start >= end){
   result = (start - end) * 264;
  } else {
    result = (end - start) * 264;
  }
  if (result < 400){
    fare = 0
  }
  else if (result < 400 && result < 2000){
    fare = (result - 400) * .02;
  } else if (fare > 2000 && fare < 2500){
    fare = (result - 400) * .02 + 25;
  } else {
    fare = 0
  }
    
  return result;
}