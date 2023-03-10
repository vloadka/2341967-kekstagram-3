function randomNumber(min, max) {
  if (max < 0 || min < 0) {
    return('Диапазон может быть только положительный, измените значение');
  }
  if (min > max){
    return('min значение не может быть больше max');
  }
  if (max === min) {
    return max;
  }
  return Math.floor(Math.random()*(max-min+1))+min;
}
randomNumber(0,10);

function lengthStringСheck(string, maxLength){
  return string.length <= maxLength;
}
lengthStringСheck('123',4);
