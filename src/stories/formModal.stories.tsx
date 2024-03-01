import type { Meta, StoryObj } from '@storybook/vue3'
import { AnFormModal, useFormModal } from '../components/AnForm'

const meta = {
  title: '基础/表单弹窗',
  component: AnFormModal,
  tags: ['autodocs'],
  argTypes: {
    model: {
      description: '表单数据',
      defaultValue: {},
    },
    items: {
      description: '表单项列表',
      defaultValue: [],
    },
    submit: {
      description: '提交处理',
      defaultValue: () => {},
    },
    formProps: {
      description: '传递给 Form 组件的参数',
      defaultValue: {},
    },
  },
} satisfies Meta<typeof AnFormModal>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  name: '基础表单',
  args: {
    model: {},
  },
  render() {
    return {
      name: 'AnFormModalDemo',
      setup() {
        const DemoModal = useFormModal({
          items: [
            {
              label: '名字',
              field: 'name',
              setter: 'input',
            },
            {
              label: '名字1',
              field: 'name1',
              setter: 'select',
            },
            {
              label: '名字2',
              field: 'name2',
              setter: 'date',
            },
          ],
          submit(model) {
            console.log(model)
          },
        })
        return {
          DemoModal,
        }
      },
      render() {
        return <this.DemoModal></this.DemoModal>
      },
    }
  },
}

export const NoTrigger: Story = {
  name: '触发器',
  args: {
    model: {},
  },
  render() {
    return {
      name: 'AnFormModalDemo',
      setup() {
        const DemoModal = useFormModal({
          trigger: false,
          items: [
            {
              label: '名字',
              field: 'name',
              setter: 'input',
            },
          ],
          submit(model) {
            console.log(model)
          },
        })

        const StriModal = useFormModal({
          trigger: '测试',
          items: [
            {
              label: '名字',
              field: 'name',
              setter: 'input',
            },
          ],
          submit(model) {
            console.log(model)
          },
        })

        const FuncModal = useFormModal({
          trigger: ({ open }) => <button onClick={open}>点我</button>,
          items: [
            {
              label: '名字',
              field: 'name',
              setter: 'input',
            },
          ],
          submit(model) {
            console.log(model)
          },
        })

        const ObjectModal = useFormModal({
          trigger: {
            text: '我是文本',
          },
          items: [
            {
              label: '名字',
              field: 'name',
              setter: 'input',
            },
          ],
          submit(model) {
            console.log(model)
          },
        })

        return {
          DemoModal,
          StriModal,
          FuncModal,
          ObjectModal,
        }
      },
      render() {
        return (
          <div>
            <div>布尔值</div>
            <button onClick={() => this.DemoModal.open()}>打开</button>
            <this.DemoModal></this.DemoModal>
            <div>字符串</div>
            <this.StriModal></this.StriModal>
            <div>渲染函数</div>
            <this.FuncModal></this.FuncModal>
            <div>对象形式</div>
            <this.ObjectModal></this.ObjectModal>
          </div>
        )
      },
    }
  },
}
