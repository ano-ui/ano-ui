import { computed } from 'vue'
import { isNumber } from '../utils'
import type { BadgeProps } from './badge'

export function useBadge(props: BadgeProps) {
  const offsetStyle = computed(() => {
    const { offset } = props
    if (!offset)
      return { transform: 'translateX(-50%)' }
    const [x, y] = offset
    const resolvedOffsetX = typeof x === 'number' ? `${x}rpx` : x
    const resolvedOffsetY = typeof y === 'number' ? `${y}rpx` : y
    return {
      transform: `translate(calc(-50% + ${resolvedOffsetX}), ${resolvedOffsetY})`,
    }
  })

  const dotStyle = computed(() => {
    return { bottom: props.dot ? 'calc(100% - 8rpx)' : 'calc(100% - 18rpx)' }
  })

  const className = computed(() => {
    return [
      `a-badge-${props.type}`,
      props.dot ? 'a-badge-s-dot' : 'a-badge-s-default',
    ] as const
  })

  const style = computed(() => {
    return [offsetStyle, dotStyle]
  })

  const visible = computed(() => {
    return props.showZero || isNotZero(props.value)
  })

  const ltg = computed(() =>
    isNumber(props.value)
    && props.max
    && props.value >= props.max,
  )

  const content = computed(() => {
    return ltg.value ? `${props.max}+` : props.value
  })

  function isNotZero(value?: string | number) {
    return value !== 0 && value !== '0'
  }

  return {
    className,
    style,
    visible,
    content,
    offsetStyle,
    dotStyle,
  }
}
