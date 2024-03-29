import { FieldRule } from '@arco-design/web-vue'
import { AnFormItemRule } from './FormItem'
import { Recordable } from './util'

/**
 * 内置规则
 */
export const formRuleMap = defineRuleMap({
  required: {
    required: true,
    message: '该项不能为空',
  },
  string: {
    type: 'string',
    message: '请输入字符串',
  },
  number: {
    type: 'number',
    message: '请输入数字',
  },
  email: {
    type: 'email',
    message: '邮箱格式错误，示例: xx@abc.com',
  },
  url: {
    type: 'url',
    message: 'URL格式错误, 示例: www.abc.com',
  },
  ip: {
    type: 'ip',
    message: 'IP格式错误, 示例: 101.10.10.30',
  },
  phone: {
    match: /^(?:(?:\+|00)86)?1\d{10}$/,
    message: '手机格式错误, 示例(11位): 15912345678',
  },
  idcard: {
    match: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
    message: '身份证格式错误, 长度为15或18位',
  },
  alphabet: {
    match: /^[a-zA-Z]\w{4,15}$/,
    message: '请输入英文字母, 长度为4~15位',
  },
  password: {
    match: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
    message: '至少包含大写字母、小写字母、数字和特殊字符',
  },
})

export function addFormRule(name: string, rule: FieldRule) {
  ;(formRuleMap as Recordable)[name] = rule
}

/**
 * 字符串形式(枚举)
 */
export type FieldStringRule = keyof typeof formRuleMap

/**
 * 完整类型
 */
export type Rule = FieldStringRule | AnFormItemRule

/**
 * 助手函数(获得TS提示)
 */
function defineRuleMap<T extends Record<string, FieldRule>>(ruleMap: T) {
  return ruleMap
}

/**
 * 获取表单规则
 * @param item 表单项
 * @returns
 */
export const useFormRules = <T extends { required?: boolean; rules?: Rule[] }>(item: T) => {
  const data: AnFormItemRule[] = []
  const { required, rules } = item

  if (!required || !rules) {
    return null
  }

  if (required) {
    data.push(formRuleMap.required)
  }

  for (const rule of rules ?? []) {
    if (typeof rule === 'string') {
      if (formRuleMap[rule]) {
        data.push(formRuleMap[rule])
      }
    } else {
      data.push(rule)
    }
  }

  return data
}
