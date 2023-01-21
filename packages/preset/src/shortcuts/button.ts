export const buttonShortcuts: Record<string, string> = {
  'a-button-wrapper-base':
    `relative box-border inline-block m-0 rounded-lg border border-solid after:display-none a-transition
     dark:bg-op80 dark:border-op80 dark:text-op80 !leading-none text-center overflow-visible bg-clip-padding
     before:content-none before:absolute before:w-full before:h-full before:left-50% before:top-50% before:-translate-50% 
     before:border-style-inherit before:border-width-inherit before:border-rd-inherit before:border-black before:bg-black before:op0`,
  'a-button-content-base': 'flex justify-center items-center h-full',
  'a-button-hover': 'before:op10',
  'a-button-disabled': 'before:display-none op70',
  'a-button-text-hover': '!text-op70',
  'a-button-sm': 'h-8 min-w-10 text-sm',
  'a-button-md': 'h-9 min-w-10 text-base',
  'a-button-lg': 'h-10 min-w-10 text-lg',
  'a-button-xl': 'h-12 min-w-10 text-xl',
  'a-button-icon': '!p2 aspect-square',
}
