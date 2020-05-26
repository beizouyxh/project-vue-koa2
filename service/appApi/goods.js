const Router=require('koa-router')
let router=new Router()
//插入数据到数据库
const mongoose=require('mongoose')
const fs=require('fs')
//插入所有的商品信息
router.get('/insertAllGoodsInfo',async(ctx)=>{
    fs.readFile('./data_json/newGoods.json','utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Goods=mongoose.model('Goods')
        data.map((value,index)=>{
            // console.log(value)
            let newGoods=new Goods(value)
            newGoods.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount)
            }).catch(error=>{
                console.log('失败'+error)
            })
        })
    })
    ctx.body="开始导入数据"
})
//插入所有的商品大类
router.get('/insertAllCategory',async(ctx)=>{
    fs.readFile('./data_json/category.json','utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Category = mongoose.model('Category')
        data.RECORDS.map((value,index)=>{
            // console.log(value)
            let newCategory = new Category(value)
            newCategory.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount)
            }).catch(error=>{
                 console.log('失败：'+error)
            })
        })


    })
    ctx.body="开始导入数据"

})
//插入所有的商品小类
router.get('/insertAllCategorySub',async(ctx)=>{
    fs.readFile('./data_json/category_sub.json','utf8',(err,data)=>{
        data = JSON.parse(data)
        let saveCount = 0 
        const CategorySub = mongoose.model('CategorySub')
        data.RECORDS.map((value,index)=>{
            // console.log(value)
            let newCategorySub = new CategorySub(value)
            newCategorySub.save().then(()=>{
                saveCount++
                console.log('成功插入'+saveCount)
            }).catch(error=>{
                console.log('插入失败:'+error)
            })
        }) 
    })
    ctx.body="开始导入数据"
})

//***获取商品详细信息的接口
router.post('/getDetailGoodsInfo',async(ctx)=>{
    try{
        let goodsId = ctx.request.body.goodsId
        // console.log('+++++')
        const Goods = mongoose.model('Goods')
        let result=await Goods.findOne({ID:goodsId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})

/****读取大类的数据接口 ** */
router.get('/getCategoryList',async(ctx)=>{
    try{
        const Category=mongoose.model('Category')
        let result=await Category.find().exec()
        ctx.body={code:200,message:result}

    }catch(error){
        ctx.body={code:500,message:error}
    }
})


/** ****读取小类的数据接口 */
router.post('/getCategorySubList',async(ctx)=>{
    try{
        let categoryId = ctx.request.body.categoryId
        // let categoryId = 1
        const CategorySub = mongoose.model('CategorySub')
        let result = await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }
})

/*******根据类别获取商品列表 ****/
router.post('/getGoodsListByCategorySubID',async(ctx)=>{
    try{
        
        let categorySubId = ctx.request.body.categorySubId    //小类别ID
        let page=ctx.request.body.page    //当前页数
        let num =10 //每页显示数量
        let start=(page-1)*num      //开始位置
        
        const Goods = mongoose.model('Goods')
        let result = await Goods.find({SUB_ID:categorySubId}).skip(start).limit(num).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})
module.exports=router