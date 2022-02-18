// https://www.hackerrank.com/challenges/pangrams/problem

const pangrams = str => {
  const isPangram = [...'abcdefghijklmnopqrstuvwxyz'].every(alphabetLetter =>
    [...str].some(strLetter => strLetter.toLowerCase() === alphabetLetter)
  );

  return isPangram ? 'pangram' : 'not pangram';
};
