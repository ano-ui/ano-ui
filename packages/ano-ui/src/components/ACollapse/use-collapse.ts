import type { SetupContext } from 'vue'
import { provide, ref, watch } from 'vue'
import { toArray } from '../utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { collapseContextKey } from '../tokens/collapse'
import type { CollapseEmits, CollapseProps } from './collapse'
import type { CollapseActiveName } from './types'

export function useCollapse(props: CollapseProps, emit: SetupContext<CollapseEmits>['emit']) {
  const activeNames = ref(toArray(props.modelValue))

  function setActiveNames(_activeNames: CollapseActiveName[]) {
    activeNames.value = _activeNames
    const value = props.accordion ? activeNames.value[0] : activeNames.value
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }

  function handleItemClick(name: CollapseActiveName) {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name])
    }
    else {
      const _activeNames = [...activeNames.value]
      const index = _activeNames.indexOf(name)

      if (index > -1)
        _activeNames.splice(index, 1)
      else
        _activeNames.push(name)

      setActiveNames(_activeNames)
    }
  }

  watch(
    () => props.modelValue,
    () => (activeNames.value = toArray(props.modelValue)),
    { deep: true },
  )

  provide(collapseContextKey, {
    activeNames,
    handleItemClick,
  })

  return {
    activeNames,
    setActiveNames,
  }
}
