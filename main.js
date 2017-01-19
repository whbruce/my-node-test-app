#!/usr/bin/env node
'use strict'
var pkg = require('./package.json');
var lib = require('my-node-test-lib');

console.log("App: " + pkg.name + " v" + pkg.version);
console.log("Lib: " + lib.getName() + " v" + lib.getVersion());
