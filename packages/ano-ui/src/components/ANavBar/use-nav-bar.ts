import type { CSSProperties, SetupContext } from 'vue'
import { computed, ref, useSlots } from 'vue'
import type { NavBarEmits, NavBarProps } from './nav-bar'

// @unocss-include

export function useNavBar(props: NavBarProps,
  emit: SetupContext<NavBarEmits>['emit']) {
  const systemInfo = uni.getSystemInfoSync()
  const navBarRef = ref<HTMLElement>()

  const statusBarHeight = systemInfo.statusBarHeight ?? 0

  const navBarHeight = computed(() => {
    const propsHeight = Number(props.height)
    let defaultHeight = 44
    // #ifdef MP
    if (props.fixed) {
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
      const menuHeight = menuButtonInfo.height
      const menuTop = menuButtonInfo.top
      defaultHeight = (menuTop - statusBarHeight) * 2 + menuHeight
    }
    // #endif
    return propsHeight || defaultHeight
  })

  const className = computed(() => {
    const { fixed, border } = props

    return [
      {
        'a-nav-bar-fixed': fixed,
        'a-hairline-bottom': border,
      },
    ]
  })

  const clickableClassName = computed(() => {
    const { clickable } = props
    let className = ''
    // #ifdef H5
    className = clickable ? 'cursor-pointer a-nav-bar-clickable-hover-h5' : ''
    // #endif
    return className
  })

  const navBarStyle = computed(() => {
    return props.fixed
      ? {
          paddingTop: `${statusBarHeight}px`,
        }
      : {}
  })

  const navBarContentStyle = computed(() => {
    return {
      height: `${navBarHeight.value}px`,
    }
  })

  const placeholderStyle = computed(() => {
    return { width: '100%', height: `${navBarHeight.value + statusBarHeight}px` }
  })

  const zIndexStyle = computed<CSSProperties>(() => {
    return props.zIndex
      ? {
          zIndex: Number(props.zIndex),
        }
      : {}
  })

  const slots = useSlots()

  const hasLeft = computed(() => props.leftArrow || props.leftText || slots.left)
  const hasRight = computed(() => props.rightText || slots.right)

  const clickLeftHandler = (evt: MouseEvent) => {
    emit('clickLeft', evt)
  }

  const clickRightHandler = (evt: MouseEvent) => {
    emit('clickRight', evt)
  }

  return {
    navBarRef,

    hasLeft,
    hasRight,

    className,
    clickableClassName,
    zIndexStyle,
    placeholderStyle,
    navBarStyle,
    navBarContentStyle,

    navBarHeight,
    statusBarHeight,

    clickLeftHandler,
    clickRightHandler,
  }
}
