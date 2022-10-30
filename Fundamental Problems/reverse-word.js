function reverseWord(str) {
  let str1 = '';
  for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
    //onsole.log(str1);
  }
  return str1;
}
console.log(reverseWord('book is'));
