// tipado de una Acción
export interface Action {
    // tipo de acción
    type: string,
    // parametros de la acción
    payload?: any
}

export interface Reducer<T> {
    (state: T, action: Action): T
}