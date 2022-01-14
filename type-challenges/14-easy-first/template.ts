
type First<T extends any[]> = T extends [infer a, ...infer b] ? a : never