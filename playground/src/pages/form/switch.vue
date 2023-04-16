<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(0)
const checked3 = ref('yes')
const disChecked = ref(true)
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Color
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked" />
        <ASwitch v-model="checked" type="success" />
        <ASwitch v-model="checked" type="warning" />
        <ASwitch v-model="checked" type="danger" />
      </div>

      <div class="p-4">
        Size
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked" type="primary" size="mini" />
        <ASwitch v-model="checked" type="success" size="small" />
        <ASwitch v-model="checked" type="warning" size="normal" />
        <ASwitch v-model="checked" type="danger" size="large" />
      </div>
      <div class="p-4">
        Variant
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked" variant="solid" />
        <ASwitch v-model="checked" type="success" variant="outline" />
        <ASwitch v-model="checked" type="warning" variant="ghost" />
        <ASwitch v-model="checked" type="danger" variant="light" />
      </div>
      <div class="p-4">
        Status
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ASwitch :model-value="true" loading />
        <ASwitch type="success" disabled />
        <ASwitch v-model="disChecked" type="success" disabled />
      </div>
      <div class="p-4">
        Custom
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked2" :active-value="1" active-label="1" :inactive-value="0" inactive-label="0" />
        <ASwitch v-model="checked3" active-value="yes" active-label="yes" inactive-value="no" inactive-label="no" />
        <ASwitch v-model="checked" :show-icon="false">
          <template #active>
            <div class="i-tabler-check" />
          </template>
          <template #inactive>
            <div class="i-tabler-x" />
          </template>
        </ASwitch>
        <ASwitch v-model="checked" custom-icon>
          <template #icon>
            <div class="i-tabler-carrot" />
          </template>
        </ASwitch>
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Switch 开关
</route>
