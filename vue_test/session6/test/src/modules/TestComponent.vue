
<template>

  <div class="red-b">

      <div class="border__blue">
          SCSSのテストです
      </div>

        <div class="background__primary">
            scssのグローバルテストです
        </div>

      テストです
      {{ testData }}
  </div>

</template>



<script>
export default {
    // name必須
    name: 'TestComponent',
    data() {
        return {
            testData: 'テストdataです'
        }
    }
}
</script>

<!-- コンポーネントの中だけで有効になる scoped 基本的にはscopedをつける -->
<!-- lang="scss" と記述することでscssを使用することができる -->
<style scoped lang="scss">
.red-b {
    border: 1px red solid;
}

.border {
    &__blue {
        border: 1px blue solid;
    }
}

.background__primary {
    background-color: $color-primary;
}

</style>