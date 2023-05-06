<script setup lang="ts">
import ACell from '../ACell/ACell.vue'
import ACollapseTransition from '../ACollapseTransition/ACollapseTransition.vue'
import { aCollapseItemEmits, aCollapseItemProps } from './a-collapse-item'
import { useACollapseItem } from './use-a-collapse-item'

const props = defineProps(aCollapseItemProps)
const emit = defineEmits(aCollapseItemEmits)

const { className, clickHandler, clickOpenCollapse, arrow, expanded } = useACollapseItem(props, emit)
</script>

<template>
  <div :class="[className, cc]" :style="cs" @click="clickHandler">
    <ACell
      :disabled="disabled" :title="title" :label="label" :value="value" :icon="icon" :arrow="arrow"
      @click="clickOpenCollapse"
    >
      <template #title>
        <slot name="title" />
      </template>

      <template #icon>
        <slot name="icon" />
      </template>
      <template #value>
        <slot name="value" />
      </template>
      <template #label>
        <slot name="label" />
      </template>
    </ACell>

    <ACollapseTransition :show="expanded">
      <ACell>
        <template #title>
          <slot />
        </template>
      </ACell>
    </ACollapseTransition>
  </div>
</template>
