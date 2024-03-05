<template>
  <div>
    <UserTable></UserTable>
  </div>
</template>

<script lang="ts" setup>
import { useTable } from 'arconify'

const UserTable = useTable({
  data: [
    {
      id: 1,
      name: '测试1',
      gender: '男',
      description: '暂无描述',
    },
    {
      id: 2,
      name: '测试2',
      gender: '男',
      description: '暂无描述',
    },
    {
      id: 3,
      name: '测试3',
      gender: '男',
      description: '暂无描述',
    },
  ],
  columns: [
    {
      title: '名字',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '操作',
      type: 'button',
      buttons: [
        {
          text: '测试',
          onClick() {
            alert('我是表格行操作')
          },
        },
      ],
    },
  ],
})
</script>
