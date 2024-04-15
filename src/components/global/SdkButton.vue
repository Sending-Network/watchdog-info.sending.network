<template>
  <button :class="btnClass">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  }
});

const btnClass = computed(() => {
  return `btn btn-${props.type}`;
});

</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .2222rem .2963rem;
  cursor: pointer;
  border: none;
  border-radius: 2.1481rem;
  font-size: .2963rem;
  font-style: normal;
  font-weight: 400;
  color: white;
}

.btn-default {
  background-color: white;
  color: black;
}

.btn-white_border {
  background: transparent;
  border: 1px solid #FFF;
}

.btn-link {
  background-color: transparent;
  color: #fff;
}

.btn-black_bg{
  color: white;
  background-color: black;
}

</style>
