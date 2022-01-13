type MyPick<T, K extends keyof T> = {
  [P in K] : T[P];
}

function MyPick (obj, keys) {
  const res = {}

  keys.forEach(key => {
    if (key in obj) {
      res[key] = obj[key]
    }
  })

  return res
}