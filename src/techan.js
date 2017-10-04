'use strict';

var _d3 = require('d3');

module.exports = (function(d3) {
  return {
    version: require('../build/version'),
    accessor: require('./accessor')(),
    indicator: require('./indicator')(d3),
    plot: require('./plot')(d3),
    scale: require('./scale')(d3),
    svg: require('./svg')(d3)
  };
})(_d3);
