---
title: "JavaScriptのローカルストレージ（LocalStrage）とは？CRUDの方法を解説"
date: "2020-10-21"
categories: 
  - "javascript"
---

## ローカルストレージ（LocalStrage）とは

ローカルストレージ(LocalStorage)とはJavaScriptをを使って、データをwebブラウザ(クライアント側)に保存することができる仕組みです。  
データベースを用いずにデータを保存しておける点が魅力です。

Webサイトでよく出てくる「最近閲覧した○○」などで使われています。

## cookieとの違い

一般的に使われているcookieとの違いは大きく二点。

・データの保持の期間、容量  
・サーバーへの送信

### データ保持の期間、容量

ローカルストレージはデータの保持が無期限です。

これはメリットの様で、削除しない限りデータが残り続けるのでデメリットとしても捉えられています。  
その点、cookieは任意の期限を決めることが可能です。

また容量に関してはローカルストレージの方が多いです。  
※使っているブラウザによって差はある

### サーバーへの送信

cookieはサーバーへデータを送信します。

ローカルストレージはブラウザのみでデータを保持するため、サーバ側へのデータの送信はありません。

## ローカルストレージの使い方、CRUD

### Create(追加)、Update（更新）

createだけじゃなく、updateも同じ様に行える。

```

localStorage.setItem('key','値')
```

### Read（読み取り、取得）

```
localStorage.getItem('key')
```

### Delete（削除）

```
// locaStorageからkeyの値を削除
localStorage.removeItem(key);

// locaStorageから全てを削除
localStorage.clear();
```

## おまけ-JSONの変換-

ローカルストレージはJSON形式でデータを扱うことが多いため、ついでに文字列とJSON形式でのデータの変換方法を記載しておきます。

```
//オブジェクトや文字列をJSON形式に変換する
JSON.stringify() 

//JSON形式で書かれた文字列をJavaScriptのJSONオブジェクトに変換するメソッドです。
JSON.parse()
```
