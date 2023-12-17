<script setup lang="ts">
function getInfo() {
  uni.getUserInfo({
    success: (res) => {
      // eslint-disable-next-line no-console
      console.log(res)
    },
  })
}
</script>

<template>
  <UBasePage>
    <div class="p-4">
      按钮类型
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AButton>
        默认按钮
      </AButton>
      <AButton type="primary">
        主要按钮
      </AButton>
      <AButton type="success">
        成功按钮
      </AButton>
      <AButton type="info">
        信息按钮
      </AButton>
      <AButton type="warning">
        警告按钮
      </AButton>
      <AButton type="danger">
        危险按钮
      </AButton>
    </div>
    <div class="p-4">
      按钮大小
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AButton type="primary" size="mini">
        迷你按钮
      </AButton>
      <AButton type="success" size="small">
        小型按钮
      </AButton>
      <AButton type="info" size="normal">
        普通按钮
      </AButton>
      <AButton type="warning" size="large">
        大型按钮
      </AButton>
    </div>
    <div class="p-4">
      按钮变体
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AButton type="primary" variant="solid">
        实心按钮
      </AButton>
      <AButton type="success" variant="outline">
        空心按钮
      </AButton>
      <AButton type="info" variant="ghost">
        虚线按钮
      </AButton>
      <AButton type="warning" variant="light">
        次要按钮
      </AButton>
      <AButton type="danger" variant="text">
        文字按钮
      </AButton>
    </div>
    <div class="p-4">
      按钮状态
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AButton type="primary" loading>
        加载中
      </AButton>
      <AButton type="success" disabled>
        禁用状态
      </AButton>
    </div>
    <div class="p-4">
      自定义
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AButton type="primary" icon="i-tabler-carrot" />
      <AButton type="success" custom-class="rounded-none aspect-square">
        方
      </AButton>
      <AButton type="info" custom-class="rounded-full aspect-square">
        圆
      </AButton>
      <AButton type="warning">
        <template #icon>
          <i class="i-tabler-send" /> 插槽
        </template>
      </AButton>
      <AButton type="primary" custom-class="bg-teal border-teal" open-type="getUserInfo" @click="getInfo">
        OpenType
      </AButton>
      <AButton type="primary" :custom-class="['bg-gradient-to-r', 'from-indigo-500', 'to-pink-500']">
        背景渐变
      </AButton>
    </div>
    <div px-4 mt-2>
      <AButton type="danger" block>
        块级元素
      </AButton>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Button 按钮
</route>
