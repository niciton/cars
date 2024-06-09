<template>
  <div class="title-blocck__wrap">
    <div class="title-blocck container">
      <div class="title-blocck__inner">
        <h1>
          {{ title }}
        </h1>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const parops = defineProps<{
  title: string,
}>();
</script>

<style lang="scss">
.title-blocck {
  display: flex;

  min-height: var(--header-height);

  &__inner{
    display: flex;
    align-items: center;
    
    gap: 16px;

    height: var(--header-height);
    
    pointer-events: all;
  }

  &__wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 110;
    
    padding-left: var(--sidebar-width);

    pointer-events: none;
  }
}
</style>