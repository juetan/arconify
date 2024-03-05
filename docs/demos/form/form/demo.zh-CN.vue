<template>
  <div style="max-width: 432px">
    <UserForm></UserForm>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'arconify'

const UserForm = useForm({
  formProps: {
    layout: 'inline',
  },
  items: [
    {
      label: '名字',
      field: 'name',
      setter: 'input',
    },
  ],
})
</script>
