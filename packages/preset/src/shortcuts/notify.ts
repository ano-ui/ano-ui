export const notifyShortcuts: Record<string, string> = {
  'a-notify-base': `flex justify-center gap2 items-center inline-flex box-border py2 px3 
  absolute z-150 a-transition rounded-lg !animate-duration-200`,
  'a-notify-position-default': 'top-0 left-0 right-0 rounded-none animate-slide-in-down',
  'a-notify-position-top': 'top-5 left-5 right-5 animate-slide-in-down',
  'a-notify-position-top-left': 'top-5 left-5 animate-slide-in-left',
  'a-notify-position-top-right': 'top-5 right-5 animate-slide-in-right',
  'a-notify-position-bottom': 'bottom-5 left-5 right-5 animate-slide-in-up mb-safe',
  'a-notify-position-bottom-left': 'bottom-5 left-5 animate-slide-in-left mb-safe',
  'a-notify-position-bottom-right': 'bottom-5 right-5 animate-slide-in-right mb-safe',
}
