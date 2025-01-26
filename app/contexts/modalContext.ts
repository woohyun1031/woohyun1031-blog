import React from 'react';

export type TModalState = {
  isShow: boolean;
};

interface TActions {
  type: string;
}

interface IModalContext {
  modalState: TModalState;
  modalDispatch: React.Dispatch<TActions>;
  openModal: (value: React.ReactElement) => void;
  closeModal: () => void;
}

export const initialModalState = {
  isShow: false,
};

export const modalReducer = (state: TModalState, action: TActions) => {
  switch (action.type) {
    case 'show':
      return {
        ...state,
        isShow: true,
      };
    case 'close':
      return {
        ...state,
        isShow: false,
        content: null,
      };
    default:
      return state;
  }
};

export const ModalDispatch = React.createContext<IModalContext>({
  modalState: initialModalState,
  modalDispatch: () => {},
  openModal: () => {},
  closeModal: () => {},
});
