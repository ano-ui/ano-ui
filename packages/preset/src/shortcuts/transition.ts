export const transitionShortcuts: Record<string, string> = {
  'a-transition-base': 'a-transition',
  // fade
  'a-transition-fade-enter': 'op-0',
  'a-transition-fade-enter-to': 'op-100',
  'a-transition-fade-leave': 'op-100',
  'a-transition-fade-leave-to': 'op-0',
  // fade-up
  'a-transition-fade-up-enter': 'op-0 translate-y-100%',
  'a-transition-fade-up-enter-to': 'op-100 translate-y-0',
  'a-transition-fade-up-leave': 'op-100 translate-y-0',
  'a-transition-fade-up-leave-to': 'op-0 translate-y-100%',
  // fade-down
  'a-transition-fade-down-enter': 'op-0 -translate-y-100%',
  'a-transition-fade-down-enter-to': 'op-100 translate-y-0',
  'a-transition-fade-down-leave': 'op-100 translate-y-0',
  'a-transition-fade-down-leave-to': 'op-0 -translate-y-100%',
  // fade-left
  'a-transition-fade-left-enter': 'op-0 -translate-x-100%',
  'a-transition-fade-left-enter-to': 'op-100 translate-x-0',
  'a-transition-fade-left-leave': 'op-100 translate-x-0',
  'a-transition-fade-left-leave-to': 'op-0 -translate-x-100%',
  // fade-right
  'a-transition-fade-right-enter': 'op-0 translate-x-100%',
  'a-transition-fade-right-enter-to': 'op-100 translate-x-0',
  'a-transition-fade-right-leave': 'op-100 translate-x-0',
  'a-transition-fade-right-leave-to': 'op-0 translate-x-100%',
  // slide-up
  'a-transition-slide-up-enter': 'translate-y-100%',
  'a-transition-slide-up-enter-to': 'translate-y-0',
  'a-transition-slide-up-leave': 'translate-y-0',
  'a-transition-slide-up-leave-to': 'translate-y-100%',
  // slide-down
  'a-transition-slide-down-enter': '-translate-y-100%',
  'a-transition-slide-down-enter-to': 'translate-y-0',
  'a-transition-slide-down-leave': 'translate-y-0',
  'a-transition-slide-down-leave-to': '-translate-y-100%',
  // slide-left
  'a-transition-slide-left-enter': '-translate-x-100%',
  'a-transition-slide-left-enter-to': 'translate-x-0',
  'a-transition-slide-left-leave': 'translate-x-0',
  'a-transition-slide-left-leave-to': '-translate-x-100%',
  // slide-right
  'a-transition-slide-right-enter': 'translate-x-100%',
  'a-transition-slide-right-enter-to': 'translate-x-0',
  'a-transition-slide-right-leave': 'translate-x-0',
  'a-transition-slide-right-leave-to': 'translate-x-100%',
  // zoom
  'a-transition-zoom-enter': 'scale-95',
  'a-transition-zoom-enter-to': 'scale-100',
  'a-transition-zoom-leave': 'scale-100',
  'a-transition-zoom-leave-to': 'scale-95',
  // fade-zoom
  'a-transition-fade-zoom-enter': 'op-0 scale-95',
  'a-transition-fade-zoom-enter-to': 'op-100 scale-100',
  'a-transition-fade-zoom-leave': 'op-100 scale-100',
  'a-transition-fade-zoom-leave-to': 'op-0 scale-95',
}
