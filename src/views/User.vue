<template>
  <div class="container">
    <div class="main">
      <ul class="item-list">
        <li class="li-avatar li-line">
          <div class="avatar-container">
            <img src="../assets/images/avatar.png">
            <i>获取头像</i>
          </div>
        </li>
        <li>
          <span class="icon-yellow icon-coin-yen"></span>我的积分
        </li>
        <li class="li-line">
          <span class="icon-green icon-calendar"></span>签到
        </li>

        <li>
          <span class="icon-red icon-mobile2"></span>实名认证
        </li>
        <li class="li-line">
          <span class="icon-purple icon-mobile2"></span>绑定手机
        </li>

        <li>
          <span class="icon-blue icon-menu"></span>用户条例
        </li>
        <li class="li-line">
          <span class="icon-green icon-download2"></span>APP下载
        </li>
      </ul>
      <div class="btn-container">
        <a href="javascript:;">登陆</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.item-list li{
  font-size: 0.32rem;
  background-color: #fff;
  padding: 0.266667rem;
  margin-bottom: 0.16rem;
}
.item-list li span {
  color: #fff;
  margin: 0.266667rem;
  padding: 0.106667rem;
  width:  0.533333rem;
  height: 0.533333rem;
  border-radius: 100%;
}
.item-list li.li-avatar {
  padding: 0.266667rem 0;
}
.avatar-container {
  position: relative;
  width: 1.813333rem;
  height: 1.813333rem;
  margin: 0 auto;
}
.avatar-container img{
  padding: 0.133333rem;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid #e9e9e9;
}
.avatar-container i {
  text-align: center;
  line-height: 0.533333rem;
  width: 100%;
  background-color: #e9e9e9;
  position: absolute;
  top: 50%;
  margin: 0;
  margin-top: -0.266667rem;
}

.item-list li.li-line {
  margin-bottom: 0.333333rem;
}
.icon-yellow {
  background-color: #ffa344;
}
.icon-green {
  background-color: #52c687;
}
.icon-red {
  background-color: #fa7576;
}
.icon-purple {
  background-color: #d7b9f7;
}
.icon-blue {
  background-color: #59c6fe;
}

.btn-container {
  margin: 0.4rem 0;
  text-align: center;
}
.btn-container a {
  width: 85%;
  padding: 0.2rem 0;
  display: inline-block;
  background-color: #2697fc;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 0.4rem;
}
</style>
