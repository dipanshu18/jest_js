function inflection(floor) {
  const inflectionPoint = 47;
  if (floor >= inflectionPoint) {
    return true;
  }
}

function isBreak(floorNo) {
  if (inflection(floorNo)) {
    return true;
  }
  return false;
}

module.exports = isBreak;

// This is an interview question
