<template>
  <div style="max-width: 432px;">
    <UserForm></UserForm>

    <div>
      表单值：{{ UserForm.formRef.value?.model }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'arconify'

const UserForm = useForm({
  model: {
    description: '我是覆盖的默认值'
  },
  items: [
    {
      label: '名字',
      field: 'name',
      value: '我是默认值',
      setter: 'input'
    },
    {
      label: '备注',
      field: 'description',
      value: '我是会被覆盖的默认值',
      setter: 'textarea'
    }
  ],
  submit(model) {
    console.log(model);
    return {
      message: '成功'
    }
  }
})
</script>