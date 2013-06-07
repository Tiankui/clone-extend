/*
 * Author: zhouweiping(Tiankui)
 * Email: eric.prototype@gmail.com
 * Data: 2013-06-07
 *
 * It's distributed under the MIT license(http://mit-license.org).
 */


var _ = require('../underscore/underscore.js'),
    clone = require('./clone');

module.exports = dataHelper;

function dataHelper(destination,source) {
  return _.extend(clone(destination),source);
}
