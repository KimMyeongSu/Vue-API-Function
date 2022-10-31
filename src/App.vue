<template>  
    <div id="app">
      <!-- <imageUploadDrow></imageUploadDrow> -->
      <imageKonva></imageKonva>
    </div>

</template>

<script>

// import Vuetyfy_DatePicker from './components/Vuetyfy_DatePicker.vue'
import imageUpload from './components/imageUpload.vue'
import imageUploadDrow from './components/imageUploadDrow.vue'
import imageKonva from './components/imageKonva.vue'
export default {
  name: 'App',

  components: {    
    imageUpload,
    imageUploadDrow,
    imageKonva,
    
  },

  data: () => ({
    //
  }),
};
</script>