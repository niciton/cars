<template>
  <div :class="['app-select', {open: isShow}]" :style="`--min-width-text: ${minWidthText}px`">
    <div class="app-select__arrow">
      <icons-main id="arrow" :size="24" />
    </div>

    <div class="app-select__active app-select__item" :data-select-active="activeSelect">
      <img v-if="items[activeSelect].imgSrc" :src="items[activeSelect].imgSrc" />
      <span>
        {{ items[activeSelect].title }}
      </span>
    </div>

    <div class="app-select__items">

      <div v-for="(item, index) in items" :key="item.id" :class="['app-select__item', {active: activeSelect === index}]" :data-select-item="index">
        <img v-if="item.imgSrc" :src="item.imgSrc" />
        <span>
          {{ item.title }}
        </span>
      </div>

    </div>
  </div>
</template>

<script setup  lang="ts">
// import { addListener } from '@/assets/helpers/helpers';

export type TSelectItem = {
  id: number | string,
  title: string,
  imgSrc?: string,
}

const props = defineProps<{
  defaultSelectIndex?: number,
  minWidthText?: number,
  items: TSelectItem[],
}>();

const emit = defineEmits<{
  (name: "select_change", event: TSelectItem): void
}>();

// const { addListener } = useListenerStore();

let activeSelect: Ref<number> = ref(props?.defaultSelectIndex || 0);
let isShow: Ref<boolean> = ref(false);

  var isAdd = false;

if (process.browser && !isAdd) {
  console.log(isAdd);
  isAdd = true
  console.log(isAdd);

  console.log(674564);



  function aa(event: Event) {
    console.log(674564);
    if (props.items.length < 1) return;

    const selectTarget = (event.target as HTMLScriptElement).closest(".app-select");
    const arrow = (event.target as HTMLScriptElement).closest(".app-select__arrow");

    // if (!selectTarget) return closeOpenSelect();
    if (arrow) return isShow.value = !isShow.value;
    // setOpenSelect(event.target as HTMLScriptElement);

    console.log("arrow");
    const selectItem = (event.target as HTMLScriptElement).closest("[data-select-item]:not(.active)");

    if (!selectItem) return;

    // activeSelect.value = +(selectItem.getAttribute("data-select-item") as string);
    // isShow.value = false;
    console.log("selectItem");
    // setSelectActive(event.target as HTMLScriptElement)

    emit("select_change", props.items[activeSelect.value]);
  }


  document.body.removeEventListener("click", aa);

  document.body.addEventListener("click", aa);




  
  function setSelectActive(target: HTMLScriptElement) {
    if (!target) return;

    const selectParent = target.closest(".app-select");
    const selectActiveSelect = selectParent?.querySelector(".app-select__active") as any;
    const selectItem = (target as HTMLScriptElement).closest("[data-select-item]:not(.active)");

    setTimeout(() => {
      const activeSelectItem = selectParent?.querySelector("[data-select-item].active");
      activeSelectItem?.classList.remove("active");
    }, 0);

    selectItem?.classList.add("active");
    selectParent?.classList.remove("open");
    selectActiveSelect.innerHTML = selectItem?.innerHTML;
  }

  function closeOpenSelect() {
    const selectParent = document.querySelector(".app-select");
    selectParent?.classList.add("open");
  }

  function setOpenSelect(target: HTMLScriptElement, isToggle: boolean = true) {
    if (!target) return;
    console.log(target);

    const selectParent = target.closest(".app-select");
    if (isToggle) selectParent?.classList.toggle("open")
    // else selectParent.
    
  }
}
</script>

<style lang="scss">
.app-select {
  position: relative;
  z-index: 15;

  cursor: pointer;

  &.open {
    .app-select__arrow svg{
      transform: rotate(180deg);
    }

    .app-select__items {
      opacity: 1;
      pointer-events: all;
    }
  }

  &__active {
    border-radius: 8px;
    border: 1px solid var(--gray-line);
  }

  &__arrow {
    position: absolute;
    top: 9px;
    right: 16px;
    z-index: 10;
  }

  &__items {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    
    display: flex;
    flex-direction: column;

    background: var(--white);

    border-radius: 8px;
    border: 1px solid var(--gray-line);
    
    opacity: 0;
    pointer-events: none;
    overflow: hidden;

    transition: .3s;
  }

  &__item {
    display: flex;
    align-items: center;
    order: 1;

    padding: 9px 16px;
    // отступ по стрелку
    padding-right: 25px + 16px;

    &.active {
      order: 0;
    }

    span {
      min-width: var(--min-width-text, 20px);
    }

    img {
      margin-right: 14px;
    }
  }
}
</style>