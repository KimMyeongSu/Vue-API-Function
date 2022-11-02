<template>  
    <div id="app">
      <!-- <imageUploadDrow></imageUploadDrow>
      <imageKonva></imageKonva> -->
      <br/>
      <h3>캔버스 기능</h3>
      <router-view></router-view>
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