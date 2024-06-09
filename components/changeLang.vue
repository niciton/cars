<template>
  <div class="change-lang">
    <app-select @select_change="seetNewLang" :default-select-index="0" :min-width-text="20" :items="langsArr" />
  </div>
</template>

<script setup lang="ts">
import { useLangStore } from "@/store/lang";
import type { TSelectItem } from "./appSelect.vue";

const { langArr, setLang } = useLangStore();

let langsArr: TSelectItem[] = [];

langArr.forEach((langName) => {

  langsArr.push({
    id: langName,
    title: langName,
    imgSrc: `/img/${langName}.png`,
  });
  console.log(langsArr[0]);
});

function seetNewLang(event: TSelectItem) {
  setLang((event.id as any));
}

</script>

<style lang="scss">

</style>