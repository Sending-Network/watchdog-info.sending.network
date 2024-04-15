<template>
  <iconpark-icon
    :style="iconStyle"
    :name="state.iconName"
    :size="state.iconSize"
  />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  fill: {
    type: String,
    default: '',
  },
  style: {
    type: String,
    default: '',
  },
});

const state = reactive({
  iconSize: props.size,
  iconName: props.name,
});

const iconStyle = "cursor: pointer;" + props.style;

const calculateIconSize = () => {
  setTimeout(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    const style = window.getComputedStyle(htmlElement);
    const rootFontSize = parseFloat(style.getPropertyValue('font-size'));
    const iconSize = parseFloat(props.size) * rootFontSize + '';
    state.iconSize = iconSize;
  }, 500);
};

onMounted(() => {
  calculateIconSize();
  window.addEventListener('resize', calculateIconSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateIconSize);
});

</script>
