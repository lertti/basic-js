const { NotImplementedError } = require("../lib");

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
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabetLength = this.alphabet.length;
  }

  process(message, key, isEncrypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const messageChar = upperMessage[i];
      const charIndex = this.alphabet.indexOf(messageChar);

      if (charIndex !== -1) {
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);

        if (isEncrypt) {
          result +=
            this.alphabet[(charIndex + keyCharIndex) % this.alphabetLength];
        } else {
          result +=
            this.alphabet[
              (charIndex - keyCharIndex + this.alphabetLength) %
                this.alphabetLength
            ];
        }
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    if (!this.isDirect) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  encrypt(message, key) {
    return this.process(message, key, true);
  }

  decrypt(message, key) {
    return this.process(message, key, false);
  }
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
