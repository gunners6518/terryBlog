---
title: "JavaScriptのif文"
date: "2020-10-11"
categories: 
  - "javascript"
---

## if文の基本形

### boolean型と比較演算子

boolean型は変数の方であり、false、trueのどちらかが入る。の本後でいう所の正誤である。

```
let temp =31
let isFreezing = temp === 32

console.log(isFreezing)
//false
```

この例では、isFreezingにはboolean型の値が入る。  
tempは31と定義されていて、「===」 は同じ値かどうかを判断する比較演算子なので、今回はfalseを返す事になる。

比較演算子でメジャーなものはこの通りである。

```
文言の場合に「true」を返す
=== 同じ値
!== 違う値
<  低い
> 高い
<= 以下
>= 以上
```

### if分を使ってみる

```
if(true){
 trueの時にしたい処理
}else{
 falseの時にしたい処理
}

```

if()の中にはboolean型が入り、trueの時は{}野中の処理が走る。  
elseでは。ifの場合以外での処理が走る。

例えば、年齢が20歳以下なら「お酒は飲めません！！」、そうでない場合は、「注文できます！」と表示すると以下の様になる。

```
let age = x;

if(age < 20){
　console.log("お酒は飲めません！")
} else {
 console.log("注文できます")
}
```

### else ifを使うと3つ以上のパターンに分けられる

if、else if、elseを使い分ける事で3パターン以上の場合分けも可能です。  
今回はtype = waterとしているので、console.logでは「ゼニガメ」と出力されます。

```
let type = water

if(type = fire){
 pokemon = "ヒトカゲ"
 }
else  if(type = water){
　pokemon = "ゼニガメ"
}
else{
 pokemon = "フシギダネ"
}

console.log(pokemon)
// ゼニガメ
```
