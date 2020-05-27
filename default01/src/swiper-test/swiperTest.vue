<template>
    <div>
        <swiper class="swiper" :options="swiperOption" >
            <swiper-slide class="text">
               <div>
                   商务部9日发布公告，自5月10日起对原产于美国和欧盟的进口相关高温承压用合金钢无缝钢管继续征收反倾销税，实施期限５年。
国家发展改革委等八部委9日联合发文，推动对承租国有房屋、经营出现困难的服务业小微企业和个体工商户免除上半年三个月租金，首次明确国有企业和政府部门、高校、研究院所等中央所属国有房屋出租要执行房屋所在地租金减免支持政策。

自然资源部9日发布，2019年全国海洋生产总值89415亿元，比上年增长6.2%。

5月9日，中央第六生态环境保护督察组向青海反馈第二轮督察情况时指出，青海湖保护仍有薄弱环节，环湖北岸污水处理厂的污水通过河流排入青海湖。

因为天气原因，9日，2020珠峰高程测量登山队队员分两批从海拔6500米的前进营地撤回大本营进行休整。

商务部9日发布公告，自5月10日起对原产于美国和欧盟的进口相关高温承压用合金钢无缝钢管继续征收反倾销税，实施期限５年。
国家发展改革委等八部委9日联合发文，推动对承租国有房屋、经营出现困难的服务业小微企业和个体工商户免除上半年三个月租金，首次明确国有企业和政府部门、高校、研究院所等中央所属国有房屋出租要执行房屋所在地租金减免支持政策。

自然资源部9日发布，2019年全国海洋生产总值89415亿元，比上年增长6.2%。

5月9日，中央第六生态环境保护督察组向青海反馈第二轮督察情况时指出，青海湖保护仍有薄弱环节，环湖北岸污水处理厂的污水通过河流排入青海湖。

因为天气原因，9日，2020珠峰高程测量登山队队员分两批从海拔6500米的前进营地撤回大本营进行休整。


               </div>
            </swiper-slide>
            
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {            
                swiperOption:{
                    direction:'vertical',    //竖屏
                    slidePerView:'auto',     
                    freeMode:true,
                    mousewheel:true
                }
            }
        },
        components:{swiper, swiperSlide}
    }
</script>

<style scoped>
    .swiper{
      height: 300px;
      overflow: hidden;
     }
    .text{
      font-size: 18px !important;
      text-align: left;
      padding:30px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

   }
</style>