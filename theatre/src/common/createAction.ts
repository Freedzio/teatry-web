export interface Action<T extends string> {
    type: T;
}

export type ActionWithPayload<T extends string, P extends object> = Action<T> & P;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P extends object>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P extends object>(type: T, payload?: P) {
    return payload === undefined ? { type } : Object.assign({}, { type }, payload);
}

export type FunctionType = (...args: any[]) => any;
export type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;