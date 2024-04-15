<script setup lang="ts">
import { ref } from 'vue';

const modalRef = ref(null);

const commingSoon = () => {
  modalRef.value && modalRef.value.openModal('Coming soon');
}

</script>

<template>
  <div class="part_one">
    <div class="part_one_content">
      <h1>WatchDog Node Sale</h1>
      <p>Challenge the Edge Nodes and Earn Rewards!</p>
      <div class="part_one_button">
        <a href="" @click.prevent="commingSoon">
          <SdkButton >Purchase a WatchDog NFT Pass</SdkButton>
        </a>
        <a href="https://medium.com/@sendinglabs/sendingnetwork-announces-its-watchdog-node-sale-af5dc2f4ad01">
          <SdkButton type="white_border">What is a WatchDog？</SdkButton>
        </a>
      </div>
    </div>
    <SdkIcon name="watchDog" size="5.5556"/>
    <SdkModal ref="modalRef" />
  </div>
</template>

<style scoped>

.part_one{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 .1852rem;
  padding-left: .5556rem;
  padding-right: 2.4074rem;
  width: calc(100% - .3704rem );
  height: 12.037rem;
  background: url('@/assets/imgs/partOne_bg.png');
  background-size: 100% 100%;
  border-radius: .3704rem;
  .part_one_content{
      h1{
        color: white;
        font-size: .6296rem;
      }
      p{
        color: white;
        padding-bottom: .3704rem;
        font-size: .2963rem;
        opacity: 0.72;
      }
      .part_one_button{
        padding-bottom: .3704rem;
        display: flex;
        a:last-child{
          margin-left: .1852rem;
        }
      }

    }
}

@media screen and (max-width: 1000px){
  .part_one{
    flex-direction: column-reverse;
    background: url('@/assets/imgs/partOne_bg2.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 .9259rem;
    padding-top: .9259rem;
    height: 13.8889rem;
    .part_one_content{
      h1{
        font-size: .6296rem;
        text-align: center;
      }
      p{
        color: white;
        padding-bottom: .3704rem;
        text-align: center;
        font-size: .2963rem;
      }
      .part_one_button{
        padding-bottom: .3704rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
          width: 100%;
          button{
            width: 100%;
          }
        }
        a:last-child{
          margin-left: 0;
          margin-top: .2778rem;
        }
      }

    }
  }
  
}

</style>