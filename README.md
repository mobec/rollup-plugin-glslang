# rollup-plugin-glslang

```
import compileGLSL from 'rollup-plugin-glslang';

export default {
	return {
		input: 'main.js',
		output: 'bundle.js',
		plugins: [
			compileGLSL({
				source: './glslShaders',
				target: './compiledShaders'
			})
		]
	}
}
```