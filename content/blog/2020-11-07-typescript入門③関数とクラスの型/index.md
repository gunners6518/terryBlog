---
title: "【TypeScript入門】関数とクラスの型定義（継承と合成）"
date: "2020-11-07"
categories: 
  - "javascript"
  - "typescript"
---

## 関数の型定義

関数で型を使う場合は、引数は必ず指定する必要があります。  
戻り値は型推論に頼って省略も可能です。

```
const add =  function (x:number,y:number):number {
 return x + y
}

```

上記の例では、引数、戻り値全てにnumber型を定義しました。

今回は戻り値がreturnだけなので、アロー関数で省略記法もできます。

```
const add = (x:number,y:number):number => x + y;
```

アロー関数に関して怪しい方はこちらの記事を参考にしてください。  

https://terrblog.com/javascript%e3%81%ae%e3%82%a2%e3%83%ad%e3%83%bc%e9%96%a2%e6%95%b0%e3%80%81%e7%84%a1%e5%90%8d%e9%96%a2%e6%95%b0%e3%82%92%e5%9f%ba%e7%a4%8e%e3%81%8b%e3%82%89%e5%88%86%e3%81%8b%e3%82%8a%e3%82%84%e3%81%99/

りあクト！ TypeScriptで始めるつらくないReact開発 第3版【Ⅰ. 言語・環境編】

### 関数に型引数を用いて、型を抽象化して再利用しやすくする

関数の型に引数の様なものを用いる事もできる。  
<引数>と表記して引数の前に書く。

```
const Array = <T>(arr1: T,arr2: T): T[] => [arr1,arr2] ;
Array(4,5);
// [4,5]


Array('foo','bar')
//['foo','bar']

Array('foo',2)
//エラー
```

この様に、Tには任意の型が入る。  
今回はどちらの引数もTの為、文字列型と数字型が入っている最後のパターンはエラーになる。

## クラスの型定義

以下の様に定義します。

ポイントはクラス、constractorの引数、メソッドには型宣言が必要という点です。

```
class Person {
  // クラスの型宣言
  name: string;
  age: number;

  // constructorの引数に型宣言
  constructor(name: string, age: number) {

    //戻り値には型がいらない
    this.name = name;
    this.age = age;
  }
  //メソッドに型宣言
  profile(): string {
    return `name: ${this.name} age: ${this.age}`;
  }
}
```

### アクセス修飾子

クラス内では以下のアクセス修飾子を用いてメンバーのアクセスを制限できます。

- public：自クラス、子クラス、インスタンスからアクセス可能。デフォルトはpublicになる
- protected：自クラス、子クラス、からアクセス可能。
- private：自クラスのみアクセス可能

### クラスの合成と継承

現状でクラスを使う際は、合成と継承という方法があります。  
先ほど定義した、Personクラスを用いて、お互いの特徴を見ていきましょう。

### 継承

既存のクラスを拡張して新たなクラスを作る事を継と呼びます。

以下の例では

・Personクラスを拡張して、string型のaddressを加えたPersonalInfoというクラスを作っています。

```
// extendsでPersonクラスを継承
class PersonalInfo extends Person {
  name ='personalInfo';
　
  //addressを拡張
  address :string

　//addressを加えた3つがconstructorに引数として書かれる
  constructor(name:string,age:number,address:string){

　　//Personクラスから引き継いでいるname、ageはsuperにて呼び出しが必要
    super(name,age)

    this.address = address 

  }
}
```

### 合成

合成の説明ではこちらの長方形の面積を求めるクラスを使います。

```
class Rectangle {
  readonly name = "rectangle";
  sideA: number;
  sideB: number;
  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea = (): number => this.sideA * this.sideB;
}
```

このRectangleから引数を1だけもらって、正方形の面積として計算するクラスを作ります。

```
class Square {
  readonly name = "square";
  side: number;
  constructor(side: number) {
    this.side = side;
  }

　//ここでRectangleを新しい形で合成し直している。
　//無駄な引数は引き継がずに、getAreaにのみ関与している。
  getArea = (): number => new Rectangle(this.side, this.side).getArea();
}
```

### 継承より合成を使うべき

ながらくコンポーネント指向の概念として、クラスは継承して使われてきました。  
しかい、TypeScriptに関してはコンポーネントの合成が推奨されています

理由は管理のしやすさです

継承しているPersonalInfoでは、name,ageも引き継ぎ子クラスが親クラスに強く依存しています。  
またメソッドも共有されてしまう為、親クラスの変更をしにくいというデメリットもあります。

**合成しているSquareでは、親クラスRectangleに対して、依存が少ないです。**  
**number型を2つ引数に渡せば、積を出してくれるAPIの様に使うことができる為、開発がしやすくなります。**

Reactの公式ドキュメントでも継承より合成が推されています！！

https://ja.reactjs.org/docs/composition-vs-inheritance.html

## TypeScriptにおけるクラスの役割

**クラスの役割は型定義と実装の2つです**！！  
全てを1つのクラスに入れるのではなく、型定義と実装部分を分けることで変更に強い設計ができます。

型定義を目的としたクラスを抽象クラスと呼び、abstract修飾子とインターフェースを用いた定義の方法があります。

現状では多種多様な使い方ができ、保守性も高いインターフェースがよく使われています。  
これに関して、次回の記事で詳しく書きます！

実装では、抽象クラスで定義した方を用いて、具体的なメソッドを入れていきます。

## まとめ

今回はTypeScriptでの関数とクラスの型定義についてみていきました。  
関数は型引数を使うことで汎用的な型定義ができる様になり、クラスは合成を使うことで親子間の依存が少なく分かりやすい実装を行う事が可能です。

今回説明した内容はTypeScriptの中でも複雑な分野だったので、難しかったら時間をかけて1行ずつ咀嚼してみてください。

最後まで読んでいただきありがとうございます。  
[Twitter](https://twitter.com/teriteriteriri)もやっているので、興味あればご覧になってください！
