<script setup lang="ts">
const cards = [
  {
    title: 'Task',
    content: 'Exchange verification messages with the network.',
  },
  {
    title: 'Reward',
    content: 'Earn $SEND once the task is completed',
  },
  {
    title: 'Boost Income',
    content: 'Maximize your rewards by extending the uptime and using optimal bandwidth!',
  }
]

</script>

<template>
  <div class="part_four">
    <h1>
      Mine to Earn
    </h1>
    <p>
      Running a WatchDog on SendingNetwork contributes to the decentralization of cloud compute and earn rewards from being a network participant.
    </p>
    
    <div :class="`part_four_car part_four_car_${i}`" v-for="(item, i) of cards" :key="i">
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
      <div class="point"/>
    </div>

  </div>
</template>

<style scoped>


.part_four{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 18.6667rem;
  width: 100%;
  margin-bottom: .7407rem;
  background: url('@/assets/imgs/partFour_bg.png');
  background-size: 100% 100%;
  background-position: center;
  color: #EAFAF0;

  --point-one-y: -0.6667rem;
  --point-one-x: .7407rem;

  --point-two-y: -36px;
  --point-two-x: 80px;

  --point-three-y: -0.6667rem;
  --point-three-x: 2.2222rem;

  h1{
    margin-top: 1.8889rem;
    text-align: center;
    font-size: 1.4815rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -0.0593rem;
  }
  p{
    width: 13.5185rem;
    text-align: center;
    font-size: .3704rem;
    font-weight: 400;
    line-height: 140%;
  }
  .part_four_car{
    position: absolute;
    width: 6.5rem;
    padding: .4259rem .9815rem;
    padding-bottom: .7407rem;
    border-radius: .3333rem;
    background: #202222;
    border: .0185rem solid #414343;
    
    h2{
      margin-bottom: .1852rem;
      font-size: .6667rem;
      font-weight: 600;
    }
    p{
      width: 100%;
      color: #999;
      font-size: .2963rem;
      font-weight: 400;
      text-align: start;
    }
    .point{
      position: absolute;
      height: .2778rem;
      width: .2778rem;
      border-radius: 100%;
      border: .0556rem solid #D6F55A;
    }

    &::before, &::after{
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: .3333rem .1852rem .3333rem .1852rem;
    }
  }
  .part_four_car_0 {
    top: 2.5926rem;
    left: 2.5926rem;
    .point{
      bottom: calc(var(--point-one-y) + .0833rem - .5556rem);
      right: calc(var(--point-one-x) + .0185rem - .1852rem);
    }
    &::before{
      bottom: var(--point-one-y);
      right: var(--point-one-x);
      border-color: #414343 #414343 transparent transparent;
    }
    &::after{
      bottom: calc(var(--point-one-y) + .0833rem);
      right: calc(var(--point-one-x) + .0185rem);
      border-color: #202222 #202222 transparent transparent;
    }
  }
  .part_four_car_1 {
    bottom: 90px;
    left: 195px;
    .point{
      top: calc(var(--point-two-y) + .0833rem - .5556rem);
      right: calc(var(--point-two-x) + .0185rem - .1852rem);
    }
    &::before{
      top: var(--point-two-y);
      right: var(--point-two-x);
      border-color: transparent #414343  #414343  transparent;
    }
    &::after{
      top: calc(var(--point-two-y) + .0833rem);
      right: calc(var(--point-two-x) + .0185rem);
      border-color:  transparent  #202222  #202222 transparent ;
    }
  }

  .part_four_car_2 {
    bottom: .5556rem;
    right: 3.9815rem;
    h2{

      color: #38CA9F;
    }
    .point{
      top: calc(var(--point-three-y) + .0833rem - .5556rem);
      left: calc(var(--point-three-x) + .0185rem - .1852rem);
    }
    &::before{
      top: var(--point-three-y);
      left: var(--point-three-x);
      border-color: transparent transparent #414343  #414343  ;
    }
    &::after{
      top: calc(var(--point-three-y) + .0833rem);
      left: calc(var(--point-three-x) + .0185rem);
      border-color:  transparent transparent #202222  #202222  ;
    }
  }
  
}


@media screen and (max-width: 999.999px) {
  .part_four{
    background-position: center;
    background-size: 260% 100%;
    margin-bottom: 5.5556rem;
    height: 25.9259rem;
    h1{
      margin-top: 2.2222rem;
      font-size: .6296rem;
    }
    p{
      width: 80%;
      font-size: .2963rem;
      opacity: 0.72;
    }
    .part_four_car{
      width: 6.5rem;
      padding: .4259rem .9815rem;
      padding-bottom: .7407rem;
      border-radius: .3333rem;
      h2{
        margin-bottom: .1852rem;
        font-size: .5185rem;
      }
      p{
        width: 100%;
        font-size: .2963rem;
      }
      .point{
        height: .2778rem;
        width: .2778rem;
      }
    }
    .part_four_car_0{
      top: 3.3333rem;
      left: .9259rem;
    }
    .part_four_car_1{
      left: .463rem;
      bottom: 4.3519rem;
    }
    .part_four_car_2{
      bottom:-4.7222rem;
      right: .463rem;
    }
  }

}

</style>