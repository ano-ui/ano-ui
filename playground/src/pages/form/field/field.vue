<script setup lang="ts">
import { ref, watch } from 'vue'

const pwd = ref('')

watch(pwd, (val) => {
  // eslint-disable-next-line no-console
  console.log(val)
})
const showClearText = ref('abc')
const wordLimitText = ref('abc')
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Type
      </div>
      <ACellGroup inset divider>
        <AField label="Text" placeholder="Text" />
        <AField label="Number" type="number" placeholder="Number" />
        <AField label="Digit" type="digit" placeholder="Digit" />
        <AField v-model="pwd" label="Password" type="password" placeholder="Password" />
        <AField label="Textarea" type="textarea" show-clear placeholder="Textarea" />
      </ACellGroup>
      <div class="p-4">
        Status
      </div>
      <ACellGroup inset divider>
        <AField label="Disabled" disabled placeholder="Disabled" />
      </ACellGroup>
      <div class="p-4">
        Custom
      </div>
      <ACellGroup inset divider>
        <AField v-model="showClearText" label="Clear" show-clear placeholder="Clear Icon" />
        <AField label="Icon" icon="i-carbon-palm-tree" placeholder="Icon" />
        <AField label="Prefix Slot" placeholder="Prefix Slot">
          <template #prefix>
            <div>https://</div>
          </template>
        </AField>
        <AField label="Slot" placeholder="Slot Icon">
          <template #icon>
            <div class="i-carbon-send-alt-filled" />
          </template>
        </AField>
        <AField label="Text" ccc="text-red" placeholder="Red Text" />
        <AField v-model="wordLimitText" label="Limit" :maxlength="10" show-word-limit placeholder="Word Limit" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
