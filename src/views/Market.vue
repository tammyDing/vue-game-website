<template>
  <div class="container">
    <div class="main">
      <!-- 账户余额 -->
      <div class="balance">
        <div class="tips">
          账户余额 <span class="icon-notification"></span>
        </div>
        <div class="detail">
          <span class="num"><i>120</i> 积分</span>
          <span class="earn">挣积分<i class="icon-cheveron-right"></i></span>
        </div>
        <div class="record">
          <span><i class="icon-banknote"></i>兑换记录</span>
          <span><i class="icon-data"></i>我的宝箱</span>
        </div>
      </div>

      <!-- 积分抽奖 -->
      <div class="luckdraw">
        <div class="luck-title">
          <h3>积分抽奖</h3>
          <p>剩余免费抽奖次数: {{luckNumber}} 次</p>
        </div>
        <div class="luck-turntable">
          <!-- ss -->
        </div>
      </div>

      <!-- 积分兑换 -->
      <div class="exchange">
        <h3>积分兑换</h3>
        <!-- list 1 -->
        <div class="list list-1">
          <div class="list-sign">
            <ul class="list-content list-1">
              <li>
                <div class="img"></div>
                <div class="info">
                  <p>王者荣耀符文碎片*5</p>
                  <span>29积分</span>
                </div>
                <div class="change">
                  <span>兑换</span>
                </div>
              </li>
              <li>
                <div class="img"></div>
                <div class="info">
                  <p>王者荣耀惊奇碎片*2</p>
                  <span>24积分</span>
                </div>
                <div class="change">
                  <span>兑换</span>
                </div>
              </li>
              <li>
                <div class="img"></div>
                <div class="info">
                  <p>王者荣耀裂帛碎片*10</p>
                  <span>50积分</span>
                </div>
                <div class="change">
                  <span>兑换</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- list 2 -->
        <div class="list list-2">
          <div class="list-sign">
            <ul class="list-content list-1">
              <li>
                <div class="img"></div>
                <div class="info">
                  <p>王者荣耀符文碎片*5</p>
                  <span>29积分</span>
                </div>
                <div class="change">
                  <span>兑换</span>
                </div>
              </li>
              <li>
                <div class="img"></div>
                <div class="info">
                  <p>王者荣耀惊奇碎片*2</p>
                  <span>24积分</span>
                </div>
                <div class="change">
                  <span>兑换</span>
                </div>
              </li>
              <li>
                <div class="img"></div>
                <div class="info">
                  <p>王者荣耀裂帛碎片*10</p>
                  <span>50积分</span>
                </div>
                <div class="change">
                  <span>兑换</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      luckNumber: 1
    }
  }
}
</script>

<style>
.main {
  position: relative;
  padding: 0.106667rem;
}
.balance {
  margin: 0.133333rem;
  padding: 0.266667rem;
  border: 1px solid #2697fc;
  border-radius: 0.133333rem;
}
.tips span {
  margin-left: 0.106667rem;
  color: #e74c3c;
}
.detail {
  padding: 0.213333rem 0;
}
.detail .num i {
  font-size: 0.48rem;
}
.detail .earn {
  float: right;
}
.detail .earn i {
  font-size: 0.373333rem;
  position: relative;
  top: 0.08rem;
}
.record span {
  display: inline-block;
  margin-right: 0.8rem;
}
.record span i {
  margin-right: 0.106667rem;
}
.luckdraw {
  padding: 0.266667rem 0;
}
.luckdraw h3, .exchange h3{
  font-size: 0.426667rem;
  text-align: center;
  line-height: 0.853333rem;
}
.luckdraw p {
  text-align: center;
  font-size: 0.32rem;
}
.luck-turntable {
  margin: 0.266667rem auto;
  width: 5.333333rem;
  height: 5.333333rem;
  border: 1px solid #2697fc;
}
.exchange ul li {
  margin: 0.266667rem 0;
  border: 1px solid #2697fc;
  padding: 0.266667rem;
  position: relative;
}
.exchange .list {
  margin-bottom: 0.666667rem;
  padding: 0 0.266667rem;
}
.exchange .list-1 .list-sign {
  background-image: url('../assets/images/bg1.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: auto 100%;
}
.exchange .list-2 .list-sign {
  background-image: url('../assets/images/bg2.jpg');
  background-repeat: no-repeat;
  background-position: center -0.96rem;
  background-size: 100% auto;
}
.info p {
  font-size: 0.373333rem;
  line-height: 0.746667rem;
}
.change {
  position: absolute;
  right: 0.266667rem;
  bottom: 0.266667rem;
}
.change span{
  display: inline-block;
  padding: 0.16rem 0.266667rem;
  border-radius: 0.133333rem;
  border: 1px solid #2697fc;
}
.exchange .list-2 div {
  color: #fff;
}

</style>
