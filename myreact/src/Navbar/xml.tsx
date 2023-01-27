import React from "react";

export default function fn(){
    const xhr=new XMLHttpRequest();
    xhr.open('post','url',true,'username','password');//与服务器端建立连接
    /*
        参数列表：method:当前的请求方式  post,get
        url:服务器端地址
        async  bool值，表示是否异步执行操作，默认为true。
        username 可选用于用户名的认证，默认为null
        password 可选的密码用于认证用途，默认为null
    */
   xhr.send();//将页面数据null发送给服务端
   
}