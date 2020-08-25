<template>
<div id="Carousel">
    <div class="maincarousel">
          <!-- //左→ボタン（進む） -->
          <div class="btn_left">
            <button type="button" class="button button-clear" @click="prev">
              <i class="fas fa-angle-left"></i>
            </button>
          </div>

          <!-- //真ん中の画像が入る部分 -->
          <transition-group tag="div" class="slider" :name="style">
            <div v-for="(img, index) in images" :key="img">
                <div v-if="index === displayImg" >
              <img :src="img" />
                </div>
            </div>
          </transition-group>

          <!-- // 右→ボタン（戻る） -->
          <div class="btn_right">
            <button type="button" class="button button-clear" @click="next">
              <i class="fas fa-angle-right"></i>
            
            </button>
          </div>

          <!-- // 下の　〇の部分 -->
          <div class="footer">
            <div class="center">
              <span class="point" v-for="(number, index) in images.length" :key="index" :class="{'active':index === displayImg}" @click="switchImg(index)">●</span>
            </div>
          </div>
    </div>
</div>
    
</template>

<script>
export default{
    name:"Carousel",
    data() {
        return {
          //以下初期値
          displayImg: 0,//表示中の画像の番号
          style: '',//styleの名前
          timerId: undefined,
          images: [
          'aaa',
          'bbb',
          'ccc',
          'ddd',
          ]
        }
      },
      methods: {
        next() {
          //次へボタン
          if (this.displayImg >= this.images.length - 1) {
            this.displayImg = 0;
          } else {
            this.displayImg++;
          }
          //上記の状態を "slide-right"と名付ける
          this.style = "slide-right"
        },
        prev() {
          //戻るボタン
          if (this.displayImg == 0) {
            this.displayImg = this.images.length - 1;
          } else {
            this.displayImg--;
          }
          this.style = "slide-left"
        },
        switchImg(index) {
          //画像の切り替え　真ん中の時
          this.displayImg = index;
          this.style = "slide-right"
        }
      },
      mounted() {
        var timerId = setInterval(this.next, 5000)
      }

}

</script>


<style scoped>

#Carousel{
    width:100%;
    background:#f5deb3;
}

</style>



