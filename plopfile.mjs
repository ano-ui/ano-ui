import { camelCase, kebabCase, pascalCase } from 'scule'

const anoUiDir = './src/ano-ui'
const componentDir = `${anoUiDir}/components`
const presetDir = `${anoUiDir}/preset`
const playgroundDir = './src'

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称',
        validate(name) {
          if (/^[a-zA-Z][\w-]*$/.test(name) && name.length > 2)
            return true
          return '请输入合法的组件名'
        },
      },
      {
        type: 'list',
        name: 'type',
        message: '请选择组件类型',
        choices: [
          {
            name: 'Basic 基础',
            value: 'basic',
          },
          {
            name: 'Form 表单',
            value: 'form',
          },
          {
            name: 'Action 反馈',
            value: 'action',
          },
          {
            name: 'Display 展示',
            value: 'display',
          },
          {
            name: 'Navigation 导航',
            value: 'navigation',
          },
        ],
      },
    ],
    actions: ({ name, type }) => {
      // 大驼峰
      const pascalCaseName = pascalCase(name)
      // 带A前缀大驼峰
      const pascalCaseNameWithPrefix = `A${pascalCaseName}`
      // 短杠分隔
      const kebabCaseName = kebabCase(name)
      // 小驼峰
      const camelCaseName = camelCase(name)
      const data = {
        pascalCaseName,
        pascalCaseNameWithPrefix,
        kebabCaseName,
        camelCaseName,
      }

      const baseDir = `${componentDir}/${pascalCaseNameWithPrefix}`

      const componentVue = `${baseDir}/${pascalCaseNameWithPrefix}.vue`
      const componentTs = `${baseDir}/${kebabCaseName}.ts`
      const componentIndex = `${baseDir}/index.ts`
      const componentTypes = `${baseDir}/types.ts`
      const componentUse = `${baseDir}/use-${kebabCaseName}.ts`

      const componentShortcut = `${presetDir}/shortcuts/${camelCaseName}.ts`

      const componentPlayground = `${playgroundDir}/pages/${type}/${kebabCaseName}.vue`

      const componentExportEntry = `${componentDir}/index.ts`
      const componentShortcutEntry = `${presetDir}/shortcuts/index.ts`
      const componentPlaygroundEntry = `${playgroundDir}/pages/index.vue`

      /** @type {import('plop').ActionType[]} */
      const actions = [
        {
          type: 'add',
          path: componentVue,
          templateFile: './plop/component/component-vue.hbs',
          data,
        },
        {
          type: 'add',
          path: componentTs,
          templateFile: './plop/component/component-ts.hbs',
          data,
        },
        {
          type: 'add',
          path: componentIndex,
          templateFile: './plop/component/component-index.hbs',
          data,
        },
        {
          type: 'add',
          path: componentTypes,
          templateFile: './plop/component/component-types.hbs',
          data,
        },
        {
          type: 'add',
          path: componentUse,
          templateFile: './plop/component/component-use.hbs',
          data,
        },
        {
          type: 'add',
          path: componentShortcut,
          templateFile: './plop/component/component-shortcut.hbs',
          data,
        },
        {
          type: 'add',
          path: componentPlayground,
          templateFile: './plop/component/component-playground.hbs',
          data,
        },
        {
          type: 'append',
          path: componentExportEntry,
          pattern: pascalCase(type),
          template: `export * from './${pascalCaseNameWithPrefix}'`,
        },
        {
          type: 'append',
          path: componentShortcutEntry,
          pattern: type,
          template: `import { ${camelCaseName}Shortcuts } from './${camelCaseName}'`,
        },
        {
          type: 'append',
          path: componentShortcutEntry,
          pattern: new RegExp(`export const shortcuts[\\W\\w]*?${type}`),
          // keep the space
          template: `  ${camelCaseName}Shortcuts,`,
        },
        {
          type: 'append',
          path: componentPlaygroundEntry,
          pattern: new RegExp(`${pascalCase(type)}\\s[\\W\\w]*?divider>`),
          template: `        <ACell title="${pascalCaseName}" @click="go${pascalCase(type)}('${kebabCaseName}')" />`,
        },
      ]
      return actions
    },
  })
}
