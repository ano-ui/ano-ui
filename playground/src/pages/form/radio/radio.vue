<script setup lang="ts">
const checked = ref(false)
const statusChecked1 = ref(false)
const statusChecked2 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const groupChecked = ref('a')
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Color
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ARadio v-model="checked" />
        <ARadio v-model="checked" color="success" />
        <ARadio v-model="checked" color="info" />
        <ARadio v-model="checked" color="warning" />
        <ARadio v-model="checked" color="danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ARadio v-model="checked" color="primary" size="xs" label="Extra Mini" />
        <ARadio v-model="checked" color="success" size="sm" label="Mini" />
        <ARadio v-model="checked" color="info" size="md" label="Small" />
        <ARadio v-model="checked" color="warning" size="lg" label="Medium" />
        <ARadio v-model="checked" color="danger" size="xl" label="Large" />
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ARadio v-model="checked" variant="solid" />
        <ARadio v-model="checked" color="success" variant="outline" />
        <ARadio v-model="checked" color="info" variant="ghost" />
        <ARadio v-model="checked" color="warning" variant="light" />
        <ARadio v-model="checked" color="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ARadio v-model="statusChecked1" loading />
        <ARadio v-model="statusChecked2" color="success" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ARadio v-model="checked2" :value="1" />
        <ARadio v-model="checked3" custom-icon value="yes">
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ARadio>
        <ARadio v-model="checked3">
          <template #label>
            <div class="i-carbon-send-alt" />
          </template>
        </ARadio>
      </div>
      <div class="p-2">
        Radio Group{{ groupChecked }}
      </div>
      <div p-2>
        <ARadioGroup v-model="groupChecked">
          <ARadio value="a" label="A" />
          <ARadio value="b" label="B" />
          <ARadio value="c" label="C" />
        </ARadioGroup>
      </div>
    </div>
  </UBasePage>
</template>
