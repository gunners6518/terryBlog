---
title: "JavaScriptでライブラリを使わずにトーストを実装する"
date: "2020-04-15"
categories: 
  - "javascript"
---

## はじめに

デザインコーディングの延長で、JavaScriptでトーストの実装を行う機会がありました。  
toast.jsなどのライブラリを使った方法もあったのですが、どれも柔軟性に欠け、思い通りに要素をいじれなかったので、ピュアなJavaScriptを使い実装しました。

### 完成物

ボタンを押すと緑色のトーストが出てきます。  
「登録完了」とかで使われるやつです。

## ソースコード

```
<!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <div id="toast">
      <p>基本情報を更新しました</p>
    </div>
    <button class="button" style="font-size:12px; width:170px; height:32px;">
      ボタン
    </button>
  </body>
</html>
<script>
  const toast = document.querySelector("#toast");
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    toast.style.visibility = "visible";
    // disappear after a few seconds.
    setTimeout(function() {
      toast.style.visibility = "hidden";
    }, 3000);
  });
</script>
<style >
  #toast {
    display: flex;
    visibility: hidden;
    height: 60px;
    width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    z-index: 999;
    background-color: #d4edda;
    position: absolute;
    top: 0; /* if show bottom, replace to 'bottom: 0;' */
    left: 414px;
  }
  #toast > p {
    margin: 24px 0;
    margin-left: 8px;
    font-family: "Noto Sans CJK JP";
    font-size: 14px;
    vertical-align: center;
    color: #155724;
    letter-spacing: 0;
    line-height: 18px;
  }
</style>
```

github:[https://github.com/gunners6518/blog/tree/master/toast](https://github.com/gunners6518/blog/tree/master/toast)

## 解説

### html部分

headタグの中身はいらないので、bodyタグの中だけ。

```
<body>
    <div id="toast">
      <p>基本情報を更新しました</p>
    </div>
    <button class="button" style="font-size:12px; width:170px; height:32px;">
      ボタン
    </button>
 </body>
```

そんなに難しいコードではないですね。  
id="toast"で括っている部分がトーストとして表示させたい要素。  
初期状態では非表示にしています。  
buttonには直接styleを打ち込んでいますが、これは真似しなくて良いです！笑

## JavaScript部分

```
<script>
  const toast = document.querySelector("#toast");
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    toast.style.visibility = "visible";
    // disappear after a few seconds.
    setTimeout(function() {
      toast.style.visibility = "hidden";
    }, 3000);
  });
</script>
```

まず1,2行目に出てくる''document.querySelector("セレクタ名");''。  
これはセレクタ名に一致する要素を1つ取得してきてくれます。

似ているものに''document.querySelectorAll("セレクタ名");''はセレクタ名に一致する要素を全て取ってくれます。

今回は#toastを持つ要素をtoast。  
.buttonを持つ要素をbuttonとJavaScript内で定義しています。

次の''button.addEventListener("click", () => {処理})''では、先ほど定義したbuttonがクリックされた時に{処理}を行うというスクリプトです。

内容は''

toast.style.visibility = "visible";  
// disappear after a few seconds.  
setTimeout(function() {  
toast.style.visibility = "hidden";  
}, 3000);

''となっていて、toastのcssを変化させています。内容としては''visibility = "visible"''とする事でトーストを見えるようにし、setTimeoutにて時間でまた隠す処理をしています。

JavaScriptの部分は割と慣れていないと難しいと思うので、スクリプトを1つ1つ調べて確認しるとわかりやすいと思います。

## cssの部分

cssはそこまで重要な箇所はありません。

```
<style >
  #toast {
    display: flex;
    visibility: hidden;
    height: 60px;
    width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    z-index: 999;
    background-color: #d4edda;
    position: absolute;
    top: 0; /* if show bottom, replace to 'bottom: 0;' */
    left: 414px;
  }
  #toast > p {
    margin: 24px 0;
    margin-left: 8px;
    font-family: "Noto Sans CJK JP";
    font-size: 14px;
    vertical-align: center;
    color: #155724;
    letter-spacing: 0;
    line-height: 18px;
  }
</style>
```

#toastを最初はvisibility: hidden;にして、隠しておく事。  
z-index: 999;にして、ページがあった時も上肉てくれるようにする事。  
辺りは気にしています。

## まとめ

JavaScriptオンリーでトーストの実装を行っていきました。  
最近は便利なライブラリが多くある為、トーストについて1から自力で実装する機会はあまりないかもしれません。

しかしピュアなJavaScriptを正しく理解する事で、モダンなUIパーツにも対応していくことが可能です。
