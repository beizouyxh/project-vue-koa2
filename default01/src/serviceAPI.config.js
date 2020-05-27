const baseUrl=" https://www.easy-mock.com/mock/5ec4e356e0e3c81a0943e0d9/vue-koa"
const localUrl="http://localhost:1234/"
const Url={
    getShoppingMall:baseUrl+'index',    //商城首页所有信息
    getGoodsInfo:baseUrl+'getGoodsInfo',
    registerUser:localUrl+'user/register',     //用户注册接口
    login:localUrl+'user/login',            //用户登录接口
    getDetailGoodsInfo:localUrl+'goods/getDetailGoodsInfo',    //获取商品详情    
    getCategoryList:localUrl+'goods/getCategoryList',    //获取大类信息数据
    getCategorySubList:localUrl+'goods/getCategorySubList',    //获得小类信息数据接口
    getGoodsListByCategorySubID:localUrl+'goods/getGoodsListByCategorySubID',    //获得小类商品信息
}


module.exports=Url