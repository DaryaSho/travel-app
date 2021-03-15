export interface IState {
  currentPlace: {
    capital: string
  }
}

interface IAction {
  type: string,
  payload?: any
}

const initialState: IState = {
  currentPlace: {
    capital: 'Moscow',
  },
};

export const appReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default: return state;
  }
};
