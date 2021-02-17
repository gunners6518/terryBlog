---
title: "基礎文法と関数の(JavaScriptチェックテスト)"
date: "2020-10-13"
categories: 
  - "javascript"
  - "チェックテスト"
---

## はじめに

今回はJavaScriptの基礎にあたる、文法事項を中心としたチェックテストを作った。  
自分が理解できているかどうかを測定するには、実際にやってみるしかないので、実務でJavaScriptを使う機会が少ない人はぜひチャレンジして欲しい。

## 成績計算機を作ろう

### 要件

・引数に「点数」を「満点」を入れ、「点数/満点」の割合に応じて、成績をA、B、C、D、Fで返す関数を作る  
　(例：getGrade(75,100)　→　Cを返す！)  
・返す成績は以下の割合とする  
　A 90~100,B 80~89,C 70~79 ,D60~69 ,F59~  
・点数に「17」、満点に「20」を与えると「成績はB!! (85%)」と表示される様にする。  
　※Bが成績、85%は点数/満点の割合とする

**一旦手を止めてチャレンジしてみましょう！！！**

### ヒント

#### ・関数の作り方

今回の問題では、点数、満点を与える事で、成績を返す関数を作りたい。

```
let 関数名　= function (引数){
 処理
}

※引数は複数使う事も可能
```

例えば消費税を計算する関数は以下の様になる。

```
let getTip = function(tipPercent , totalValue ){
    return totalValue * tipPercent
}

 getTip(0.1,1200)
// tipPercentに0.1 、totalValueに1200円を与えている為、120円が返ってくる。
```

#### ・if文の使い方

今回は満点に対する点数の割合によって、与えられる成績が変わってくる。  
その為、条件分岐を使う事になる。  
if文の使い方はこちらを参考に。

https://terrblog.com/javascript%e3%81%aeif%e6%96%87/

### 答え

```

let gradeCalc = function (score,maxScore){
    let percent = (score/maxScore)*100
    let letterGrade = ''

    if(percent >= 90){
        letterGrade = 'A'
    }
    else if(percent >= 80){
        letterGrade = 'B'
    }
    else if(percent >= 70){
        letterGrade = 'C'
    }
    else if(percent >= 60){
        letterGrade = 'D'
    }
    else{
        letterGrade = 'F'
    }

    return `成績はA!! (${percent}%)`
}

let result = gradeCalc(17,20)
console.log(result)
```

### 解説

#### 関数を作る

```
let gradeCalc = function (score,maxScore){
    let percent = (score/maxScore)*100
    let letterGrade = ''

~~~~

}
```

引数に「点数」を入れるscore、「満点」を入れる「maxScore」を設定する。

割合は (score/maxScore)\*100 で算出する。

#### if文で割合ごとに分岐を作る

```
if(percent >= 90){
        letterGrade = 'A'
    }
    else if(percent >= 80){
        letterGrade = 'B'
    }
    else if(percent >= 70){
        letterGrade = 'C'
    }
    else if(percent >= 60){
        letterGrade = 'D'
    }
    else{
        letterGrade = 'F'
    }

}
```

割合に応じてletterGradeに成績が与えられる。  
if文の分岐は、else ifを使う事で今回の様に3つ以上に分ける事も出来る。  

#### 成績と割合を表記する

```
 return `成績は${letterGrade}!! (${percent}%)`
```

「\`あいうえおかきくけこ **${変数}** さしすせそたちつてと\` 」など**${}**で囲う事で、文字列の中に変数を出力することができる。  
今回はそれを利用して、${letterGrade}と${percent}を出力した。

## まとめ

今回のチェックテストは基礎の基礎なので、レベルとしては特に高くない。  
それでも、せっかく例題を作ったのだし、誰かの学習のきっかけになれたら嬉しいと思う！！
