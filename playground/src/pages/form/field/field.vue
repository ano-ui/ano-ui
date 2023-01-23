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
        <AField placeholder="Text" />
        <AField type="number" placeholder="Number" />
        <AField type="digit" placeholder="Digit" />
        <AField v-model="pwd" type="password" placeholder="Password" />
        <AField type="textarea" show-clear placeholder="Textarea" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ col gap2">
        <AField placeholder="Extra Mini" size="xs" />
        <AField placeholder="Mini" size="sm" />
        <AField placeholder="Small" size="md" />
        <AField placeholder="Medium" size="lg" />
        <AField placeholder="Large" size="xl" />
      </div>

      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ col gap2">
        <AField disabled placeholder="Disabled" />
      </div>

      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ col gap2">
        <AField placeholder="Border None" :border="false" />
        <AField show-clear placeholder="Clear Icon" />
        <AField icon="i-carbon-palm-tree" placeholder="Prefix Icon" />
        <AField placeholder="Prefix Slot Icon">
          <template #icon>
            <div class="i-carbon-send-alt-filled" />
          </template>
        </AField>
        <AField suffix-icon="i-carbon-palm-tree" placeholder="Suffix Icon" />
        <AField placeholder="Suffix Slot">
          <template #prefix>
            <div>https://</div>
          </template>
        </AField>
        <AField icon="i-carbon-search" placeholder="Suffix Icon">
          <template #suffix>
            <AButton size="xs">
              Search
            </AButton>
          </template>
        </AField>
        <AField cc="rounded-full px4" placeholder="Custom Rounded" />
        <AField ccc="text-red" placeholder="Custom Input Style" />
        <AField :maxlength="10" show-word-limit placeholder="Word Limit" />
      </div>
    </div>
  </UBasePage>
</template>
