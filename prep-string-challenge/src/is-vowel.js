/* exported isVowel */
const isVowel = (char) => {
  switch (char) {
    case 'a':
      return true;
      break;
    case 'A':
      return true;
      break;
    case 'e':
      return true;
      break;
    case 'E':
      return true;
      break;
    case 'i':
      return true;
      break;
    case 'I':
      return true;
      break;
    case 'o':
      return true;
      break;
    case 'O':
      return true;
      break;
    case 'u':
      return true;
      break;
    case 'U':
      return true;
      break;
    default:
      return false;
      break;
  }
};
