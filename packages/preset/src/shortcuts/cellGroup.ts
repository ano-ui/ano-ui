export const cellGroupShortcuts: Record<string, string> = {
  'a-cell-group-base': '[&>a-cell>view]:rounded-none [&>a-cell:last-child>view]:border-none',
  'a-cell-group-card': 'rounded-lg [&>a-cell:first-child>view]:rounded-t-lg [&>a-cell:last-child>view]:rounded-b-lg',
  'a-cell-group-divider': '[&>a-cell>view]:border-b-gray-400/50 [&>a-cell:last-child>view]:border-b-transparent',
}
