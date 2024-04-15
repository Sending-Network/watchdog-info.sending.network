
<script setup lang="ts">
const buttons = [
  { name: 'About', link: '' },
  { name: 'How it works', link: '' },
  { name: 'Join', link: '' },
  { name: 'FQA', link: '' }
];
</script>

<template>
  <div class="head">
    <div class="product_icon pc">
      <SdkIcon name="logo" size=".3704" :style="`margin-right: 30px;`"></SdkIcon>
      <SdkIcon name="logoLable" size="5.4444"></SdkIcon>
    </div>
    <div class="product_icon mobile">
      <SdkIcon name="logo" size=".3704" :style="`margin-right: 30px;`"></SdkIcon>
    </div>

    <div class="links pc">
      
      <template v-for="(item, i) of buttons" :key="i">
        <a :href="item.link">
          <SdkButton type="link">{{ item.name }}</SdkButton>
        </a>
      </template>

      <a href="">
        <SdkButton type="white_border">
          WatchDog Node Sale
        </SdkButton>
      </a>
    </div>

    <div class="mobile">
      <SdkIcon name="classify" size=".3704"/>
    </div>
  </div>
</template>

<style scoped>
.head{
  display: flex;
  width: 100%;
  padding: .4444rem;
  justify-content: space-between;
  align-items: center;

  .product_icon{
    display: flex;
    height: .9259rem;
  }
}

</style>

