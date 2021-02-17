---
title: "【TypeScript入門】クラスの型定義（インターフェースと型エイリアスの違い）"
date: "2020-11-09"
categories: 
  - "javascript"
  - "typescript"
---

## クラスの型定義について復習

前回に記事ではTypeScriptにおける、関数とクラスの基本的な型の定義方法と、クラスの継承・合成についてみていきました。

https://terrblog.com/typescript%e5%85%a5%e9%96%80%e2%91%a2%e9%96%a2%e6%95%b0%e3%81%a8%e3%82%af%e3%83%a9%e3%82%b9%e3%81%ae%e5%9e%8b/

記事の中で、クラスは型定義を目的とした抽象クラスと、実装部分の2通りに分かれると伝えました。  
今回はこの部分を詳しく見ていきましょう。

## インターフェース

抽象クラスには現状でabstract修飾子を使った方法と、インターフェースを使った方法があります。  
abstract修飾子を使った方法は抽象クラスでありながら、実装部分を含む事ができる為、保守性を考えて現状ではあまり使われていません。

今回はインターフェースのみを説明していきます。

```
//インターフェースにてShapreを定義
interface Shape {
  readonly name: string;
  getArea: () => number;
}

//インターフェースにてQuadrangleを定義
interface Quadrangle {
  side: number;
}

//Rectabgleクラスには抽象クラスのShapreとQuadrangleの型を使う！！
class Rectangle implements Shape, Quadrangle {
  readonly name = 'rectangle';
  side: number;
  sideB: number;
  constructor(side: number, sideB: number) {
    this.side = side;
    this.sideB = sideB;
  }
  getArea = (): number => this.side * this.sideB;
}

const rect = new Rectangle(6, 5);
console.log(rect.getArea());
```

この様に

```
interface Quadrangle {
  side: number;
}
```

で定義できて、

```
class Rectangle implements Quadrangle { }
```

で使う事ができる！！詳しい使い方などはこちらの記事が参考になります。

https://qiita.com/nogson/items/86b47ee6947f505f6a7b

## 型エイリアス

任意の型に別名を与えて再利用できるものを「型エイリアス」と呼びます。  
定義の仕方はインターフェース同様です。

```
type Enemy = {
  hp: number
  mp: number
}
```

## インターフェースと型エイリアスの違い

基本的に、現在ではインタフェースよりも型エイリアスの方ができる事が多いです。  
その上で型エイリアスの方が柔軟性と保守性が高い為、**モダンな環境では型エイリアスの方が好まれています。**

それぞれの違いについてみていきましょう。

### 型エイリアスは任意の型を定義できる

```
type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';
```

などの様にリテラル型なども使えます。インターフェースではオブジェクトとクラスのみしか参照できません。

### インターフェースは既存の方を名前を変えずに拡張できてしまいます。

```
interface User {
 age: number; 
}

interface User {
 species: 'rabbit' | 'bear' | 'fox' | 'dog';
}
```

### 型エイリアスはユニオン型とインターセクションで複雑な型表現ができる

#### ユニオン型

ユニオン型が『A または B』と適用範囲を増やしていく型の表現方法です。

```
type A = {
  foo: number;
  bar?: string;
};
type B = { foo: string };
type C = { bar: string };
type D = { baz: boolean };

typeAorB=A|B; //ユニオン型AまたはB{foo:number|string;bar?:string} 
typeAorC=A|C; //ユニオン型AまたはC{{foo:number;bar?:string}or{bar:string} 
typeAorD=A|D; //ユニオン型AまたはD{{foo:number;bar?:string}or{baz:boolean}
```

#### インターセクション型

インターセクション型は『A かつ B』と複数の型をひとつに結合させる事ができます。  
→オブジェクト型の合成が可能になります。

```
type A = { foo: number };
type B = { bar: string };
type C = {
  foo?: number;
  baz: boolean;
};

typeAnB=A&B; //インターセクション型AかつB{foo:number,bar:string} 
typeAnC=A&C; //インターセクション型AかつC{foo:number,baz:boolean} 
```

ユニオン型とインターセクション型を組み合わせることで、複雑な型表現も可能です。

```
type A = { foo: number };
type B = { bar: string };
type C = {
  foo?: number;
  baz: boolean;
};

typeCnAorB=C&(A|B);　
// Cかつ（AまたはB）
//{ foo: number, baz: boolean } or { foo?: number, bar: string, baz: boolean }
```

## 型の Null 安全性を保証する

TypeScript はデフォルトの設定ではすべての型に null と undefined を代入できてしまいます。  
このままだと静的型付け言語の特徴でもあるnull安全性を担保できません。

対策として、コンパイラオプション strictNullChecks を設定する必要があります。

りあクト！ TypeScriptで始めるつらくないReact開発 第3版【Ⅰ. 言語・環境編】

tsconfig.json ファイルに対して次の様に記述してください。

```
"strictNullChecks": true,
```

もしnullを許容したい場合はこの様に書けばOKです。

```
let foo: string | null = 'fuu';
```

## まとめ

今回はクラスの型定義の方法となる

・インターフェース  
・型エイリアス

についてをメインに解説していきました。現状では、型エイリアスの方が機能として優れていると説明しましたが、現場レベルではまだまだインターフェースが使われている場合もある為、今回はインターフェースの解説も混ぜました。

もし、新しくコードを書く際があれば、型エイリアスでの書き方をお勧めします。

また、今回の記事で、TypeScriptの基本的な型は全て解説しました。  
ここまでの内容を抑えていれば、TypeScriptのコードを読む際にもわかる事が増えていると思います。

次回以降は応用編として、より高度な型表現を解説していきます。  
以上です。

[Twitter](https://twitter.com/teriteriteriri)もやっているので、興味あればご覧になってください！
