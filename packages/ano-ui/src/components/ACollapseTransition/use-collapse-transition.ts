import type { SetupContext } from 'vue'
import { computed, ref, watch } from 'vue'
import { CLICK_EVENT } from '../constants'
import { delay, guid } from '../utils'
import { useQuerySelector } from '../composables'
import type { CollapseTransitionEmits, CollapseTransitionProps } from './collapse-transition'

export function useCollapseTransition(props: CollapseTransitionProps, emit: SetupContext<CollapseTransitionEmits>['emit']) {
  const className = computed(() => [])
  const elementGuid = ref<string>(`tr${guid()}`)
  const animating = ref(false)
  const animation = ref()
  const querySelector = useQuerySelector('boundingClientRect')

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  function createAnimation(height: number) {
    return (
      uni
        .createAnimation({ timingFunction: 'ease-in-out' })
        .height(height)
        // bug: step return void
        .step({ duration: props.duration })
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        .export()
    )
  }

  async function renderAnimation() {
    const rect = await querySelector(`#${elementGuid.value}`)
    const height = props.show ? rect.height! : 0
    animating.value = true

    animation.value = createAnimation(height)

    await delay(props.duration)

    animating.value = false
  }

  watch(() => props.show, renderAnimation, { immediate: true })

  return {
    className,
    clickHandler,
    elementGuid,
    animation,
  }
}
