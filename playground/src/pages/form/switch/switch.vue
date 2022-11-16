<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(0)
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Color
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked" />
        <ASwitch v-model="checked" color="success" />
        <ASwitch v-model="checked" color="info" />
        <ASwitch v-model="checked" color="warning" />
        <ASwitch v-model="checked" color="danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked2" :active-value="1" :inactive-value="0">
          Default
        </ASwitch>
        <ASwitch color="success" size="xs">
          Mini
        </ASwitch>
        <ASwitch color="info" size="sm">
          Small
        </ASwitch>
        <ASwitch color="warning" size="md">
          Medium
        </ASwitch>
        <ASwitch color="danger" size="lg">
          Large
        </ASwitch>
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch variant="solid" />
        <ASwitch color="success" variant="outline" />
        <ASwitch color="info" variant="ghost" />
        <ASwitch color="warning" variant="light" />
        <ASwitch color="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch loading />
        <ASwitch color="success" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch icon="i-carbon-palm-tree" />
        <ASwitch custom-icon>
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ASwitch>
      </div>
    </div>
  </UBasePage>
</template>
