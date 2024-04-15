<script setup lang="ts">
  const icons = ['start', 'lightning', 'wallet']
  const steps = [
    {title: 'Step 1', content: 'Purchase WatchDog License (coming soon)'},
    {title: 'Step 2', content: 'Download and install Watch Dog, bind Watch Dog license.'},
    {title: 'Step 3', content: 'Earn, claim, withdraw your token rewards.'},
  ]
</script>

<template>
  <div class="part_five">
    <h1>
      How to run a <br class="mobile"/>
      WatchDog?
    </h1>
    <p>
      Running a Sonar NFT on Sending Network contributes to the decentralization of cloud compute and earn rewards from being a network participant.
    </p>

    <hr class="pc"/>
    <div class="part_five_icons pc">
      <div v-for="item of icons" :key="item">
        <SdkIcon :name="item" size=".6481"/> 
      </div>
    </div>

    <div class="part_five_step">
      <div class="part_five_mobile_icon mobile">
      </div>
      <div :class="`step step_${i}`" v-for="(item, i) of steps" :key="item.title">
        <div class="mobil_icon mobile">
          <SdkIcon :name="icons[i]" size=".5556"/>
        </div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.part_five{
  color: #EAFAF0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: .7407rem;
  h1{
    font-size: 1.4815rem;
    font-weight: 700;
    text-align: center;
  }
  p{
    width: 730px;
    color: #EAFAF0;
    text-align: center;
    font-size: .3704rem;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.72;
  }

  hr{
    width: 92%;
    border: 2px solid  rgba(255, 255, 255, 0.15);;
    margin-top: 1.4815rem;
    margin-left: 7%;
  }

  .part_five_icons{
    width: 90%;
    height: 2.5926rem;
    display: flex;
    justify-content: space-between;
    justify-content: space-around;
    div{
      position: relative;
      height: .8333rem;
      display: flex;
      justify-content: center;
      border: 2px solid #D6F55A;;
      border-radius: 100%;
      padding: 5px;
      background-color: #141616;
      transform: translateY(-50%);
      &::before{
        position: absolute;
        bottom: -108px;
        content: '';
        width: 1px;
        height: 108px;
        background: url('@/assets/imgs/partFive_line.png');
      }

    }
  }

  .part_five_step{
    display: flex;
    width: 90%;
    justify-content: space-between;
    justify-content: space-around;
    .step{
      width: calc(100% / 3);

      h2{
        color: #5FE0CA;
        text-align: center;
        font-size: .6667rem;
        font-weight: 600;
      }
      p{
        margin: 0 auto;
        margin-top: .3704rem;
        width: 335px;
        color:  #FFF;
        font-size: 20px;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }

}

@media screen and (max-width: 999.999px) {
  .part_five{
    align-items: start;
    padding: 0 .5556rem;
    h1,p{
      text-align: start;
    }
    h1{
      font-size: .6667rem;
    }
    p{
      width: 6.7778rem;
      font-size: .2963rem;
    }
    .part_five_step{
      position: relative;
      display: block;
      /* flex-direction: column; */
      margin-top: 1.4815rem;
      padding-left: 1.4815rem;
      width: 100%;
      height: 9.8148rem;
      margin-bottom: .7407rem;
      .part_five_mobile_icon{
        position: absolute;
        top: -0.9259rem;
        left: .5556rem;
        width: .037rem;
        height: 100%;
        background: rgba(255, 255, 255, 0.15);
      }
      .step{
        position: relative;
        width: 100%;
        h2, p{
          text-align: start;
        }
        h2{
          margin-top: 1.8519rem;
        }
        p{
          width: calc(100% - 1.8519rem);
          font-size: .2963rem;
          margin: 0;
          margin-top: 10px;
          padding-right: 40px;
        }
        .mobil_icon{
          position: absolute;
          top: .3704rem;
          left: -1.3333rem;
          height: .8333rem;
          width: .8333rem;
          display: flex;
          justify-content: center;
          border: 2px solid #D6F55A;;
          border-radius: 100%;
          padding: 5px;
          background-color: #141616;
          transform: translateY(-50%);
        }
      }
      .step_0{
        margin-top: -1.6667rem;
      }
    }
  }
}

</style>