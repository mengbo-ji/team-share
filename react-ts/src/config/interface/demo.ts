
export interface IFoo {
  foo: string;
  id: number;
}

interface IBar {
  bar: string;
  id: number;
}


// any 可以赋值任何变量
// let a = 1
// a = 's1'

// void 申明为 void 类型的变量，只能赋予 undefined 和 null
// let a: void;
// a = '1'

// never 表示永远不会有值的一种类型，比如抛错
// function fn(): never {
//   throw new Error()
// }

// |

type a = 'a' | 'b';

// & （并集）
// type IA = {
//   id: number;
//   label: string;
// }
// type IB = {
//   id: number;
// }


// ?
// type IList = {
//   id?: number;
// }

// const a1: IList = {}

// // !
// let c: undefined | string;

// let b: string = c!;

// keyof

interface IList {
  label: string;
  id: number;
}

type K = keyof IList;

// in
type IListPreview1 = {
  [ P in K ]: any
}

// extends
interface IList1 extends IList{}


// Partial
// Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ? 。
type Partial<T> = {
  [ P in keyof T ]?: T[P]
}

type IPartialPreview = Partial<IList>;

const obj: IPartialPreview = {}

// Required
// Required<T> 的作用就是将某个类型里的属性全部变为必选项。
type Required<T> = {
  [ P in keyof T ]-?: T[P]
}


type IRequiredPreview = Required<IList>;

const obj: IRequiredPreview = {}


// Readonly
// Readonly<T> 将某个类型所有属性变为只读属性
type Readonly<T> = {
  readonly [ P in keyof T ]: T[P]
}

type IReadonlyPreview = Readonly<IList>;

const a1: IReadonlyPreview = {
  id: 1,
  label: '1'
}

// a1.id = 2


// Record
// Record<T, K extends keyof any> 的作用是将 K 中所有的属性的值转化为 T 类型。


type Record<K extends keyof any, T> = {
  [P in K]: T;
};
interface Foo {
  foo: string;
}

type Bar = "a" | "b" | "c";

const x: Record<Bar, Foo> = {
  a: { foo: '1' },
  b: { foo: '1' },
  c: { foo: '1' },
};


// Pick
// Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。
type Pick<T, K extends keyof T> = {
  [ P in K ]: T[K]
}

type IPick = Pick<IList, 'label'| 'id'>


// Exclude
// Exclude<T, U> 的作用是将某个类型中属于另一个类型的抹除
type Exclude<T, U> = T extends U ? never : T;

type a3 = Exclude<>;
type a4 = 'a' | 'c' |'b';

// Extract
// Extract<T, U> 的作用从T中提取U