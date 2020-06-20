const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema

const categorySchema = new Schema({       //Schema建模，实现和mongodb数据库的映射，不具备表的操作的能力
    ID:{unique:true,type:String},    
    MALL_CATEGORY_NAME:{type:String},
    IMAGE:{type:String},
    TYPE:{type:Number},
    SORT:{type:Number},
    COMMENTS:{type:String}
})

mongoose.model('Category',categorySchema)