<template>
  <div>
    <UserTable></UserTable>
  </div>
</template>

<script lang="ts" setup>
import { useTable } from 'arconify'

const UserTable = useTable({
  data: params => {
    const { page, size, name } = params
    const data = Array.from({ length: size }, (_, index) => {
      const id = (page - 1) * size + index + 1
      return {
        id,
        name: `${name ?? '测试'}${id}`,
        gender: '男',
        description: '暂无描述',
      }
    })
    return {
      data,
      total: 200,
    }
  },
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
        {
          text: '删除',
          type: 'delete',
          onClick({ record }) {
            alert(`删除 ${record.name}`)
          },
        },
      ],
    },
  ],
  search: [
    {
      title: '用户名字',
      field: 'name',
      setter: 'search',
    },
  ],
  create: {
    items: [
      {
        label: '名字',
        field: 'name',
        setter: 'input',
      },
    ],
  },
  modify: {
    extend: true,
  },
  actions: [
    {
      text: '我是Action',
      onClick() {
        alert('我是 Action')
      },
    },
  ],
  widgets: [
    {
      text: '我是Widget',
      onClick() {
        alert('我是 Widget')
      },
    },
  ],
})
</script>
