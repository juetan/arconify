<template>
  <div style="max-width: 432px;">
    <UserForm></UserForm>

    <div>
      <p>表单值：</p>
      {{ UserForm.modalRef.value?.model }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFormModal } from 'arconify';

const UserForm = useFormModal({
  items: [
    {
      label: '名字',
      field: 'name',
      setter: 'input'
    },
    {
      label: '性别',
      field: 'gender',
      setter: 'select',
      options: [
        {
          label: '男',
          value: 1,
        },
        {
          label: '女',
          value: 0
        }
      ]
    },
    {
      label: '备注',
      field: 'description',
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