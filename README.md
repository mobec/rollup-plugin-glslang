# rollup-plugin-glslang
Rollup plugin that uses [@webgpu/glslang](https://www.npmjs.com/package/@webgpu/glslang) to compile shaders from glsl to SPIR-V

This project was forked from [@javascribble/rollup-plugin-glslang](https://www.npmjs.com/package/@javascribble/rollup-plugin-glslang) to fix module imports

```
import { glslang } from '@javascribble/rollup-plugin-glslang';

export default {
  ...options,
  plugins: [
    glslang({
      source: './',
      target: './'
    })
  ]
}
```
