import { AnyAction } from 'redux';

export type ActionWithPayload<T extends string, P> = {
  type: T;
  payload: P;
};

export type Action<T extends string> = {
  type: T;
};

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => any>(
  actionCreator: AC
): Matchable<AC> {
  const type = actionCreator().type;
  const matchFn = (action: AnyAction): action is ReturnType<AC> => {
    return action.type === type;
  };

  return Object.assign(actionCreator, {
    type,
    match: matchFn,
  });
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T): Action<T>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  return { type, payload };
}