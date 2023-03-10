function randomNumber(min, max) {
  if (max < 0 || min < 0) {
    return('Диапазон может быть только положительный, измените значение');
  }
  if (max< min){
    return('min значение не может быть больше max');
  }
  if (max === min) {
    return max;
  }
  return Math.floor(Math.random()*(max-min+1))+min;
}


function lengthStringСheck(string, maxLength){
   return string.length <= maxLength;
}


