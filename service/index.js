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


const cors=require('koa2-cors')       //引入koa2 跨域中间件

app.use(cors())
app.use(bodyParser());     //使用 ko-badyParser

//装载所有子路由
let router = new Router();   //父路由
//子路由
router.use('/user',user.routes())
router.use('/home',home.routes())
router.use('/goods',goods.routes())

//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

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