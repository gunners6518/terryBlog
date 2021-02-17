---
title: "Vueで簡単な税込み・割り勘計算アプリを作る"
date: "2020-02-10"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
---

# 前置き

Vueの基礎文法の復習として以下の要件の税込み・割り勘計算アプリを作りました。  
コンポーネントやcomputed、methods、v-on、v-modelなどの簡単な解説も添えたので、Vue初学者の参考になるかと思います。

また本記事では過去の記事で触れた「vueインスタンスの基礎」や「v-if」についての解説は入れていません。必要に応じてこちらを参考にしてください。

https://terrblog.com/entry/2020/01/27/013611

https://terrblog.com/entry/2020/01/29/002138

## 要件

任意の数と人数が入力されたときに以下の二つの出力をできるようにする。(数、人数ともに整数とする)  
1.税込みの値  
2.税込み金額を人数で割った値

## 完成品

# 本編

さて、実際に作成に入っていきましょう。  
一旦、完成物のコードを見て頂き、それを沿って解説を入れていこうと思います。

## 完成版ソースコード

```
<!DOCTYPE html>
<html>
    <head>
        <title>My first Vue app</title>
        <script src="https://unpkg.com/vue"></script>
        <style>
            .title{
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 24px;
            }
            #app{
                position: relative;
            }
            .type{
                margin-top: 3px;
                margin-bottom: 1px;
            }

            .coution_num{
                position: absolute;
                top: 15px;
                left: 165px;
                color: red;
                font-size: 10pt; 
            }
            .coution_people{
                position: absolute;
                top: 67px;
                left: 165px;
                color: red;
                font-size: 10pt; 
            }

           button{
               display: inline-block;

               width: 100px;
               margin-top: 5px;
               margin-left: 0px;
               margin-right: 0px;
           }


           .text_tax{
               position: absolute;
               top:125px;
               font-size: 20px;
           }
           .text_exam{
               position: absolute;
               top:160px;
               font-size: 20px;
           }
        </style>

    </head>

    <body>
        <h1 class="title">「税込み、割り勘」計算サイト</h1>
        <div id="app">
            <Calculation />   
        </div>
        <script>
        var calc = Vue.component('Calculation',
        {
            data:function(){
                return{num:'',tax_num:0,people_num:1,exam:0,flag_tax:false,flag_division:false};
            },
            computed:{
                tax:function(event){
                    tax_num = this.num * 1.10;
                    console.log(tax_num)
                    return Math.floor(tax_num);
                },
                exam_2:function(event){
                    tax_num = this.num * 1.10;
                    exam = tax_num / this.people_num;
                    console.log(exam);
                    return Math.ceil(exam);
                },
            },
            methods:{
                doAction:function(event){
                    this.flag_tax = !this.flag_tax;
                },
                doAction_2:function(event){
                    this.flag_division = !this.flag_division;
                }
            },

            template:'<div>\
            <p class="type">金額を入力してください</p>\
            <div><input type="number" min="1" v-model="num"></div>\
            <p class="coution_num" v-if="num < 0">※0以上の値を入れてください</p>\
            <p class="type">人数を入力してください</p>\
            <div><input type="number" min="1" v-model="people_num"></div>\
            <p class="coution_people" v-if="people_num <= 0">※1以上の値を入れてください</p>\
            <button v-on:click="doAction">税込み</button>\
            <button v-on:click="doAction_2">割り勘</button>\
            <p v-if="flag_tax && num >= 0" class="text_tax">税込み:{{tax}}円です</p>\
            <p v-if="flag_division && num >= 0 &&people_num > 0" class="text_exam">一人当たり:{{exam_2}}円です</p>\
            </div>'
        })


        var app = new Vue({
            el:'#app',
        })
        </script>

    </body>
</html>
```

# 解説

## コンポーネントの出力

61~63行目:

以下の記述をすることで、「Calculationコンポーネント」を呼び出しています。

```
<div id="app">
    <Calculation />   
 </div>
```

65~106行目:

HTMLとして出力される部分は、templateとして記述しています。  
templateの中に書かれているHTMLが62行目に Calculation として呼び出されている形になります。

```
   template:'<div>\
            <p class="type">金額を入力してください</p>\
            <div><input type="number" min="1" v-model="num"></div>\
            <p class="coution_num" v-if="num < 0">※0以上の値を入れてください</p>\
            <p class="type">人数を入力してください</p>\
            <div><input type="number" min="1" v-model="people_num"></div>\
            <p class="coution_people" v-if="people_num <= 0">※1以上の値を入れてください</p>\
            <button v-on:click="doAction">税込み</button>\
            <button v-on:click="doAction_2">割り勘</button>\
            <p v-if="flag_tax && num >= 0" class="text_tax">税込み:{{tax}}円です</p>\
            <p v-if="flag_division && num >= 0 &&people_num > 0" class="text_exam">一人当たり:{{exam_2}}円です</p>\
            </div>'
        })
```

## v-modelにて入力値が即時に反映されるようにする

94,97行目

上記のtemplateタグ内にてv-modelを使っています。  
この構文はinputタグに入力された値をVueのdataプロパティの値やコンポーネントの変数にバインドする機能で、この機能を使用することで入力された値をリアルタイムに表示することができます。

今回はコンポーネント内の変数である「num(入力された金額)」、「people\_num(割り勘の人数)」がinputに入力される度に変更が反映されています。

## v-onにてボタンクリック時にイベントが起きるようにする

99~100行目

```
<button v-on:click="doAction">税込み</button>\
<button v-on:click="doAction_2">割り勘</button>\
```

v-onデレクティブは、イベントの属性に値をバインドする機能であり、この機能を使用することでVueオブジェクト内やコンポーネント内の変数を使用できるようになります。

今回はbuttonタグがクリックされた際に、「doAction」と「doAction\_2」が発火するように記述しています。  
「doAction」と「doAction\_2」の具体的な処理はmethods内にて記述していきます。

### なぜonclickが使えないのか？？

今回、buttonタグをクリックした時にイベントが起きるようにしたいんですが、カウンター変数の値を増やそうとする時は「onclick」を使用しても上手く作動しません。

これはVueのコンポーネント内のdataプロパティで定義した値はコンポーネント内でしか使えないため、コンポーネントの外部であるonclickによってカウンター変数を使うことは出来ないからです。

このような場合にv-onディレクティブを使用します。  
イベント名にはHTMLタグなどで使用するイベント名の「on」を取り除いた物を使用します。  
例としては、「onclick→click」。

## computedにて計算を行う

70行目~81行目:

```
computed:{
                tax:function(event){
                    tax_num = this.num * 1.10;
                    console.log(tax_num)
                    return Math.floor(tax_num);
                },
                exam_2:function(event){
                    tax_num = this.num * 1.10;
                    exam = tax_num / this.people_num;
                    console.log(exam);
                    return Math.ceil(exam);
                },
            },
```

computed(算術プロパティ)を使用しています。  
今回は、「tax(入力値に税率をかける処理)」と「exam\_2(入力値に税率値をかけた値を入力された人数で割る処理)」の二種類を定義していて、それぞれの値をreturnで返しています。  
このようにreturnで返した値をtemplete内で使用しています。  
また、「this.変数名」はコンポーネント内の変数で、「num(入力された金額)」、「people\_num(割り勘の人数)」を持ってきています。

console.logの部分は計算値の確認の為に、記述しています。

## methodsにてボタンが押された時の処理を書く

83行目~90行目：

```
 methods:{
                doAction:function(event){
                    this.flag_tax = !this.flag_tax;
                },
                doAction_2:function(event){
                    this.flag_division = !this.flag_division;
                }
            },
```

methodを使用して、税込みボタンと割り勘ボタンが押された時の処理を書いています。  
先ほどのv-onにて設定された「doActuon」と「doAction\_2」の具体的な処理が書いてある形です。

処理内容は「ボタンを押した時に判定値が反転する処理」としていて、これによってボタンを押した時に、templete内のv-ifでの条件分岐が行われるようにしています。

# 終わりに

現在、定期的にVue初学者向きのコンテンツを発信しているので、興味ある方はぜひ！！

Twitter：[https://twitter.com/teriteriteriri](https://twitter.com/teriteriteriri)
