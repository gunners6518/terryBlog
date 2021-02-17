---
title: "JavaScriptのアロー関数、無名関数を基礎から分かりやすく解説"
date: "2020-10-28"
categories: 
  - "javascript"
---

## 関数とは

一連の手続きを1つの処理にまとめた物。  
関数を使うことによって、毎回同じ処理を書かずとも、その関数を呼び出すことによって同じ処理を実行できる。

例

```
//関数宣言
//引数に+1をするfunctionを作る
function increments(n){
 return n+1
}

//呼び出し
//incrementsを呼び出すと()に入れた引数に+1する処理を毎回してくれる。
console.log(increments(5)) //6
console.log(increments(1)) //2
```

## JavaScriptの関数の定義は2パターン

JavaScriptの関数には「式」と「文」のどちらかで定義する。

### 式：評価された後に値として存在するもの。

式を評価する事で、結果として評価値を返す。

**式は評価した結果を変数に代入できる。**

```
// 1 + 1という式の評価値を表示
console.log(1 + 1); 
// => 2

// 式の評価値を変数に代入
const total = 1 + 1;

// 関数式の評価値(関数オブジェクト)を変数に代入
const fn = function() {
    return 1;
};
// fn() という式の評価値を表示
console.log(fn()); // => 1
```

### 文：何らかの手続きを処理系に命令するもの。

処理する1ステップが1つの文である。;で1文ごとに区切る。

ifやforなどが文としてよく使われている。

```
const isTrue = true;
if (isTrue) {
　処理
}
```

**文は変数に代入できない！！その為、下はエラーが出る**

```
// 構文として間違っているため、SyntaxErrorが発生する
const forIsNotExpression = if (true) { 処理 }
```

## アロー関数と無名関数

### アロー関数式

ES2015で導入されてから、スッキリしてい見やすい為、急速に普及している記法。  
アロー関数式では以下の省略ができる。

・引数がひとつだけの場合はカッコが省略できる  
・本文が return 文だけのときは、return 文をブロックごと省略できる

#### 省略例

```
const plusOne = function (n) {
　return n + 1; 
}

// アロー関数式()
const addOne = (n) => {
return n + 1; 
};

// アロー関数式 省略
const increment = n => n + 1;
```

### 無名関数

名前がない関数。匿名関数とも呼ばれる。

宣言された関数は生まれた時点から名前を持つのが基本である。  
関数の名前はFunction インスタンスとしての name プロパティに格納されてる。

```
function mercury() {}
mercury.name 
//宣言文で定義した関数の名前 'mercury'

const fn = function mars() {};
fn.name 
// 関数式で定義した関数の名前 'mars'
```

もし名前を書かなかった場合(無名関数)は変数の名前が関数の名前になる。

```
const venus = function () { 
  console.log('I am Venus!'); 
}; 
venus();
//I am Venus!
venus.name
//'venus'
//functionに名前がない為、変数名のvenusが関数の名前になっている。
```
