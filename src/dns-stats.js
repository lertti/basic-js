const { NotImplementedError } = require("../lib");

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
  let setOfDNS = [];
  let appearancesOfDns = {};
  let index = 0;
  for (let i = 0; i < domains.length; i++) {
    let rezultDns = '';
    let dom = domains[i].split('.').reverse();
    for (let j = 0; j < dom.length; j++) {
      setOfDNS[index++] = rezultDns += '.' + dom[j];
    }
  }
  let resultMap = new Map();
  for (let i = 0; i < setOfDNS.length; i++) {
    if (!resultMap.has(setOfDNS[i])) {
      resultMap.set(setOfDNS[i], 1);
    } else {
      resultMap.set(setOfDNS[i], resultMap.get(setOfDNS[i]) + 1);
    }
  }
  for (let domain of resultMap.keys()) {
    appearancesOfDns[domain] = resultMap.get(domain);
  }
  return appearancesOfDns;
}

module.exports = {
  getDNSStats,
};
