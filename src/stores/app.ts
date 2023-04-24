import { pinia } from '~/modules/pinia'

interface MenuButtonBoundingClientRect {
  width: number
  height: number
  top: number
  left: number
  right: number
  bottom: number
}

export const useAppStore = defineStore(
  'app',
  () => {
    const darkMode = ref(false)
    const statusBarHeight = ref(0)
    const menuButtonBounding = ref<MenuButtonBoundingClientRect>()
    const customBarHeight = computed(
      () => !menuButtonBounding.value
        ? 0
        : menuButtonBounding.value.bottom + menuButtonBounding.value.top - statusBarHeight.value)

    return {
      darkMode,
      statusBarHeight,
      customBarHeight,
      menuButtonBounding,
    }
  })

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(pinia)
}
