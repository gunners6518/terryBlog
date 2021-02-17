---
title: "v-model ・v-onを理解する"
date: "2020-02-15"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "v-model"
  - "v-on"
---

今回はVueのテンプレート構文であるv-modelとv-onの使い方や実用例をみていきます。  
これまでにVueのテンプレート構文ではv-ifでの条件分岐、v-forでのループ処理、v-bindでの属性のバインドを見てきました。詳しくは以下の記事をご覧ください。

https://terrblog.com/entry/2020/01/27/024139

https://terrblog.com/entry/2020/01/29/013202

## v-model

### v-modelとは

v-modelは、<input>に入力された値をVueのdataプロパティの値やコンポーネントの変数にバインドする機能で、入力された値をリアルタイムに表示することができます。

使用方法は以下の通りです。

```
<input v-model=”変数名”>
```

変数名はVueインスタンスで指定したdataプロパティの名前や、コンポーネント内で指定した変数名の名前です。  

### v-modelの実用例

v-modelの実用例です。  
<input>タグに入力した値が、{{sample}}二つぐに反映される事が確認できます。

```
<div id="app">
  <input type="text" v-model="sample" >
  <p>入力欄: {{ sample }}</p>
</div>

<script>
new Vue({
  el: "#app",
  data: {
    sample: ''
  }
})
</script>
```

#### html部分

<input>タグに対してv-modelで変数「sample」をバインドしています。  
こうする事で、<input>タグに入力された値を変数sampleに代入する事ができます。

#### script部分

こちらは単純です。Vueインスタンスを作り、中にdataオブジェクトとして変数sampleを作っています。初期値は今回空にして入力値が分かり易いようにしています。

#### v-modelはv-bindと違い

v-modelは双方向のバインドになります。なのでhtml側で入力した値がModelに反映されます。

ちょっと難しくなりましたが、現段階ではv-bindでは入力した値は即座には反映されない(イベントを発火させて変えることは可能)。

v-modelは入力値が即座に変数に反映！と覚えておくと良いでしょう

## v-on

### v-onとは

この構文は、イベントの属性に値をバインドする機能です。この機能を使用することでVueオブジェクト内やコンポーネント内の変数を使用できるようになります。

使用方法は以下です。

```
<タグ名　v-on:イベント名=”処理” >
```

イベント名にはHTMLタグなどで使用するイベント名の「on」を取り除いた物を使用すます。例としては、「onclick→click」。

### v-onの実用例

v-onの実用例を見ていきます。  
今回はhelloコンポーネントを作成して、メインのコードは全てそちらに格納しています。  
コンポーネントの理解が不十分な方はこちらを参考にしてください。

https://terrblog.com/entry/2020/02/11/010000

```
<!DOCTYPE html>
<html>
    <head>
        <title>My first Vue app</title>
        <script src="https://unpkg.com/vue"></script>
    </head>
 
    <body>
        <h1>Vue.js</h1>
        <div id="app">
            <hello/>
        </div>
 
        <script>
            var hello = Vue.component('hello',{
                data:function(){
                    return{counter:0};
                },
                template:'<p v-on:click="counter++;" 　　　　　　
class="hello">Clicked,{{counter}}!</p>'
            })
 
            var app = new Vue({
                el:'#app',
            });
        </script>
    </body>
</html>
```

v-onはhelloコンポーネントのtemplateの中にあり、clickイベントを作っています。  
処理は"counter++"となっていて、このpタグがクリックされる度にcounterに数を1つ足すことが出来ます。

今回の様な1行レベルの処理ならば、JavaScriptの式をv-onに書くのも良いですが、処理が長く複雑になる場合はメソッド名を定義すると良いでしょう。

#### 省略記法

v-onやv-bindは省略記法が用意されているので、この機会に紹介します。  
v-bind→:  
v-on→@

```
<!-- 完全な構文 -->
<a v-bind:href="url"> ... </a>
<a v-on:click="doSomething"> ... </a>


<!-- 省略記法 -->
<a :href="url"> ... </a>
<a @click="doSomething"> ... </a>
```

#### イベント修飾子

Vueはv-onの為にいくつかのイベント修飾子を用意しています。  
この記事がわかりやすく纏まっているので、詳しくは参考にしてください。

https://qiita.com/Yorinton/items/f7eb54f05609750da7f5

## まとめ

Vueのテンプレート構文のv-onとv-modelについてまとめていきました。  
今回でテンプレート構文に関しては一通り説明を仕切った形になります。  
  
ここまでやってきた内容をメインとした、チャレンジ問題も作ったので、ぜひ挑戦してみてください。

https://terrblog.com/entry/2020/02/10/175557
