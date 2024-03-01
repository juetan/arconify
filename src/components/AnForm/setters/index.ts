import cascader from './Cascader'
import date from './Date'
import dateRange from './DateRange'
import input from './Input'
import number from './Number'
import password from './Password'
import search from './Search'
import select from './Select'
import submit from './Submit'
import textarea from './Textarea'
import time from './Time'
import treeSelect from './TreeSelect'

export const setterMap = {
  input,
  number,
  search,
  textarea,
  select,
  treeSelect,
  time,
  password,
  cascader,
  date,
  submit,
  dateRange,
}

/**
 * 键值对类型
 */
export type SetterMap = typeof setterMap

/**
 * 组件名联合类型
 */
export type SetterType = keyof SetterMap

/**
 * 重新映射
 */
export type SetterItemMap = {
  [key in SetterType]: {
    /**
     * 控件类型
     * @example
     * ```ts
     * 'input'
     * ```
     */
    setter: key
    /**
     * 控件参数
     * @example
     * ```tsx
     * { type: "password" }
     * ```
     */
    setterProps?: SetterMap[key]['setterProps']
    /**
     * 控件插槽
     * @example
     * ```tsx
     * label: (props) => <span>{props.item.label}</span>
     * ```
     */
    setterSlots?: SetterMap[key]['setterSlots']
  }
}

/**
 * 控件类型
 */
export type SetterItem = SetterItemMap[SetterType] | { setter?: undefined; setterProps?: undefined; setterSlots?: undefined }
