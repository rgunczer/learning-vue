<template>
  <div class="user">
    <h1>User Component</h1>
    <!-- <h2>This is {{ $route.params.username }}'s page</h2> -->
    <h2>This is {{ username }}'s page</h2>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>
