import React, { useState } from 'react';

const UiProvider = (props) => {
  const { children } = props;

  const [menuOpen] = useState(true);

  return (
    <UiProvider.Provider value={{ menuOpen }}>{children}</UiProvider.Provider>
  );
};

export default UiProvider;
