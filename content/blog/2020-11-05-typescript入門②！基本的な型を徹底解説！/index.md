---
title: "【TypeScript入門】基本的な型の定義方法"
date: "2020-11-05"
categories: 
  - "javascript"
  - "typescript"
---

前回の記事ではTypeScriptの特徴や人気になった背景などを見ていきました。  

https://terrblog.com/typescript%e3%81%a8%e3%81%af%ef%bc%9f%ef%bc%9fjavascript%e3%81%a8%e3%81%ae%e9%81%95%e3%81%84%e3%82%84%e7%89%b9%e5%be%b4%e3%82%92%e8%a9%b3%e3%81%97%e3%81%8f%e8%a7%a3%e8%aa%ac/

その中でTypeScriptを「型定義ができるJavaScript」と表現しましたが、今回は基本的な型を説明していきます。

## 型アノテーション

JavaScriptでは変数を定義の仕方と、TypeScriptの定義の仕方を見比べてみましょう。

```
//JavaScript
const num = 3 ;

//TypeScript
const num :number = 3;

```

基本的な宣言の仕方は同じですが、TypeScriptでは「値：型」というフォーマットで書きます。  
この「値：型」の書き方を型アノテーションと呼びます。

これにより宣言された型に不整合があると、コンパイルエラーを吐き出します。

## 型推論

TypeScriptは先ほど述べた、型アノテーションと合わせて型推論という特徴があります。  
文字通り、文脈からコンパイラが型を推測し、宣言時に型の入力を省略しても自動で補完してくれるとても優れた機能です。

型推論と型アノテーションを踏まえて、JavaScriptとTypeScriptの挙動の違いを見てみましょう。

### JavaScriptの場合

```

const s = '123'; /String型を代入
const n =456;　//number型を代入

>s * 3
//「369」
// Jsの「暗黙の型変換」により、sの値がString型からnumber型に変えられている。
```

### TypeScriptの場合

```
const s = '123';　//型推論によりString型の型付けがされる
const　n=456;　//型推論によりnumber型の型付けがされる

>s * 3
//[eval].ts:4:1 - error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
//変数sに入っているデータはString型なので、計算できずにエラーとなる。
```

## JavaScript と共通の型

### プリミティブ型

プリミティブ型は基本的にJavaScriptと同じ7種類です。

- Boolean 型 ...... true および false の 2 つの真偽値を扱うデータ型。型名は boolean
- Number 型 ...... 数値を扱うためのデータ型。型名は number
- BigInt 型 ...... number 型では扱いきれない大きな数値(以上)を扱うための型。型名は bigint
- String 型 ...... 文字列を扱うためのデータ型。型名は string
- Symbol 型 ......「シンボル値」という固有の識別子を表現する値の型。型名は symbol
- Null 型 ...... 何のデータも含まれない状態を明示的に表す値。型名は null
- Undefined 型 ......「未定義」であることを表す値。型名は undefined

###   
配列型

```
const numArr: number[] = [1, 2, 3];
```

この様に定義するとnumber型の配列が作れる。

### オブジェクト

keyと値、それぞれに型の定義をする。

```
const red: { rgb: string, opacity: number } = { rgb: 'ff0000', opacity: 1 };
```

#### インターフェース

今回の様に{ rgb: string, opacity: number }とkeyと値を毎回定義するのは面倒な為、オブジェクトの型自体に名前をつける事ができます。  
これをインターフェースと呼びます。

インターフェースを使うと、この様にオブジェクト型はこの様に表現できます。

```
interface Color {
 readonly rgb: string; 
 opacity:number; 
 name?: string;
}

const turquoise: Color = { rgb: '00afcc', opacity: 1 };
turquoise.name = 'Turquoise Blue';
turquoise.rgb = '03c1ff'; 
// error readonlyの為
```

インターフェースを使いrgb、opacity、nameの型を定義したオブジェクトにColorと名前をつけています。  
readonlyと?は修飾子で、readonlyがプロパティー の書き換え不可、?はそのプロパティー を省略可能にするといった働きです。

```
turquoise: Color
```

ではインターフェースで定義したColorを使い、?修飾子があったnameプロパティー を省略しています。  
  
turquoise.rgを書き換えようとした所で、readonlyゆえにコンパイルエラーが出ています。

## リテラル型

プルダウンの様に複数を列挙したものの中から、1つだけ限定して使いたい時に用いられるのがリテラル型です。

```
let Mary: 'Cat' | 'Dog' | 'Rabbit' = 'Cat'; //列挙した中のCatを定義
Mary = 'Rabbit';
//'Rabbit'は列挙した中にいるので代入できる

Mary = 'Parrot';
//'Parrot'はエラーになる
```

## **タプル型**

タプル型は順番や要素数に制約を設けられる特殊な配列の型です。

```
const charAttrs: [number, string, boolean] = [1, 'patty', true];
```

上記の様に定義をして、number、string、booleanの順番や3つの要素数じゃないとエラーを吐きます。

## **Any、Unknown、Never**

### any型：なんでも通す型

any型はなんでも通してしまう型なので、極力使用しない方が良い型です。  
せっかくTypeScriptは静的型付け言語としての機能を持っているのに、any型を使ってしまうとJavaScriptとなんら変わらない状態になってしまうからです。

### **Unknown**型：anyの型安全版

TypeScript3.0から型安全なany型としてunknown型が利用可能になりました。

any型と同じ様に任意の値を代入する事ができながら、「型ガード」を使う事で、型安全に処理を通す事が出来る点が魅力です。

```
const two: unknown = 2;

two.indexOf("2"); // コンパイルエラー 2をnumber型として扱っている

if (typeof two === "string") {
  two.indexOf("2");  // two === "string"により、twoをstring型として
}
```

unknwonについて、詳しく説明はこの記事などに書いてあります。

[https://qiita.com/suzuki\_sh/items/9b168b44d1d21c127aeb](https://qiita.com/suzuki_sh/items/9b168b44d1d21c127aeb)

### never型：何者も代入できない型

never型は文字通り何も代入できない型です。

使い道としては、以下のパターンが考えられます。

- caseの漏れ文チェック
- 例外を投げたり、無限ループの関数の戻り値に設定

無限ループの関数の場合は、関数に戻り値が存在しないvoid型とは異なり、そもそも関数が正常に終了しない事を表してnever型を用います。

## まとめ

以上、TypeScriptの基本的な型について解説していきました。  
冒頭でも述べた様にTypeScriptは「型定義ができるJavaScript」なので、型さえ覚えて使える様になればOKです

今回学んだTypeScriptの基本的な方は、普段の変数の定義で使うだけでなく、  
関数やクラスなどに型を当てはめていく時に必要となってきます。

これについては次回以降の記事で説明していきます。

最後まで読んでいただきありがとうございます。  
[Twitter](https://twitter.com/teriteriteriri)もやっているので、興味あればご覧になってください！
