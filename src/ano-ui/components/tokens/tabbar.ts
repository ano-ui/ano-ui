import type { InjectionKey } from 'vue'
import type { TabBarProps } from '../ATabBar/tab-bar'

export interface TabBarContext extends TabBarProps {
  changeEvent: (val: TabBarProps['modelValue']) => void
}

export const tabBarKey: InjectionKey<TabBarContext> = Symbol('tabBarKey')
