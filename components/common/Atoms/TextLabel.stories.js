// TextLabel.stories.js
import TextLabel from './TextLabel.vue';

export default {
  title: 'Components/Atoms/TextLabel',
  tags: ['autodocs'],
  component: TextLabel,
  argTypes: {
    class: { control: 'text' },
  },
};

const Template = args => ({
  components: { TextLabel },
  setup() {
    return { args };
  },
  template: '<TextLabel v-bind="args">테스트</TextLabel',
});

export const Default = Template.bind({});
Default.args = {
  class: '',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  class: 'text-lg font-semibold text-gray-600',
  default: '테스트',
};
