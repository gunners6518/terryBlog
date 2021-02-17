---
title: "Vue-cliについて学ぶ"
date: "2020-02-22"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "vue-cli"
---

## プロジェクトとは

プロジェクトとは、プログラムの作成に必要な色々なファイル(スクリプトファイル、イメージファイルなど)をまとめて管理するものです。  
  
今までやってきた様な自分で1からファイルを全て作成する様なやり方はフルスクラッチと呼び、区分されています。

実際にプロダクトを作る際にはプロジェクトを導入する場合が多いので、扱い方や後世に慣れていく必要があります。

### Vue CLIとは

Vue CLIは(Command Line Interface)の略で、Vue.js開発の為に必要なプロジェクトを作成してくれるツールです。  
Vue CLIを使う事で簡単に、Vueでプロダクトを作る際に理想的な環境を作ってくれます。

現在、主に使われているVue用のプロジェクト作成ツールとしてVue CLIとNuxt(Vueのフレームワーク)があります。今回はNuxtではなく、Vue CLIについて学んでいきましょう！！

### プロジェクトの作成方法

プロジェクトの作成するコマンドは以下です。プロジェクトを作成したいディレクトリに移動してコマンドを実効すると作成されます。

```
 vue create プロジェクト名
```

実際にプロジェクトを作成する際にプリセットの設定が必要です。  
ここでは割愛します。

## Vue CLIで作られたプロジェクトを理解する

### 全体像

上記のコマンドを実行すると以下のフォルダやファイルがが作成されます。  
<作成されるフォルダ>  
・.gitフォルダ  
・node\_modulesフォルダ  
・publicフォルダ  
・srcフォルダ  
・.browserslistric  
・.eslintrc.js  
・gitignore  
・babel.config.js  
・package.json  
・package-lock.json  
・postcss.config.js  
・README.md

この中で開発に特に関係するのが以下の2つのフォルダです。  
・srcフォルダ  
・publicフォルダ

### publicフォルダ

publicフォルダ内は以下のファイルがあります。  
・favicon.ico：アイコンファイル  
・index.html：デフォルトのWebページ用HTMLファイル

index.htmlの中身を見ていきましょう。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>my-project</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but my-project doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

index.htmlにはjavascriptは一切書いていません。  
htmlファイル内にjavascript(Vue.js)の処理がないことが特徴です。

14行目～：<div id="app"></div>というVueオブジェクトを割り当てるタグがあります。  
この中にsrc内で作成したVueファイルが処理され、出力されます。

### srcフォルダ

srcフォルダ内には以下のファイルがあります。  
・main.js：アプリケーションのプログラム  
・app.vue：アプリで使うコンポーネントファイル  
・assertフォルダ：ロゴなどをいれるイメージファイルが入っています。  
・components フォルダ：コンポーネントを入れるフォルダ。

この中で、main.jsとapp.vueについて詳しく見ていきます。

#### main.js

```
import Vue from 'vue'
import App from './App.vue'
 
Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
}).$mount('#app')
```

このファイル内ではimportでApp.vueを読み込んで、\`app\`という名のVueオブジェクトを作成しています。これがpiblic/index.htmlにて読み込まれていた物です。

Vueのコンポーネント自体はApp.vueにて作成されています。

#### app.vue

コンポーネントを定義しているファイルです。コンポーネントのファイルの構成は以下のようになっています。

```
<templete>
コンポーネントなどで出力される内容
</templete>

<script>
コンポーネント内の処理
</script>

<style>
コンポーネントのスタイルの処理(cssなど)
</style>
```

非常にわかりやすい構成となっています。  
templateタグの中ではコンポーネントなどで出力される内容(html)をまとめています。  
レンダリングされた時にこの中に書かれた内容が表示されます

scriptタグの中では以下の内容を書きます。  
・他コンポーネントファイルのインポート

```
import コンポーネント名 from 'コンポーネントファイルへのパス'
```

・コンポーネントの処理

```
export default{
 ・・・色々な処理・・・
 }
```

export defaultの中にコンポーネントの設定内容などをまとめて書くという認識でOKです。

上で書いてきたファイルの関係性を図でまとめたものです。  

![](https://docs.google.com/drawings/u/0/d/s3Hhu6j-eKBlAwSopGa0b2A/image?w=566&h=163&rev=280&ac=1&parent=1BVFtiQXZUDg7_cAqEU_xzEoc7chrrFJO_4UNtNjuNlw)

### 実際にいじってみる

例題をもとに実際に動きと働きを見ていきましょう。  
今回は初期状態から以下のファイルのみを変更して行きます。  
1.src/App.vue  
2.src/components/HelloWorld.vue

#### <出力結果>

・左のinputタグに名前を入れてクリックすると「お名前は？」→「こんにちはXXさん！」に変わる  
・「change title」をクリックするとアラートが出て来る。そのアラートにタイトル名を入れてクリックすると右上のタイトル名が「Hello」から変わる

  

#### 解説

まずはHelloWorld.vueについて見ていきます。

```
<template>
  <div class="hello">
      <h1>{{title}}</h1>
      <p>{{message}}</p>
      <hr>
    <div>
      <input type="text" v-model="input">
      <button v-on:click="doAction">Click</button>
    </div>
  </div>
</template>
 
<script>
export default {
  name:'HelloWolrd',
  props:{
 title:String,
    //message:String,
  },
  data:function(){
    return{
      message:'お名前は?',
      input:'no name'
    };
  },
  methods:{
    doAction:function(){
      this.message = 'こんにちわ' + this.input + 'さん！';
    }
  }
}
</script>
 
<style >
  div{
    margin:0px;
    padding: 0px;
    text-align: left;
  }
 
  h1{
    font-size: 72pt;
    font-weight: bold;
    text-align: right;
    letter-spacing: -8px;
    color: #f0f0f0;
    margin: 0px;
  }
 
  p{
    margin: 0px;
    color: #666;
    font-size: 16pt;
  }
</style>
```

templateタグ：HelloWorldコンポーネントの出力内容を書いています。 {{title}}や{{message}}を変数として出力しています。  
{{title}}変数の値は親コンポーネント(App.vue)からvindしています。  
  
inputタグには「v-model」やbuttonタグに「v-on」を使っています。

scriptタグ:

```
export default{
 ・・・色々な処理・・・
 }
```

色々な処理は、以下の処理を定義しています。  
・コンポーネント名の設定(name=’コンポーネント名’)  
・props※で親コンポーネントから変数を受けている  
・コンポーネント内での変数の定義(data:function(){return{変数}})※  
・buttonを押した処理のmethodの定義※

※前の記事で書いた使い方と同じなので、記事を参照してください！！

styleタグ：HelloWorldコンポーネント内のスタイルを定義しています。

次にApp.vueの詳細について見て行きます。こちらは先ほど見たHelloWorldの親コンポーネントにあたります。

```
<template>
  <div id="app">
    <HelloWorld v-bind:title="message" />
    <hr>
    <button v-on:click="doAction">change title</button> 
  </div>
</template>
 
<script>
import HelloWorld from './components/HelloWorld.vue'
 
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data:function(){
    return{
      message:'HELLO',
    };
 },
  methods:{
    doAction:function(){
    var input = prompt("new title:");
    this.message = input;
    }
  }
}
</script>
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

templateタグ：appコンポーネントの出力内容を書いています。  
<HelloWorld>タグにて子コンポーネントである「HelloWorldコンポーネント」を使用しています。  
v-bindにてtitleにオブジェクトをバインドしています。(script部分で「hello」を入れています。)

scriptタグ:appコンポーネント内での以下の処理を設定しています。

・ 子コンポーネントである「HelloWorldコンポーネント」をappコンポーネントで使えるようにimportしてしている  
・バインドしたtitleにデータを入れている  
・methodsにてdoActionイベントの処理を書いている

importした子コンポーネントはexport default{}内で以下の処理を書くと使えるようになります。

```
components: {
     コンポーネント名
   },
```

methods内では以下の様に書く事で、イベント発火時にダイアログ(アラート的なやつ)を出し、promptを使ったダイアログでの入力内容を\`input\`と定義し、this.messageに入れてタイトルが変わる仕様にしている。

```
methods:{
    doAction:function(){
    var input = prompt("new title:");
    this.message = input;
    }
  }
```

完成！！！

お疲れ様です。文法的に難しかった場合は過去の記事に1つ1つの細かい説明も記載しているので参考にしてください。
