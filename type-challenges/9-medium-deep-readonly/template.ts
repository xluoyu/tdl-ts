type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
  // readonly [k in keyof T]: keyof T[k] extends never ? T[k] : DeepReadonly<T[k]>
}