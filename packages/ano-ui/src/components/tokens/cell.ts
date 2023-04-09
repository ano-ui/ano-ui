import type { InjectionKey } from 'vue'
import type { CellGroupProps } from '../ACellGroup/cell-group'

export interface CellGroupContext extends CellGroupProps {
}

export const cellGroupKey: InjectionKey<CellGroupContext> = Symbol('cellGroupKey')
