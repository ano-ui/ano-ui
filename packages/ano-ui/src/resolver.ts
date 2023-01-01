import type { ComponentResolver, ComponentResolverFunction } from 'unplugin-vue-components'

export type UniPlatform = 'app' | 'h5' | 'mp' | 'quickapp'

export interface ResolverOptions {
  /**
   * build target platform
   * @default 'mp'
   */
  platform?: UniPlatform
}

export function AnoResolver(options: ResolverOptions = {}): ComponentResolver {
  const { platform = 'mp' } = options
  const mpResolver: ComponentResolverFunction = (name: string) => {
    if (name.match(/^A[A-Z]/))
      return { name, from: `ano-ui/components/${name}/${name}.vue` }
  }
  const h5Resolver: ComponentResolverFunction = (name: string) => {
    if (name.match(/^A[A-Z]/))
      return { name, from: 'ano-ui' }
  }
  return {
    type: 'component',
    resolve: platform === 'mp' ? mpResolver : h5Resolver,
  }
}
