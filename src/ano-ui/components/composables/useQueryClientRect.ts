import { getCurrentInstance } from 'vue'
import { createPromiser, toArray } from '../utils'

export function useQueryClientRect() {
  const instance = getCurrentInstance()
  const ready = createPromiser()

  function useEffectQuery(
    selector: string,
    all: boolean,
    callback: (result: UniApp.NodeInfo[]) => void,
  ) {
    ready.then(() => {
      uni.createSelectorQuery()
        .in(instance)[all ? 'selectAll' : 'select'](selector)
        .boundingClientRect(result => callback(toArray(result)))
        .exec()
    })
  }

  function querySelector(selector: string) {
    const promise = createPromiser<UniApp.NodeInfo>()
    useEffectQuery(selector, false, ([resolved]) => {
      resolved ? promise.resolve(resolved) : promise.reject()
    })
    return promise
  }

  function querySelectorAll(selector: string) {
    const promise = createPromiser<UniApp.NodeInfo[]>()
    useEffectQuery(selector, true, (resolved) => {
      resolved.length ? promise.resolve(resolved) : promise.reject()
    })
    return promise
  }

  onMounted(ready.resolve)

  return { querySelector, querySelectorAll }
}
