// Basic
import type { App } from 'vue'
import AButton from '../components/AButton/AButton.vue'
import ACell from '../components/ACell/ACell.vue'
import ACellGroup from '../components/ACellGroup/ACellGroup.vue'
import APopup from '../components/APopup/APopup.vue'
import ATag from '../components/ATag/ATag.vue'

// Form
import ACheckbox from '../components/ACheckbox/ACheckbox.vue'
import ACheckboxGroup from '../components/ACheckboxGroup/ACheckboxGroup.vue'
import AInput from '../components/AInput/AInput.vue'
import ARadio from '../components/ARadio/ARadio.vue'
import ARadioGroup from '../components/ARadioGroup/ARadioGroup.vue'
import ASwitch from '../components/ASwitch/ASwitch.vue'

// Action
import ADialog from '../components/ADialog/ADialog.vue'
import ANoticeBar from '../components/ANoticeBar/ANoticeBar.vue'
import ANotify from '../components/ANotify/ANotify.vue'
import AOverlay from '../components/AOverlay/AOverlay.vue'

// Layout
import APage from '../components/APage/APage.vue'

// Basic
export { default as AButton } from '../components/AButton/AButton.vue'
export { default as ACell } from '../components/ACell/ACell.vue'
export { default as ACellGroup } from '../components/ACellGroup/ACellGroup.vue'
export { default as APopup } from '../components/APopup/APopup.vue'
export { default as ATag } from '../components/ATag/ATag.vue'

// Form
export { default as ACheckbox } from '../components/ACheckbox/ACheckbox.vue'
export { default as ACheckboxGroup } from '../components/ACheckboxGroup/ACheckboxGroup.vue'
export { default as AInput } from '../components/AInput/AInput.vue'
export { default as ARadio } from '../components/ARadio/ARadio.vue'
export { default as ARadioGroup } from '../components/ARadioGroup/ARadioGroup.vue'
export { default as ASwitch } from '../components/ASwitch/ASwitch.vue'

// Action
export { default as ADialog } from '../components/ADialog/ADialog.vue'
export { default as ANoticeBar } from '../components/ANoticeBar/ANoticeBar.vue'
export { default as ANotify } from '../components/ANotify/ANotify.vue'
export { default as AOverlay } from '../components/AOverlay/AOverlay.vue'

// Layout
export { default as APage } from '../components/APage/APage.vue'

const ano = {
  install(app: App) {
    app.component('AButton', AButton)
    app.component('ACell', ACell)
    app.component('ACellGroup', ACellGroup)
    app.component('APopup', APopup)
    app.component('ATag', ATag)
    app.component('ACheckbox', ACheckbox)
    app.component('ACheckboxGroup', ACheckboxGroup)
    app.component('AInput', AInput)
    app.component('ARadio', ARadio)
    app.component('ARadioGroup', ARadioGroup)
    app.component('ASwitch', ASwitch)
    app.component('ADialog', ADialog)
    app.component('ANoticeBar', ANoticeBar)
    app.component('ANotify', ANotify)
    app.component('AOverlay', AOverlay)
    app.component('APage', APage)
  },
}

export { ano }
