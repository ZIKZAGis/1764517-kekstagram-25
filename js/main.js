function getRandomNumber (min, max) {
  if (min >= 0 && max > min) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  return 'Что-то пошло не так';
}

getRandomNumber(1, 10);

function getCheckString (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

getCheckString('Привет, кекс', 140);
