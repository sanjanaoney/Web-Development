const sentence = 'Sometimes we feel to give up on life the other day we just wanna live a little bit more';

if (
  (sentence.includes('a') || sentence.includes('A')) &&
  (sentence.includes('e') || sentence.includes('E')) &&
  (sentence.includes('i') || sentence.includes('I')) &&
  (sentence.includes('o') || sentence.includes('O')) &&
  (sentence.includes('u') || sentence.includes('U'))
) {
  console.log("Contains all the vowels");
} else {
  console.log("Doesn't contain all the vowels");
}
