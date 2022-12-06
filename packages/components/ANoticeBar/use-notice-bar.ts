import type { SetupContext } from 'vue'

import { CLOSE_EVENT } from '../constants'
import type { NoticeBarEmits, NoticeBarProps } from './notice-bar'

export const useTag = (
  props: NoticeBarProps,
  emit: SetupContext<NoticeBarEmits>['emit'],
) => {
  const handleClose = (etv: MouseEvent) => {
    emit(CLOSE_EVENT, etv)
  }

  return {
    handleClose,
  }
}
