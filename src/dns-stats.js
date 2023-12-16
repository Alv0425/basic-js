const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  let modStats = {};
  domains.forEach(domain => {
    let domainPart = '';
    for (let i = domain.length - 1; i >= 0; i -= 1){
      domainPart = domain[i] + domainPart;
      if (domain[i] === '.' || i === 0) {
        let keyName = domainPart;
        if (i === 0) {keyName = '.' + keyName }
        if (stats.hasOwnProperty(keyName)) {
          stats[keyName] += 1;
        } else {
          stats[keyName] = 1;
        }
      }
    }
  });
  for (key in stats) {
    let testStr = key + "";
    let newKey = '';
    while(testStr.length > 0){
      newKey = testStr.match(/^.[a-zA-Z]+/) + newKey;
      testStr = testStr.replace(/^.[a-zA-Z]+/, '');
    }
    console.log(newKey);
    modStats[newKey] = stats[key];
  }
  return modStats;
}

module.exports = {
  getDNSStats
};
