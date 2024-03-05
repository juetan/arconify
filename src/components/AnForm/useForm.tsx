import { merge } from 'lodash-es'
import { AnForm, AnFormInstance, AnFormProps } from './Form'
import { FormItem, useFormItems } from './useFormItems'
import { ref, reactive } from 'vue'

export type UseFormOptions = Partial<Omit<AnFormProps, 'items'>> & {
  /**
   * 表单项
   * @example
   * ```ts
   * [{
   *     field: 'name',
   *     label: '昵称',
   *     setter: 'input'
   * }]
   * ```
   */
  items?: FormItem[]
}

export function useFormProps(options: UseFormOptions): Required<AnFormProps> {
  const { model: _model = {}, items: _items = [], submit, formProps = {} } = options
  const model = merge({ id: undefined }, _model)
  const items = useFormItems(_items ?? [], model)
  return {
    model,
    items,
    submit: submit as any,
    formProps,
  }
}

/**
 * 构建表单组件的参数
 */
export const useForm = (options: UseFormOptions) => {
  const formRef = ref<AnFormInstance | null>(null)
  const props = reactive(useFormProps(options))

  return {
    name: 'AnFormWrapper',
    formRef,
    model: props.model,
    render() {
      return <AnForm ref={(el: any) => (formRef.value = el)} v-model:model={props.model} items={props.items} submit={props.submit} formProps={props.formProps}></AnForm>
    },
  }
}

