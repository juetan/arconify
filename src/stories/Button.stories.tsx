import type { Meta, StoryObj } from "@storybook/vue3";
import HelloWorld from "../components/HelloWorld.vue";
import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "基础/按钮",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    backgroundColor: {
      control: "color",
    },
    onClick: {
      action: "clicked",
    },
  } as any,
  args: {
    primary: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
  name: "测试名字",
  args: {
    primary: true,
    label: "Button",
  },
  render() {
    return {
      name: "dd",
      render() {
        return (
          <div>
            <div>
              <div>测试1</div>
              <HelloWorld></HelloWorld>
            </div>
            <div>
              <div>测试1</div>
              <HelloWorld></HelloWorld>
            </div>
            <div>
              <div>测试1</div>
              <HelloWorld></HelloWorld>
            </div>
          </div>
        );
      },
    };
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};
