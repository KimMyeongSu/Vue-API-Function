<template>
  <div>
    <h1>사진업로드</h1>
    <div class="image-box">
        <!-- <label for="file">일반 사진 등록</label> -->
        <input type="file" ref="files" @change="readImageFile" accept="image/*" />
    </div>
    <!-- 1. 임의로 캔버스 영역설정  (완료 )
    2. 설정된 캔버스에 업로드한 이미지 뿌려주기 (완료)
    3. 뿌려진 이미지에 네모 그리기
    4. 마우스 드래그로 네모영역 그리기 
    5. 네모 그린 좌표 받아오기
    6. 좌표값 4개 지정해서 값 저장 하면 땡 -->
    <!-- <canvas  ></canvas> -->
    <canvas ref="canvasImage" width="640px;" height="427px;" style="z-index:1;"></canvas>
	<canvas ref="canvasRect" @mousedown="getRectAreaDown"@mouseup="getRectAreaUp" @mousemove="getRectAreaMove" width="640px;" height="427px;" style="z-index:2;"></canvas>
    <h3 class="h3_X">X : {{resultRect.X}}</h3>
    <h3 class="h3_Y">Y : {{resultRect.Y}}</h3>
    <h3 class="h3_X1">X1 : {{resultRect.X1}}</h3>
    <h3 class="h3_Y1">Y1 : {{resultRect.Y1}}</h3>
    <h3 class="h3_X2">X2 : {{resultRect.X2}}</h3>
    <h3 class="h3_Y2">Y2 : {{resultRect.Y2}}</h3>
    <div class="dndFocus"></div>
    <div><button @click="createHtml">생성</button>
    <textarea v-model="resultHtml"></textarea>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            fileReader: new FileReader(),
            img:  new Image(),
            url: "TargetUrl입력받아온값",
            imageSrc:"",
            resultHtml: '',
            Rect: {
                draw:  false,
                rectX:  0,
                rectY:  0,
                rectwidth: 0,
                rectheight: 0,
            },
            resultRect: {
                X: 0,
                Y: 0,
                X1: 0,
                Y1: 0,
                X2: 0,
                Y2: 0,
            },           
        }
    },
    methods:{
        readImageFile(e){
        const canvas = this.$refs.canvasImage; 
        const context = canvas.getContext('2d');
        const that = this;
        let imagefile = e.target.files;
        
        that.fileReader.onload = function(e) {
                that.img.onload = function(){
                    canvas.width = that.img.width;
                    canvas.height = that.img.height;
                    context.drawImage(that.img,0,0);
                };
                that.img.src = e.target.result;
                // console.log(e.target.result);
                this.imageSrc = e.target.result;
                // console.log(this.imageSrc);
        }
        that.fileReader.readAsDataURL(imagefile[0]);
        },
        createHtml(){
            this.resultHtml = `<p align="center">
                <img src="${this.imageSrc}" usemap="#Map">
                <map name="Map">
                <area shape="rect" coords="${this.resultRect.X1},${this.resultRect.Y1},${this.resultRect.X2},${this.resultRect.Y2}" href="${this.url}" target="_blank">
                </map>
</p>`
        },
        getRectAreaDown(e){
        const canvas = this.$refs.canvasRect; 
        const context = canvas.getContext('2d');
        context.strokeStyle = "#FF0000"            
         this.resultRect.X1 = e.offsetX;
         this.resultRect.Y1 = e.offsetY;
           this.Rect.rectX =parseInt(e.offsetX);
           this.Rect.rectY =parseInt(e.offsetY);
           this.draw =true;
        },
        getRectAreaMove(e){
        const canvas = this.$refs.canvasRect; 
        const context = canvas.getContext('2d');
         let cX=parseInt(e.clientX-0);
         let cY=parseInt(e.clientY-0);

        if(this.draw){
            this.resultRect.X =e.clientX;
            this.resultRect.Y =this.Rect.rectY-e.offsetY;
            let cX=parseInt(e.clientX);
            let cY=parseInt(e.clientY);
             context.clearRect(0,0,canvas.width,canvas.height); 
             context.strokeRect(this.Rect.rectX,this.Rect.rectY,cX-this.Rect.rectX,e.offsetY-this.Rect.rectY);
            }
        },

        getRectAreaUp(e){
         this.resultRect.X2 = e.offsetX;
         this.resultRect.Y2 = e.offsetY;
            this.draw =false;
        },

    }
}
</script>

<style scoped>
    .h3_X{
        position: fixed;
        top: 50px;
        left: 300px
    }
    .h3_Y{
        position: fixed;
        top: 50px;
        left: 400px
    }
    .h3_X1{
    position: fixed;
    top: 50px;
    left: 600px
    }
    .h3_Y1{
    position: fixed;
    top: 50px;
    left: 680px
    }
    .h3_X2{
    position: fixed;
    top: 50px;
    left: 760px
}
    .h3_Y2{
    position: fixed;
    top: 50px;
    left: 840px
    }
    .image-box {
        margin-top: 30px;
        padding-bottom: 20px;
    }
    button {
        margin-top: 450px;
        padding-bottom: 20px;
        background-color: #4c9baf; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: block;
        font-size: 16px;
    }

    canvas{
        border: 1px solid black;
        position: absolute;
        display: block;
    }

    textarea{
        margin-top: 30px;
        padding-bottom: 20px;
        border: 1px solid black;
        width: 700px;
        height: 200px;
        resize: none; /* 사용자 임의 변경 불가 */
        display: block;
    }
    .dndFocus {
        position:fixed;
        border:1px solid red;
        background-color:rgb(128, 0, 0, 0.4);
        z-index:3;
    }
</style>