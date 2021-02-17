---
title: "JavaScript-右クリックで要素が回転する処理"
date: "2020-11-26"
categories: 
  - "javascript"
---

## はじめに

現在Reactでパズルを作っていて、その際に右クリックでパズルを回転させる処理を実装しました。

サンプルを[codepen](https://codepen.io/gunners6518/pen/vYXYOKj)に残しました。

こちらで動きを確認して下さい。

## 右クリックで画像を回転させるには

### 通常のメニューが出る右クリックイベントを阻止する

以下のコードで右クリックの通常イベントが阻止されます。

`document.oncontextmenu`にて右クリックでのイベントを書きます。

```
document.oncontextmenu = function () { 
  // 右クリックでメニューが出るのを阻止
 return false;
}
```

### 右クリックイベント内で90°回転する処理を実装する

先ほど書いた右クリックイベント内に、90°回転させる処理を加えていきます。

```
//回転軸を定義
 let d = 0;

//今回回転させたい要素をid=testで定義している
const e = document.getElementById("test");
e.oncontextmenu = function () { 
   //90°回転
   d = d + 90;
  e.style.transform = "rotate(" + d + "deg)";
  // 右クリックでメニューが出るのを阻止
 return false;
}
```

こうする事で、右クリックにて要素の回転が実現できます。

スマホから同じ様な処理をする場合については後日書いていきます。(スマホからは右クリックできない為)

それでは。
