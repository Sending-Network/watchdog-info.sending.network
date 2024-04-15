<template>
  <div>
    <teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay">
        <div class="modal">
          <SdkButton @click="closeModal" >X</SdkButton>
          <p>{{ modalContent }}</p>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      isModalOpen: false,
      modalContent: ''
    };
  },
  methods: {
    openModal(content) {
      this.modalContent = content;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }

};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
  button{
    position: absolute;
    right: -20px;
    top: -20px;
    &:hover{
      color: red;
    }
  }
  p{
    font-size: .2963rem;
  }
}

.modal button {
  margin-left: auto;
}
</style>
