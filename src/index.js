module.exports = function decode(expr) {
  const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

  const decadNum = [];
  let matrix = -1;
  for (let index = 0; index < expr.length; index += 1) {
    if (index % 10 === 0) {
      decadNum.push([]);
      matrix += 1;
    }
    decadNum[matrix].push(expr[index]);
  }

  const dotsDash = [];
  for (let i = 0; i < decadNum.length; i += 1) {
    dotsDash.push([]);
    for (let j = 0; j < decadNum[i].length; j += 1) {
      if (String(decadNum[i][j]) + String(decadNum[i][j + 1]) === '10') {
        dotsDash[i].push('.');
      } else if (String(decadNum[i][j]) + String(decadNum[i][j + 1]) === '11') {
        dotsDash[i].push('-');
      } else if (String(decadNum[i][j]) + String(decadNum[i][j + 1]) === '**') {
        dotsDash[i].push(' ');
      }
      j += 1;
    }
  }
  const rez = [];
  dotsDash.forEach((element) => {
    if (MORSE_TABLE[element.join('')] === undefined) {
      rez.push(' ');
    } else {
      rez.push(MORSE_TABLE[element.join('')]);
    }
  });
  return rez.join('');
};
