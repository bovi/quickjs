/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.14/15.2.3.14-6-2.js
 * @description Object.keys - the order of elements in returned array is the same with the order of properties in 'O' (sparse array)
 */


function testcase() {
        var sparseArray = [1, 2, , 4, , 6];

        var tempArray = [];
        for (var p in sparseArray) {
            if (sparseArray.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }

        var returnedArray = Object.keys(sparseArray);
    
        for (var index in returnedArray) {
            if (tempArray[index] !== returnedArray[index]) {
                return false;
            }
        }
        return true;
    }
runTestCase(testcase);
