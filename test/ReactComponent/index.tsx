// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

const ReactComponent: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <button
      onClick={(): void => {
        setIndex(index + 1);
      }}
      type="button"
    >
      Button Clicks: {index}
    </button>
  );
};

export default ReactComponent;
