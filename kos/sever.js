const Koa=require("koa");
const router=require("koa-router")()//注意koa-router是一个函数  引入并执行它
const { append } = require("koa/lib/response");
const static=require("koa-static");

const app=new Koa();// 创建应用

//  __dirname  node的全局变量  可以直接获取当前项目的绝对路径
app.use(static(__dirname + "/public"));//把名为public的文件夹设置为 静态文件目录

router.get("/",async (ctx)=>{// ’/‘代表首页
    //此处直接写文件名即可  不用写public
    ctx.body=`
        <img src="images/贞德.png">
    `;
})

router.get("/music",(ctx)=>{
    ctx.body="<h2>button</h2>"
})


app.use(router.routes())//在koa应用中 引入 router
/*
//可以用来引入一个 中间件  中间件即是一个 函数
app.use(async (ctx)=>{
    //ctx  上下文
    ctx.body="hello koa"
});
*/
app.listen(3000,()=>{
    console.log("koa server is running");
})//设置监听窗口