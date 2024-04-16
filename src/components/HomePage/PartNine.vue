<script setup lang="ts">
  const contactAddress = [
    {
      iconName: 'twitter-2',
      link: ''
    },
    {
      iconName: 'mail',
      link: ''
    }
  ]
</script>

<template>
  <div class="part_nine">
    <a href="" v-for="item of contactAddress" :key="item.iconName">
      <SdkIcon :name="item.iconName" size=".3704"/>
    </a>
    <!-- <div class="pc">
      Crafted with
      <SdkIcon name="heart" size=".3704"/>
      by Spacekayak
    </div> -->
  </div>
</template>

<style scoped>
.part_nine{
  position: relative;
  display: flex;
  height: 1.8519rem;
  justify-content: center;
  align-items: center;
  a{
    margin: 0 10px;
  }
  div{
    position: absolute;
    display: flex;
    right: 48px;
    color: #EAFAF0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    iconpark-icon{
      margin: 0 4px;
    }
  }
}
</style>