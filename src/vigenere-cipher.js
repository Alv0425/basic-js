const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.isDirect = isDirect;
  }
  encrypt(expr, key) {
    if (!expr || !key) {
      throw new Error('Incorrect arguments!');
    }
    let exprArray = expr.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let index = 0;
    let result = exprArray.map((char) => {
      if (this.alphabet.includes(char)){
        if (index > keyArr.length - 1) {index = 0}
        console.log(index, char, keyArr[index]);
        let keyChar = keyArr[index];
        index += 1;
        let encryptedChari = this.alphabet[(this.alphabet.indexOf(char) + this.alphabet.indexOf(keyChar)) % 26];
        return encryptedChari;
      }
      return char; 
    });
    if (!this.isDirect) {
      let reversedResult = '';
      for (let i = result.length - 1; i >= 0; i -= 1){
        reversedResult += result[i];
      }
      return reversedResult;
    }
    return result.join('');
  }
  decrypt(expr, key) {
    if (!expr || !key) {
      throw new Error('Incorrect arguments!');
    }
    let exprArray = expr.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let index = 0;
    let result = exprArray.map((char) => {
      if (this.alphabet.includes(char)){
        if (index > keyArr.length - 1) {index = 0}
        console.log(index, char, keyArr[index]);
        let keyChar = keyArr[index];
        index += 1;
        let encryptedChari = this.alphabet[(this.alphabet.indexOf(char) - this.alphabet.indexOf(keyChar) + 26) % 26];
        return encryptedChari;
      }
      return char; 
    });
    if (!this.isDirect) {
      let reversedResult = '';
      for (let i = result.length - 1; i >= 0; i -= 1){
        reversedResult += result[i];
      }
      return reversedResult;
    }
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
