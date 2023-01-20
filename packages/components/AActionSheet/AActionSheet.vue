<script setup lang='ts'>
import AOverlay from '../AOverlay/AOverlay.vue'
import ATransition from '../ATransition/ATransition.vue'
import { actionSheetEmits, actionSheetProps } from './action-sheet'
import { useActionSheet } from './use-action-sheet'

const props = defineProps(actionSheetProps)
const emit = defineEmits(actionSheetEmits)
const { showValue } = useActionSheet(props, emit)
</script>

<template>
  <div>
    <AOverlay :show="showValue" :duration="duration" @click="showValue = false" />
    <ATransition
      :show="showValue" name="slide-up" :duration="duration"
      :cc="['a-action-sheet-wrapper-base', { 'rounded-t-2xl': round }, cc]" :style="cs" @click.stop
    >
      <div :class="ccc" :style="ccs">
        <template v-for="action, _idx of actions" :key="_idx">
          <div class="a-action-sheet-content-base" :class="action.className" hover-class="a-action-sheet-action-hover">
            {{ action.name }}
          </div>
        </template>
        <slot />
      </div>
    </ATransition>
  </div>
</template>

<style scoped>
</style>
