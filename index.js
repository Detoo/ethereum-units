var BigNumber = require('bignumber.js');
var units = {
    // From https://github.com/ethjs/ethjs-unit
    'wei':          BigNumber('1'),
    'kwei':         BigNumber('1000'),
    'Kwei':         BigNumber('1000'),
    'babbage':      BigNumber('1000'),
    'femtoether':   BigNumber('1000'),
    'mwei':         BigNumber('1000000'),
    'Mwei':         BigNumber('1000000'),
    'lovelace':     BigNumber('1000000'),
    'picoether':    BigNumber('1000000'),
    'gwei':         BigNumber('1000000000'),
    'Gwei':         BigNumber('1000000000'),
    'shannon':      BigNumber('1000000000'),
    'nanoether':    BigNumber('1000000000'),
    'nano':         BigNumber('1000000000'),
    'szabo':        BigNumber('1000000000000'),
    'microether':   BigNumber('1000000000000'),
    'micro':        BigNumber('1000000000000'),
    'finney':       BigNumber('1000000000000000'),
    'milliether':   BigNumber('1000000000000000'),
    'milli':        BigNumber('1000000000000000'),
    'ether':        BigNumber('1000000000000000000'),
    'kether':       BigNumber('1000000000000000000000'),
    'grand':        BigNumber('1000000000000000000000'),
    'mether':       BigNumber('1000000000000000000000000'),
    'gether':       BigNumber('1000000000000000000000000000'),
    'tether':       BigNumber('1000000000000000000000000000000')
};

module.exports = {
    units: units,
    convert: function (from, fromUnit, toUnit) {
        if (!from.multiply) {
            from = BigNumber(from);
        }
        return from.multipliedBy(units[fromUnit]).dividedBy(units[toUnit]);
    }
};
