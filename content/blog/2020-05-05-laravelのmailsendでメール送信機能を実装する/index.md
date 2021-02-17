---
title: "LaravelのMail::sendでメール送信機能を実装する"
date: "2020-05-05"
categories: 
  - "laravel"
  - "php"
---

## はじめに

Laravelを用いたサービスでお問い合わせ機能や、その返信にbcc、replyを実装する方法についてまとめます。  
要はLaravelでメール送信を行う機能の実装です。

Laravelでメール送信を行う方法はいくつかありますが、今回は特に実装が簡単なMail::sendを用いた実装方法について見ていきましょう。

## controrollerの作成

メールの送信動作は、各自のルーティングでweb.phpに記載してください。  
実際のメール処理はMailSendControllerにて行います。

例えば以下のようなcontrollerだとabcde@exampleにテストメールという件名のメールが飛びます。

```
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Mail;

class MailSendController extends Controller
{
    public function send(){

    	$data = [];

    	Mail::send('emails.test', $data, function($message){
    	    $message->to('abcde@example.com', 'Test')
　　　　　　　　　　　　->subject('テストメール');
    	});
    }
}
```

ここの->subjectの部分にbccやれplyToなどの要素を足していく事で、メールの細かい設定が可能です。

以上
