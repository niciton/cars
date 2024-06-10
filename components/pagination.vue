<template>
  <div v-if="reactiveProps.lastPage > 1" @click.prevent="handleClick" class="pagination">
    <div class="paginatio__text">
      {{ text.text(reactiveProps.prePage, reactiveProps.amountProduct) }}
    </div>

    <div class="pagination__contros">
      <a :href="`?page=${reactiveProps.activePage - 1}`" :class="['pagination__prev pagination__link', {disable: disablePrev}]">
        <icons-main id="arrow" :size="24" />
      </a>

      <div class="pagination__page pagination__active">
        {{ reactiveProps.activePage }}
      </div>

      <span>
        of
      </span>

      <div class="pagination__page pagination__last-page">
        {{ reactiveProps.lastPage }}
      </div>

      <a :href="`?page=${activePage + 1}`" :class="['pagination__next pagination__link', {disable: disableNext}]">
        <icons-main id="arrow" :size="24" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLangStore } from "@/store/lang";

const { langObj, addListener } = useLangStore();

let text = ref(langObj.components.pagination);

const props = defineProps<{
  activePage: number,
  lastPage: number,
  prePage: number,
  amountProduct: number,
}>();


const reactiveProps = computed(() => props);

const disablePrev = computed(() => reactiveProps.value.activePage <= 1);
const disableNext = computed(() => reactiveProps.value.activePage > reactiveProps.value.lastPage -1);

export type TPaginationEmit = {
  page: number,
}

const emit = defineEmits<{
  (name: "cange_page", value: TPaginationEmit): void,
}>();

function handleClick(event: Event) {
  const linkTarget = (event.target as HTMLScriptElement).closest(".pagination__link");

  if (!linkTarget) return;

  let newPage = props.activePage;
  if (linkTarget.classList.contains("pagination__next")) ++newPage
  else --newPage

  emit("cange_page", {page: newPage})
}

addListener((newText: Ref) => {
  text.value = newText.value.components.pagination;
});
</script>


<style lang="scss">
.pagination {
  --page-size: 32px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  color: var(--grey-dark);

  &__text {
    font-size: 16px;
  }

  &__contros {
    display: flex;
    align-items: center;

    gap: 12px;

    height: 32px;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;

    &.disable {
      opacity: 0.2;
      pointer-events: none;
    }
  }

  &__prev {
    svg {
      transform: rotate(90deg);
    }
  }

  &__next {
    svg {
      transform: rotate(-90deg);
    }
  }

  &__page {
    display: flex;
    align-items: center;
    justify-content: center;

    height: var(--page-size);
    width: var(--page-size);

    border-radius: 6px;
    border: 1px solid var(--gray-line);
  }
}
</style>