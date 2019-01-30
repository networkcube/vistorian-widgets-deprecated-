import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'build/src/index.js',
    external: ['d3', 'moment', 'three'],
    output: {
        file: 'lib/vistorian-widgets.js',
        format: 'umd',
        sourcemap: true,
        name: 'vc',
        globals: {
            'd3': 'd3',
            'moment': 'moment',
            'three': 'three'
        }
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        json(),
        sourcemaps()
    ]
};
