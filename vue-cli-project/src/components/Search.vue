
<template>
<div id="Search">
    <input type="text" class="search_box"  placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">

       
</div>
    
</template>

<script>
import db from '../main.js'

export default{
    name:"Search",
    data(){
        return{
            
            
                
        }
        
    },
    
    //取得したドキュメント内の「name=テキストボックスに入力したもの」であればそれらだけ表示　なくてよい
    
        //質問　input欄に一度入力してから空白にするとfirestoreに入力したすべてが表示されてしまう。
        //→はじめ空白→入力したものとfirestoreのドキュメント一致したら表示→入力けしたら空白　にしたい
        //v-if　初期値false→一致したら表示　trueに→入力けしたら　falseにするべきか？記述不明


        //enterキー押したら、v-if(入力した文字[this.keyword]==i.name またはi.titleの時)→categoriesページに遷移　v-else([this.keyword]==! i.name またはi.titleの時)→「見つかりません」

      methods: {//
          onKeypressEnter() {//　to do ：searchページにリダイレクト、キーワードを渡す
            //  router.Push({ name: "yourroutename"})
               }

             

          }

      

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