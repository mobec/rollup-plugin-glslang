# rollup-plugin-glslang

import compile from 'rollup-plugin-glslang';

export default {
	return {
		input: 'main.js',
		output: 'bundle.js',
		plugins: [
			compile({
				source: './glslShaders',
				target: './compiledShaders'
			})
		]
	}
}