<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(0)
const checked3 = ref('yes')
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
        <ASwitch v-model="checked" color="primary" size="xs">
          Extra Mini
        </ASwitch>
        <ASwitch v-model="checked" color="success" size="sm">
          Mini
        </ASwitch>
        <ASwitch v-model="checked" color="info" size="md">
          Small
        </ASwitch>
        <ASwitch v-model="checked" color="warning" size="lg">
          Medium
        </ASwitch>
        <ASwitch v-model="checked" color="danger" size="xl">
          Large
        </ASwitch>
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked" variant="solid" />
        <ASwitch v-model="checked" color="success" variant="outline" />
        <ASwitch v-model="checked" color="info" variant="ghost" />
        <ASwitch v-model="checked" color="warning" variant="light" />
        <ASwitch v-model="checked" color="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch :model-value="true" loading />
        <ASwitch v-model="checked" color="success" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked2" :active-value="1" active-label="1" :inactive-value="0" inactive-label="0" />
        <ASwitch v-model="checked3" active-value="yes" active-label="yes" inactive-value="no" inactive-label="no" />
        <ASwitch v-model="checked" :show-icon="false">
          <template #active>
            <div class="i-carbon-checkmark" />
          </template>
          <template #inactive>
            <div class="i-carbon-close" />
          </template>
        </ASwitch>
        <ASwitch v-model="checked" custom-icon>
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ASwitch>
      </div>
    </div>
  </UBasePage>
</template>
