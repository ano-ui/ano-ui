import 'uno.css'
import type { App } from 'vue'

import * as components from './components'

export interface PluginOptions {
  registerComponents: boolean
}

const plugin = {
  install(app: App) {
    for (const prop in components) {
      // @ts-expect-error: I want to index import using string
      const component = components[prop]
      app.component(component.name, component)
    }
  },
}

export * from './composables'

export { plugin as ano }
