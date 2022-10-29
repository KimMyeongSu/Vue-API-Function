<template>
  <div>
    <h1>사진업로드</h1>
    <p>
        업로드한 이미지에 마우스 드래그로 영역좌표값 가져오기
    </p>
    <div class="image-box">
        <input type="file" ref="files" @change="imageUpload" accept="image/*" />
    </div>
    <div><h1><br>X1:{{resultRect.X1}}<br>Y1:{{resultRect.Y1}}<br>X2:{{resultRect.X2}}<br>Y2:{{resultRect.Y2}}</h1></div>
    <canvas ref="canvasImage" style="z-index:1;"></canvas>
    <canvas ref="canvasRect" @mousedown="getRectAreaDown" @mouseup="getRectAreaUp" @mousemove="getRectAreaMove" style="z-index:2;"></canvas>
    <div class="dndFocus"></div>
    
  </div>
</template>

<script>
import myImage from "../assets/code.png" 
export default {
    data(){
        return {
            fileReader: new FileReader(),
            img:  new Image(),
            url: null,
            draw:  false,
            resultRect: {
                X1: 0,
                Y1: 0,
                X2: 0,
                Y2: 0,
            },
            Rect: {
                rectX:  0,
                rectY:  0,
                rectwidth: 0,
                rectheight: 0,
            },
        }
    },
    methods:{
        imageUpload(e) {
            
            const canvas = this.$refs.canvasImage; //이미지를 보여줄 Canvas 
            const canvasRect = this.$refs.canvasRect; // 이미지를 그려줄 Canvas
            const context = canvas.getContext('2d');  //getContext() 메서드를 사용하여 드로잉 컨텍스트에 액세스
            const that = this; 
            // let imagefile = e.target.files; 
            this.fileReader.onload = function(e){ //fileReader.onload callback  
                that.img.onload = function(){
                //이미지의 크기 만큼 영역줌
                //2개의 캔버스를 쓰는 이유는 이미지 위에 Rect 드로우를 해야해서 각각 설정
                //img canvas
                canvas.width = that.img.width; 
                canvas.height = that.img.height;
                //Rect draw canvas
                canvasRect.width = that.img.width;
                canvasRect.height = that.img.height;
                context.drawImage(that.img,0,0); //img를 0,0 위치에 그려줌
                };
                that.img.src = e.target.result;
            };
            //FileReader.readAsDataURL(file) 인코딩 된 file스트링 데이터가 result 속성(attribute)에 넣어짐 
            that.fileReader.readAsDataURL(e.target.files[0]);
        },
        
        getRectAreaDown(e){ // mousedown
            const canvas = this.$refs.canvasRect; 
            const context = canvas.getContext('2d');
            context.strokeStyle = "#FF0000"  //strokeStyle 도형의 윤곽선 색을 설정

            this.resultRect.X1 = e.offsetX; // 마우스클릭 위치의 x좌표
            this.resultRect.Y1 = e.offsetY; // 마우스클릭 위치의 y좌표
            this.draw =true;
        },

        getRectAreaUp(e){ // mouseUp 
            this.resultRect.X2 = e.offsetX;
            this.resultRect.Y2 = e.offsetY; 
            this.draw =false;
        },
        getRectAreaMove(e){
            const canvas = this.$refs.canvasRect; // 그려줄 캔버스 
            const context = canvas.getContext('2d');
            if(this.draw){
                this.resultRect.X2 = e.clientX; //그려지고있는 당시의 X좌표값
                this.resultRect.Y2 = e.clientY; //그려지고있는 당시의 Y좌표값
                context.clearRect(0,0,canvas.width,canvas.height);  //계속 그려지기 때문에 지워줌 
                /*strokeRect 사각형을 그려줌  (클릭시에 받았던 X,Y값,현재x값 - 클릭할때 받은 x값  , 현재y값 -클릭할때받은 y값) ,  */
                // context.strokeRect(this.Rect.rectX,this.Rect.rectY,e.offsetX-this.Rect.rectX,e.offsetY-this.Rect.rectY);
                context.strokeRect(
                    this.resultRect.X1,
                    this.resultRect.Y1,
                    e.offsetX - this.resultRect.X1,
                    e.offsetY - this.resultRect.Y1
                    );
            }     
        },               
    }
}
</script>

<style scoped>
    .image-box {
        margin-top: 30px;
        padding-bottom: 20px;
        text-align: left;
    }
    canvas{
    border: 1px solid black;
    position: absolute;
    display: block;
}
    .dndFocus {
    position:fixed;
    border:1px solid red;
    background-color:rgb(128, 0, 0, 0.4);
    z-index:3;
}
</style>