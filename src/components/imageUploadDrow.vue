<template>
  <div>
    <h1>사진업로드</h1>
    <div class="image-box">
        <!-- <label for="file">일반 사진 등록</label> -->
        <input type="file" ref="files" @change="imageUpload" accept="image/*" />
    </div>
    <!-- 1. 임의로 캔버스 영역설정  (완료 )
    2. 설정된 캔버스에 업로드한 이미지 뿌려주기
    3. 뿌려진 이미지에 네모 그리기
    4. 마우스 드래그로 네모영역 그리기 
    5. 네모 그린 좌표 받아오기
    6. 좌표값 4개 지정해서 값 저장 하면 땡 -->
    <canvas ref="canvasImage"></canvas>
    <div>
        <img v-bind:src ="url" alt="">
    </div>
  </div>
</template>

<script>
import myImage from "../assets/code.png" 
export default {
    data(){
        return {
            reader: new FileReader(),
            img:  new Image(),
            url: null,
        }
    },
    methods:{
        imageUpload(e) {
            this.img =this.$refs.files.files[0]; 
            this.url = URL.createObjectURL(e.target.files[0]);
            console.log(this.url);
            let canvasImage = this.$refs.canvasImage;
            let context = canvasImage.getContext("2d"); 
            this.img.src = URL.createObjectURL(this.$refs.files.files[0]);

            // console.log(this.img)
            this.img.onload= function(){
                console.log('여기 콜이 안되는거같은데?');

            }
        },
        func(){
            let cvn = this.$refs.canvasImage;
            let ctx = cvn.getContext("2d");  
            let bg = new Image();
            bg.src = myImage;
            bg.onload = function() {
                console.log('이건 콜이 되니까 들어올꺼고');
            ctx.drawImage(bg, 0 ,0 ,500,600);
            };
        },        

    }
}
</script>

<style scoped>
    .image-box {
        margin-top: 30px;
        padding-bottom: 20px;
        text-align: center;
    }
    /* .image-box input[type='file'] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
        } */
    canvas{
        width: 500px;
        height: 600px;
        border: 1px solid black;
    }
</style>