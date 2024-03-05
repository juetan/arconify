<template>
  <div style="max-width: 432px">
    <UserForm></UserForm>
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
      required: true,
      rules: [
        'email',
        {
          match: /^.{3,10}$/,
          message: '只能输入 3 到 10 位',
        },
      ],
    },
  ],
  submit() {}
})
</script>
