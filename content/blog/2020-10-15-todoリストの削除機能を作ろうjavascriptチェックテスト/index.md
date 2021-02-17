---
title: "todoリストの削除機能を作ろう(JavaScriptチェックテスト)"
date: "2020-10-15"
categories: 
  - "javascript"
  - "チェックテスト"
---

## はじめに

以下の様な、todoリストから内容を指定する事で削除できる機能を作る

```
// todoリスト
const todos =[{
    text:'watch udemy',
    completed:true,
},{
    text:'write blog',
    completed:true,
},{
    text:'post blog',
    completed:true,
},{
    text:'take a bath',
    completed:true,
},{
    text: 'go to bed',
    completed:true,
}
]


//削除機能
deleteTodo(todos,'write Blog')

//todoリストにある「write Blog」の要素が消える
```

## 要件

配列todosから「write blog」の値を持つ要素を削除するdeleteTodo関数を作ろう。

第一引数に配列、第二引数にテキストを持たせて一致する場合に、その配列から一致する要素を削除させる。

## 解答

```
const deleteTodo = function(todos,todoText){
     const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if(index > -1){
        todos.splice(index,1)
    }
   
}
```

## 解説

大まかな流れとして、以下の手順を踏む。

  
①第二引数に入れたテキストと一致する値を持つ要素を探す。あった場合にそのインデックスをとってくる(findIndex使う)  
②インデックスの値から、配列の要素を削除する

### ①第二引数に入れたテキストと一致する値を持つ要素を探す。あった場合にそのインデックスをとってくる(findIndex使う)

```
const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
```

findIndexを使う。  
findIndex は配列のなっから特定のインデックスを返す。

今回は return todo.text.toLowerCase() === todoText.toLowerCase()

なので、todoの配列内の値と、deleteTodoの第二引数で指定した値が一致した場合、その要素のインデックスを返す。

今回はその値をindexに格納している。

### ②インデックスの値から、配列の要素を削除する

```
   if(index > -1){
        todos.splice(index,1)
    }
```

indexで受け取った値を元に、spliceを使ってtodosの配列から要素削除している。

findIndexは一致するものがなかった場合に「-1」を返すので、index>-1の場合に限定している。
