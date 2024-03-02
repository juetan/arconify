import { FormModalUseOptions, useFormModalProps } from '../AnForm/useFormModal'

export type UseCreateFormOptions = FormModalUseOptions & {}

export function useCreateForm(options: UseCreateFormOptions) {
  return useFormModalProps(options)
}
