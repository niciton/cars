<template>
  <div class="page-home page-container container">
    <title-block :title="text.title">
      <div class="amount-card">
        {{ amountProduct }}
      </div>
    </title-block>

    <div :class="['load-screen', {active: isLoad}]"></div>
    <div class="product__container">
      <div class="product__controls">

        <form class="product__controls_search" @submit.prevent="setSearch">
          <app-input v-model="searchQuery" @activated_input="setSearch" type="text" name="search" :placeholder="text.search" icon="search" />
        </form>

        <div class="product__controls_pre-page">
          <span>
            {{ text.prePage }}
          </span>
          <app-select :min-width-text="20" :items="[{
            id: 20,
            title: '20',
          },
          {
            id: 9,
            title: '9',
          }]" />
        </div>

        <div class="product__controls_add-auto">
          <app-btn color="red" size="md" type="fill">
            <icons-main id="plus" :size="24" />

            <span>
              {{ text.addAuto }}
            </span>
          </app-btn>
        </div>
      </div>
      <div class="product__products">
        <!-- {{ product }} -->
        <!-- <div v-for="item in product" :key="item.id" :prop="item" >{{ item }}</div> -->
        <app-product v-for="item in product" :key="item.id" :prop="item" />
      </div>
    </div>
    <!-- я не знаю почему, но в pre-page без приведния в число выводится warning -->
    <pagination @cange_page="handlePagge" :pre-page="+paginationParam.prePage" :active-page="paginationParam.activePage" :last-page="paginationParam.lastPage" :amount-product />
  </div>
</template>

<script setup lang="ts">
import type { TApiCarsResponse, TProduct } from '~/types/api/cars';
import type { TPaginationEmit } from '~/components/pagination.vue';
import { useLangStore } from "@/store/lang";

const { langObj, addListener } = useLangStore();
const router = useRouter();

let text = ref(langObj.pages.home);

let amountProduct: Ref<number> = ref(0);
  
let product = reactive<TProduct[]>([]);

let paginationParam = toRef({
  prePage: 20,
  activePage: 1,
  lastPage: 1,
});

const searchQuery = defineModel({ default: "" });

let isLoad: Ref<boolean> = ref(false);

function handlePagge({ page }: TPaginationEmit) {
  paginationParam.value.activePage = page;
  console.log(page);

  if (page > 1) searchParams.set("page", String(page));
  else searchParams.delete("page")


  setContent();
}

console.log(router.currentRoute.value);
const searchParams = new URLSearchParams(router.currentRoute.value.fullPath.split("?")[1]);
const getUrl = (path: string) => `${path}${searchParams.size ? `?${searchParams.toString()}` : ''}`;

if (!searchParams.has("per_page")) searchParams.set("per_page", String(paginationParam.value.prePage));
if (!searchParams.has("page")) searchParams.set("page", String(paginationParam.value.activePage));


console.log(decodeURIComponent(getUrl("https://api.caiman-app.de/api/cars-test")));
console.log(router.currentRoute.value.fullPath.split("?")[0]);

async function setContent() {
  isLoad.value = true;
  const data = await useFetch<TApiCarsResponse>(getUrl("https://api.caiman-app.de/api/cars-test"),
    {
      server: true
    }
  );

  const res = data.data.value;
  // очистка массива
  product.splice(0, 99);

  product.push(...(res?.data || []));

  amountProduct.value = res?.meta.total || 0;

  paginationParam.value.prePage = res?.meta.per_page || 9;
  paginationParam.value.activePage = res?.meta.current_page || 1;
  paginationParam.value.lastPage = res?.meta.last_page || 1;

  console.log({...(data.data.value as object)});

  isLoad.value = false;
 
  if (process.client) {
    router.push(getUrl(router.currentRoute.value.path))
  }
}

function setSearch() {
  if (searchQuery.value) searchParams.set("search", searchQuery.value);
  else searchParams.delete("search")

  setContent();
}

await setContent();

addListener((newText: Ref) => {
  console.log(newText.value.pages.home);
  text.value = newText.value.pages.home;
});
  
</script>

<style lang="scss">
.page-home {
  .amount-card {
    padding: 4px 14px;

    background: var(--gray-line-primary);
    color: var(--grey-dark);
    
    border-radius: 6px;
  }

  .product {
    &__container {
      width: 100%;
    }

    &__controls {
      display: flex;
      align-items: center;

      gap: 32px;

      margin-bottom: 32px;

      &_pre-page {
        display: flex;
        align-items: center;

        gap: 16px;
      }
      
      &_add-auto {
        margin-left: auto;

        svg {
          fill: var(--white);
        }
      }
    }

    &__products {
      display: flex;
      flex-wrap: wrap;

      gap: 30px;
    }

    
  }

  .pagination {
    margin-top: 32px;
  }
}
</style>