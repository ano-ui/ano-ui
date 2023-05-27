<script setup lang="ts">
import { ref, watch } from 'vue'

const pwd = ref('')

watch(pwd, (val) => {
  // eslint-disable-next-line no-console
  console.log(val)
})
const showClearText = ref('abc')
const wordLimitText = ref('abc')
</script>

<template>
  <UBasePage>
    <div class="p-4">
      自定义类型
    </div>
    <ACellGroup inset divider>
      <AField label="文本" placeholder="请输入文本" />
      <AField label="数字" type="number" placeholder="请输入数字" />
      <AField label="小数" type="digit" placeholder="请输入小数" />
      <AField v-model="pwd" label="密码" type="password" placeholder="请输入密码" />
      <AField label="多行文本" type="textarea" show-clear placeholder="请输入多行文本" />
    </ACellGroup>
    <div class="p-4">
      状态
    </div>
    <ACellGroup inset divider>
      <AField icon="i-tabler-carrot" label="禁用" disabled placeholder="禁用" />
    </ACellGroup>
    <div class="p-4">
      自定义
    </div>
    <ACellGroup inset divider>
      <AField placeholder="无标签" />
      <AField v-model="showClearText" label="清除按钮" show-clear placeholder="清除按钮" />
      <AField label="图标" icon="i-tabler-carrot" placeholder="图标" />
      <AField label="插槽" placeholder="前置、图标插槽">
        <template #prefix>
          <div>https://</div>
        </template>
        <template #icon>
          <div class="i-tabler-carrot" />
        </template>
      </AField>
      <AField label="文本" ccc="text-red" input-align="right" placeholder="红色右对齐" />
      <AField v-model="wordLimitText" label="长度限制" :maxlength="10" show-word-limit placeholder="请输入文本" />
    </ACellGroup>

    <div class="p-4">
      输入框文本位置
    </div>
    <ACellGroup inset divider>
      <AField label-align="top" label="顶部对齐" placeholder="请输入文本" />
      <AField label-align="left" label="左对齐" placeholder="请输入文本" />
      <AField label-align="center" label="居中" placeholder="请输入文本" />
      <AField label-align="right" label="右对齐" placeholder="请输入文本" />
    </ACellGroup>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Field 输入框
</route>
