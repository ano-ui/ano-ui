<script setup lang="ts">
import ACell from '../ACell/ACell.vue'
import ACollapseTransition from '../ACollapseTransition/ACollapseTransition.vue'
import { collapseItemProps } from './collapse-item'
import { useCollapseItem } from './use-collapse-item'

const props = defineProps(collapseItemProps)

const { isActive, handleHeaderClick, arrow } = useCollapseItem(props)
</script>

<template>
  <div :class="[customClass]" :style="customStyle">
    <ACell :disabled="disabled" :arrow="arrow" @click="handleHeaderClick">
      <template #title>
        <div class="flex items-center gap-1">
          <template v-if="$slots.icon || icon">
            <slot name="icon">
              <div v-if="icon" :class="icon" />
            </slot>
          </template>
          <slot name="title">
            {{ title }}
          </slot>
        </div>
      </template>

      <template #label>
        <slot name="label">
          <div v-if="label" class="text-sm a-text-color-2">
            {{ label }}
          </div>
        </slot>
      </template>

      <template #value>
        <slot name="value">
          <div v-if="value" class="a-text-color-2" :class="[title ? 'text-right' : 'text-left']">
            {{ value }}
          </div>
        </slot>
      </template>
    </ACell>

    <ACollapseTransition :show="isActive">
      <div class="px-4 py-3 a-bg-2 a-text-color-2">
        <slot />
      </div>
    </ACollapseTransition>
  </div>
</template>
