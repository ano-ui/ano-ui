import type { QuerySelectorNode, QuerySelectorNodeFields, QuerySelectorNodeInfo } from './createQuerySelector'
import { createQuerySelector } from './createQuerySelector'

export function useQuerySelector(type: 'boundingClientRect'): QuerySelectorNodeInfo
export function useQuerySelector(type: 'context'): QuerySelectorNodeInfo
export function useQuerySelector(type: 'scrollOffset'): QuerySelectorNodeInfo
export function useQuerySelector(type: 'fields'): QuerySelectorNodeFields
export function useQuerySelector(type: 'node'): QuerySelectorNode
export function useQuerySelector(...args: any[]): any {
  return createQuerySelector(args[0], 'select')
}
