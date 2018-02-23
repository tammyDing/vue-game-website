<template>
  <div class="container">
    <div class="wrapper">
      <div class="node">
        提示：新手礼包请在一天之内领取CDK，三天内使用，未在规定时间内使用导致CDK过期无法使用，概不负责。
      </div>
      <div class="content">
        <div class="form-control">
          <label>服务器：</label>
          <select>
            <option>select server</option>
            <option>severs 1</option>
            <option>severs 2</option>
            <option>severs 3</option>
            <option>severs 4</option>
            <option>severs 5</option>
            <option>severs 6</option>
          </select>
          <div class="form-btn">
            <span>点击领取新手礼包</span>
          </div>
        </div>
      </div>
      <!-- 热门礼包  -->
      <div class="gift">
        <h3>热门获取</h3>
        <div class="rep">
          <div>
            <img src="../assets/images/li1.jpg">
          </div>
          <div>
            <img src="../assets/images/li2.jpg">
          </div>
          <div>
            <img src="../assets/images/li3.jpg">
          </div>
          <div>
            <img src="../assets/images/li4.jpg">
          </div>
        </div>
        <h3>热门礼包</h3>
        <ul>
          <li>
            <img src="../assets/images/server_1.png">
            <span>冒险礼包</span>
          </li>
          <li>
            <img src="../assets/images/g_1.jpg">
            <span>格斗礼包</span>
          </li>
          <li>
            <img src="../assets/images/cover_1.gif">
            <span>勇者礼包</span>
          </li>
          <li>
            <img src="../assets/images/g_6.jpg">
            <span>王者礼包</span>
          </li>
          <li>
            <img src="../assets/images/g_2.jpg">
            <span>英雄礼包</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.wrapper {
  padding-top: 0.533333rem;
  background-image: url('../assets/images/bg4.jpg');
  background-position: -8.0rem center;
  background-repeat: no-repeat;
  background-size: cover;
}
.node {
  padding: 0.266667rem;
  border: 1px solid #cb4a73;
  color: #fff;
  margin: 0.266667rem 0.266667rem 0.533333rem 0.266667rem;
  border-radius: 0.133333rem;
}
.content {
  border-radius: 0.133333rem;
  padding: 0.266667rem;
  margin: 0.266667rem;
  color: #fff;
  border:1px solid #cb4a73;
}
.form-control {
  padding: 0.266667rem;
  position: relative;
  text-align: left;
}
.form-control select{
  padding: 0.106667rem 0.16rem;
}
.form-btn {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.32rem;
}
.form-btn span {
  display: inline-block;
  width: 2.666667rem;
  height: 0.64rem;
  line-height: 0.64rem;
  border: 1px solid #2697fc;
  text-align: center;
  cursor: pointer;
}
.gift h3 {
  font-size: 0.426667rem;
  margin-bottom: 0.266667rem;
}
.gift {
  padding: 0.533333rem;
  background-color: #fff;
}
.gift .rep {
  margin-bottom: 0.533333rem;
  display: flex;
}
.gift .rep div{
  margin: 0.266667rem;
  width: 20%;
}
.gift .rep img {
  width: 100%;
  height: 100%;
  border-radius: 0.106667rem;
  border: 1px solid #202333;
}
.gift ul {
  display: flex;
  margin: 0.266667rem;
}
.gift ul li {
  text-align: center;
  margin: 0.106667rem 0.266667rem;
}
.gift ul li img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}
.gift ul li span {
  display: block;
}
</style>
