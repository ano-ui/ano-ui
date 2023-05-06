import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'

export function AnoDevResolver(command: 'serve' | 'build' = 'serve'): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^A[A-Z]/)) {
        if (command === 'serve')
          return { name, from: `ano-ui/src/components/${name}/${name}.vue` }
        else
          return { name, from: `ano-ui/components/${name}/index.vue` }
      }
    },
  }
}
