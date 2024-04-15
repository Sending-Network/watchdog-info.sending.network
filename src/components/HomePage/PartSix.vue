<script setup lang="ts">
const links = [
  {
    icon: 'discord',
    name: 'Discord',
    url: 'https://t.co/pWzEywq0ml'
  },
  {
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/Sending_Network'
  },
  {
    icon: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/SendingNetworkOfficial'
  },
]

</script>

<template>
  <div class="part_six" id="join">
    <h1>Join the community</h1>
    <p>Come and build a decentralized communication stack with SendingNetwork</p>
    <div>
      <a :href="item.url" v-for="item of links" :key="item.name" >
        <SdkButton type="black_bg">
          <SdkIcon :name="item.icon" size=".3704"/>
          {{ item.name }}
        </SdkButton>
      </a>
    </div>

  </div>
</template>

<style scoped>
.part_six {
  width: 100%;
  height: 524px;
  margin: 40px 0;
  color: #141616;
  background: url('@/assets/imgs/part_six_bg.png') no-repeat center;
  padding-top: 100px;
  padding-left: 200px;
  h1{
    font-size: 56px;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -2.24px;
  }
  p{
    font-size: .2963rem;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.72;
  }

  iconpark-icon{
    margin-right: .1852rem;
  }

  div{
    margin-top: 40px;
    a{
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 999.999px) {
  .part_six {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('@/assets/imgs/part_six_bg2.png');
    background-size: 100% 100%;
    width: calc(100% - .7407rem);
    margin: 0 .3704rem ;
    height: 9.2593rem;
    padding: .7407rem;
    padding-top: 1.1111rem;
    h1{
      font-size: .5926rem;
    }
    div{
      display: flex;
      flex-direction: column;
      a{
        width: 100%;
        margin-bottom: .3704rem;
        button{
          width: 100%;
        }
      }
    }
  }
}
</style>