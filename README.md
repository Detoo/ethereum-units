# ethereum-units
A simple unit converter for Ethereum, because finney, szabo, and wei are less intuitive than SI units for people like me.

## CLI
```
$ npm install -g ethereum-units
$ ethunits 1 gwei wei
1000000000 wei
$ ethunits 0xa gwei wei
10000000000 wei
$ ethunits -0 0xa gwei wei
10000000000
$ ethunits 1 wei
0.000000000000000001 ether
$ ethunits -e 1 wei
1e-18 ether
```

## Node
```node
ethunits = require('ethereum-units');
ethunits.convert(1, 'babbage', 'wei');
```

Returns [BigNumber](https://github.com/MikeMcl/bignumber.js) objects. Also exposes a `units` object mapping unit names to `BigNumber` representations of how much wei each unit consists of.
