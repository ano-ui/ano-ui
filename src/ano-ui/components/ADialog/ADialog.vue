<script setup lang='ts'>
import AOverlay from '../AOverlay/AOverlay.vue'
import ATransition from '../ATransition/ATransition.vue'
import AButton from '../AButton/AButton.vue'

import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './use-dialog'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const { showValue, dialogStatus, showDialog, onConfirm, onCancel } = useDialog(props, emit)

defineExpose({ showDialog })
</script>

<template>
  <AOverlay :show="showValue" :duration="300" />
  <ATransition :show="showValue" name="fade" :duration="300" :cc="['a-dialog-wrapper-base']" @click.stop>
    <div class="a-dialog-content-base" :class="[cc]" :style="cs">
      <div class="p6">
        <div v-if="dialogStatus?.title" class="pb2 text-xl">
          {{ dialogStatus.title }}
        </div>
        <div v-if="dialogStatus?.message" class="text-darkText">
          {{ dialogStatus.message }}
        </div>
      </div>
      <div class="a-dialog-action-base">
        <template v-if="dialogStatus?.showCancelButton">
          <AButton class="flex-1" type="danger" variant="text" square block @click.stop="onCancel">
            {{ dialogStatus.cancelButtonText || 'Cancel' }}
          </AButton>
        </template>
        <template v-if="dialogStatus?.showConfirmButton">
          <AButton class="flex-1" variant="text" square block @click.stop="onConfirm">
            {{ dialogStatus.confirmButtonText || 'Confirm' }}
          </AButton>
        </template>
      </div>
    </div>
  </ATransition>
</template>

<style scoped>
.a-dialog-wrapper-base {
  --at-apply: 'absolute min-w-80% min-h-20% z-200 left-50% top-50% -translate-50%'
}

.a-dialog-content-base {
  --at-apply: 'rounded-lg a-transition a-bg-2 text-center overflow-hidden'
}

.a-dialog-action-base {
  --at-apply: 'flex justify-center items-center border-t border-t-solid border-t-gray-400/25'
}

.a-dialog-disabled {
  --at-apply: '!bg-op70 !border-op0 op70'
}
</style>
