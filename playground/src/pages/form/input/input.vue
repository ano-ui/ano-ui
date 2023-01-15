<script setup lang="ts">
import { ref, watch } from 'vue'

const pwd = ref('password')

watch(pwd, (val) => {
  // eslint-disable-next-line no-console
  console.log(val)
})
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Type
      </div>
      <div p-2 flex="~ col gap2">
        <AInput placeholder="Text" />
        <AInput type="number" placeholder="Number" />
        <AInput type="digit" placeholder="Digit" />
        <AInput v-model="pwd" type="password" placeholder="Password" />
        <AInput type="textarea" show-clear placeholder="Textarea" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ col gap2">
        <AInput placeholder="Extra Mini" size="xs" />
        <AInput placeholder="Mini" size="sm" />
        <AInput placeholder="Small" size="md" />
        <AInput placeholder="Medium" size="lg" />
        <AInput placeholder="Large" size="xl" />
      </div>

      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ col gap2">
        <AInput disabled placeholder="Disabled" />
      </div>

      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ col gap2">
        <AInput placeholder="Border None" :border="false" />
        <AInput show-clear placeholder="Clear Icon" />
        <AInput icon="i-carbon-palm-tree" placeholder="Prefix Icon" />
        <AInput placeholder="Prefix Slot Icon">
          <template #icon>
            <div class="i-carbon-send-alt-filled" />
          </template>
        </AInput>
        <AInput suffix-icon="i-carbon-palm-tree" placeholder="Suffix Icon" />
        <AInput placeholder="Suffix Slot">
          <template #prefix>
            <div>https://</div>
          </template>
        </AInput>
        <AInput icon="i-carbon-search" placeholder="Suffix Icon">
          <template #suffix>
            <AButton size="xs">
              Search
            </AButton>
          </template>
        </AInput>
        <AInput cc="rounded-full px4" placeholder="Custom Rounded" />
        <AInput ccc="text-red" placeholder="Custom Input Style" />
        <AInput :maxlength="10" show-word-limit placeholder="Word Limit" />
      </div>
    </div>
  </UBasePage>
</template>
