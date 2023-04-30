import { createPromiser, toArray } from '../utils'

export type QuerySelectorType = 'boundingClientRect' | 'context' | 'fields' | 'node' | 'scrollOffset'
export type QuerySelectorMode = 'select' | 'selectAll'
export type QuerySelectorResponse<M extends QuerySelectorMode, V = UniApp.NodeInfo> = M extends 'selectAll' ? V[] : V

export interface QuerySelectorNodeInfo<M extends QuerySelectorMode = 'select'> {
  (selector: string): Promise<QuerySelectorResponse<M>>
}
export interface QuerySelectorNodeFields<M extends QuerySelectorMode = 'select'> {
  (selector: string, fields?: UniApp.NodeField): Promise<QuerySelectorResponse<M>>
}

export interface QuerySelectorNode<M extends QuerySelectorMode = 'select'> {
  (selector: string): Promise<QuerySelectorResponse<M, any>>
}

export function createQuerySelector<M extends QuerySelectorMode = 'select'>(type: 'boundingClientRect', mode?: M): QuerySelectorNodeInfo<M>
export function createQuerySelector<M extends QuerySelectorMode = 'select'>(type: 'context', mode?: M): QuerySelectorNodeInfo<M>
export function createQuerySelector<M extends QuerySelectorMode = 'select'>(type: 'scrollOffset', mode?: M): QuerySelectorNodeInfo<M>
export function createQuerySelector<M extends QuerySelectorMode = 'select'>(type: 'fields', mode?: M): QuerySelectorNodeFields<M>
export function createQuerySelector<M extends QuerySelectorMode = 'select'>(type: 'node', mode?: M): QuerySelectorNode<M>
export function createQuerySelector(type: QuerySelectorType, mode: QuerySelectorMode = 'select'): any {
  const ready = createPromiser()
  const instance = getCurrentInstance()

  function query(selector: string, fields: UniApp.NodeField = {}) {
    const promise = createPromiser()

    function resolve(value: UniApp.NodeInfo | UniApp.NodeInfo[]) {
      const result = toArray(value)
      const resolved = mode === 'select' ? result[0] : result
      result.length ? promise.resolve(resolved) : promise.reject()
    }

    ready.then(() => {
      const query = uni.createSelectorQuery()
        .in(instance)[mode](selector)
      if (type === 'fields')
        query.fields(fields, resolve).exec()
      else
        query[type](resolve).exec()
    })

    return promise
  }

  onMounted(ready.resolve)

  return query
}
