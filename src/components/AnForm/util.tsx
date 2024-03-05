export type Recordable<T = any> = Record<string, T>
export type MaybePromise<T> = T | Promise<T>

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
  return field.match(/^(\{|\[)(.+)(\}|\])$/)?.[2] ?? ''
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

import { Modal, ModalConfig } from '@arco-design/web-vue'
import { merge } from 'lodash-es'
import { computed } from 'vue'

export type DelOptions = string | Partial<Omit<ModalConfig, 'onOk' | 'onCancel'>>

export const delOptions: ModalConfig = {
  title: '提示',
  titleAlign: 'start',
  width: 432,
  content: '危险操作，确定删除该数据吗？',
  maskClosable: false,
  closable: false,
  okText: '确定删除',
  okButtonProps: {
    status: 'danger',
  },
}

export const delConfirm = (config: DelOptions = {}) => {
  if (typeof config === 'string') {
    config = { content: config }
  }
  const merged = merge({ content: '' }, delOptions, config)
  return new Promise<void>((onOk: () => void, onCancel) => {
    Modal.open({ ...merged, onOk, onCancel })
  })
}

export const useVModel = (props: Recordable, key: string, emit: (e: any, val: any) => void) => {
  return computed({
    get() {
      return props[key]
    },
    set(val: any) {
      emit(`update:${key}`, val)
    },
  })
}
