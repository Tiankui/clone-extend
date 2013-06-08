/*
 * clone-extend
 * https://github.com/Tiankui/clone-extend
 *
 * Copyright (c) 2013 Tiankui
 * Licensed under the MIT license.
 */

'use strict';
var clone = require('./clone'),
    _ = require('./underscore');

function cloneExtend(destination,source) {
    return _.extend(clone(destination),source);
}

module.exports = cloneExtend;
