---
title: "家計簿機能を作ろう(JavaScriptチェックテスト)"
date: "2020-10-13"
categories: 
  - "javascript"
  - "チェックテスト"
---

## はじめに

今回はJavaScriptを使って家計簿の機能を作りました  
オブジェクト、関数の基礎の復習としてお使いください

## 作る物

名前、収入、支出が分かる家計簿を作る  
引数に金額を入れると収入として記録する  
引数に金額を入れると支出として記録する  
収入と支出がリセット出来るようにする  
家計簿の名前、残金、収入、支出を出力する

## ヒント

・myAccountオブジェクトを作る  
・引数に収入を入れると、アカウントの収入が増える関数を作る  
・引数に支出を入れると、アカウントの支出が増える関数を作る  
・アカウントの収入と支出を0にセットする関数を作る  
・「このアカウントは**(name)**の物で、残金は**(income-expenses)**です。収入は**(income)**、支出は**(expenses)**です」と出力されるようにする

## 解答・解説

```

let myAccount = {
    name: 'terry',
    income:0,
    expenses:0,
}

//収入を足す
let addIncome = function(account,income){
    account.income = account.income + income
}

// 費用を引き
let addExpenses = function(account,expenses){
    account.expenses = account.expenses + expenses
}

//費用をリセットする
let resetAccount = function(account){
    account.income =0,
    account.expenses =0
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses;
    return `このアカウントは${account.name}の物で、残金は${balance}です。収入は${account.income}、支出は${account.expenses}です`

}

addIncome(myAccount,500);
addExpenses(myAccount,200)
console.log(getAccountSummary(myAccount));
```

### myAccountオブジェクトを作る

```
let myAccount = {
    name: 'terry',
    income:0,
    expenses:0,
}
```

myAccountオブジェクトを作る。  
今回は要件通り、名前、収入、支出を定義する。

### 引数に金額を入れると収入として記録する

```
let addIncome = function(account,income){
    account.income = account.income + income
}
```

引数にaccount、incomeを設定する。  
以下の様にアカウントと収入を入れれば記録される。

```
addIncome(myAccount,500);
```

支出に関しても同様に進める。

### アカウントの収入と支出を0にセットする関数を作る

```
let resetAccount = function(account){
    account.income =0,
    account.expenses =0
}
```

引数にaccountを設定し、そのアカウントのincomeとexpensesを0にする事でリセットする。

### 「このアカウントは**(name)**の物で、残金は**(income-expenses)**です。収入は**(income)**、支出は**(expenses)**です」と出力されるようにする

```
let getAccountSummary = function(account){
    let balance = account.income - account.expenses;
    return `このアカウントは${account.name}の物で、残金は${balance}です。収入は${account.income}、支出は${account.expenses}です`

}
```

引数にaccountを指定したので、myAccountの名前、収入、支出を取ってこれる。  
それによって残金を計算する。
