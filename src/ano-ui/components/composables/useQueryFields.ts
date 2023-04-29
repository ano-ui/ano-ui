import { getCurrentInstance } from 'vue'
import { createPromiser, toArray } from '../utils'

export function useQueryFields() {
  const instance = getCurrentInstance()
  const ready = createPromiser()

  function useEffectQuery(
    selector: string,
    fields: UniApp.NodeField,
    all: boolean,
    callback: (result: UniApp.NodeInfo[]) => void,
  ) {
    uni.createSelectorQuery()
      .in(instance)[all ? 'selectAll' : 'select'](selector)
      .fields(fields, result => callback(toArray(result)))
      .exec()
  }

  function querySelector(selector: string, fields: UniApp.NodeField) {
    const promise = createPromiser<UniApp.NodeInfo>()
    useEffectQuery(selector, fields, false, ([resolved]) => {
      resolved ? promise.resolve(resolved) : promise.reject()
    })
    return promise
  }

  function querySelectorAll(selector: string, fields: UniApp.NodeField) {
    const promise = createPromiser<UniApp.NodeInfo[]>()
    useEffectQuery(selector, fields, true, (resolved) => {
      resolved.length ? promise.resolve(resolved) : promise.reject()
    })
    return promise
  }

  onMounted(ready.resolve)

  return { querySelector, querySelectorAll }
}
