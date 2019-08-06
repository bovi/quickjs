// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-447
description: >
    ES5 Attributes - success to update [[Configurable]] attribute of
    accessor property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: false,
  configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

Object.defineProperty(obj, "prop", {
  configurable: false
});

var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

assert.sameValue(desc1.configurable, true);
assert.sameValue(desc2.configurable, false);

verifyNotConfigurable(obj, "prop");
assert(obj.hasOwnProperty("prop"));
