---
title: "v-modelの修飾子を使って実践的なフォームを作る"
date: "2020-03-08"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "v-model"
---

## はじめに

以前の記事でv-modelの基本的な使い方を解説していきました。

https://terrblog.com/entry/2020/02/15/101547

v-modelは双方向のデータバインディングであり、前回の記事内でinputタグでよく使われると話しましたが、そのほかにも様々なパターンが用意されています。

今回は入力フォームなどを作る際によく使われている様々なパターンを見ていきましょう。

## v-model.lazyで反映を遅らせる

### フォーカスを外した際に反映されるフォーム

v-modalを使った場合、入力中は逐一、内容が反映されます。  
v-modal.lazyを使うと入力フォームの外に触れた際に一気に内容が反映される形になります。

実際の入力フォームではよくみる形ですね！  
入力内容が違ったときにalert系を出すパターンとの相性も良いです。(むしろlazy使わないと逐一alertが出て鬱陶しい！笑)

### サンプルコード

```
<template>
  <div id="app">
    <input type="text" v-model.lazy="lazyMsg" >
    <p>{{lazyMsg}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      lazyMsg: ''
    }
  },
};
</script>
```

## v-modal.numberで型をnumber形にする

### 背景

通常、<input>で受け渡ししているデータはstring型になっています。  
**<input type='number'>を使っている時でさえ初期値以外はstring型で渡しています。**

そうなると<input>内のテキストで100と入力しても1,0,0の文字列として扱われてしまいv-forなどで回す際やidと紐付けたいときなどに適応できなかったりと思わぬ所で問題が起きやすくなってしまいます。

そこでv-modal.numberを使います！

### v-modal.numberでできる事

```
<input v-modal.number>
```

とする事で、<input>内に入力された値を自動でnumber型に変更してくれます。入力フォームで数字を入れてほしい部分には積極的にnumber修飾子を使っていきましょう。

## v-modal.trimでいらない空白を除去する

### 入力フォームの前後の空白を消す

：入力フォーム：といった感じで出力されていますが、フォームの最初に入れた空白が綺麗に切り取られているのが分かると思います。

また、「あいーん」と「あいーん」の間の空白は消えていない事から**文字列内の空白はtrimでは消えません。**

### サンプルコード

```
<template>
  <div id="app">
    <input type="text" v-model.trim="trimMsg">
    <p>：{{trimMsg}}：</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      trimMsg: ""
    };
  }
};
</script>
```

## まとめ

v-modalに修飾子を使う事で様々なパターンを作ることができます！！  
これ以外にもラジオボタンなどv-modalで実践できるので、それは次回見ていきましょう！！
