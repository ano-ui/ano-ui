<script setup lang="ts">
import { ref, watch } from 'vue'

const pwd = ref('password')

watch(pwd, (val) => {
  // eslint-disable-next-line no-console
  console.log(val)
})
</script>

<template>
  <div class="bg-white p-2 pb-safe">
    <div class="p-2">
      Type
    </div>
    <div p-2 flex="~ col gap2">
      <AInput placeholder="please input text" />
      <AInput type="number" color="success" placeholder="please input number" />
      <AInput type="digit" color="info" placeholder="please input digit" />
      <AInput v-model="pwd" type="password" color="warning" placeholder="please input password" />
      <AInput type="textarea" color="danger" placeholder="please input textarea" />
    </div>

    <div class="p-2">
      Size
    </div>
    <div p-2 flex="~ col gap2">
      <AInput placeholder="please input text" />
      <AInput placeholder="please input text" size="xs" />
      <AInput placeholder="please input text" size="sm" />
      <AInput placeholder="please input text" size="md" />
      <AInput placeholder="please input text" size="lg" />
    </div>
  </div>
</template>
