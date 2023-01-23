export const buttonShortcuts: Record<string, string> = {
  'a-button-wrapper-base':
    `relative box-border inline-block m-0 rounded-lg after:display-none a-transition
    text-center overflow-visible bg-clip-padding
     before:content-none before:absolute before:w-full before:h-full before:left-50% before:top-50% before:-translate-50% 
     before:border-style-inherit before:border-width-inherit before:border-rd-inherit before:border-black before:bg-black before:op0`,
  'a-button-content-base': 'flex justify-center items-center h-full',
  'a-button-hover': 'before:op10',
  'a-button-disabled': 'before:display-none op50',
  'a-button-text-hover': '!text-op70',
  'a-button-mini': 'h-7.5 px2.5 text-xs',
  'a-button-small': 'h-9.5 px3.5 text-sm',
  'a-button-normal': 'h-11 px4.5 text-base',
  'a-button-large': 'h-12.5 px5.5 text-lg',
  'a-button-icon': '!p2 aspect-square',
}
