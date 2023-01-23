export const cellGroupShortcuts: Record<string, string> = {
  'a-cell-group-inset': 'mx-4 rounded-lg overflow-hidden',
  'a-cell-group-divider': `[&_.a-cell-base]:after:absolute [&_.a-cell-base]:after:content-none [&_.a-cell-base]:after:bottom-0 [&_.a-cell-base]:after:left-4 [&_.a-cell-base]:after:right-4 
  [&_.a-cell-base]:after:border-b [&_.a-cell-base]:after:border-b-solid [&_.a-cell-base]:after:a-border [&_.a-cell-base]:after:scale-y-50% [&_a-cell:last-child_.a-cell-base]:after:display-none`,
  'a-cell-group-divider-h5': '[&_.a-cell-base:last-child]:after:display-none',
}
