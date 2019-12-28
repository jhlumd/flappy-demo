const test = function(seconds, unit) {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;
  const decades = years / 10;
  const centuries = years / 100;

  switch(unit) {
    case "minutes":
      return minutes;
    case "hours":
      return hours;
    case "days":
      return days;
    case "months":
      return months;
    case "years":
      return years;
    case "decades":
      return decades;
    case "centuries":
      return centuries;
    default:
      return seconds;
  }

};

console.log(test(1234, "hours"));

