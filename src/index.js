// write your createStore function here
const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
}

store.dispatch({type: "ADD_CANDY"(22)});

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch