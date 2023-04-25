<script setup lang="ts">
type RadioGroupValue = 'a' | 'b' | 'c' | 'd' | 'e'
const groupChecked1 = ref<RadioGroupValue>('a')
const groupChecked2 = ref<RadioGroupValue>('a')
const groupChecked3 = ref<RadioGroupValue>('a')
const groupChecked4 = ref<RadioGroupValue>('a')
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Type
      </div>
      <div px-4>
        <ARadioGroup v-model="groupChecked1">
          <ARadio value="a" label="Primary" />
          <ARadio value="b" type="success" label="Success" />
          <ARadio value="c" type="info" label="Info" />
          <ARadio value="d" type="warning" label="Warning" />
          <ARadio value="e" type="danger" label="Danger" />
        </ARadioGroup>
      </div>

      <div class="p-4">
        Size
      </div>
      <div px-4 flex="~ col gap2">
        <ARadioGroup v-model="groupChecked2" size="mini" direction="horizontal">
          <ARadio value="a" type="primary" label="a" />
          <ARadio value="b" type="success" label="a" />
          <ARadio value="c" type="info" label="a" />
          <ARadio value="d" type="warning" label="a" />
        </ARadioGroup>
        <ARadioGroup v-model="groupChecked2" size="small" direction="horizontal">
          <ARadio value="a" type="primary" label="A" />
          <ARadio value="b" type="success" label="B" />
          <ARadio value="c" type="info" label="C" />
          <ARadio value="d" type="warning" label="D" />
        </ARadioGroup>
        <ARadioGroup v-model="groupChecked2" size="normal" direction="horizontal">
          <ARadio value="a" type="primary" label="A" />
          <ARadio value="b" type="success" label="B" />
          <ARadio value="c" type="info" label="C" />
          <ARadio value="d" type="warning" label="D" />
        </ARadioGroup>
        <ARadioGroup v-model="groupChecked2" size="large" direction="horizontal">
          <ARadio value="a" type="primary" label="A" />
          <ARadio value="b" type="success" label="B" />
          <ARadio value="c" type="info" label="C" />
          <ARadio value="d" type="warning" label="D" />
        </ARadioGroup>
      </div>

      <div class="p-4">
        Status
      </div>
      <div px-4>
        <ARadioGroup v-model="groupChecked3" size="small" direction="horizontal">
          <ARadio value="a" type="success" label="Checked" />
          <ARadio value="b" type="success" label="UnChecked" />
          <ARadio value="c" type="success" disabled label="Disabled" />
        </ARadioGroup>
      </div>

      <div class="p-4">
        RadioGroup with Cell: {{ groupChecked4 }}
      </div>
      <ARadioGroup v-model="groupChecked4">
        <ACellGroup inset divider clickable>
          <ACell title="Radio a" @click="groupChecked4 = 'a'">
            <template #right-icon>
              <ARadio value="a" />
            </template>
          </ACell>
          <ACell title="Radio b" @click="groupChecked4 = 'b'">
            <template #right-icon>
              <ARadio value="b" />
            </template>
          </ACell>
          <ACell title="Radio c" @click="groupChecked4 = 'c'">
            <template #right-icon>
              <ARadio value="c" />
            </template>
          </ACell>
        </ACellGroup>
      </ARadioGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Radio 单选框
</route>
