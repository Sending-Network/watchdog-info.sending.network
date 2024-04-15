<script setup lang="ts">
const links = [
  {
    title: 'Learn More',
    jump_addresses: [
      { name: 'Home', link: 'https://www.sending.network/' },
      { name: 'Documentation', link: 'https://sending-network.gitbook.io/sending.network' },
      { name: 'SendingMe', link: 'http://sending.me/' },
      { name: 'Blogs', link: 'https://medium.com/@sendinglabs' }
    ]
  },
  {
    title: 'Get Involved',
    jump_addresses: [
      {name: 'GitHub', link: 'https://github.com/orgs/Sending-Network/repositories'},
      {name: 'Careers', link: 'https://www.sending.network/whitepaper'},
      
    ]
  },
  {
    title: 'Legal',
    jump_addresses: [
      {name: 'Privacy Policy', link: '/watchdog-info.sending.network/#'},
      {name: 'Terms of Service', link: '/watchdog-info.sending.network/#'},
    ]
  }
]
</script>

<template>
  <div id="fqa" class="part_eight">
    <div>
      <div class="copyright">
        <SdkIcon name="logo" size=".3704" :style="`margin-right: 30px;`"></SdkIcon>
        <SdkIcon name="logoLable" size="5.4444"></SdkIcon>
      </div>
      <span>Copyright @ 2023, Sending Network</span>
    </div>

    <div class="links">
      <div v-for="item of links">
        <h2>{{ item.title }}</h2>
        <a :href="link.link" v-for="link of item.jump_addresses">{{ link.name }}</a>
      </div>
    </div>

  </div>
</template>

<style scoped>
.part_eight{
  color: #EAFAF0;
  padding: 64px 48px;
  display: flex;
  justify-content: space-between;
  .copyright{
    display: flex;
    height: .9259rem;
  }
  span{
    opacity: 0.72;
  }
  .links{
    display: flex;
    width: 614px;
    div{
      width: calc(100% / 3);
      h2{
        margin-bottom: .2407rem;
      }
      a{
        display: block;
        color: #EAFAF0;
        opacity: 0.72;
        font-size: .2963rem;
        height: .463rem;
      }
    }
  }
}

@media screen and (max-width: 999.999px) {
  .part_eight{
    flex-direction: column;
    span{
      width: 2.5741rem;
      display: block;
    }
    .links{
      margin-top: 1.7778rem;
      flex-direction: column;
      div{
        margin-bottom: .7407rem;
      }
    }

  }
}

</style>