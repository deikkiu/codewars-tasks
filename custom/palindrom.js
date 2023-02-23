function palindrom(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

console.log(palindrom('zazazaz'));
