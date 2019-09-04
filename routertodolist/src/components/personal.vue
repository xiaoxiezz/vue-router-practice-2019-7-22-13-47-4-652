<template>
  <div class="personal">
    <p>个人页面</p>
    <ul>
      <li>
        <router-link to="/index">返回</router-link>
      </li>
    </ul>
    <div class="info">
        <p>头像：</p>
        <img src="../heng.png"/>
        <p>姓名：</p>
        <p>电话：</p>
        <p>16666666666</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>
<style scoped>
.info {
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -100px;
  padding-bottom: 20px;
}
</style>
