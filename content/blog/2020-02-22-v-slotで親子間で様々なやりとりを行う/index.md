---
title: "v-slotで親子間で様々なやりとりを行う"
date: "2020-02-22"
categories: 
  - "vue-js"
tags: 
  - "vue-js"
  - "v-slot"
---

## v-slot

propsはあくまでStringやNumberなどのデータしか送れません。  
htmlタグを送る時は別のやり方があります。

### 子コンポーネントに受け皿としてslotを使う

以下の様に、子コンポーネントでは受け皿として<slot>を定義。

```
子コンポーネント

<template>
 <div>
  <slot></slot>
 </div>
</template>
```

親コンポーネントでは、渡したいhtmlを子コンポーネントタグの中に入れ込む事で、子コンポーネントの<slot>部分に送れます。

今回だと「こんにちは」と「今日の天気は晴れです。」が<slot>に渡され、子コンポーネントとして出力されます。

```
親コンポーネント
<template>
 <div>
  <子コンポーネント>
　　<h1>こんにちは</h1>
    <p>今日の天気は晴れです。</p>
 </div>
</template>
```

### propsとslotの違い

propsはデータを送る。  
slotはhtmlタグを送る。(コンポーネントのtemplateタグと一緒で中にいろいろ入れていてもOK)

### slotのスコープ

slotのデータは定義しているコンポーネント内でしか使えない！

例えば、親コンポーネントにてslotを置き、title-nameのデータを渡したとすると、title-nameのデータは子コンポーネントのpropsにて定義されているので、親コンポーネントでは扱えません！！！

```
//親コンポーネント
<template>
 <div>
 <子コンポーネント title-name="挨拶">
 　<h1>Hello</h1>
　<p>{{titmeName}}</p>  //出力されない！
 <子コンポーネント>

 </div>
</template>
```

逆に子コンポーネントではpropsのtitleNameに親コンポーネントの「挨拶」が入るので、pタグにて出力できます。

```
<template>
 <div>
  <slot></slot>
 <p>{{titleName}}</p>　//出力される
 </div>
</template>


////
export default{
 props:['titleName']
}
```

#### slotのcssは親でも子でも適応される！！！

propsで与えられているデータと違い、cssは歩どっちからでも適応させる事ができます！！先程のコードを使って説明すると。

```
//親コンポーネントの場合
<template>
 <div>
 <子コンポーネント title-name="挨拶">
 　<h1>Hello</h1>
 <子コンポーネント>

 </div>
</template>

//当たり前の様にslot内のh1タグにcssを効かせられる
<style>
 h1{
 color:red;
 }
</style>
```

```
//子コンポーネントの場合

<template>
 <div>
  <slot></slot>
 </div>
</template>


//slotの部分に親から貰ったhtmlを代入した形で扱えて、cssを効かせられる！
<style>
 h1{
 color:blue;
 }
</style>
```

ちなみに親も子もcssを指定した場合は親コンポーネントでの指定が勝ちます。今回の場合だと親で指定したcolor:redが反映される形ですね。

#### slotにデフォルトの値を入れる

親コンポーネントでは、子コンポーネントを呼び出した際にslotにいれる内容を書き込んでいましたが、特に内容を入れなかった場合に表示されるデフォルトの内容を設定する事ができます。

やり方は簡単で、子コンポーネントのslotの中にデフォルトの値を入れて上げるだけです。

```
//子コンポーネント

<slot>デフォルト値</slot>
```

実際に親コンポーネントで呼び出してみるとこうなります！  
slot内に何も指定されていないとデフォルト値、指定してあるとその内容が表示される事が分かります。

こういったslotのデフォルト値をフォールバックコンテンツと呼びます。

```
//親コンポーネント

<template>
 <div>
 <子コンポーネント> </子コンポーネント>   ///デフォルト値が表示される
 <子コンポーネント> ///10が表示される
　　<p>10</p>
</子コンポーネント>   

 </div>
</template>
```

### v-slotを使って名前付きslotを作る

slotに名前をつけることによって、複数のslotを使い分けられる！

```
//親コンポーネント 　設定
<tempalte v-slot:スロット名>
　内容
</template>


//子コンポーネント　呼び出し
　<slot name="スロット名"></slot>
```

例

```
//親コンポーネント 　
<tempalte v-slot:title>
　<h1>こんにちは</h1>
</template>
<tempalte v-slot:contents>
　<p>気分が良い！！！</p>
</template>


//子コンポーネント　呼び出し
　<slot name="title"></slot> //<h1>こんにちは</h1>が呼び出される
　<slot name="contents"></slot>　//<p>気分が良い！！！</p>が呼び出される
```

#### 名前付きslotの中にdefault値を設定する

templateタグで囲っていない部分→デフォルト値になる！！

```
//親コンポーネント 　
<子コンポーネント>
<tempalte v-slot:title>
　<h1>こんにちは</h1>
</template>
  アイウエオ　//templateタグで囲っていない部分→デフォルト値になる！！
<tempalte v-slot:contents>
　<p>気分が良い！！！</p>
</template>
</子コンポーネント>


//子コンポーネント　呼び出し
　<slot name="title"></slot> //<h1>こんにちは</h1>が呼び出される
　<slot name="contents"></slot>　//<p>気分が良い！！！</p>が呼び出される
　<slot> </slot>//デフォルト値のアイウエオが呼び出される
```

### 動的なslot名をつける

slot名には静的な値を直接入れるだけでなく、動的な値を入れる事も可能です！  
やり方はv-bindやv-onの時に動的な値を入れる時と同じで\[\]で囲ってあげるだけで大丈夫です。

```
<template v-slot:[title]> 

~~~~
export default{
 data(){
  return{
  title:"入れたい値！！"
　　　}；
　　},
　}
```

### 名前付きslotの省略記法

v-bindでは:、v-onでは@だった様にv-slotは#にて省略可能です！！

```
<template #slot名></template>
```

## v-slotまとめ

・親から子コンポーネントにhtmlを渡したい時にv-slot使う！

・`v-slot name=スロット名`で名前をつける事で複数使い分け可能。

・slotはスコープが効いていてcssが基本的にそのコンポーネントでしか反映されない

・#にて省略可能
