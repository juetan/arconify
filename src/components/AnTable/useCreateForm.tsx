import { UseFormModalOptions, useFormModalProps } from '../AnForm/useFormModal'

export type UseCreateFormOptions = UseFormModalOptions & {}

export function useCreateForm(options: UseCreateFormOptions) {
  return useFormModalProps(options)
}
