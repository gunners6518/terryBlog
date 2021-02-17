---
title: "動的コンポーネントを使い表示内容を切り替える"
date: "2020-03-07"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "コンポーネント"
---

こんにちは！  
てりーです([@teriteriteriri](https://twitter.com/teriteriteriri))。  
今回はVue.jsで動的にコンポーネントを切り替える方法を見ていきます。

## 動的コンポーネントの使い方

### :is="変数"で切り替える

分かりやすい例です。  
コンポーネントを呼び出す際に以下の様に書きます。

```
<component :is="cardColor" ></component>
```

cardColorという変数を切り替えることによって、表示されるコンポーネントが変わってきます。  
例えば今回cardRed、cordGreen、cardBlueというコンポーネントを作っていたら、クリック毎にcardColorがその3つのコンポーネントが表zされる様にすれば良いのです。

#### :isの特徴

切り替わるたびにインスタンスがdestroyedされる。  
詳しくはライフサイクルを参照してほしい。  
毎回新しいインスタンスを生成しなくてはいけないので、前のインスタンスでの状態が保存されていないことに注意。

### keep-aliveでwrapする

:isで最後に出てきた問題を書き結する方法としてkeep-aliveがあります。  
keep-aliveではインスタンスはdestroyedされずに、キャッシュされるのみである。なので、インスタンスの状態をそのまま受け継ぎながらコンポーネントの切り替えが可能。

使い方は以下の様にkeep-aliveでwrapするのみです。

```
<keep-alive>
 <component :is="cardColor" ></component>
</keep-alive>
```

## 動的コンポーネントを使ってカードを切り替える

### 完成品

・赤、青、緑の色のカードが出力される子コンポーネントを作る  
・親コンポーネントにて、色のボタンを押すとその色が出力される

### 解説

## 子コンポーネントを作る

まず子コンポーネントとなるカードを作ります

```
<template>
  <div><h1>赤きカード</h1></div>
</template>
<style>
.h1{
 backgroud-color:red;
 color:#fff;
}
</style>
```

```
<template>
  <div><h1>青きカード</h1></div>
</template>
<style>
.h1{
 backgroud-color:blue;
 color:#fff;
}
</style>
```

```
<template>
  <div><h1>緑のカード</h1></div>
</template>
<style>
.h1{
 backgroud-color:green;
 color:#fff;
}
</style>
```

## 親コンポーネントを作る

```

<template>
  <section class="container">
    <button @click="colorRed">red</button>
    <button @click="colorBlue">blue</button>
    <button @click="colorGreen">green</button>
    <div class="content">
      <component :is="currentColor"></component>
    </div>
  </section>
</template>

<script>
import Component1 from '~/components/cardRed.vue'
import Component2 from '~/components/cardBlue.vue'
import Component2 from '~/components/cardGreen.vue'

export default {
  components: {
    cardRed,
    cardBlue,
    cardGreen
  },
  data() {
    return { 
      currentColor: 'cardRed' 
    }
  },
  methods: {
    colorRed() {
      this.currentcolor = "cardRed"
    },
    colorBlue() {
      this.currentColor = "cardBlue"
    },
    colorGreen() {
      this.currentColor = "cardGreen"
    }
  }
}
</script>
```

buttonを押すと、methodsに書いてある様に、押したボタンの色と同じ色のカードのコンポーネントが呼び出されます。

## まとめ

この様に:is="変数名"とコンポーネントにする事によって、外から動的にコンポーネントを変更することが可能です。

皆さんも使ってみてください。
