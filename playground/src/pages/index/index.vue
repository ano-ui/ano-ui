<script setup lang="ts">
const goBasic = (path: string) => {
  uni.navigateTo({
    url: `/pages/basic/${path}/${path}`,
  })
}

const goForm = (path: string) => {
  uni.navigateTo({
    url: `/pages/form/${path}/${path}`,
  })
}

const goAction = (path: string) => {
  uni.navigateTo({
    url: `/pages/action/${path}/${path}`,
  })
}
</script>

<template>
  <UBasePage>
    <div class="p4 pb-safe">
      <div class="text-center a-color-base" flex="~ col gap1">
        <div class="text-xl">
          Ano UI
        </div>
        <div>An UniApp UI components with UnoCSS</div>
        <div>一个使用 UnoCSS 的 UniApp 组件</div>
      </div>
      <div class="px2 py4">
        Basic 基础组件
      </div>
      <ACellGroup>
        <ACell title="Button 按钮" arrow @click="goBasic('button')" />
        <ACell title="Cell 单元格" arrow @click="goBasic('cell')" />
        <ACell title="Popup 弹出层" arrow @click="goBasic('popup')" />
        <ACell title="Tag 标签" arrow @click="goBasic('tag')" />
        <ACell title="Toast 轻提示" arrow @click="goBasic('toast')" />
        <ACell title="Transition 过渡" arrow @click="goBasic('transition')" />
      </ACellGroup>
      <div class="px2 py4">
        Form 表单组件
      </div>
      <ACellGroup>
        <ACell title="Checkbox 复选框" arrow @click="goForm('checkbox')" />
        <ACell title="Input 输入框" arrow @click="goForm('input')" />
        <ACell title="Radio 单选框" arrow @click="goForm('radio')" />
        <ACell title="Switch 开关" arrow @click="goForm('switch')" />
      </ACellGroup>
      <div class="px2 py4">
        Action 反馈组件
      </div>
      <ACellGroup>
        <ACell title="Dialog 弹出框" arrow @click="goAction('dialog')" />
        <ACell title="Notify 消息通知" arrow @click="goAction('notify')" />
        <ACell title="NoticeBar 消息栏" arrow @click="goAction('notice-bar')" />
        <ACell title="Overlay 遮罩层" arrow @click="goAction('overlay')" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
