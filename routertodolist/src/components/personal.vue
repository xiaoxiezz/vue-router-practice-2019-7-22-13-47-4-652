<template>
  <div class="personal">
    <p>个人页面</p>
    <ul>
      <li>
        <router-link to="/index">返回</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>
</style>
