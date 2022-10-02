export const baseShortcuts: Record<string, string> = {
  'a-bg-base': 'bg-white dark:bg-[#222]',
  'a-border-base': 'border-gray-400/50',
  'a-border-300': 'border-gray-400/40',
  'a-border-200': 'border-gray-400/25',
  'a-transition': 'transition-all duration-200',
  'a-solid': 'bg-context border-context c-white',
  'a-light': `!shadow-transparent bg-context:12 hover-bg-context active-bg-context:64
                   !border-context !hover-border-context !active-border-context:64
                   !c-context !hover-c-white !active-c-white`,
  'a-text': `!shadow-transparent !bg-transparent !hover-bg-context:32 !active-bg-context:12
                   !border-transparent
                   !c-context`,
  'a-disabled': 'op-70',
}
