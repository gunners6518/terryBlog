---
title: "v-modelで様々な入力フォームを作る"
date: "2020-03-09"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "v-modal"
---

## はじめに

前回はv-modelの修飾子を見ていきました。  
今回は複数行やチェックボックス、ラジオボタンなどのパターンを見ていきます。

https://terrblog.com/entry/2020/03/08/145807

## 複数行の入力フォーム

inputでは実現できなかった複数行のフォームはtextareaを使う事で実現可能です。

また、textareaで入力した値の改行まで反映させたい場合は、クリックイベントなどを使って処理を書いてあげる必要があります。  
参考：[https://segateway.com/archives/360#toc3](https://segateway.com/archives/360#toc3)

### サンプルコード

```
<template>
  <div id="app">
    <textarea v-model="msg" rows="3" placeholder="入力して下さい"></textarea>
    <p>：{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      msg: ""
    };
  }
};
</script>
```

## チェックボックス

### チェックボックス1つ型はboolean型！

チェックボックス1つのパターンだとv-modelで出力される値boolean型(trueかfalse)になります。

```
<template>
  <div id="app">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      checked: "true"
    };
  }
};
</script>
```

### 複数のチェックボックスは配列として！

複数のチェックボックスを作った場合は、配列の値として入力値が表示されます。  
下の動画ではチェックボックスでチェックした値が下の配列の中で表示されています。

### ソースコード

```
<template>
  <div id="app">
    <input type="checkbox" id="beef" value="beef" v-model="foodName">
    <label for="beef">beef</label>
    <input type="checkbox" id="pork" value="pork" v-model="foodName">
    <label for="pork">pork</label>
    <input type="checkbox" id="salad" value="salad" v-model="foodName">
    <label for="salad">salad</label>
   <br>
  <span>foodName: {{ foodName }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
       foodName: []
    };
  }
};
</script>
```

## ラジオボタンで入力する

v-modelを使う事でラジオボタンを使った双方向バインディングも可能です。  
ラジオボタンで入力された値を出してくれます。

### ソースコード

```
<template>
  <div id="app">
    <input type="radio" id="man" value="男" v-model="gender">
    <label for="man">男</label>
    <br>
    <input type="radio" id="women" value="女" v-model="gender">
    <label for="woman">女</label>
    <br>
    <span>性別: {{ gender}}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
       gender: ""
    };
  }
};
</script>
```

## プルダウン型で入力する

プルダウン型でもv-modelにて双方向バインディングが可能です。  
プルダウンで選んだ値が出力されます。

### ソースコード

```
<template>
  <div id="app">
    <select v-model="selected">
      <option disabled value>年齢を選んでください</option>
      <option>10代以下</option>
      <option>20代</option>
      <option>30代</option>
      <option>40代</option>
      <option>50代</option>
      <option>60代以上</option>
    </select>
    <br>
    <span>年齢: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      selected: ""
    };
  }
};
</script>
```

## まとめ

この様に入力値を吐き出す処理はv-modelを使い、双方向バインディングする事で可能となります。

フォームではよく使われているので、入力フォームの例題も近いうちに記事にしたいと思います。
