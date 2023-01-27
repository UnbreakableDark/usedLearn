interface Isend{
    type:'post'|'get',
    dataType:'json',
    data:Document | XMLHttpRequestBodyInit,
    url:string,
    success(text:string,xml:Document):void,
    fail(status:number):void,
}

let hs:Isend={
    type:'post',
    dataType:'json',
    data:{} as Document | XMLHttpRequestBodyInit,
    url:"https://",
    success:function(text,xml){
        console.log(text);
    },
    fail:function(status){
        console.log(status);
    }
};

function ajax(options:Isend){
    const xhr=new XMLHttpRequest();

    const params=options.data;

    if(options.type==='get'){
        xhr.open('GET',options.url+'?'+params,true);
        xhr.send(null);
    }else if(options.type==='post'){
        xhr.open('POST',options.url,true);
        xhr.send(params);

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                let status=xhr.status;
                if(status>200 && status<300){
                    options.success && options.success(xhr.responseText,xhr.responseXML);
                }else{
                    options.fail && options.fail(status);
                }
            }
        }
    }
}

ajax(hs);