<template>
  <header class="app-header">
    <div class="container">
      <div class="user-info">
        <app-btn class="user-info__add" color="red" type="stroke" size="sm">
          <icons-main :size="24" id="plus" />
        </app-btn>
        <NuxtLink to="/" class="user-info__user">
          <div class="user-info__user_photo">
            <img src="/img/photo.png" alt="user photo" />
          </div>
          <div class="user-info__user_name">
            John Doe  
          </div>
        </NuxtLink>
        <change-lang class="app-header__change-lang" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
:root {
  --header-height: 100px;
}

.wrapper {
  padding-top: var(--header-height);
}

.app-header {
  pointer-events: none;

  display: flex;
  align-items: center;

  position: fixed;
  left: var(--sidebar-width);
  right: 0;
  top: 0;
  z-index: 90;

  min-height: var(--header-height);

  border-bottom: 1px solid var(--gray-line);

  color: var(--black);
  background: var(--white);

  .user-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 40px;
    margin-left: auto;

    pointer-events: all;

    &__add {
      display: flex;

      padding: 10px;

      color: var(--red-light);
      background: transparent;

      border: 1px solid currentColor;
      border-radius: 6px;

      &:hover {
        color: var(--red);
      }

      svg {
        fill: currentColor;
      }
    }

    &__user {
      display: flex;
      align-items: center;

      gap: 14px;

      &_photo {
        display: flex;

        width: 46px;
        height: 46px;

        border-radius: 50%;

        overflow: hidden;

        img {
          display: flex;

          width: 100%;
          height: 100%;
        }
      }

      &_name {}
    }
  }

  &__change-lang {
    .app-select__active {
      border-color: transparent;
    }
  }
}
</style>