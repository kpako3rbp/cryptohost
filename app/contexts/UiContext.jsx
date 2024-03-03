import { createContext } from 'react';

const UiContext = createContext({
  isMenuOpen: true,
});

export default UiContext;
