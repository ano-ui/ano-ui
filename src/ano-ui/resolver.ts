import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'

export function AnoResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(A[A-Z])|(a[a-z])/))
        return { name, from: `ano-ui/components/${name}/${name}.vue` }
    },
  }
}
