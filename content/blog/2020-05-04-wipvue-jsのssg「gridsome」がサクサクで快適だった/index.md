---
title: "[WIP]Vue.jsのSSG「Gridsome」がサクサクで快適だった"
date: "2020-05-04"
categories: 
  - "gridsome"
  - "vue-js"
---

久々にVue.jsよりの投稿です。  
最近流行のSSGが気になり、自分の得意なVue.jsでもいじれないかと思い、Gridsomeを触り始めたので、感想をまとめます。

## Gridsomeとは

SSG、いわゆる静的サイトジェネレーターと言われるフレームワークです。  
React.jsだとGatsbyが有名ですが、Vue.JsだとGridsomeが王道です。

## Gridsomeの特徴

### フロントはVue.js、データ取得はGraphQL

GridsomeはGraphQLにてAPIやjson、ローカルファイルなどをやり取りし、Vue.jsのコンポーネントにて実装しています。

Vue.jsが使えれば、Gridsomeではサクサク実装できるイメージです。

特にAPI周りはプラグインによって簡単に構築できます。

### ルーティングの設定が簡単で、すぐ開発できる

Nuxt.jsの様にサーバー側の複雑なルーティングを使わず、簡単に扱うことができます。  

## ホットリロードでブラウザチェックがサクサク

ホットリロードが常に効いているので、ブラウザでのデザインのチェックが楽々できます。  
これは本当に嬉しくて、細かい環境構築が入らない点がおお気に入りです。

## Nuxt.jsとの棲み分け

https://blog.mahoroi.com/posts/2019/02/what-gridsome-can-do/
