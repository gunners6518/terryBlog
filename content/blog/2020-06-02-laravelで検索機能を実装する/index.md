---
title: "laravelで検索機能を実装する"
date: "2020-06-02"
categories: 
  - "laravel"
  - "php"
tags: 
  - "laravel"
---

Laravelで検索機能を実装します。  
イメージは下記の動画の感じ。タイトル、タグ、本文に対してあいまい検索を行なっています。

## 実装開始

### ①inputタグを作る

まずはformのinputタグを作って見た目の部分を整えます。  
今回はbootstrapを使っているので、classが見にくいかもしれません。

```
 <form class="form-inline my-2 my-lg-0 ml-2">
      <div class="form-group">
      <input type="search" class="form-control mr-sm-2" name="search"  value="{{request('search')}}" placeholder="キーワードを入力" aria-label="検索...">
      </div>
      <input type="submit" value="検索" class="btn btn-info">
  </form>
```

ポイントは

・formのactionを入れない事。  
・inputのvalueをvalue="{{request('search')}}"にする事(入力すると値がURLに反映されます)。

辺りかなと。

### ②controllerに検索処理を書く

```
   $articles = Post::orderBy('created_at', 'asc')->where(function ($query) {

            // 検索機能
            if ($search = request('search')) {
                $query->where('title', 'LIKE', "%{$search}%")->orWhere('tag1','LIKE',"%{$search}%")->orWhere('body','LIKE',"%{$search}%")
                ;
            }

            // 8投稿毎にページ移動
        })->paginate(8);
```

検索機能のポイントは

・whereでLIKEを使う事であいまい検索にしている  
・orWhereを使う事で、タイトル、タグ、本文今違って検索している

辺りです。

### ついでにページネーション入れる

ページネーションはこれですね。  
検索結果や一覧ページをページに分けて表示するやつです。

![](images/4602455ff00fec7add22b38182729033-1024x287.png)

Laravelに基本的な機能が備わっているので、秒で作れます！！

まずcontrollerにpaginateを記述します。  
今回は8投稿でページ遷移します。

```
$articles = Post::orderBy('created_at', 'asc')->where(function ($query) {

            // 検索機能
            if ($search = request('search')) {
                $query->where('title', 'LIKE', "%{$search}%")->orWhere('tag1','LIKE',"%{$search}%")->orWhere('body','LIKE',"%{$search}%")
                ;
            }

            // 8投稿毎にページ移動
        })->paginate(8);
```

次にページネーションを設置したい所にこちらを記述します。

```
  <div class="d-flex justify-content-center ">
        {{ $articles->links() }}
  </div>
```

少し見た目を変えたいので、ファイルを変更します。

コマンドラインで下記を打ちます。

```
php artisan vendor:publish --tag=laravel-pagination
```

4つほどファイルが生成されたと思いますが、デフォルトでは`bootstrap-4.blade.php`が使われるようになっていて、そちらを利用すると完成です。

最後まで読んでいただきありがとうございます。  
[Twitter](https://twitter.com/teriteriteriri)もやっているので、興味あればご覧になってください！
