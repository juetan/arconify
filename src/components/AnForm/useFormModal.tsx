import { defaultsDeep } from 'lodash-es'
import { Ref, computed, reactive, ref } from 'vue'
import { AnFormModal, AnFormModalInstance, AnFormModalProps } from './FormModal'
import { useFormProps } from './useForm'
import { FormItem } from './useFormItems'
import { Recordable } from './util'

export type FormModalUseOptions = Partial<Omit<AnFormModalProps, 'items'>> & {
  /**
   * 表单项
   * @example
   * ```tsx
   * [{
   *   field: 'name',
   *   label: '昵称',
   *   setter: 'input'
   * }]
   * ```
   */
  items: FormItem[]
}

export function useFormModalProps(options: FormModalUseOptions): AnFormModalProps {
  defaultsDeep(options, {
    trigger: true,
    modalProps: {
      title: '新增',
      width: 580,
    },
  } as AnFormModalProps)
  const { items, model, formProps } = useFormProps({ ...options, submit: undefined })
  const { trigger, submit, modalProps, modalSlots } = options
  return {
    trigger,
    model,
    items,
    submit,
    formProps,
    modalProps,
    modalSlots,
  }
}

export type UseFormModalOptionsFn = (modalRef: Ref<AnFormModalInstance | null>) => FormModalUseOptions

export function useAnFormModal(options: FormModalUseOptions | UseFormModalOptionsFn) {
  const modalRef = ref<AnFormModalInstance | null>(null)
  const formRef = computed(() => modalRef.value?.anFormRef)
  const open = (data: Recordable = {}) => modalRef.value?.open(data)
  const option = typeof options === 'function' ? options(modalRef) : options
  const rawProps = useFormModalProps(option)
  const props = reactive(rawProps)

  return {
    name: 'AnFormModalWrapper',
    modalRef,
    formRef,
    open,
    render() {
      return (
        <AnFormModal
          ref={(el: any) => (modalRef.value = el)}
          trigger={props.trigger}
          modalProps={props.modalProps as any}
          modalSlots={props.modalSlots}
          model={props.model}
          items={props.items}
          submit={props.submit}
          formProps={props.formProps}
          onUpdate:model={model => ((props as any).model = model)}
        ></AnFormModal>
      )
    },
  }
}
