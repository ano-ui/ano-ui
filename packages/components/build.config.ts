import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['vue'],
})
