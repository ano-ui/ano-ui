<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        类型
      </div>
      <div px-4 flex="~ gap2 wrap">
        <ATag label="主要" />
        <ATag label="成功" type="success" />
        <ATag label="信息" type="info" />
        <ATag label="警告" type="warning" />
        <ATag label="危险" type="danger" />
      </div>

      <div class="p-4">
        大小
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ATag label="迷你" type="primary" size="mini" />
        <ATag label="小型" type="success" size="small" />
        <ATag label="普通" type="info" size="normal" />
        <ATag label="大型" type="warning" size="large" />
      </div>

      <div class="p-4">
        变体
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ATag label="Solid" variant="solid" />
        <ATag label="Outline" type="success" variant="outline" />
        <ATag label="Ghost" type="info" variant="ghost" />
        <ATag label="Light" type="warning" variant="light" />
        <ATag label="Text" type="danger" variant="text" />
      </div>

      <div class="p-4">
        状态
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <!-- TODO: close will remain an <a-tag> but 0x0 -->
        <ATag label="可关闭" closable :show="show" @close="show = !show" />
        <ATag label="禁用" type="success" disabled />
      </div>

      <div class="p-4">
        自定义
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <ATag icon="i-tabler-carrot" icon-only />
        <ATag type="success" icon-only cc="rounded-full">
          <template #icon>
            <div class="i-tabler-carrot" />
          </template>
        </ATag>
        <ATag label="圆形" type="info" variant="ghost" cc="rounded-full" />
        <ATag label="发送" type="warning">
          <template #icon>
            <div class="i-tabler-carrot" />
          </template>
        </ATag>
        <ATag label="背景渐变" cc="bg-gradient-to-r from-indigo-500 to-pink-500" />
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Tag 标签
  </route>
