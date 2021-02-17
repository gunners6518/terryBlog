---
title: "methodsとcomputedを使ってイベント処理を行う"
date: "2020-02-16"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "computed"
  - "methods"
---

## はじめに

「v-on」の記事にてイベントの作り方は説明しました。

https://terrblog.com/entry/2020/02/15/101547

その時の様に、処理が短い場合はそのままダブルクウォークテーションの中に書く事が多いです。  
しかし、長い処理をした場合にはそのまま書くのは煩雑で見にくくなってしまいます。

そのような場合に使用する構文が今回説明していく「method」と「computed」になります。

## methods

### methodsとは

コンポーネントオプションの1つです。  
Vueインスタンスに対してデータオブジェクトを渡してくれます。  
  
同じデータオブジェクトとしてはpropsやdata、computedなどがあります。  
それぞれ違いはありますが、大まかな区分として初期状態やデータはpropsやdata。  
関数チックな処理はmethodsかcomputedを使うケースが多いです。

### methodsの使い方

methodsはメソッドなので呼び出しには引数が必要です。  
以下の様に呼び出し可能です。

```
{{ メソッド名() }} 

<!-- 又は　--!>

<button @click="メソッド名">ボタン</button>
```

コンポーネント内に以下の様に書きます。

```
mathod:{
メソッド名:functon(event){処理},
メソッド名:functon(event){処理},
・・・・}
```

### methodsの実用例

今回のコードはv-on:clickでhelloというメソッドを用意して、処理はmethods部分に書いています。  
ボタンをクリックすると、アラートとして「hello+現在のtext+！」が表示されます。

```
<div id="example">
  <button v-on:click="hello">HELLO</button>
</div>
<script>
var example = new Vue({
  el: '#example',
  data: {
    text: 'Vue.js'
  }, 
  methods: {
    hello: function (event) {
      alert('Hello ' + this.text + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
</script>
```

## computed

### computedとは

computedは算術プロパティと呼ばれています。  
基本的にmethodと同じように定義できるコンポーネントオプションです。  
methodsとの違いは後ほど説明します。

### computedの使い方

computedの呼び出しはdataの様に行えます。(引数の必要なし)

```
<h1>Hello {{関数名}}!</h1>
```

Vue側では以下の様に定義します。methodsと定義の仕方は全く一緒です。

```
computed:{
関数名:functon(){処理},
関数名:functon(){処理},
・・・・}
```

## methodsとcomputedの違い

methodとcomputedの違いを以下に簡単にまとめていきます。と言っても公式のドキュメントにも詳しく書いてあるので、その要約の要約を。  
[https://jp.vuejs.org/v2/guide/computed.html#%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-vs-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89](https://jp.vuejs.org/v2/guide/computed.html#%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-vs-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89)

1.computedはプロパティ、methodsはメソッド.。

2.computedは依存関係に基づいてキャッシュされる。つまり関係ない値の変化では処理は走らない。methodsは処理が呼び出さるとその度に処理が走る。

### methodsとcomputedの使い分け

基本的なイベント処理はcomputedがおすすめです。methodsの場合は他の値が変わる度に再描画される為、重くなりやすいからです。  
methodsを使うのは以下の様なシュチュエーションです。

#### Vueインスタンスのデータじゃないものを処理に含む場合

Vueインスタンス以外のデータの変化ではcomputedは走ってくれません。なのでmethodsを使いましょう。  
例としては、Dateオブジェクトを使って今の日時を返したい場合など。methodsを使えば、その都度の時間に合わせた表示をしてくれます。

## まとめ

今回はVueのコンポーネントオプションである、computed、methodについてまとめていきました。  
これらを使いこなせると様々な処理を加える事ができる為、動きのあるアプリケーションが作れる様になります。  
  
今後もVueやフロントエンドの内容について更新していくので、興味ある方はぜひ[こちら](https://twitter.com/teriteriteriri)もフォローしてください。
