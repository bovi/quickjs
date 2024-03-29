// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production x *= y is the same as the production x = x * y
 *
 * @path ch11/11.13/11.13.2/S11.13.2_A4.1_T2.3.js
 * @description Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null
 */

//CHECK#1
var x = 1;
x *= null;
if (x !== 0) {
  $ERROR('#1: x = 1; x *= null; x === 0. Actual: ' + (x));
}

//CHECK#2
x = null;
x *= 1;
if (x !== 0) {
  $ERROR('#2: x = null; x *= 1; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new Number(1);
x *= null;
if (x !== 0) {
  $ERROR('#3: x = new Number(1); x *= null; x === 0. Actual: ' + (x));
}

//CHECK#4
x = null;
x *= new Number(1);
if (x !== 0) {
  $ERROR('#4: x = null; x *= new Number(1); x === 0. Actual: ' + (x));
}

