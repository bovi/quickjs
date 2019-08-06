// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-31
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: extends (extends)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var extend\u0073 = 123;
