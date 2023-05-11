<script setup lang="ts">
function goBasic(path: string) {
  uni.navigateTo({
    url: `/pages/basic/${path}`,
  })
}

function goForm(path: string) {
  uni.navigateTo({
    url: `/pages/form/${path}`,
  })
}

function goAction(path: string) {
  uni.navigateTo({
    url: `/pages/action/${path}`,
  })
}

function goDisplay(path: string) {
  uni.navigateTo({
    url: `/pages/display/${path}`,
  })
}

function goNavigation(path: string) {
  uni.navigateTo({
    url: `/pages/navigation/${path}`,
  })
}
</script>

<template>
  <UBasePage :show="false">
    <div class="text-center p4 pt-12" flex="~ col gap1">
      <div class="text-xl">
        Ano UI
      </div>
      <div>An UniApp UI components with UnoCSS</div>
      <div>一个使用 UnoCSS 的 UniApp 组件</div>
      <div flex items-center justify-center>
        <!-- #ifdef H5 -->
        <UThemeSwitcher />
        <!-- #endif -->
        <UGitHubButton />
      </div>
    </div>
    <div class="p-4">
      基础组件
    </div>
    <ACellGroup arrow inset divider>
      <ACell title="Avatar 头像" @click="goBasic('avatar')" />
      <ACell title="Button 按钮" @click="goBasic('button')" />
      <ACell title="Cell 单元格" @click="goBasic('cell')" />
      <ACell title="Popup 弹出层" @click="goBasic('popup')" />
      <ACell title="Toast 轻提示" @click="goBasic('toast')" />
      <ACell title="Transition 过渡" @click="goBasic('transition')" />
      <ACell title="CollapseTransition 折叠过渡" @click="goBasic('collapse-transition')" />
    </ACellGroup>
    <div class="p-4">
      表单组件
    </div>
    <ACellGroup arrow inset divider>
      <ACell title="Checkbox 复选框" @click="goForm('checkbox')" />
      <ACell title="Field 输入框" @click="goForm('field')" />
      <ACell title="Radio 单选框" @click="goForm('radio')" />
      <ACell title="Switch 开关" @click="goForm('switch')" />
    </ACellGroup>
    <div class="p-4">
      反馈组件
    </div>
    <ACellGroup arrow inset divider>
      <ACell title="ActionSheet 动作面板" @click="goAction('action-sheet')" />
      <ACell title="Dialog 弹出框" @click="goAction('dialog')" />
      <ACell title="Notify 消息通知" @click="goAction('notify')" />
      <ACell title="Overlay 遮罩层" @click="goAction('overlay')" />
    </ACellGroup>
    <div class="p-4">
      展示组件
    </div>
    <ACellGroup arrow inset divider>
      <ACell title="Collapse 折叠面板" @click="goDisplay('collapse')" />
      <ACell title="NoticeBar 消息栏" @click="goDisplay('notice-bar')" />
      <ACell title="Tag 标签" @click="goDisplay('tag')" />
      <ACell title="Badge 标记" @click="goDisplay('badge')" />
    </ACellGroup>
    <div class="p-4">
      导航组件
    </div>
    <ACellGroup arrow inset divider>
      <ACell title="TabBar 标签栏" @click="goNavigation('tab-bar')" />
      <ACell title="NavBar 导航栏" @click="goNavigation('nav-bar')" />
    </ACellGroup>
  </UBasePage>
</template>

<route type="home" lang="yaml">
style:
  navigationBarTitleText: Ano UI
</route>
