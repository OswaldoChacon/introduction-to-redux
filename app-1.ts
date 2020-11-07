// tipado de una Acción
interface Action {
    // tipo de acción
    type: string,
    // parametros de la acción
    payload?: any
}

// acción a realizar
// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// }

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
    }
    return state;
}


// usar reducer
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 4
}

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));