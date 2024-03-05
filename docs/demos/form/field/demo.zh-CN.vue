<template>
  <div style="max-width: 432px">
    <UserForm></UserForm>
    <div>原表单值：{{ UserForm.formRef.value?.model }}</div>
    <div>表单值：{{ getModel(UserForm.formRef.value?.model ?? {}) }}</div>
    <div style="margin-top: 16px;">
      <Button @click="onClick">设置值</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm, getModel, setModel } from 'arconify'

const UserForm = useForm({
  items: [
    {
      label: '日期范围',
      field: '[startDate, endDate]',
      setter: 'dateRange',
    },
  ],
})

function onClick() {
  if (UserForm.model) {
    setModel(UserForm.model, { startDate: '2020-02-02', endDate: '2020-03-03' })
  }
}
</script>
