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
    <div class="p-4">
      自定义类型
    </div>
    <div px-4 flex="~ col gap2">
      <ACheckbox v-model="checked" type="primary" label="主要" />
      <ACheckbox v-model="checked" type="success" label="成功" />
      <ACheckbox v-model="checked" type="info" label="信息" />
      <ACheckbox v-model="checked" type="warning" label="警告" />
      <ACheckbox v-model="checked" type="danger" label="危险" />
    </div>

    <div class="p-4">
      大小
    </div>
    <div px-4 flex="~ col gap2">
      <ACheckbox v-model="checked" type="primary" size="mini" label="迷你" />
      <ACheckbox v-model="checked" type="success" size="small" label="小型" />
      <ACheckbox v-model="checked" type="info" size="normal" label="普通" />
      <ACheckbox v-model="checked" type="warning" size="large" label="大型" />
    </div>
    <div class="p-4">
      状态
    </div>
    <div px-4 flex="~ col gap2">
      <ACheckbox type="success" disabled label="禁用" />
      <ACheckbox v-model="statusChecked2" type="success" disabled label="禁用" />
    </div>
    <div class="p-4">
      自定义
    </div>
    <div px-4 flex="~ col gap2">
      <ACheckbox v-model="checked2" type="primary" :value="1" label="值" icon="i-tabler-carrot" />
      <ACheckbox v-model="checked3" type="primary" custom-icon value="yes" label="图标插槽">
        <template #icon="props">
          <div :class="props.checked ? 'i-tabler-carrot' : 'i-tabler-lemon a-text-color-2'" />
        </template>
      </ACheckbox>
    </div>

    <div class="p-4">
      复选框组: {{ groupChecked }}
    </div>
    <div px-4>
      <ACheckboxGroup v-model="groupChecked">
        <ACheckbox type="primary" value="a" label="A" />
        <ACheckbox type="primary" value="b" label="B" />
        <ACheckbox type="primary" value="c" label="C" />
      </ACheckboxGroup>
    </div>

    <div class="p-4">
      复选框组限制可选数量[1-2]: {{ groupChecked2 }}
    </div>
    <div px-4>
      <ACheckboxGroup v-model="groupChecked2" :min="1" :max="2" direction="horizontal">
        <ACheckbox type="primary" value="a" label="A" />
        <ACheckbox type="primary" value="b" label="B" />
        <ACheckbox type="primary" value="c" label="C" />
      </ACheckboxGroup>
    </div>

    <div class="p-4">
      搭配单元格组件使用: {{ groupChecked }}
    </div>
    <ACheckboxGroup v-model="groupChecked">
      <ACellGroup inset divider clickable>
        <ACell title="复选框 a" @click="toggle('a')">
          <template #right-icon>
            <ACheckbox type="primary" value="a" />
          </template>
        </ACell>
        <ACell title="复选框 b" @click="toggle('b')">
          <template #right-icon>
            <ACheckbox type="primary" value="b" />
          </template>
        </ACell>
        <ACell title="复选框 c" @click="toggle('c')">
          <template #right-icon>
            <ACheckbox type="primary" value="c" />
          </template>
        </ACell>
      </ACellGroup>
    </ACheckboxGroup>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Checkbox 复选框
</route>
