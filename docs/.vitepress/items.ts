export const components = [
  {
    text: '基础组件',
    collapsed: false,
    items: [
      { text: 'Avatar 头像', link: '/components/basic/avatar' },
      { text: 'Button 按钮', link: '/components/basic/button' },
      { text: 'Cell 单元格', link: '/components/basic/cell' },
      { text: 'Popup 弹出层', link: '/components/basic/popup' },
      { text: 'Toast 轻提示', link: '/components/basic/toast' },
      { text: 'Transition 过渡', link: '/components/basic/transition' },
    ],
  },
  {
    text: '表单组件',
    collapsed: false,
    items: [
      { text: 'Checkbox 复选框', link: '/components/form/checkbox' },
      { text: 'Field 输入框', link: '/components/form/field' },
      { text: 'Radio 单选框', link: '/components/form/radio' },
      { text: 'Switch 开关', link: '/components/form/switch' },
    ],
  },
  {
    text: '反馈组件',
    collapsed: false,
    items: [
      { text: 'ActionSheet 动作面板', link: '/components/action/action-sheet' },
      { text: 'Dialog 弹出框', link: '/components/action/dialog' },
      { text: 'Notify 消息通知', link: '/components/action/notify' },
      { text: 'Overlay 遮罩层', link: '/components/action/overlay' },
    ],
  },
  {
    text: '展示组件',
    collapsed: false,
    items: [
      { text: 'Badge 徽标', link: '/components/display/badge' },
      { text: 'Collapse 折叠面板', link: '/components/display/collapse' },
      { text: 'NoticeBar 通知栏', link: '/components/display/notice-bar' },
      { text: 'Tag 标签', link: '/components/display/tag' },
    ],
  },
  {
    text: '导航组件',
    collapsed: false,
    items: [
      { text: 'NavBar 导航栏', link: '/components/navigation/nav-bar' },
      { text: 'TabBar 标签栏', link: '/components/navigation/tab-bar' },
    ],
  },
]

export const navComponents = components.map(i => ({ text: i.text, link: i.items[0].link }))

export const guides = [
  { text: '快速上手', link: '/guide/quick-start' },
  { text: '安装', link: '/guide/install' },
  // { text: '概览', link: '/guide/overview' },
  // { text: '国际化', link: '/guide/i18n' },
  // { text: '定制主题', link: '/guide/theme' },
  // { text: '暗黑模式', link: '/guide/dark' },
  { text: '更新日志', link: '/guide/changelog' },
]
