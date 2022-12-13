/**
 * infer type 声明一个变量
 * 
 * A extends B ? C : D  A是否为B的子集，true则C，false则D
 * 
 * (...args: any[]) => infer R 执行函数后返回的类型为R
 * 
 */

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any