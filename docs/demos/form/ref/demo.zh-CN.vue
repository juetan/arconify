<template>
  <div style="max-width: 432px">
    <UserForm></UserForm>
    表单值：{{ UserForm.formRef.value?.model }}
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'arconify'

const UserForm = useForm({
  items: [
    {
      label: '名字',
      field: 'name',
      setter: 'input',
    },
  ],
})
</script>
