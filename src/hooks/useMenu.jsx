import { useContext } from 'react';
import { UIContext } from '../context/UIContext';

const useMenu = () => {
  const { uiState, setUiState } = useContext(UIContext);
  console.log(setUiState);

  return {
    uiState,
    setUiState,
  };
};

export default useMenu;
