import Component from '.';

const playgroundGroup = 'Common';
const eventsGroup = 'Events';
const ariaGroup = 'Aria';
const elseGroup = 'Everything Else';

interface PropType {
  defaultValue: unknown;
  description: string;
  name: string;
  required: boolean;
  type: {
    name: string;
  };
  table: {
    category: string;
  };
}

interface DocGenType {
  __docgenInfo: {
    description: string;
    displayName: string;
    props: Record<string, PropType>;
  };
}
const Playground = (args: Record<string, { table?: unknown; type?: unknown }>, type?: unknown): unknown => {
  // eslint-disable-next-line no-loops/no-loops, no-restricted-syntax
  for (const key in args) {
    if (!key.startsWith('on')) {
      // eslint-disable-next-line no-param-reassign
      args[key].table = { category: playgroundGroup };
    }
  }
  if (type) {
    const docType = type as unknown as DocGenType;
    // eslint-disable-next-line no-underscore-dangle
    const props = docType.__docgenInfo?.props;

    // eslint-disable-next-line guard-for-in, no-loops/no-loops, no-restricted-syntax
    for (const key in props) {
      let category: string = elseGroup;

      if (args[key] && !key.startsWith('on')) {
        category = playgroundGroup;
      } else if (key.startsWith('aria')) {
        category = ariaGroup;
      } else if (key.startsWith('on')) {
        category = eventsGroup;
      }

      // eslint-disable-next-line no-param-reassign
      args[key] = {
        ...args[key],
        table: {
          category,
        },
      };
    }
  }
  return args;
};

export default {
  args: {},
  argTypes: Playground(
    {
      children: { type: 'string' },
    },
    Component,
  ),
  component: Component,
  tags: ['autodocs'],
  title: 'Atoms / Component',
};
