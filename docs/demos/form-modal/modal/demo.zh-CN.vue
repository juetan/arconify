<template>
  <div style="max-width: 432px;">
    <UserForm></UserForm>

    <div>
      表单值：{{ UserForm.formRef.value?.formRef?.model }}
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { useFormModal } from 'arconify';

const UserForm = useFormModal({
  modalProps: {
    title: '我是标题',
    width: 580,
    closable: true,
  },
  modalSlots: {
    footer: () => {
      return <div>
        <div>我是 footer 插槽，我会替代 submit 参数生成的默认插槽</div>
      </div>
    }
  },
  items: [
    {
      label: '名字',
      field: 'name',
      setter: 'input'
    },
  ],
  submit(model) {
    console.log(model);
    return {
      message: '成功'
    }
  }
})
</script>