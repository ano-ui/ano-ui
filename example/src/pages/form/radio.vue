<script setup lang="ts">
type RadioGroupValue = 'a' | 'b' | 'c' | 'd' | 'e'
const groupChecked1 = ref<RadioGroupValue>('a')
const groupChecked2 = ref<RadioGroupValue>('a')
const groupChecked3 = ref<RadioGroupValue>('a')
const groupChecked4 = ref<RadioGroupValue>('a')
</script>

<template>
  <UBasePage>
    <div class="p-4">
      自定义类型
    </div>
    <div px-4>
      <ARadioGroup v-model="groupChecked1">
        <ARadio value="a" label="主要" />
        <ARadio value="b" type="success" label="成功" />
        <ARadio value="c" type="info" label="信息" />
        <ARadio value="d" type="warning" label="警告" />
        <ARadio value="e" type="danger" label="危险" />
      </ARadioGroup>
    </div>

    <div class="p-4">
      大小
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
      状态
    </div>
    <div px-4>
      <ARadioGroup v-model="groupChecked3" size="small" direction="horizontal">
        <ARadio value="a" type="success" label="选中" />
        <ARadio value="b" type="success" label="未选中" />
        <ARadio value="c" type="success" disabled label="禁用" />
      </ARadioGroup>
    </div>

    <div class="p-4">
      搭配单元格组件使用: {{ groupChecked4 }}
    </div>
    <ARadioGroup v-model="groupChecked4">
      <ACellGroup inset divider clickable>
        <ACell title="单选框 a" @click="groupChecked4 = 'a'">
          <template #right-icon>
            <ARadio value="a" />
          </template>
        </ACell>
        <ACell title="单选框 b" @click="groupChecked4 = 'b'">
          <template #right-icon>
            <ARadio value="b" />
          </template>
        </ACell>
        <ACell title="单选框 c" @click="groupChecked4 = 'c'">
          <template #right-icon>
            <ARadio value="c" />
          </template>
        </ACell>
      </ACellGroup>
    </ARadioGroup>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Radio 单选框
</route>
