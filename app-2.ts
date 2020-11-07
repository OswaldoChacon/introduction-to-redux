import { Action } from "./ngrx-fake/ngrx";
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from "./contador/contador.actions";
// función comun y corriente, recibe dos parametros y siempre retorna un estado
function reducer(state = 10, action: Action) {

    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
    }
    return state;
}



console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, resetAction));
