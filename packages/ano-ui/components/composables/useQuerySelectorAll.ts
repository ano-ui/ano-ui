import type { QuerySelectorNode, QuerySelectorNodeFields, QuerySelectorNodeInfo } from './createQuerySelector'
import { createQuerySelector } from './createQuerySelector'

export function useQuerySelectorAll(type: 'boundingClientRect'): QuerySelectorNodeInfo<'selectAll'>
export function useQuerySelectorAll(type: 'context'): QuerySelectorNodeInfo<'selectAll'>
export function useQuerySelectorAll(type: 'scrollOffset'): QuerySelectorNodeInfo<'selectAll'>
export function useQuerySelectorAll(type: 'fields'): QuerySelectorNodeFields<'selectAll'>
export function useQuerySelectorAll(type: 'node'): QuerySelectorNode<'selectAll'>
export function useQuerySelectorAll(...args: any[]): any {
  return createQuerySelector(args[0], 'selectAll')
}
