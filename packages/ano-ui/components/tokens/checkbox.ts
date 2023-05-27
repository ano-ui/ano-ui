import type { InjectionKey } from 'vue'
import type { CheckboxGroupProps } from '../ACheckboxGroup/checkbox-group'

export interface CheckboxGroupContext extends CheckboxGroupProps {
  changeEvent: (val: CheckboxGroupProps['modelValue']) => void
}

export const checkboxGroupKey: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroupKey')
