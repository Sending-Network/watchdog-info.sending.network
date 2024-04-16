
<script setup lang="ts">
import { ref } from 'vue';

const modalRef = ref(null);

const comingSoon = () => {
  modalRef.value && modalRef.value.openModal('Coming soon');
}

const buttons = [
  { name: 'About', link: '/watchdog-info.sending.network/#about' },
  { name: 'How it works', link: '/watchdog-info.sending.network/#howItWorks' },
  { name: 'Join', link: '/watchdog-info.sending.network/#join' },
  // { name: 'FQA', link: '/watchdog-info.sending.network/#fqa' }
];
</script>

<template>
  <div class="head">
    <a href="https://www.sending.network/" class="product_icon pc">
      <SdkIcon name="logo" size=".3704" :style="`margin-right: 30px;`"></SdkIcon>
      <SdkIcon name="logoLable" size="5.4444"></SdkIcon>
    </a>
    <div class="product_icon mobile">
      <SdkIcon name="logo" size=".3704" :style="`margin-right: 30px;`"></SdkIcon>
    </div>

    <div class="links pc">
      
      <template v-for="(item, i) of buttons" :key="i">
        <a :href="item.link">
          <SdkButton type="link">{{ item.name }}</SdkButton>
        </a>
      </template>

      <a href="/#" @click.prevent="comingSoon" style="margin-left: 16px;">
        <SdkButton type="white_border">
          WatchDog Node Sale
        </SdkButton>
      </a>
    </div>
    <SdkModal ref="modalRef" />

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

