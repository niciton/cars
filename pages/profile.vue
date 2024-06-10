<template>
  <div class="page-home container">
    <title-block title="error 404">
    </title-block>
  </div>
</template>

<script setup lang="ts">

const router = useRouter();
console.log(router.currentRoute.value);

  useFetch("https://api.caiman-app.de/api/cars-test?per_page=9&page=7").then((res) => {
    console.log("api/cars-test");
    console.log({...(res.data.value as object)});
  })

  useFetch("https://schema.getpostman.com/json/collection/v2.1.0/collection.json").then((res) => {
    console.log("collection.json");
    console.log({...(res.data.value as object)});
  });

  useFetch("http://json-schema.org/draft-04/schema#").then((res) => {
    console.log("schema");
    console.log({...(res.data.value as object)});
  });
</script>
<style lang="scss">
  
</style>