# QuickJS

This is a copy of the QuickJS source code from https://bellard.org/quickjs/

## Introduction

QuickJS is a small and embeddable Javascript engine. It supports the ES2020 specification including modules, asynchronous generators and proxies.

It optionally supports mathematical extensions such as big integers (BigInt), big floating point numbers (BigFloat) and operator overloading.

Main Features:

* Small and easily embeddable: just a few C files, no external dependency, 190 KiB of x86 code for a simple hello world program.
* Fast interpreter with very low startup time: runs the 58000 tests of the ECMAScript Test Suite in about 85 seconds on a single core of a desktop PC. The complete life cycle of a runtime instance completes in less than 300 microseconds.
* Almost complete ES2020 support including modules, asynchronous generators and full Annex B support (legacy web compatibility).
* Passes nearly 100% of the ECMAScript Test Suite.
* Can compile Javascript sources to executables with no external dependency.
* Garbage collection using reference counting (to reduce memory usage and have deterministic behavior) with cycle removal.
* Mathematical extensions: BigInt, BigFloat, operator overloading, bigint mode, math mode.
* Command line interpreter with contextual colorization implemented in Javascript.
* Small built-in standard library with C library wrappers.

## License

QuickJS is released under the MIT license.

Unless otherwise specified, the QuickJS sources are copyright Fabrice Bellard and Charlie Gordon
