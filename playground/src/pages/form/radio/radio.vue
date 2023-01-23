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
        Type
      </div>
      <div p-2 flex="~ col gap2">
        <ARadio v-model="checked" label="Primary" />
        <ARadio v-model="checked" type="success" label="Success" />
        <ARadio v-model="checked" type="info" label="Info" />
        <ARadio v-model="checked" type="warning" label="Warning" />
        <ARadio v-model="checked" type="danger" label="Danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ col gap2">
        <ARadio v-model="checked" type="primary" size="mini" label="Mini" />
        <ARadio v-model="checked" type="success" size="small" label="Small" />
        <ARadio v-model="checked" type="info" size="normal" label="Normal" />
        <ARadio v-model="checked" type="warning" size="large" label="Large" />
      </div>

      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ col gap2">
        <ARadio v-model="checked" label="Solid" />
        <ARadio v-model="checked" type="success" variant="outline" label="Outline" />
        <ARadio v-model="checked" type="info" variant="ghost" label="Ghost" />
        <ARadio v-model="checked" type="warning" variant="light" label="Light" />
      </div>

      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ col gap2">
        <ARadio type="success" disabled label="Unchecked" />
        <ARadio v-model="statusChecked2" type="success" disabled label="Checked" />
      </div>

      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ col gap2">
        <ARadio v-model="checked2" :value="1" label="Value" icon="i-carbon-send-alt" />
        <ARadio v-model="checked3" custom-icon value="yes" label="Slot Icon">
          <template #icon="props">
            <div :class="props.checked ? 'i-carbon-send-alt' : 'i-carbon-send'" />
          </template>
        </ARadio>
      </div>

      <div class="p-2">
        RadioGroup: {{ groupChecked }}
      </div>
      <div p-2>
        <ARadioGroup v-model="groupChecked">
          <ARadio value="a" label="A" />
          <ARadio value="b" label="B" />
          <ARadio value="c" label="C" />
        </ARadioGroup>
      </div>

      <div class="p-2">
        RadioGroup: {{ groupChecked }}
      </div>
      <div p-2>
        <ARadioGroup v-model="groupChecked" direction="horizontal">
          <ARadio value="a" label="A" />
          <ARadio value="b" label="B" />
          <ARadio value="c" label="C" />
        </ARadioGroup>
      </div>
    </div>
  </UBasePage>
</template>
