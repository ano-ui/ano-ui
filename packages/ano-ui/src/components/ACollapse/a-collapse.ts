import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const aCollapseProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  accordion: Boolean,
  defaultExpandedNames: {
    type: [String, Number, Array] as PropType<(string | number) | Array<string | number>>,
  },
}
export const aCollapseEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export const aCollapseActivesInjectKey: InjectionKey<Ref<(string | number)[]>> = Symbol('a_collapse_actives')
export const aCollapseAccordionInjectKey: InjectionKey<Ref<boolean>> = Symbol('a_collapse_accordion')

export type ACollapseProps = ExtractPropTypes<typeof aCollapseProps>
export type ACollapseEmits = typeof aCollapseEmits
