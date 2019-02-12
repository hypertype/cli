#!/usr/bin/env node

const relative = process.argv[2] || './';
const path = require('path');
const basePath = process.cwd();
const webpack = require('webpack');

const pkg = require(path.join(basePath, relative, './package'));
const outputPath = path.join(basePath, relative, 'dist/bundle', relative);

const main = pkg.module;
console.log(basePath, relative, main)
webpack({
    entry: {
        index: path.join(basePath, relative, main),
    },
    target: 'node',
    mode: 'development',
    devtool: 'source-map',
    externals: Object.keys(pkg.peerDependencies || []),
    output: {
        path: outputPath,
        libraryTarget: 'umd'
    }
}, (err, stats) => {
    console.warn(`bundle ${relative} to ${outputPath}`)
    // console.log(stats.toString())
});