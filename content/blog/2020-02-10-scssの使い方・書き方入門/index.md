---
title: "scssの使い方・書き方入門"
date: "2020-02-10"
categories: 
  - "life"
  - "scss"
tags: 
  - "フロントエンド"
  - "scss"
---

## scssとは

scssはcssを効率的に書く事のできるメタ言語です。  
cssの場合、長く複雑な記述をしなければいけない所を、scssを使うとわかりやすくシンプルに書く事ができます

## scssの使い方

実際にscssを使っていく際に.scssか.sassという拡張子のファイルに保存します。  
また生のcssと違いhtml内に<style>で記述する事は出来ません。

scssファイルを直接読み事は出来ないので、コンパイルという処理を行なってcssに変換します。  
ターミナルから行う場合は以下のコマンドにてコンパイルしてくれます。  
(hoge.scssをhoge.cssにコンパイルしている)

```
sass hoge.scss:hoge.css
```

コンパイルは他にもGUIを使っても行えます。  
自分は良く、npmを使って自動で更新される度に反映される状態を作っています。

```
npm run sass　や
npm run watch
```

## sassとscssに違い

一言でまとめると「書き方が違います！！」

scssの方がcssに近いので一般的には書きやすいとされています。  
sassはより短い記述が可能なので、効率的に書き事ができます。

細かい書き方の違いはこちらなど参考にしてください。  
[https://original-game.com/scss-vs-sass/](https://original-game.com/scss-vs-sass/)

## scssの書き方

### ネスト(入れ子)構造

scssでは入れ子構造での書き方が基本になります。

```
<div>
 <p>scssサンプル。</p>
</div>
```

というhtmlに対してscssを書くと以下のようになる。

```
div {
 width:100%;
 height:100%;

 P{
   color:red;
   font-size:12px;
   font-weight:bold;
   }
}
```

コンパイル結果のcssはこのようになり、入れ子構造から勝手に親要素を認識してくれます。

```
div { width: 100%; height: 100%;}
div p {color: red; font-size:12px; font-weight: bold; }
```

### scssの様々な書き方

scssにて良く使われる記述をまとめていきます。

#### divの中にいるclassがhogeを指定する

```
div{
   width:100%;
   height:100%;

 .hoge{
  width:120px;
  height:120px;
  }
}
```

最初に書いたネスト構造そのものですね。親子関係は入れ子にするだけで実現できます。

#### classがhogeのdivを指定する

これはdivタグがいくつかある中で、classがhogeのdivタグだけを指定したい時に使います。  
書き方は以下の通りです。

```
div{
   width:100%;
   height:100%;

 &.hoge{
  width:120px;
  height:120px;
  }
}
```

### scssの機能

#### 変数を定義して使いまわせる

scss内で変数を定義する事で使い回す事ができます。  
宣言の仕方は以下の通りです。

```
$変数名: 値;
```

色やデフォルトの大きさなどに良く使われます。以下のように繰り返し使い回すcssを関数として定義するケースが多いです。

```
  // color
  // - - - - - - - - - - - - - - - - - - - -
  $_color-white: #ffffff;
　$_color-black: #354052;
　$_color-primary: #193e79;
　
 // font
 // - - - - - - - - - - - - - - - - - - - -
  $_font-size: 16px;
  $_font-weight: 400;
  $_border-radius: 3px;
```

#### 関数を定義して使いまわせる。@mixin

関数として定義する際は@mixinを使います。  
基本的な書き方は以下のようになります。

```
//定義する際//

@mixin ミックスイン名 {
  定義したいcssプロパティ
}

//使用する際//
セレクタ {
  @include ミックスイン名;
}
```

@mixinの特徴として引数をとる事が出来、@includeを記述する際にそこに任意の値を入れてスタイリングする事が可能です。  
これも実例を見ていきましょう。

```
//@mixinにて関数の定義//
@mixin test($color){
  color:$color;
  font-size: 12px;
  font-family: sans-serif;
}

//@includeにて関数を呼び出し使用
.text1{
 @include test(white)
}

.text2{
 @include test(red)
}

.text3{
 @include test(blue)
}
```

上記のコードだとtext1~3を通じてfont-sizeとfont-familyは共通になり、引数に取った$colorの部分が、text1ではwhite、text2ではred、text3ではblueと変化していきます。  

## まとめ

昨今のフロントエンドの開発には必ずと言ってよいほど使われているscss。  
その使い方や書き方の基礎となる部分を今回はまとめていきました。

まだまだscssには便利な機能がたくさんあり、自分も日々の開発で重宝しています。  
今後もフロントエンドを中心に技術記事を投稿していくので、よろしくお願いいたします。
