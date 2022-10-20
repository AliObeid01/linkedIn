import { createStore } from "redux";
import reducer from "./Auth/reducer";
import { loadState, saveState } from "./local";

const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
