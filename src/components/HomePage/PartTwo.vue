<script setup lang="ts">

</script>

<template>
  <div class="part_two">
    <h1>
      What is<br />
      SendingNetwork?
    </h1>
    <p>
      SendingNetwork is building a decentralized communication stack which aims to revolutionize the TCP/IP model through
      a blockchain-powered Web 3 internet, leveraging wallet addresses for direct peer-to-peer communication, reshaping
      the internet's infrastructure for unparalleled security, privacy and user control.
    </p>
  </div>
</template>

<style scoped>
.part_two {
  margin-top: 10.0008px;
  height: 900.0018px;
  background: url('@/assets/imgs/partTwo_bg.png');
  background-size: 100% 100%;
  color: #E0F2E7;
  padding-left: 35%;
  padding-right: .3704rem;
  padding-top: 10%;

  h1 {
    font-size: 1.4815rem;
    font-weight: 700;
    letter-spacing: -0.0593rem;
  }

  p {
    font-family: "PingFang SC";
    font-size: .3704rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.72;
  }
}

@media screen and (max-width: 1000px){
  .part_two{
    height: 14.6296rem;
    background: url('@/assets/imgs/partTwo_bg2.png');
    background-size:100% 100% ;
    padding: 40% 10%;
    h1{
      font-size: .6667rem;
    }
    p{
      font-size: .2963rem;
    }
  }
}

</style>