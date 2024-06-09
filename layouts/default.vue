<template>
  <div class="wrapper">
    <main-header />
    <main-sidebar />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  margin-top: 32px;
  margin-bottom: 45px;
}
</style>

