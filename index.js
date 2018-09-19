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
