import type { SetupContext } from 'vue'
import { computed, onMounted, ref } from 'vue'
import { CLICK_EVENT } from '../constants'
import { guid } from '../utils'
import { useQuerySelector } from '../composables'
import type { CollapseTransitionEmits, CollapseTransitionProps } from './collapse-transition'

export function useCollapseTransition(props: CollapseTransitionProps, emit: SetupContext<CollapseTransitionEmits>['emit']) {
  const elementGuid = ref<string>(`tr${guid()}`)
  const querySelector = useQuerySelector('boundingClientRect')

  function clickHandler(evt: MouseEvent) {
    emit(CLICK_EVENT, evt)
  }

  const rect = ref<UniApp.NodeInfo>()

  const height = computed(() => {
    return props.show ? rect.value?.height : 0
  })

  onMounted(async () => {
    rect.value = await querySelector(`#${elementGuid.value}`)
  })

  return {
    height,
    elementGuid,

    clickHandler,
  }
}
