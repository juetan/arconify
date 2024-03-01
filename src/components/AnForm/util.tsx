import { FormInstance } from '@arco-design/web-vue'
import { ref } from 'vue'

export type Recordable<T = any> = Record<string, T>

/**
 * 原始表单实例
 */
export function useFormRef() {
  const formRef = ref<FormInstance | null>(null)

  type Validate = FormInstance['validate']
  type ValidateField = FormInstance['validateField']
  type ResetFields = FormInstance['resetFields']
  type ClearValidate = FormInstance['clearValidate']
  type SetFields = FormInstance['setFields']
  type ScrollToField = FormInstance['scrollToField']

  const validate: Validate = async (...args) => formRef.value?.validate(...args)
  const validateField: ValidateField = async (...args) => formRef.value?.validateField(...args)
  const resetFields: ResetFields = (...args) => formRef.value?.resetFields(...args)
  const clearValidate: ClearValidate = (...args) => formRef.value?.clearValidate(...args)
  const setFields: SetFields = (...args) => formRef.value?.setFields(...args)
  const scrollToField: ScrollToField = (...args) => formRef.value?.scrollToField(...args)

  return {
    formRef,
    validate,
    validateField,
    resetFields,
    clearValidate,
    setFields,
    scrollToField,
  }
}

export type FormRef = ReturnType<typeof useFormRef>

export function getModel(model: Recordable) {
  const data: Recordable = {}

  for (const [key, value] of Object.entries(model)) {
    if (value === '') {
      continue
    }
    if (/^\[.+\]$/.test(key)) {
      getModelArray(key, value, data)
      continue
    }
    if (/^\{.+\}$/.test(key)) {
      getModelObject(key, value, data)
      continue
    }
    data[key] = value
  }

  return data
}

export function setModel(model: Recordable, data: Recordable) {
  for (const [key] of Object.entries(model)) {
    if (/^\[.+\]$/.test(key)) {
      model[key] = setModelArray(data, key)
      continue
    }
    if (/^\{.+\}$/.test(key)) {
      model[key] = setModelObject(data, key)
      continue
    }
    model[key] = data[key]
  }
  console.log(model, data)
  return model
}

function rmString(str: string) {
  // @ts-ignore
  const field = str.replaceAll(/\s/g, '')
  return field.match(/^(\{|\[)(.+)(\}|\])$/)?.[1] ?? ''
}

function setModelArray(data: Recordable, key: string) {
  const result: any[] = []
  const field = rmString(key)
  for (const key of field.split(',')) {
    result.push(data[key])
  }
  return result
}

function setModelObject(data: Recordable, key: string) {
  const result: Recordable = {}
  const field = rmString(key)
  for (const key of field.split(',')) {
    result[key] = data[key]
  }
  return result
}

function getModelArray(key: string, value: any, data: Recordable) {
  let field = rmString(key)

  if (!field) {
    data[key] = value
    return
  }

  field.split(',').forEach((key: string, index: string) => {
    data[key] = value?.[index]
  })

  return data
}

function getModelObject(key: string, value: any, data: Recordable) {
  const field = rmString(key)

  if (!field) {
    data[key] = value
    return
  }

  for (const key of field.split(',')) {
    data[key] = value?.[key]
  }

  return data
}
