<template>  
    <div id="app">
<!-- <Vuetyfy_DatePicker></Vuetyfy_DatePicker> -->
    <!-- <imageUpload></imageUpload> -->
    <imageUploadDrow></imageUploadDrow>
    </div>

</template>

<script>

// import Vuetyfy_DatePicker from './components/Vuetyfy_DatePicker.vue'
import imageUpload from './components/imageUpload.vue'
import imageUploadDrow from './components/imageUploadDrow.vue'
export default {
  name: 'App',

  components: {    
    // Vuetyfy_DatePicker,
    imageUpload,
    imageUploadDrow,
  },

  data: () => ({
    //
  }),
};
</script>