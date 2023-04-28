import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CHANGE_EVENT, CLICK_EVENT } from '../constants'
import { tabBarKey } from '../tokens/tabbar'
import type { TabBarItemEmits, TabBarItemProps } from './tab-bar-item'

export function useTabBarItem(props: TabBarItemProps, emit: SetupContext<TabBarItemEmits>['emit']) {
  const tabBar = inject(tabBarKey, undefined)

  const modelValue = computed<TabBarItemProps['name']>(() => tabBar ? tabBar!.modelValue : props.name)
  const active = computed(() => tabBar ? tabBar!.modelValue === props.name : false)

  function toggle(evt: MouseEvent) {
    evt.stopPropagation()
    if (modelValue.value === props.name)
      return

    const newValue = props.name
    if (tabBar)
      tabBar.changeEvent(newValue)
    emit && emit(CLICK_EVENT, evt)
    emit && emit(CHANGE_EVENT, newValue)
  }

  return {
    toggle,
    active,
  }
}
