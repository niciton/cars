<template>
  <div :class="['app-input', {icon}]" :style="width ? `--input-width: ${width}px` : null">
    <input :type :name :placeholder @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="app-input__input" />
    <button v-if="icon" class="app-input__icon">
      <icons-main :id="icon" :size="24" />
    </button>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  type: HTMLInputElement['name'],
  name: string,
  placeholder: string,
  modelValue: string,
  width?: number,
  icon?: "search",
}>();

export type TAppInputEmit = {
  value: string,
};

const emit = defineEmits<{
  (name: "update:modelValue", value: string): void,
  (name: "activated_input", value: TAppInputEmit): void,
}>();
// const model = ;
</script>

<style lang="scss">
.app-input {
  position: relative;

  display: flex;

  width: var(--input-width, 354px);
  height: 42px;

  // border: 1px solid var(--gray-line);

  &__input {
    width: 100%;
    height: 100%;

    padding: 9px 16px;

    flex: 16;

    border: 1px solid var(--gray-line);
    border-radius: 8px;
  }

  &__icon {
    position: absolute;
    right: 16px;
    top: 9px;

    padding: 0;

    background: transparent;

    border: none;
  }
}
</style>