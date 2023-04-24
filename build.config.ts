import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/ano-ui/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['unocss', 'vue', '@uni-helper/vite-plugin-uni-components'],
})
