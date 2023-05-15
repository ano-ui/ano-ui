import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const collapseProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  accordion: Boolean,
  defaultExpandedNames: {
    type: [String, Number, Array] as PropType<(string | number) | Array<string | number>>,
  },
}
export const collapseEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export const collapseActivesInjectKey: InjectionKey<Ref<(string | number)[]>> = Symbol('a_collapse_actives')
export const collapseAccordionInjectKey: InjectionKey<Ref<boolean>> = Symbol('a_collapse_accordion')

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
export type CollapseEmits = typeof collapseEmits
