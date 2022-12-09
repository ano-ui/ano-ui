import type { SetupContext } from 'vue'

import { CLOSE_EVENT } from '../constants'
import type { NoticeBarEmits, NoticeBarProps } from './notice-bar'

export const useNoticeBar = (
  props: NoticeBarProps,
  emit: SetupContext<NoticeBarEmits>['emit'],
) => {
  const handleClose = (evt: MouseEvent) => {
    emit(CLOSE_EVENT, evt)
  }

  return {
    handleClose,
  }
}
