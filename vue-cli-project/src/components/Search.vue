
<template>
<div id="Search">
    <input type="text" class="search_box" v-model="keyword" placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">

    <!-- <table v-if="show"> -->
      <!-- <table> -->
        <!-- <tr v-for="item in items" v-bind:key="item.id"> -->
            <!-- <td v-text="item.id"></td> -->
          <!-- <router-link :to="{name:'Categories', params:{categories_id: item.slug}}">  -->
          <!-- <router-link :to="{name:'Categories', params:{categories_id: item.slug}}">                 -->
            <!-- <td v-text="item.title"></td> -->
            <!-- <td v-text="item.name"></td>  -->
          <!-- </router-link> -->
        <!-- </tr> -->
    <!-- </table> -->
</div>
    
</template>

<script>
import db from '../main.js'

export default{
    name:"Search",
    data(){
        return{
            keyword: '',//入力文字初期値
            // show:false,
            objects: [],//fitrestore内すべてを取得　
            items:[],//
            
                
        }
        
    },
    //fitrestoreからドキュメント内のすべてを取得、表示
    created() {  
     db.collection('items') 
       .get()  
       .then(snapshot => {  
         snapshot.forEach(doc => {  
           let fields = doc.data()  //fields
           fields.id = doc.id  //fields
           console.log("item",fields)
           this.objects.push(fields) 
            console.log(this.objects) 
         })  
       })  
    },  
    //取得したドキュメント内の「name=テキストボックスに入力したもの」であればそれらだけ表示
    watch:{
         keyword(val){
             this.items = [];
             for(let object of this.objects){//配列objects（firestoreのすべて）の中のオブジェクト（i）を1個ずつ繰り返す
                //fitrestore内（i）.nameまたは、titleテキストボックスの値（value）が-1でなければ（=なら）以下
                if (object.name.indexOf(val) !== -1 || object.title.indexOf(val) !== -1 ){
                this.items.push(object);//itemにfirestoreで取得したiを入れる
                // show:true,
               console.log(this.item)
                }
             
          }
        }
    },
        //質問　input欄に一度入力してから空白にするとfirestoreに入力したすべてが表示されてしまう。
        //→はじめ空白→入力したものとfirestoreのドキュメント一致したら表示→入力けしたら空白　にしたい
        //v-if　初期値false→一致したら表示　trueに→入力けしたら　falseにするべきか？記述不明


        //enterキー押したら、v-if(入力した文字[this.keyword]==i.name またはi.titleの時)→categoriesページに遷移　v-else([this.keyword]==! i.name またはi.titleの時)→「見つかりません」
        //
        // methods: {
        // onKeypressEnter() {
        //   this.item = [];
        // if( i.name==this.keyword){
        //   this.$router.push( '/Categories/:categories_id')
          //URLに飛ぶ

        // }else{
        //  alert('見つかりません')
        // }
                //  alert('Entrキーが押されました')

    //   }

    // }

//7/30 
      methods: {//
          onKeypressEnter() {
             this.items = [];
                  for(let object of this.objects){//配列objectsの中のオブジェクト（i）を1個ずつ繰り返す
                  //if (i.name.indexOf(val) !== -1){//i.nameまたは、title、categoryテキストボックスの値（value）が-1でなければ（あっていれば）以下
                  if (object.name.indexOf(this.keyword) !== -1 || object.title.indexOf(this.keyword) !== -1){
                             this.$router.push( `/Categories/${object.slug}`)//7/30　質問　val is not undefinedより、inputのvalue(val)を指定するべきだが方法がわからない 答え）v-modelでval=keywordにしてるため、this.keywordが正しい
                 
               }

          }

      }

       }

        //  if( i.name==this.keyword){
        //    this.$router.push( '/Categories/:categories_id')
          //URLに飛ぶ

        //  }else{
        //   alert('見つかりません')
        //  }
                //  alert('Entrキーが押されました')

      
      //clickしたらCategoriesページに飛ぶ
  //     methods: {
  //      textBoxClicked() {
  //     if (this.keyword) return;
  //     this.showList = !this.showList;
  //   }, 
  
}

</script>

<style>
.search_box{
  display: block;
  margin: 0 auto;
  width:80%;
  background:#ffffff;
  border-radius: 6px;
  padding:0.5%;
}

</style>