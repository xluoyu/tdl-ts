type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T

// infer P 中的 P 即是表示待推断的返回值类型。