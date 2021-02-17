---
title: "Reactで親コンポーネントの状態を子コンポーネントから変更する"
date: "2020-11-25"
categories: 
  - "react"
  - "typescript"
---

## はじめに

親コンポーネントから子コンポーネントにデータを渡すときは素直にpropsで渡せば良いですが、  
子コンポーネントから親コンポーネントの情報を変更するにはどうすれば良いのかをまとめました。

## どうすれば子コンポーネントで親コンポーネントの状態を変えられるのか

結論から言うと、

・親コンポーネントでuseStateと関数を定義

・propsとしてその関数を子コンポーネントに渡

子コンポーネントでそれを実行して更新

の手順で出来ます。

簡単な例で見ていきましょう。

親コンポーネント

```
~~
 //useStateでstateを定義。初期値をfalseに
const [state,setSatte] =useState(false)

//関数のchangeStateを定義。引数のisStateは子コンポーネントで実行した際に取ってくる。
const changeState = (isState) => {
　setState(isState)
}

return (
    <div>
      //propsとして子コンポーネントに関数を渡す
      <childComponent changeState={changeState}/>
    </div>
  )
}

```

子コンポーネントでは

```
~~

//とりあえずisStateにはtrueを格納
const isState = true

//親から貰ったを実行
changeState(isState)

```

これで親コンポーネントのstateはtrueに更新できます。
