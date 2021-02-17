---
title: "【TypeScript】型ガードと型アサーションでunknown型を使い勝手良くする"
date: "2020-11-14"
categories: 
  - "javascript"
  - "typescript"
---

# はじめに

TypeScript3.0から登場のunknown型。  
any型から進化し、型安全は保証されていますが、  
型を特定する処理を加えないと、コンパイルを通してくれません。

そこで今回はunknown型と併用して型を特定してあげる役割を持っている「型アサーション」と「型ガード」についてみていきます。

**ちなみにunknownとの抱き合わせの本命は「型ガード」で、「型アサーション」はオマケ程度！って認識でOKです。**

# 型アサーション（as）について

型アサーションとは、型定義の上書き機能です。  
「アサーション＝断定」の意味通り、型推論を押しのけて、型定義を上書きできるので、unknown型を上書きしてコンパイルを通すのですね。

書き方は`as`の後に上書きしたい型を書きます。

```
type Foo {
    bar: number;
    bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';
```

普通ならfooは空のオブジェクトとして生成されているので、`foo.bar、foo.bas`は存在せずコンパイルエラーになります。

しかし、型アサーションでFoo型を上書きしているので、エラーにならない訳です。

## 型アサーションの危険性

大前提として、型アサーションはあまり使わない方が良いです！！！

**型アサーションを使えば、任意のタイミングで型を上書きできる →型安全性が全く保証されない**

となるからです。

## 型アサーションの使い所

unknown型との抱き合わせは、基本的に型ガードを使う事が推奨されています。

型アサーションの使い道として、多くのコンパイルエラーをとりあえず消したい時などが有効です。  
例えばJsなど型定義がないコードから、Tsへの移行時などで、型がまだちゃんと敷かれていない時などの応急処置に使うイメージですね。

# 型ガードについて

型ガードを使う事で、ブロック内のオブジェクトの型を制限出来ます。  
そうすることで、unknown型のままではコンパイルエラーになっていた処理を安全に通す事ができます。

## typeofでプリミティブ型を扱う

まず、プリミティブ型の型ガードにはtypeofを用います。

```
function doSomething(x: unknown) {
    if (typeof x === 'string') {

         //型ガードにより、xがstring型と判断されている為、substr()が使える
        console.log(x.substr(1)); 
    }
    //unknownのままだと、string型とは特定できないのでエラーになる
    x.substr(1);
}
```

## instanceofでクラスインスタンスを扱う

クラスの場合はinstanceofを使います。  
使い方はtypeofの時と、ほとんど一緒です。

```
class Base { common = 'common'; }
class Foo extends Base { foo = () => { console.log('foo'); } }
class Bar extends Base { bar = () => { console.log('bar'); } }

const doDivide = (arg: Foo | Bar) => {

  if (arg instanceof Foo) {
    arg.foo();  
    arg.bar(); //Fooの場合は、barはないのでエラー

   //instanceofはeif文の様にlseを使うことも可能
  } else {
    arg.bar();  
    arg.foo(); //Barの場合は、fooはないのでエラー
  }
  console.log(arg.common);
};
doDivide(new Foo());
doDivide(new Bar());
```

## ユーザー定義の型ガード（is）

プリミティブ型やクラスインスタンス型と違い、オブジェクト型などに対応する型ガードはTypeScriptには用意がありません。そこで自分たちで型ガードを作る必要が出てきます。

「is」は型ガードの条件式を切り出す事ができ、ユーザー定義の型ガードと呼ばれます。

関数の返り値を引数`is T`と定義すると、  
「その関数がtrueを返す場合は引数はTであり、falseを返す場合はTではない」という型ガードの条件式になります。

```
const bar = (arg: number | string) => {
  const isNumber = (arg: number | string): arg is number =>

    //戻り値でtrueを返しているので、argはnumber型になる
    typeof arg === "number";
};
```

ユーザー定義の型ガード(is)も、コンパイラに型を開発者が押し付ける事ができるという点では、  
型アサーション(as)と危険度があまり変わらない為、実行時のエラーが出ない様に漏れを無くしましょう。

# まとめ

any型からの反動で、とりあえず全てをコンパイルエラーしているレベルのunknown型ですが、  
型アサーションと型ガードを使いこなす事で、実際に使い勝手よく書く事ができます。

最後まで読んでいただきありがとうございます。  
[Twitter](https://twitter.com/teriteriteriri)もやっているので、興味あればご覧になってください！

## 他のTypeScriptに関する記事一覧

・[【TypeScript入門】JavaScriptとの違いや特徴を詳しく解説](https://terrblog.com/typescript%e3%81%a8%e3%81%af%ef%bc%9f%ef%bc%9fjavascript%e3%81%a8%e3%81%ae%e9%81%95%e3%81%84%e3%82%84%e7%89%b9%e5%be%b4%e3%82%92%e8%a9%b3%e3%81%97%e3%81%8f%e8%a7%a3%e8%aa%ac/)  
・[【TypeScript入門】基本的な型の定義方法](https://terrblog.com/typescript%e5%85%a5%e9%96%80%e2%91%a1%ef%bc%81%e5%9f%ba%e6%9c%ac%e7%9a%84%e3%81%aa%e5%9e%8b%e3%82%92%e5%be%b9%e5%ba%95%e8%a7%a3%e8%aa%ac%ef%bc%81/)  
・[【TypeScript入門】関数とクラスの型定義（継承と合成）](https://terrblog.com/typescript%e5%85%a5%e9%96%80%e2%91%a2%e9%96%a2%e6%95%b0%e3%81%a8%e3%82%af%e3%83%a9%e3%82%b9%e3%81%ae%e5%9e%8b/)  
・[【TypeScript入門】クラスの型定義（インターフェースと型エイリアスの違い）](https://terrblog.com/typescript%e5%85%a5%e9%96%80%e2%91%a3%ef%bc%81%e3%82%af%e3%83%a9%e3%82%b9%e5%bf%9c%e7%94%a8%ef%bc%88%e3%82%a4%e3%83%b3%e3%82%bf%e3%83%bc%e3%83%95%e3%82%a7%e3%83%bc%e3%82%b9%e3%81%a8%e5%9e%8b%e3%82%a8/)  
・[【TypeScript】高度な型表現について](https://terrblog.com/typescript%e5%bf%9c%e7%94%a8%e2%91%a0%ef%bc%81%e9%ab%98%e5%ba%a6%e3%81%aa%e5%9e%8b%e8%a1%a8%e7%8f%be/)

## 参考文献

・[りあクト！ TypeScriptで始めるつらくないReact開発 第3版【Ⅰ. 言語・環境編】](https://booth.pm/ja/items/2368045)  
　- 4章 TypeScriptで型をご安全に  
・[TypeScript の型ガードの注意点と解決法](https://numb86-tech.hatenablog.com/entry/2020/06/30/154343)  
・[unknown型とタイプガードと私](https://qiita.com/ma2saka/items/eb2d26236c20afb7f764)  
・[TypeScriptの as って何です？(型アサーションについて)](https://qiita.com/irico/items/9d71060e52ffc1e79962)
