import { Equal, Expect } from '@type-challenges/utils'

// 断言了const
// 所以现在是 readOnly

let tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
let spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]