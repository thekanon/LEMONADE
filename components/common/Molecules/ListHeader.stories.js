// ListHeader.stories.ts
import ListHeader from './ListHeader.vue';

export default {
  title: 'Components/Molecules/ListHeader',
  component: ListHeader,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom class name for the list header',
    },
    headerList: {
      control: 'object',
      description: 'List of header items',
    },
  },
};

const Template = args => ({
  components: { ListHeader },
  setup() {
    return { args };
  },
  template: '<ListHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  className: '',
  headerList: [
    { id: 'header1', text: 'Header 1', className: 'text-red-500' },
    { id: 'header2', text: 'Header 2', className: 'text-blue-500' },
    { id: 'header3', text: 'Header 3', className: 'text-green-500' },
  ],
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'bg-gray-200',
  headerList: [
    { text: '글 번호', id: 1 },
    { text: '글 제목', className: 'col-span-5 md:col-span-2', id: 2 },
    { text: '유저 ID', className: 'hidden md:table-cell', id: 3 },
    { text: '작성일', className: 'hidden md:table-cell', id: 4 },
    { text: '수정일', className: 'hidden md:table-cell', id: 5 },
  ],
};
