---
title: "vue.jsで開閉式のメニューを作る"
date: "2020-04-24"
categories: 
  - "javascript"
  - "vue-js"
---

## はじめに

久々のVue.jsですが、今回は開閉式のメニューをコンポーネントで作っていきたいと思います。  
下記の感じのクリックすると開いたり、閉じたりする感じのコンポーネントですね。

アコーディオンって呼ばれ方をする場合もあります。

## 実装パート

### HTML部分

以下のようなソースコードになります。  
数字を振ってあるので、順番に解説していきます。

```
<template>
  <div class="profile-accordion">

//①見えている「てりー」の部分に@clickイベント//
    <div class="profile-title" @click="toggle">
      <p>てりー</p>
      <div class="base">
        <span class="down-arrow"></span>
      </div>
    </div>

//②transitionを使って動きを何パターンか指定//
    <transition
      v-on:before-enter="onBeforeEnter"
      v-on:enter="onEnter"
      v-on:bofore-leave="onBeforeLeave"
      v-on:leave="onLeave"
    >

//③v-showでクリック時のみ見えるようにする//
      <div v-show="show" class="accordion-wrapper">
        <div class="accordion-title -ly_contents">
          <p>メニュー</p>
        </div>
        <div class="accordion-contents -ly_contents">
          <ul>
            <li class="contents-list">基本情報</li>
            <li class="contents-list">パスワード</li>
            <li class="contents-list">メールアドレス</li>
          </ul>
        </div>
        <div class="bar -ly_contents"></div>
        <div class="accrodion-footer -ly_contents">
          <p>サインアウト</p>
        </div>
      </div>
    </transition>
  </div>
</template>
```

#### ①@clickイベント

@clickはv-onの省略形です。  
v-onで見えている部分をクリックするとtoggleというイベントが発火するようにしています。  
toggleの処理はscriptの部分で書きます。

#### ②transitionを指定

transitionでイベント時の動き方を指定しています。  
transitionでは動きに対して、そのフェイズ毎に状態を指定することができます。

今回は以下の4パターンで指定しています。  
具体的な状態はscriptにて記載しています。

```
 //要素の表示前
v-on:before-enter="onBeforeEnter"

//要素の表示中
 v-on:enter="onEnter"

//要素を閉じる前
 v-on:bofore-leave="onBeforeLeave"

//要素を閉じ中
 v-on:leave="onLeave"
```

#### ③v-showにて表示・非表示切り替え

v-showで"show"状態なら括った要素を表示できるようにしています。  
showがtrueかfalseかは@clickイベントのtoggleにて切り替えられるようにしています。

### script部分

```
<script>
export default {
  name: "HelloWorld",

//①showの初期状態はfalseで閉じておく
  data() {
    return {
      show: false
    };
  },
  methods: {
//②toggleにてshowを切り替え
    toggle: function() {
      this.show = !this.show;
    },

//③transitionの各々での高さを指定
    onBeforeEnter: function(el) {
      el.style.height = 0;
    },
    onEnter: function(el) {
      el.style.height = "182px";
    },
    onBeforeLeave: function(el) {
      el.style.height = "182px";
    },
    onLeave: function(el) {
      el.style.height = 0;
    }
  }
};
</script>
```

#### ①showの初期値

showの初期値はfalseで指定指定して、閉じています。

#### ②toggleイベント

toggleイベントの処理に、showの切り替えを入れています。  
これにより、クリックする度に表示・非表示が切り替わります。

#### ③transitionの値の指定

先ほど出てきたtransitionの各フェイズでの具体的な値を指定しています。  
今回は開いている時に高さが出て、閉じている時は高さ0になるようにしています。

### css部分

```
style scoped>
.profile-accordion {
  height: 210px;
  width: 144px;
}
.profile-title {
  margin-left: 50px;
  height: 20px;
  display: flex;
}

.profile-title > p {
  margin: 0;
  height: 20px;
  width: 56px;
  color: #354052;
  font-family: "Noto Sans CJK JP";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
}
.profile-title > .base {
  margin-top: 13px;
  margin-left: 6px;
}

.profile-title > .base > span {
  width: 0;
  height: 0;

  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: #C5D0DE transparent transparent transparent;
}

.accordion-wrapper {
  position: relative;
  margin-top: 20px;
  margin-right: 80px;
  height: 182px;
  width: 140px;
  background-color: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}

.accordion-wrapper::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: 100px;
  top: -10px;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #C5D0DE;
  border-left: 10px solid transparent;
}

.accordion-wrapper::after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: 100px;
  top: -8px;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #FFFFFF;
  border-left: 10px solid transparent;
}

.-ly_contents {
  margin-left: 16px;
}

.accordion-title {
  padding: 20px 0 16px;
}
.accordion-title > p {
  color: #354052;
  font-family: "Noto Sans CJK JP";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 18px;
  padding: 0;
  margin: 0;
  text-align: left;
}
.accordion-contents {
  display: block;
  padding: 0;
}

.accordion-contents > ul {
  text-align: left;
  padding: 0;
  margin: 0 0 10px;
}

.accordion-contents > ul > li {
  color: #354052;
  font-family: "Noto Sans CJK JP";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  list-style: none;
  margin-bottom: 8px;
}

.bar {
  height: 0.99px;
  width: 108px;
  background-color: #E0E6EF;
}
.accrodion-footer {
  padding: 0;
  text-align: left;
}

.accrodion-footer > p {
  color: #354052;
  font-family: "Noto Sans CJK JP";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  margin-bottom: 16px;
}
</style>
```

cssは形は作りましたが、汚いのであまり参考にしない方が良いです！笑  
時間があるときに修正します。
