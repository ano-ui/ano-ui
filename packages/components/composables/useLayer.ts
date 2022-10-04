import type { ComponentObjectPropsOptions } from 'vue'
import { ccProp, themeProp } from './useProps'

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    cc: ccProp,
    type: themeProp,
  }

  // Add `defaults` property in `props` if it is provided via `defaults` argument
  if (propOverrides)
    Object.assign(props, propOverrides)

  return props
}
