import { FormModalUseOptions, useFormModalProps } from '../AnForm'

export type UseCreateFormOptions = FormModalUseOptions & {}

export function useCreateForm(options: UseCreateFormOptions) {
  return useFormModalProps(options)
}
