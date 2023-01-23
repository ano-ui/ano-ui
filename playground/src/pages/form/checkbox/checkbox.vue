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
        Type
      </div>
      <div p-2 flex="~ col gap2">
        <ACheckbox v-model="checked" label="Primary" />
        <ACheckbox v-model="checked" type="success" label="Success" />
        <ACheckbox v-model="checked" type="info" label="Info" />
        <ACheckbox v-model="checked" type="warning" label="Warning" />
        <ACheckbox v-model="checked" type="danger" label="Danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ col gap2">
        <ACheckbox v-model="checked" type="primary" size="mini" label="Mini" />
        <ACheckbox v-model="checked" type="success" size="small" label="Small" />
        <ACheckbox v-model="checked" type="info" size="normal" label="Normal" />
        <ACheckbox v-model="checked" type="warning" size="large" label="Large" />
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ col gap2">
        <ACheckbox v-model="checked" label="Solid" />
        <ACheckbox v-model="checked" type="success" variant="outline" label="Outline" />
        <ACheckbox v-model="checked" type="info" variant="ghost" label="Ghost" />
        <ACheckbox v-model="checked" type="warning" variant="light" label="Light" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ col gap2">
        <ACheckbox type="success" disabled label="Unchecked" />
        <ACheckbox v-model="statusChecked2" type="success" disabled label="Checked" />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ col gap2">
        <ACheckbox v-model="checked2" :value="1" label="Value" icon="i-carbon-send-alt" />
        <ACheckbox v-model="checked3" custom-icon value="yes" label="Slot Icon">
          <template #icon="props">
            <div :class="props.checked ? 'i-carbon-send-alt' : 'i-carbon-send'" />
          </template>
        </ACheckbox>
        <ACheckbox v-model="checked3">
          <div class="i-carbon-send-alt" />Content
        </ACheckbox>
      </div>
      <div class="p-2">
        CheckboxGroup: {{ groupChecked }}
      </div>
      <div p-2>
        <ACheckboxGroup v-model="groupChecked">
          <ACheckbox value="a" label="A" />
          <ACheckbox value="b" label="B" />
          <ACheckbox value="c" label="C" />
        </ACheckboxGroup>
      </div>

      <div class="p-2">
        CheckboxGroup Min Max[1-2]: {{ groupChecked2 }}
      </div>
      <div p-2>
        <ACheckboxGroup v-model="groupChecked2" :min="1" :max="2" direction="horizontal">
          <ACheckbox value="a" label="A" />
          <ACheckbox value="b" label="B" />
          <ACheckbox value="c" label="C" />
        </ACheckboxGroup>
      </div>
    </div>
  </UBasePage>
</template>
