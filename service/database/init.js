//连接数据库文件
const mongoose=require('mongoose');
const db="mongodb://localhost/smile-db";    //数据库路径
const glob=require('glob')    //引入glob模块
const {resolve} =require('path') ///引入path，自带的模块，无需安装

exports.initSchema=()=>{
    //* 通配符，表示所有的符合规则文件
    //resolve 将路径解析成绝对路径 然后遍历
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}


exports.connect=()=>{
    //连接数据库
    mongoose.connect(db)
      //最大连接次数 
    let maxConnectTimes=0
    //连接成功后，执行异步操作
    return new Promise((resolve,reject)=>{


         //增加数据库监听事件
        mongoose.connection.on('disconnected',()=>{
            // console.log('****数据库断开***')
            if(maxConnectTimes<=3){    //次数小于 3重连
                maxConnectTimes++
                mongoose.connect(db)   //重连
            }else{         //否则抛出错误
                reject()
                throw new Error('数据库出现问题，程序无法确定，请人为修理...')

            }
            
        })
    
         
        mongoose.connection.on('error',(err)=>{
            // console.log('***********数据库错误')
            if(maxConnectTimes<=3){
                maxConnectTimes++
                mongoose.connect(db)
            }else{
                reject(err)
                throw new Error('数据库出现问题，程序无法确定，请人为修理...')
            }
        })
        //链接打开的时候
        mongoose.connection.once('open',()=>{
           console.log('MongoDB Connected successfully!')     
           resolve();
        })
    })
    
    
}