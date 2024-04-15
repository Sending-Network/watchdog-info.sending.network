<script setup lang="ts">
import { ref } from 'vue';

const questions = [
  {
    title: 'Why Run a Node on SendingNetwork?',
    content: 'Frequently Asked Questions.Here are some common questions about WatchDog Node.'
  },
  {
    title: 'How many WatchDog NFTs will be available in total?',
    content: ''
  },
  {
    title: 'How to run a WatchDog Node Client?',
    content: ''
  },
  {
    title: 'What are the WatchDog Node sale tiers?',
    content: ''
  },
]

const showAnswer = ref([false, false, false, false]);

const toggleAnswer = (index: number) => {
  showAnswer.value[index] = !showAnswer.value[index];
};

</script>

<template>
  <div class="part_seven">
    <h1>FAQs</h1>
    <p>Frequently Asked Questions.Here are some common questions about WatchDog Node</p>
    <div class="question" v-for="(item, i) of questions" @click="toggleAnswer(i)">
      <SdkIcon  name="closeQuestion" size=".5185" v-show="showAnswer[i]"></SdkIcon>
      <SdkIcon  name="openQuestion" size=".5185" v-show="!showAnswer[i]"></SdkIcon>
      <h2>{{ item.title }}</h2>
      <p v-show="showAnswer[0]">{{ item.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.part_seven{
  color: #EAFAF0;
  margin-bottom: .7407rem;
  padding: .5556rem;
  h1{
    margin: 1.8519rem 0 .3704rem 0;
    text-align: center;
    font-size: 1.4815rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -0.0593rem;
  }
  p{
    margin: 0 auto;
    margin-bottom: .7407rem;
    width: 11.8333rem;
    text-align: center;
    font-size: .3704rem;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.72;
  }
  .question{
    position: relative;
    border-radius: .5556rem;
    background: #202222;
    margin-top: .3704rem;
    min-height: 2.4074rem;
    padding: .7593rem .5556rem;
    iconpark-icon{
      top: .9444rem;
      right: .5556rem;
      position: absolute;
    }
    h2{
      color: #FFF;
      font-size: .5926rem;
      font-weight: 600;
      line-height: 140%;
    }
    p{
      margin-top: .6296rem;
      margin-bottom: 0;
      width: 100%;
      text-align: start;
    }
  }
}

@media screen and (max-width: 999.999px) {
  .part_seven{
    h1, p{
      text-align: start;
    }
    h1{
      font-size: .6667rem;
    }
    p{
      font-size: .3704rem;
      margin-left: 0;
    }
    .question{
      min-height: 1.5556rem;
      padding: .3148rem .3889rem;
      font-size: .3333rem;
      border-radius: .3704rem;
      h2{
        width: 5.3148rem;
        color: #FFF;
        font-size: .3333rem;
        font-weight: 600;
        line-height: 140%;
      }
      iconpark-icon{
        top: .5556rem;
      }
      p{
        margin-top: .2778rem;
      }
    }
  }
}
</style>