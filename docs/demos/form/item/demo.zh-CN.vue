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
      itemProps: {
        hideLabel: true,
      },
      itemSlots: {
        help: () => '我是 HELP 插槽',
      },
    },
  ],
})
</script>
