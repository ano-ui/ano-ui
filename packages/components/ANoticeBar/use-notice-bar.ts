import type { SetupContext } from 'vue'

import { CLOSE_EVENT } from '../constants'
import type { NoticeBarEmits, NoticeBarProps } from './notice-bar'

export const useNoticeBar = (
  props: NoticeBarProps,
  emit: SetupContext<NoticeBarEmits>['emit'],
) => {
  const handleClose = () => {
    emit(CLOSE_EVENT)
  }

  return {
    handleClose,
  }
}
