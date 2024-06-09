<template>
  <article class="product">
    <div class="product__img">
      <img v-if="prop.photo?.url" :src="prop?.photo?.url" loading="lazy" />
    </div>
    <div class="product__controls">
      <icons-main id="info" :size="24" />
    </div>

    <div class="product__body">
      <div class="product__title">
        {{ prop.vehicle_name }}
      </div>

      <div class="product__vin">
        {{ prop.vin }}
      </div>

      <div class="product__bottom">
        <div :class="['product__count', {all: prop.angles_count === maxCount}]">
          <icons-main v-if="prop.angles_count === maxCount" id="checkbox-mark" :size="16" />
          {{ prop.angles_count }}/{{ maxCount }}
        </div>
        <div class="product__days">
          3 days left
        </div>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import type { TProduct } from '~/types/api/cars';

const props = defineProps<{prop: TProduct}>();

const maxCount = 30;
</script>

<style scoped lang="scss">
.product {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 354px;

  gap: 24px;
  padding: 16px 24px;

  background: var(--gray-line-primary);

  border-radius: 10px;

  &__img {
    width: 306px;
    height: 208px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;

      object-fit: contain;
    }
  }

  &__controls {
    position: absolute;
    right: 20px;
    top: 20px;

    svg {
      cursor: pointer;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;

    gap: 18px;

    color: var(--gray);
  }

  &__title {
    font-size: 20px;
    font-weight: 700;

    margin-bottom: -4px;

    color: var(--black);
  }

  &__bottom {
    display: flex;
    justify-content: space-between;

    padding-top: 18px;

    width: 100%;

    border-top: 1px solid var(--gray-line);
  }

  &__count {
    display: flex;
    align-items: center;

    gap: 4px;
    padding: 4px 12px;

    border-radius: 6px;

    background: var(--grey-secondary);
    color: var(--grey-dark);

    &.all {
      background: #E4F5DD;
      color: var(--green);
    }
  }
}
</style>