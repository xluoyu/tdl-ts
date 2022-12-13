
type MyExclude2<A, B extends A> = A extends B ? never : A;

type MyOmit<T, K extends keyof T> = {
  [P in MyExclude2<keyof T, K>] : T[P]
};
