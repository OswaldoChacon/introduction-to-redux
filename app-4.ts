import { createStore, Store } from "redux";
import { incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

const store: Store = createStore(contadorReducer);


store.subscribe(() => {
    console.log('subs:', store.getState())
})

store.dispatch(incrementadorAction);

store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);

