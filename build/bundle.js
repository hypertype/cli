#!/usr/bin/env node

const path = require('path');
function root(file){
    return path.join(__dirname, '../../../..',file);
}

const pkg = require(root('./package'));
const webpack = require('webpack');


const main = pkg.module;
webpack({
    entry: {
        index: root(main)
    },
    mode: 'development',
    devtool: 'source-map',
    externals: Object.keys(pkg.peerDependencies),
    output: {
        path: root('./dist/bundle'),
    }
}, (err, stats) => {
    console.log(stats.toString())
});