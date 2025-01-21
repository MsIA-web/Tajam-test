import pluginJs from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import vueParser from 'vue-eslint-parser'

export default [
 {
  languageOptions: {
   globals: {
    ...globals.browser,
    ...globals.node
   }
  }
 },
 pluginJs.configs.recommended,
 {
  files: ['**/*.vue'],
  plugins: {
   vue: pluginVue
  },
  languageOptions: {
   parser: vueParser,
   ecmaVersion: 'latest',
   sourceType: 'module'
  },

  rules: {
   ...pluginVue.configs['flat/base'].rules,
   ...pluginVue.configs['vue3-essential'].rules
  }
 },
 {
  files: ['**/*.js', '**/*vue'],
  rules: {
   'prettier/prettier': [
    'error',
    {
     semi: false,
     singleQuote: true,
     tabWidth: 1,
     printWidth: 100,
     trailingComma: 'none'
    }
   ]
  }
 },
 eslintPluginPrettierRecommended,
 {
  ignores: ['**/node_modules/*', '**/dist/*']
 }
]
