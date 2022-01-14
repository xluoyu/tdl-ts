type MyExclude<T, U> = T extends U ? never : T

// extends 在类型表达时，有下面两种用法：
// 1. 用于类型的继承   
/**
 * 
interface Person {
    name: string;
    age: number;
}

interface Player extends Person {
    item: 'ball' | 'swing';
}
 */

// 2. 判断是否是能赋值给另一个类型
/**
 * 
  如果 T 可以满足类型 Person 则返回 Person 类型，否则为 T 类型
  type IsPerson<T> = T extends Person ? Person : T;
 */