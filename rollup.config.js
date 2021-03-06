import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/index.js',
	dest: 'dist/preact-append-child.js',
	moduleName: 'AppendChild',
	external: ['preact'],
	format: 'umd',
	plugins: [
		buble({
			jsx: 'h',
			transforms: {
				modules: false
			}
		})
	]
}
