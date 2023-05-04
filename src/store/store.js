import { createStore } from "redux";



const initialState = {
    title: 'The Lord of the Rings',
    characters: [],
}
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            document.title = action.payload
            return {
                ...state,
                title: action.payload
            }
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);

  export default store;