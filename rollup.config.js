// rollup.config.js

export default {
    input: 'source/main.js',
    output: [
        {
            sourcemap: true,
            dir: "dist/es",
            format: 'es'
        },
        {
            sourcemap: true,
            dir: "dist/cjs",
            format: 'cjs'
        }
    ],
    external: [ '@webgpu/glslang', 'path', 'fs' ]
};