---
title: "v-ifで条件分岐をしよう！"
date: "2020-01-28"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "プログラミング"
  - "v-if"
---

## はじめに

Vueのテンプレート構文を学んでいきます。  
前回はv-bindを使ってstyle属性をバインドすることで、色やフォントサイズを変えていきました。

https://terrblog.com/entry/2020/01/27/024139

今回はv-ifの基礎や使い方を説明していきます。

## v-ifの基本的な使い方

条件分岐のif文に相当するテンプレート構文です。

以下のように記述します。

```
<div v-if='条件式'>
 <p>内容①</P>
</div>
<div v-else>
 <p>内容②</p>
</div>Ï
```

この場合だと  
条件式の場合は「内容①」  
それ以外の場合は「内容②」が出力されます。

### 3つ以上の条件分岐

v-ifも他のプログラミング言語と同じ様に、elseifを使うことで条件分岐を増やすことができます。  
例えば3つの条件分岐を行いたい場合は

```
<div v-if='条件式A'>
 <p>内容①</P>
</div>
<div v-else-if='条件式B'>
 <p>内容②</p>
</div>
<div v-else>
 <P>内容③</p>
</div>
```

この場合は  
条件式Aの時は「内容①」  
条件式Bの時は「内容②」  
それ以外の場合は「内容③」が出力されます！！！  
慣れちゃえば簡単ですね。。

## 例題！3の倍数判定カウンター

要件  
・カウンターを作り、クリックした回数を数えられる様にする。  
・カウンターが3の倍数の時は「3の倍数です」と出力する。  
・カウンターが3の倍数の時には「3の倍数ではありません。余りがXです」と正しい余りを入れて出力する。

## 解説

```
<!DOCTYPE html>
<html>
  <head>
    <title>TEST</title>
    <script src="https://unpkg.com/vue"></script>
    <meta http-equiv="content-type" charset="utf-8" />
</head>
 
  <body>
    <h1>3の倍数判定カウンター</h1>
    <div id="app">
      <p>{{count}}</p>
      <div v-if="(count%3)==0 && count != 0">
        <p>3の倍数です</p>
      </div>
      <div v-else-if="(count%3)==1">
        <p>3の倍数ではありません。余りが1です</p>
      </div>
      <div v-else-if="(count%3)==2">
        <p>3の倍数ではありません。余りが2です</p>
      </div>
      <div v-else>
        <p>3の倍数ではありません。余りが3です</p>
      </div>
    </div>
    <hr />
 
    <button onclick="doAction();">click</button>
 
    <script>
      var data = {
        count: 0,
        flag: true
      };
 
      var app = new Vue({
        el: "#app",
        data: data
      });
 
      function doAction() {
        data.count = data.count + 1;
        data.flag = !data.flag;
      }
    </script>
  </body>
```

### HTML部分

```
    <div id="app">
      <p>{{count}}</p>
      <div v-if="(count%3)==0 && count != 0">
        <p>3の倍数です</p>
      </div>
      <div v-else-if="(count%3)==1">
        <p>3の倍数ではありません。余りが1です</p>
      </div>
      <div v-else-if="(count%3)==2">
        <p>3の倍数ではありません。余りが2です</p>
      </div>
      <div v-else>
        <p>3の倍数ではありません。余りが3です</p>
      </div>
    </div>
```

「カウント数を3で割った余りによって内容が変化する」ようにv-if、v-else-if、v-elseを使用して条件分岐をさせています。

また、3行目のv-ifでは3の倍数にする為に「カウント数を3で割った余りが0」と「カウント数が0でない」の二つの条件式を設定しています。

条件式において  
・A かつ Bの場合は以下の様に表します。

```
<タグ v-if=’A && B’>
```

### カウンターの実装

```
  <h1>3の倍数判定カウンター</h1>
    <div id="app">
      <p>{{count}}</p>
      
　　　　　〜省略~
 
    <button onclick="doAction();">click</button>

<script>
      var data = {
        count: 0,
      };
 
      var app = new Vue({
        el: "#app",
        data: data
      });
 
      function doAction() {
        data.count = data.count + 1;
      }
</script>
```

{{count}}にてカウント数の表示、var dataにてdata変数にオブジェクトを設定しています。  
ここではcountの初期値に0を入れます。

var app = new Vue({})にてインスタンスを生成しています。  
インスタンスの内ではVueの対象のタグ(今回はapp)とタグ内でオブジェクトをプロパティとして持たせています。  
  
doActionはボタンを押した際の発生する関数です。  
この関数ではdataオブジェクトのcountプロパティの値が+1される様に設定してあります。  
buttonタグに設置してあるので、ここを押した際にdoActionが実行されます。

  
  
  
v-ifの使い方が分かってきましたか？  
今回の例題について来れれば、v-ifの基本的な使い方はバッチリです！！  
  
このブログではフロントエンドの知識を分かりやすく解説して行きます。  
是非フォローお願いします。  
[https://twitter.com/teriteriteriri](https://twitter.com/teriteriteriri)
