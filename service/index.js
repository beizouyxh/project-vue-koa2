const Koa =require('koa');
const app = new Koa();
const bodyParser=require('koa-bodyparser')     //引入前端发送来的请求的中间件 koa-bodyParser 
//引入connect
const {connect,initSchema} = require('./database/init.js')    
const mongoose=require('mongoose')

const Router =require('koa-router')
let user=require('./appApi/user.js')
let home=require('./appApi/home.js')
let goods=require('./appApi/goods.js')


const cors=require('koa2-cors')       //引入koa2-cors 跨域中间件

app.use(cors())             //使用cors
app.use(bodyParser());     //使用 ko-badyParser将数据上下文的数组解析到ctx.request.body中


let router = new Router();   //父路由
//加载子路由
router.use('/user',user.routes())
router.use('/home',home.routes())
router.use('/goods',goods.routes())

//加载路由中间件
app.use(router.routes())    //对象
app.use(router.allowedMethods())   //方法

//立即执行函数
;(async () =>{
    await connect()
    initSchema()
    
})()

app.use(async(ctx)=>{
    ctx.body='<h1>Hello koa2</h1>'
})

app.listen(1234,()=>{
    console.log('server staring at port 1234')
})