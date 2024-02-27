// Chip.stories.js
import Chip from './Chip.vue';

export default {
  title: 'Components/Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'text' },
    label: { control: 'text' },
    link: { control: 'text' },
    isClosable: { control: 'boolean' },
  },
};

const Template = args => ({
  components: { Chip },
  setup() {
    return { args };
  },
  template: '<Chip v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Chip',
  color: 'orange',
  link: '',
  isClosable: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Chip',
  color: 'blue',
  link: '',
  isClosable: true,
};
