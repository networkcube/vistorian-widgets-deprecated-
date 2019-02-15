import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'build/src/index.js',
    external: [
        'd3',
        'moment',
        'three',
        'vistorian-core/src/dynamicgraph',
        'vistorian-core/src/utils',
        'vistorian-core/src/messenger',
        'jquery'
    ],
    output: {
        file: 'lib/vistorian-widgets.js',
        format: 'cjs',
        sourcemap: true,
        name: 'vc',
        globals: {
            'd3': 'd3',
            'moment': 'moment',
            'three': 'three',
            'vistorian-core/src/dynamicgraph': 'dynamicgraph',
            'vistorian-core/src/utils': 'utils',
            'vistorian-core/src/messenger': 'messenger',
            'jquery': '$'
        }
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        json(),
        sourcemaps()
    ]
};
