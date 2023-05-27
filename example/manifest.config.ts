import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  'name': 'Ano UI',
  'appid': '__UNI__D989E4B',
  'description': '',
  'versionName': '1.0.0',
  'versionCode': '100',
  'transformPx': false,
  'mp-weixin': {
    appid: 'wx34c53cdf4e901def',
    setting: {
      urlCheck: false,
      es6: true,
      minified: true,
      postcss: true,
    },
    usingComponents: true,
    darkmode: true,
  },
  'uniStatistics': {
    enable: false,
  },
  'h5': {
    darkmode: true,
  },
  'vueVersion': '3',
  'app-plus': {
    darkmode: true,
    distribute: {
      ios: {
        dSYMs: false,
      },
      sdkConfigs: {
        ad: {},
      },
    },
  },
})
