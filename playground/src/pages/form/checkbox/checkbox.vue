<script setup lang="ts">
const checked = ref(false)
const statusChecked1 = ref(false)
const statusChecked2 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const groupChecked = ref(['a', 'b'])
const groupChecked2 = ref(['a', 'b'])
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Color
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked" />
        <ACheckbox v-model="checked" color="success" />
        <ACheckbox v-model="checked" color="info" />
        <ACheckbox v-model="checked" color="warning" />
        <ACheckbox v-model="checked" color="danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked" color="primary" size="xs" label="Extra Mini" />
        <ACheckbox v-model="checked" color="success" size="sm" label="Mini" />
        <ACheckbox v-model="checked" color="info" size="md" label="Small" />
        <ACheckbox v-model="checked" color="warning" size="lg" label="Medium" />
        <ACheckbox v-model="checked" color="danger" size="xl" label="Large" />
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked" variant="solid" />
        <ACheckbox v-model="checked" color="success" variant="outline" />
        <ACheckbox v-model="checked" color="info" variant="ghost" />
        <ACheckbox v-model="checked" color="warning" variant="light" />
        <ACheckbox v-model="checked" color="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="statusChecked1" loading />
        <ACheckbox v-model="statusChecked2" color="success" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked2" :value="1" />
        <ACheckbox v-model="checked3" custom-icon value="yes">
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ACheckbox>
        <ACheckbox v-model="checked3">
          <template #label>
            <div class="i-carbon-send-alt" />
          </template>
        </ACheckbox>
      </div>
      <div class="p-2">
        Checkbox Group{{ groupChecked }}
      </div>
      <div p-2>
        <ACheckboxGroup v-model="groupChecked">
          <ACheckbox value="a" label="A" />
          <ACheckbox value="b" label="B" />
          <ACheckbox value="c" label="C" />
        </ACheckboxGroup>
      </div>

      <div class="p-2">
        Checkbox Group Min Max{{ groupChecked2 }}
      </div>
      <div p-2>
        <ACheckboxGroup v-model="groupChecked2" :min="1" :max="2">
          <ACheckbox value="a" label="A" />
          <ACheckbox value="b" label="B" />
          <ACheckbox value="c" label="C" />
        </ACheckboxGroup>
      </div>
    </div>
  </UBasePage>
</template>
