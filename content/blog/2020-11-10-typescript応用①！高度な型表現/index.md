---
title: "【TypeScript】高度な型表現について"
date: "2020-11-10"
categories: 
  - "javascript"
  - "typescript"
---

## 高度な型表現とは？

前回までの書いたTypeScript入門ではこちらの記事でプリミティブ型、オブジェクトやElum型、リテラル型、タプル型、unknown型、never型などの基本的な型を解説し、

https://terrblog.com/typescript%e3%81%a8%e3%81%af%ef%bc%9f%ef%bc%9fjavascript%e3%81%a8%e3%81%ae%e9%81%95%e3%81%84%e3%82%84%e7%89%b9%e5%be%b4%e3%82%92%e8%a9%b3%e3%81%97%e3%81%8f%e8%a7%a3%e8%aa%ac/

関数やクラスの型定義について、

https://terrblog.com/typescript%e5%85%a5%e9%96%80%e2%91%a2%e9%96%a2%e6%95%b0%e3%81%a8%e3%82%af%e3%83%a9%e3%82%b9%e3%81%ae%e5%9e%8b/

こちらの記事ではクラスの型定義に使うインターフェースと型エイリアスについてみていきました。

https://terrblog.com/typescript%e5%85%a5%e9%96%80%e2%91%a3%ef%bc%81%e3%82%af%e3%83%a9%e3%82%b9%e5%bf%9c%e7%94%a8%ef%bc%88%e3%82%a4%e3%83%b3%e3%82%bf%e3%83%bc%e3%83%95%e3%82%a7%e3%83%bc%e3%82%b9%e3%81%a8%e5%9e%8b%e3%82%a8/

ここからは高度な型の表現として、型自体を演算したり、関数の様に扱ったりしていきます。  
|や&、型引数などの延長の様な考え方を用いていきます。

高度な型表現を用いる事で、既にある型定義を再利用したり、全てを書かなくても網羅的に定義できたりします。  
モダンなコードではこういった表現もよく使われるので、まずは読んで意味を理解できると良いでしょう。

## typeof 演算子

typeof演算子は変数から型を抽出してくてます。

```
const arr = [1, 2, 3];
type NumArr = typeof arr;

//arrから型を抽出してNumArrに当てはめている
//arrはnumber[]型なので、val2ではエラーになる
const val: NumArr = [4, 5, 6];
const val2: NumArr=['foo','bar','baz']; //エラー
```

typeof演算子は今回のarrをNumArrに当てはめた様に、**自分で型定義を書かなくても既にある変数の型を抜き出して使える為、実際の開発では重宝します！**

## **keyof**

オブジェクトの型からキーのみ抜き出してくるものです。

```
const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
};

type PermsChar = keyof typeof permissions;
//keyof により permissionsのオブジェクトの型のキーのみを抜き出します
// 'r' | 'w' | 'x'

const readable: PermsChar = 'r';
const writable: PermsChar = 'z';  
//　zはpermissionsのオブジェクトの型にないのでエラー
```

ちなみにkey部分ではなく、value部分を抜き出したい時はこの後に説明する組み込みユーティリティー型を用います。

## 組み込みユーティリティ型

任意のオブジェクトのプロパティーの型を抜き取りる際に使います。  
TypeScriptが元から用意している物がいくつもあるので、特徴ごとに見ていきましょう。

### **各プロパティの属性をまとめて変更する類のもの**

- Partial<T> ...... T のプロパティをすべて省略可能にする
- Required<T> ...... T のプロパティをすべて必須にする
- Readonly<T> ...... T のプロパティをすべて読み取り専用にする

TypeScriptではプリミティブ型の再代入はできないが、オブジェクト型だとプロパティー を後から変更ができてしまう為、Readonly<T>で変更不可にして、保守性を保つ方法は公式のReactのでもよく使われます。

### **オブジェクトの型からプロパティを取捨選択する性質のユーティリティ型**

- Pick<T,K> ...... T から K が指定するキーのプロパティだけを抜き出す
- Omit<T,K> ...... T から K が指定するキーのプロパティを省く

例を見ていきましょう。

```
type Todo = {
　title: string; description: string; isDone: boolean;
};

type PickedTodo = Pick<Todo, 'title' | 'isDone'>;
// {title:string,isDone:boolean}

type OmittedTodo = Omit<Todo, 'description'>;
// {title:string,isDone:boolean}
```

どちらでも結果は同じ様になるので、実際の開発ではお好みで使い分けてください。

### **列挙的な型を加工するユーティリティ型**

- Extract<T,U> ...... T から U の要素だけを抜き出す
- Exclude<T,U> ...... T から U の要素を省く

```
type Permission = 'r' | 'w' | 'x';

type RW1 = Extract<Permission, 'r' | 'w'>;
type RW2 = Exclude<Permission, 'x'>;

//どちらも 'r' | 'w'となる
```

### **任意の型から null と undefined だけを省いてnull 非許容にするためのユーティリティ型**

- NonNullable<T> ...... T から null と undefined を省く

```
type T1 = NonNullable<string | number | undefined>;
type T2 = NonNullable<number[] | null | undefined>;

const arr: T1 = undefined; 
const arr: T2 = null;  

//どちらもエラーになる
```

### **関数を扱うユーティリティ型**

- Parameters<T> ...... T の引数の型を抽出し、タプル型で返す
- ReturnType<T> ...... T の戻り値の型を返す

```
const f1 = (a: number, b: string) => { console.log(a, b); };
const f2 = () => ({ x: 'hello', y: true });

type P1 = Parameters<typeof f1>;  //[number,string]
type P2 = Parameters<typeof f2>;  //[]
type R1 = ReturnType<typeof f1>;  //void
type R2 = ReturnType<typeof f2>;  //{x:string;y:boolean}
```

## 関数のオーバーロード

日本語で多重定義とも呼びます。

同じメソッド名だけど、引数の型や個数による与え方で異なるメソッドが実行される感じです。

少し長くなりますが、以下の例を見ていきましょう。

```
class Brooch {
pentagram = 'Silver Crystal';
}

type Compact = { silverCrystal: boolean;};


class CosmicCompact implements Compact { silverCrystal = true;
　cosmicPower = true;
}

class CrisisCompact implements Compact { silverCrystal = true;
　moonChalice = true;
}

function transform(): void;
function transform(item: Brooch): void;
function transform(item: Compact): void;
function transform(item?: Brooch | Compact): void {

　if (item instanceof Brooch) { 
　console.log('Mooncrystalpower ,makeup!!');
　}
　 else if (item instanceof CosmicCompact) { 
　　console.log('Mooncosmicpower ,makeup!!!');
　} 
　　else if (item instanceof CrisisCompact) {
 　console.log('Mooncrisis ,makeup!');
　} 
　　else if (!item) { 
　　console.log('Moonprisimpower ,makeup!');
　}
　　else{
 　console.log('Itemisfake... ');
} }

transform();
transform(new Brooch()); transform(new CosmicCompact());
transform(new CrisisCompact());
```

引数によって型の定義が変わっていっています。

JavaSciptでは関数宣言が重複すると、単に再定義をするだけですが、  
TypeScriptでは、同じ名前の関数でも型が異なる宣言を重複させることでオーバーロードができます。

## まとめ

今回は高度な型表現と銘打って、定義した型を応用的に抽出する方法などを見ていきました。  
どの型表現も根本には**「毎回、いちいち型を自分で定義しなくても保守性が高い型定義を行い、それを再利用したい！！」**という思惑から使われています。

実際にTypeScriptに慣れている人が書いたコードは、わかりやすく入門的な定義ではなく、今回の様な型表現が多用されています。

いきなり自分で高度な型表現を使いこなすのは、難しいと思いますが、まずは熟練者が書いたコードの中に高度な型表現が入っていた時にちゃんと読める様になる事を目標にしてみると良いと思います。

身近にモダンなTypeScriptのコードがない時は、OSSのコードやTypeScript、Reactなどの公式のコードなどを読んでみるのも良い練習になると思います。  
[Twitter](https://twitter.com/teriteriteriri)もやっているので、興味あればご覧になってください！
