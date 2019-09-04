<template>
  <div class="index">
    <p>首页</p>
    <ul >
      <li>
        <router-link to="/personal">个人页面</router-link>
      </li>
      <li>
        <router-link to="/todolist">TodoList</router-link>
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
