<template>
  <button :class="['app-btn', type, color, size]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    color: "red" | "gray",
    type: "fill" | "stroke",
    size: "lg" | "md" | "sm",
  }>();

</script>

<style lang="scss">

.app-btn {
  border-radius: 10px;

  span {
    display: flex;
    align-items: center;

    gap: 16px;
  }

  &.red {
    &.fill {
      background: var(--red);
      color: var(--white);
      
      &:hover {
        background: var(--red-light);
      }
    }

    &.stroke {
      color: var(--red-light);

      &:hover {
        color: var(--red);
      }
    }
  }

  &.gray {
    &.stroke{
      border-color: var(--gray-line) !important;
      color: var(--gray-dark);

      &:hover {
        color: var(--dark);
      }
    }
  }

  &.lg {
    padding: 12px 16px;
  }

  &.md {
    padding: 9px 24px;
  }

  &.sm {
    padding: 9px;
    border-radius: 8px;
  }

  &.stroke {
    border: 1px solid currentColor;
    background: transparent;
  }

  &.fill {
    border: none;
  }

  span {
    display: flex;
  }
}
</style>