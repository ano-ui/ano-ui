<script setup lang="ts">
</script>

<template>
  <div class="bg-white p-2 pb-safe">
    <div class="p-2">
      Type
    </div>
    <div p-2 flex="~ col gap2">
      <AInput>
        Primary
      </AInput>
      <AInput type="success">
        Success
      </AInput>
      <AInput type="info">
        Info
      </AInput>
      <AInput type="warning">
        Warning
      </AInput>
      <AInput type="danger">
        Danger
      </AInput>
    </div>
  </div>
</template>
