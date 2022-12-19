import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CLOSE_EVENT, OPEN_EVENT } from '../constants'
import type { PopupEmits, PopupProps } from './popup'
import type { PopupOptions } from './types'

export const usePopup = (
  props: PopupProps,
  emit: SetupContext<PopupEmits>['emit'],
) => {
  const show = ref(props.show || false)
  const showValue = computed(() => props.show || show.value)

  const DEFAULT_OPTIONS: PopupOptions = {
    position: props?.position ?? 'center',
  }

  const popupStatus = ref<PopupOptions>({ ...DEFAULT_OPTIONS })

  const onOpen = () => {
    show.value = true
    emit(OPEN_EVENT)
  }

  const showPopup = (options: PopupOptions) => {
    Object.assign(popupStatus.value, DEFAULT_OPTIONS, options)
    onOpen()
  }

  const onClose = () => {
    show.value = false
    emit(CLOSE_EVENT)
  }

  return {
    showValue,
    popupStatus,

    onOpen,
    showPopup,
    onClose,
  }
}
