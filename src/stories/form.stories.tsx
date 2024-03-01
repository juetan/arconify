import type {Meta, StoryObj} from '@storybook/vue3';
import {AnForm, useForm} from '../components/AnForm';

const meta = {
  title: '基础/表单',
  component: AnForm,
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
} satisfies Meta<typeof AnForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  name: '基础表单',
  render() {
    return {
      name: 'dd',
      setup() {
        const DemoForm = useForm({
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
              options: [
                {
                  label: '测试',
                  value: 1,
                },
                {
                  label: '测试1',
                  value: 2,
                }
              ]
            },
            {
              label: '名字2',
              field: 'name2',
              setter: 'date',
              setterProps: {
                style: 'width: 100%'
              }
            },
          ],
          submit(model) {
            console.log(model);
          },
        });
        return {
          DemoForm,
        };
      },
      render() {
        return <this.DemoForm></this.DemoForm>;
      },
    };
  },
};
