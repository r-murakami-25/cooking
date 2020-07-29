
<template>
<div id="Search">
    <input type="text" class="search_box" v-model="keyword" placeholder="料理名・食材でレシピをさがす"  @keypress.enter="onKeypressEnter" value="">

    <!-- <table v-if="show"> -->
      <table>
        <tr v-for="user in filteredUsers" v-bind:key="user.id">
            <!-- <td v-text="user.id"></td> -->
          <!-- <router-link :to="{name:'Categories', params:{categories_id: user.slug}}">  -->
          <router-link :to="{name:'Categories', params:{categories_id: user.slug}}">                
            <td v-text="user.title"></td>
            <!-- <td v-text="user.name"></td>  -->
          </router-link>
        </tr>
    </table>
</div>
    
</template>

<script>
import db from '../main.js'

export default{
    name:"Search",
    data(){
        return{
            keyword: '',
            // show:false,
            users: [

            ],
            filteredUsers:[]
                
        }
        
    },
    //fitrestoreからドキュメント内のすべてを取得、表示
    created() {  
     db.collection('items') 
       .get()  
       .then(snapshot => {  
         snapshot.forEach(doc => {  
           let item = doc.data()  //item
           item.id = doc.id  //item
           console.log("item",item)
           this.users.push(item)  
         })  
       })  
    },  
    //取得したドキュメント内の「name=テキストボックスに入力したもの」であればそれらだけ表示
    watch:{
         keyword(val){
             this.filteredUsers = [];
             for(let i of this.users){//配列usersの中のオブジェクト（i）を1個ずつ繰り返す
                //i.nameまたは、titleテキストボックスの値（value）が-1でなければ（あっていれば）以下
                if (i.name.indexOf(val) !== -1 || i.title.indexOf(val) !== -1){//A||Bの形で左にするとエラー起きる　質問
                this.filteredUsers.push(i);//filteredUsersにiを入れる
                // show:true,
               console.log(this.filteredUsers)
                }
             
          }
        }
    },
        //質問　input欄に一度入力してから空白にするとfirestoreに入力したすべてが表示されてしまう。
        //→はじめ空白→入力したものとfirestoreのドキュメント一致したら表示→入力けしたら空白　にしたい
        //v-if　初期値false→一致したら表示　trueに→入力けしたら　falseにするべきか？記述不明


        //enterキー押したら、v-if(入力した文字[this.keyword]==i.name またはi.titleの時)→categoriesページに遷移　v-else([this.keyword]==! i.name またはi.titleの時)→「見つかりません」
        //
        methods: {
        onKeypressEnter() {
        //   this.filteredUsers = [];
        // if( i.name==this.keyword){
        //   this.$router.push( '/Categories/:categories_id')
          //URLに飛ぶ

        // }else{
        //  alert('見つかりません')
        // }
                 alert('Entrキーが押されました')

      }

    }

    // methods: {//以下先生の回答
    //     onKeypressEnter() {
    //        this.filteredUsers = [];
    //             for(let i of this.users){//配列usersの中のオブジェクト（i）を1個ずつ繰り返す
    //             //if (i.name.indexOf(val) !== -1){//i.nameまたは、titleテキストボックスの値（value）が-1でなければ（あっていれば）以下
    //             if (i.name.indexOf(val) !== -1 || i.title.indexOf(val) !== -1){//A||Bの形で左にするとエラー起きる　質問
    //                        this.$router.push( `Categories/${}`)

    //          }

        //  if( i.name==this.keyword){
        //    this.$router.push( '/Categories/:categories_id')
          //URLに飛ぶ

        //  }else{
        //   alert('見つかりません')
        //  }
                //  alert('Entrキーが押されました')

    //   }

    // }
      //clickしたらCategoriesページに飛ぶ
  //     methods: {
  //      textBoxClicked() {
  //     if (this.keyword) return;
  //     this.showList = !this.showList;
  //   }, 
  // }
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