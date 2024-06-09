<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__logo_wrap">

      <NuxtLink class="app-sidebar__logo" to="/">
        Demo Test
      </NuxtLink>

    </div>

    <div class="app-sidebar__pages">

      <NuxtLink to="/profile" :class="['app-sidebar__pages_item', {'active': activeRout === '/profile'}]">
        <icons-main id="profile" :size="24" /> 
        {{ text.profile }}
      </NuxtLink>

      <NuxtLink to="/" :class="['app-sidebar__pages_item', {'active': activeRout === '/'}]">
        <icons-main id="vechicles" :size="24" /> 
        {{ text.vechicles }}
      </NuxtLink>

      <NuxtLink to="#r2" :class="['app-sidebar__pages_item', {'active': activeRout === '/'}]">
        <icons-main id="setting" :size="24" /> 
        {{ text.setting }}
      </NuxtLink>

    </div>

    <icons-main id="sidebar-bottom" :width="256" :height="235" />
  </aside>
</template>

<script setup lang="ts">

import { useLangStore } from "@/store/lang";

const { langObj, addListener } = useLangStore();
// const text = computed(() => langObj.sidebar);
let text = ref(langObj.sidebar);

const router = useRouter();
let activeRout: Ref<string> = ref(getActiveRout());

function getActiveRout() {
  return `${router.currentRoute.value.path}`
}

watch(() => router.currentRoute.value, ()=> {
  activeRout.value = getActiveRout();
});

addListener((newText: Ref) => {
  text.value = newText.value.sidebar;
})

watch(() => langObj, () => {
  console.log("hsdgiygyfsdg");
  text.value = langObj.sidebar;
})
</script>

<style lang="scss">
  :root {
    --sidebar-width: 256px; 
  }

  .wrapper {
    padding-left: var(--sidebar-width);
  }

  .app-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 90;

    display: flex;
    flex-direction: column;

    width: var(--sidebar-width);

    background: var(--dark);

    color: var(--white);

    &__logo {
      font-weight: 700;
      font-size: 24px;

      &_wrap {
        display: flex;
        margin-top: 30px;
        margin-left: 56px;
      }
    }

    &__pages {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;


      gap: 15px;
      margin-top: 100px;

      &_item {
        display: flex;
        align-items: center;

        gap: 20px;
        padding: 12px 30px;

        border-left: 1px solid transparent;

        font-size: 16px;
        font-weight: 500;

        opacity: 0.45;

        transition: .3s;

        &.active {
          background: var(--white-20);
          
          border-left: 1px solid var(--red);

          opacity: 1;
        }
      }
    }
  }
</style>