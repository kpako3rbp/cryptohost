import React, { useContext, useState } from 'react';

const UiProvider = (props) => {
  const {children} = props;

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <UiProvider.Provider value={{ menuOpen, setLightTheme, setDarkTheme, themes }}>
      {children}
    </UiProvider.Provider>
  );

};

export default UiProvider;
