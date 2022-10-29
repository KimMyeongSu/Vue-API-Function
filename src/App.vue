<template>  
    <div id="app">
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
    imageUpload,
    imageUploadDrow,
  },

  data: () => ({
    //
  }),
};
</script>