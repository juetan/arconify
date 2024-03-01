import type { Meta, StoryObj } from '@storybook/vue3'
import { AnTable, useAnTable } from '../components/AnTable'

const meta = {
  title: '基础/表格',
  component: AnTable,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnTable>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  name: '基础表格',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}

export const WithSearch: Story = {
  name: '加上搜索',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
          search: [
            {
              label: '名字',
              field: 'name',
              setter: 'search',
            },
          ],
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}

export const WithCrate: Story = {
  name: '加上新增',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
          search: [
            {
              label: '名字',
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
              {
                label: '性别',
                field: 'gender',
                setter: 'select',
                options: [
                  {
                    label: '男',
                    value: '1',
                  },
                  {
                    label: '女',
                    value: 0,
                  },
                ],
              },
            ],
            submit(model) {
              console.log(model)
            },
          },
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}

export const WithModify: Story = {
  name: '加上修改',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
          search: [
            {
              label: '名字',
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
              {
                label: '性别',
                field: 'gender',
                setter: 'select',
                options: [
                  {
                    label: '男',
                    value: '1',
                  },
                  {
                    label: '女',
                    value: 0,
                  },
                ],
              },
            ],
            submit(model) {
              console.log(model)
            },
          },
          modify: {
            extend: true,
          },
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}

export const WithDelte: Story = {
  name: '加上删除',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
                {
                  text: '删除',
                  type: 'delete',
                  onClick(props) {
                    alert(`删除${props.record.name}`)
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
          search: [
            {
              label: '名字',
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
              {
                label: '性别',
                field: 'gender',
                setter: 'select',
                options: [
                  {
                    label: '男',
                    value: '1',
                  },
                  {
                    label: '女',
                    value: 0,
                  },
                ],
              },
            ],
            submit(model) {
              console.log(model)
            },
          },
          modify: {
            extend: true,
          },
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}

export const WithAction: Story = {
  name: '加上操作',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
                {
                  text: '删除',
                  type: 'delete',
                  onClick(props) {
                    alert(`删除${props.record.name}`)
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
          search: [
            {
              label: '名字',
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
              {
                label: '性别',
                field: 'gender',
                setter: 'select',
                options: [
                  {
                    label: '男',
                    value: '1',
                  },
                  {
                    label: '女',
                    value: 0,
                  },
                ],
              },
            ],
            submit(model) {
              console.log(model)
            },
          },
          modify: {
            extend: true,
          },
          actions: [
            {
              text: '操作',
              onClick() {
                alert('操作插槽')
              },
            },
          ],
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}

export const WithWidget: Story = {
  name: '加上部件',
  render() {
    return {
      name: 'dd',
      setup() {
        const BaseTable = useAnTable({
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
              type: 'button',
              buttons: [
                {
                  text: '测试',
                  onClick() {
                    alert('测试')
                  },
                },
                {
                  text: '删除',
                  type: 'delete',
                  onClick(props) {
                    alert(`删除${props.record.name}`)
                  },
                },
              ],
            },
          ],
          data(params) {
            const data = Array.from({ length: params.size }, (_, i) => ({ id: i + 1, name: `测试${i + 1}`, gender: Math.random() > 0.5 ? '男' : '女' }))
            return {
              data,
              total: 200,
            }
          },
          search: [
            {
              label: '名字',
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
              {
                label: '性别',
                field: 'gender',
                setter: 'select',
                options: [
                  {
                    label: '男',
                    value: '1',
                  },
                  {
                    label: '女',
                    value: 0,
                  },
                ],
              },
            ],
            submit(model) {
              console.log(model)
            },
          },
          modify: {
            extend: true,
          },
          actions: [
            {
              text: '操作',
              onClick() {
                alert('操作插槽')
              },
            },
          ],
          widgets: [
            {
              text: '部件',
              onClick() {
                alert('点击部件')
              },
            },
          ],
        })
        return {
          BaseTable,
        }
      },
      render() {
        return <this.BaseTable></this.BaseTable>
      },
    }
  },
}
