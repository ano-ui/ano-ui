import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'

export function AnoDevResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^A[A-Z]/))
        return { name, from: `ano-ui/src/components/${name}/${name}.vue` }
    },
  }
}
