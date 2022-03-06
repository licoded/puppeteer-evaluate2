type IFunction = (...args: Array<any>) => any;

type UndefIndex<T extends any[], I extends number> = {
  [P in keyof T]: P extends Exclude<keyof T, keyof any[]> ? P extends `${I}` ? undefined : T[P] : T[P]
}

type FilterUndefined<T extends any[]> = T extends [] ? [] :
  T extends [infer H, ...infer R] ?
  H extends undefined ? FilterUndefined<R> : [H, ...FilterUndefined<R>] : T;

type SpliceTuple<T extends any[], I extends number> = FilterUndefined<UndefIndex<T, I>>;
type removeFirst<T extends any[]> = SpliceTuple<T, 0>;