<script setup lang="ts">
const checked = ref(false)
const statusChecked2 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const groupChecked = ref(['a', 'b'])
const groupChecked2 = ref(['a', 'b'])

function toggle(index: any) {
  const _checked = groupChecked.value
  const i = _checked.indexOf(index)
  if (i > -1)
    _checked.splice(i, 1)

  else
    _checked.push(index)

  groupChecked.value = [..._checked]
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Type
      </div>
      <div px-4 flex="~ col gap2">
        <ACheckbox v-model="checked" label="Primary" />
        <ACheckbox v-model="checked" type="success" label="Success" />
        <ACheckbox v-model="checked" type="info" label="Info" />
        <ACheckbox v-model="checked" type="warning" label="Warning" />
        <ACheckbox v-model="checked" type="danger" label="Danger" />
      </div>

      <div class="p-4">
        Size
      </div>
      <div px-4 flex="~ col gap2">
        <ACheckbox v-model="checked" type="primary" size="mini" label="Mini" />
        <ACheckbox v-model="checked" type="success" size="small" label="Small" />
        <ACheckbox v-model="checked" type="info" size="normal" label="Normal" />
        <ACheckbox v-model="checked" type="warning" size="large" label="Large" />
      </div>
      <div class="p-4">
        Variant
      </div>
      <div px-4 flex="~ col gap2">
        <ACheckbox v-model="checked" label="Solid" />
        <ACheckbox v-model="checked" type="success" variant="outline" label="Outline" />
        <ACheckbox v-model="checked" type="info" variant="ghost" label="Ghost" />
        <ACheckbox v-model="checked" type="warning" variant="light" label="Light" />
      </div>
      <div class="p-4">
        Status
      </div>
      <div px-4 flex="~ col gap2">
        <ACheckbox type="success" disabled label="Unchecked" />
        <ACheckbox v-model="statusChecked2" type="success" disabled label="Checked" />
      </div>
      <div class="p-4">
        Custom
      </div>
      <div px-4 flex="~ col gap2">
        <ACheckbox v-model="checked2" :value="1" label="Value" icon="i-carbon-send-alt" />
        <ACheckbox v-model="checked3" custom-icon value="yes" label="Slot Icon">
          <template #icon="props">
            <div :class="props.checked ? 'i-carbon-send-alt' : 'i-carbon-send'" />
          </template>
        </ACheckbox>
      </div>

      <div class="p-4">
        CheckboxGroup: {{ groupChecked }}
      </div>
      <div px-4>
        <ACheckboxGroup v-model="groupChecked">
          <ACheckbox value="a" label="A" />
          <ACheckbox value="b" label="B" />
          <ACheckbox value="c" label="C" />
        </ACheckboxGroup>
      </div>

      <div class="p-4">
        CheckboxGroup Min Max[1-2]: {{ groupChecked2 }}
      </div>
      <div px-4>
        <ACheckboxGroup v-model="groupChecked2" :min="1" :max="2" direction="horizontal">
          <ACheckbox value="a" label="A" />
          <ACheckbox value="b" label="B" />
          <ACheckbox value="c" label="C" />
        </ACheckboxGroup>
      </div>

      <div class="p-4">
        CheckboxGroup with Cell: {{ groupChecked }}
      </div>
      <ACheckboxGroup v-model="groupChecked">
        <ACellGroup inset divider clickable>
          <ACell title="Title a" @click="toggle('a')">
            <template #right-icon>
              <ACheckbox value="a" />
            </template>
          </ACell>
          <ACell title="Title b" @click="toggle('b')">
            <template #right-icon>
              <ACheckbox value="b" />
            </template>
          </ACell>
          <ACell title="Title c" @click="toggle('c')">
            <template #right-icon>
              <ACheckbox value="c" />
            </template>
          </ACell>
        </ACellGroup>
      </ACheckboxGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Checkbox 复选框
</route>
