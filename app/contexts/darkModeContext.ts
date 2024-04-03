import React from 'react';

export type TDarkMode = {
  isDark: boolean;
};

interface TActions {
  type: string;
}

interface IDarkModeContext {
  darkModeState: TDarkMode;
  darkModeDispatch: React.Dispatch<TActions>;
}

export const initialDarkModeState = {
  isDark: false,
};

export const darkModeReducer = (state: TDarkMode, action: TActions) => {
  switch (action.type) {
    case 'dark':
      return {
        ...state,
        isDark: true,
      };
    case 'light':
      return {
        ...state,
        isDark: false,
      };
    default:
      return state;
  }
};

export const DarkModeDispatch = React.createContext<IDarkModeContext>({
  darkModeState: initialDarkModeState,
  darkModeDispatch: () => {},
});
