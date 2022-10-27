import type { ComponentObjectPropsOptions } from 'vue'
import { CCCProp, CCProp, CCSProp, CSProp, ColorProp } from './useProps'

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    cc: CCProp,
    ccc: CCCProp,
    cs: CSProp,
    ccs: CCSProp,
    color: ColorProp,
  }

  // Add `defaults` property in `props` if it is provided via `defaults` argument
  if (propOverrides)
    Object.assign(props, propOverrides)

  return props
}
