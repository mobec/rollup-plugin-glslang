# rollup-plugin-glslang

```
import glslang from 'rollup-plugin-glslang';

export default {
  return {
    ...options,
    plugins: [
      glslang({
        source: './',
        target: './'
      })
    ]
  }
}
```