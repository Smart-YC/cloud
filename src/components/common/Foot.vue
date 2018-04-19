<template>
  <div class="foot">
    <div class="footer-link"><h3 class="footer-link-title">用户帮助</h3><a class="footer-link-item" href="//help.ele.me/pc/"
                                                                       target="_blank">我的客服</a></div>
    <div class="footer-link"><h3 class="footer-link-title">商务合作</h3><a class="footer-link-item" href="//kaidian.ele.me"
                                                                       target="_blank">我要开店</a> <a
      class="footer-link-item" href="/support/about/jiameng" target="_blank">加盟指南</a> <a class="footer-link-item"
                                                                                         href="/support/about/contact"
                                                                                         target="_blank">市场合作</a> <a
      class="footer-link-item" href="http://openapi.eleme.io/" target="_blank">开放平台</a></div>
    <div class="footer-link"><h3 class="footer-link-title">关于我们</h3><a class="footer-link-item" href="/support/about"
                                                                       target="_blank">饿了么介绍</a> <a
      class="footer-link-item" href="http://jobs.ele.me/" target="_blank">加入我们</a> <a class="footer-link-item"
                                                                                      href="/support/about/contact"
                                                                                      target="_blank">联系我们</a> <a
      class="footer-link-item" ng-href="//h5.ele.me/service/agreement/#HEAEDER_SHOW=1" target="_blank"
      href="//h5.ele.me/service/agreement/#HEAEDER_SHOW=1">规则中心</a></div>
    <div class="footer-contect">
      <div class="footer-contect-item">24小时客服热线 : <a class="inherit" href="tel:10105757">10105757</a></div>
      <div class="footer-contect-item">关注我们 :
        <div href="JavaScript:" class="icon-wechat" ubt-click="402">
          <div class="dropbox dropbox-bottom footer-contect-dropbox" ubt-visit="402">
            <p>微信号: elemeorder</p>
            <p>饿了么网上订餐</p></div>
        </div>
        <a href="http://e.weibo.com/elemeorder" class="icon-weibo" target="_blank"></a></div>
    </div>
    <div class="footer-mobile"><a href="https://h.ele.me/landing" target="_blank"><img
      src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" class="footer-mobile-icon"
      alt="扫一扫下载饿了么手机 App"></a>
      <div class="footer-mobile-content"><h3>下载手机版</h3>
        <p>扫一扫,手机订餐方便</p></div>
    </div>
    <div class="footer-copyright serif"><h5 class="owner">所有方：上海拉扎斯信息科技有限公司</h5>
      <p>增值电信业务许可证 : <a href="http://www.shca.gov.cn/" target="_blank">沪B2-20150033</a> | <a
        href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备 09007032</a> | <a
        href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823" target="_blank">上海工商行政管理</a>
        Copyright ©2008-2018 ele.me, All Rights Reserved.互联网药品信息服务资格证书 编号：（沪）-经营性-2016-0011</p></div>
    <div class="footer-police container"><a href="http://www.zx110.org/picp/?sn=310100103568" rel="nofollow"
                                            target="_blank"><img alt="已通过沪公网备案，备案号 310100103568"
                                                                 src="//shadow.elemecdn.com/faas/desktop/media/img/picp_bg.e373b3.jpg"
                                                                 height="30"></a></div>
  </div>
</template>

<script>
  export default {
    name: "foot"
  }
</script>

<style scoped>
  h1, h2, h3, h4, h5, h6 {
    font-family: PingFang SC, Lantinghei SC, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  .inherit {
    color: inherit;
  }

  .foot {
    width: 1200px;
    margin: 0 auto;
    clear: both;
  }

  .footer-contect, .footer-link, .footer-mobile {
    float: left;
    width: 15%;
    margin-top: 30px;
  }

  .footer-contect-item, .footer-link-item {
    color: #999;
    display: block;
    line-height: 24px;
  }

  .footer-contect-item {
    margin-bottom: 12px;
    color: #666;
    font-size: 14px;
  }

  .footer-contect {
    padding-left: 3%;
    border-left: 1px #e6e6e6 solid;
    width: 23%;
    padding-right: 10px;
  }

  .footer-link-title {
    font-size: 14px;
    line-height: 30px;
  }

  .footer-link-item {
    width: 50%;
    font-size: 12px;
  }

  .footer-mobile-icon {
    width: 90px;
    height: 90px;
    margin-right: 20px;
    float: left;
  }

  .footer-copyright {
    font-size: 12px;
    clear: both;
    padding-top: 60px;
    color: #999;
    text-align: center;
  }

  p a {
    color: #999;
  }

  .serif {
    font-family: Palatino, Optima, Georgia, serif;
  }

  .footer-police {
    padding: .5em 0;
    text-align: center;
  }

  .footer-copyright .owner {
    color: #0e0e0e;
  }
</style>
