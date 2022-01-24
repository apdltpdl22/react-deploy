import { createStore } from 'redux'

const add = document.getElementById("add")
const number = document.querySelector("span")
const minus = document.getElementById("minus")

number.innerText = 0;

const ADD = "ADD"
const MINUS = "MINUS"

//reducer
const countModifier = (count = 0, action) => {
  switch (action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count -1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

// Action은 반드시 object여야 하고 'type:'으로 시작
const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}

add.addEventListener("click", () => handleAdd())
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}))