<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(0)
const checked3 = ref('y')
const disChecked = ref(true)
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        自定义类型
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ASwitch v-model="checked" />
        <ASwitch v-model="checked" type="info" />
        <ASwitch v-model="checked" type="success" />
        <ASwitch v-model="checked" type="warning" />
        <ASwitch v-model="checked" type="danger" />
      </div>

      <div class="p-4">
        大小
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ASwitch v-model="checked" type="primary" size="mini" />
        <ASwitch v-model="checked" type="info" size="small" />
        <ASwitch v-model="checked" type="success" size="normal" />
        <ASwitch v-model="checked" type="warning" size="large" />
        <ASwitch v-model="checked" type="danger" />
      </div>
      <div class="p-4">
        状态
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ASwitch :model-value="true" loading />
        <ASwitch type="success" disabled />
        <ASwitch v-model="disChecked" type="success" disabled />
      </div>
      <div class="p-4">
        自定义
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ASwitch v-model="checked2" :active-value="1" active-label="1" :inactive-value="0" inactive-label="0" />
        <ASwitch v-model="checked3" active-value="y" active-label="y" inactive-value="n" inactive-label="n" />
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
