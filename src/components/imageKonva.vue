<template>
    <div>
        <h1>버튼이벤트로 각각 다른 Rect Draw</h1>
        <b-button @click="clickBtn('btn1')" class="btn-margin"  >rad</b-button>
        <b-button @click="clickBtn('btn2')" class="btn-margin" variant="danger">black</b-button>
        <b-button @click="clickBtn('btn3')" class="btn-margin" variant="success">green</b-button>
        <b-button @click="clickBtn('btn4')" class="btn-margin" variant="outline-primary">blue</b-button>
        
    <v-stage
      ref="stage"
      :config="stageSize"
      @mouseDown="handleMouseDown"
      @mouseUp="handleMouseUp"
      @mousemove="handleMouseMove"
    >
    
      <v-layer ref="layer">
        <v-text
          ref="text"
          :config="{
            x: 10,
            y: 10,
            fontSize: 20,
            text: text,
            fill: 'black',
          }"
        />

        <v-rect
          :config="{
            x: this.rect1.x,
            y: this.rect1.y,
            width: this.rect1.width,
            height: this.rect1.height,
            fill: 'rgb(0,0,0,0)',
            stroke: 'black',
            strokeWidth: 3,
          }"
        />
        <v-rect
          :config="{
            x: this.rect2.x,
            y: this.rect2.y,
            width: this.rect2.width,
            height: this.rect2.height,
            fill: 'rgb(0,0,0,0)',
            stroke: 'red',
            strokeWidth: 3,
          }"
        />  
        <v-rect
          :config="{
            x: this.rect3.x,
            y: this.rect3.y,
            width: this.rect3.width,
            height: this.rect3.height,
            fill: 'rgb(0,0,0,0)',
            stroke: 'green',
            strokeWidth: 3,
          }"
        />  
        <v-rect
          :config="{
            x: this.rect4.x,
            y: this.rect4.y,
            width: this.rect4.width,
            height: this.rect4.height,
            fill: 'rgb(0,0,0,0)',
            stroke: 'blue',
            strokeWidth: 3,
          }"
        />                                
      </v-layer>
    </v-stage>
</div>    
  </template>
  
  <script>
  // stageSize를 위한 크기 설정
  const width = window.innerWidth; 
  const height = window.innerHeight;
  
  export default {
    data() {
      return {
        stageSize: { // stageSize 크기 설정  
          width: width,
          height: height,
        },
        text: "Try to draw a rectangle", // v-text로 그려주기위한 설정 
        isDrawing: false, // 그려주기위한 값 설정 
        rect1: {},
        rect2: {},
        rect3: {},
        rect4: {},
        btnType:'',
      };
    },
    methods: {
        clickBtn: function(value){
            this.btnType = value;
        },
      handleMouseDown(event) {
        if(this.btnType === '') {alert('버튼을 클릭하세요'); return}
        this.isDrawing = true;
        const pos = this.$refs.stage.getNode().getPointerPosition();
        switch(this.btnType){
            case 'btn1' : this.rect1 = {x : pos.x, y : pos.y, width : 0, height : 0}; break;
            case 'btn2' : this.rect2 = {x : pos.x, y : pos.y, width : 0, height : 0}; break;
            case 'btn3' : this.rect3 = {x : pos.x, y : pos.y, width : 0, height : 0}; break;
            case 'btn4' : this.rect4 = {x : pos.x, y : pos.y, width : 0, height : 0}; break;
        }        
      },
      handleMouseUp() {
        this.isDrawing = false;
      },

      handleMouseMove(event) {
        if (!this.isDrawing) {
          return;
        }
        const point = this.$refs.stage.getNode().getPointerPosition();
        // handle  rectangle part
        let Rect;
        switch(this.btnType){
            case 'btn1' : Rect = this.rect1;  break;
            case 'btn2' : Rect = this.rect2;  break;
            case 'btn3' : Rect = this.rect3;  break;
            case 'btn4' : Rect = this.rect4;  break;
        }
         Rect.width = point.x - Rect.x;
         Rect.height = point.y - Rect.y;
      },
    },
  };
  </script>

  <style scoped>
  .btn-margin{
    margin: 5px
  }
  </style>