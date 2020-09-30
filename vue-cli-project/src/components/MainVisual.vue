<template>
	<div id="MainVisual">
		<div id="wrapper">
		
			<div id="slide">
				<ul>
					<li><img src="../assets/pastaCollection.jpg"  alt="パスタコレクション" class="img"></li>
					<li><img src="../assets/saladaCollection.jpg"  alt="サラダコレクション" class="img"></li>
					<li><img src="../assets/ChineseCookingCollection.jpg"  alt="中華料理コレクション" class="img"></li>
				</ul>
			</div>

			<div id="button">
				<ul>
					<li><a href="#" class="target">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>

#MainVisual{
	padding-top: 2%;
}

li{
	list-style-type:none;
}

#wrapper{
	max-width:980px;  
	margin:0 auto;
}

.img{
  width:68%;
  /* height: 47vw; */
  /* object-fit:cover; */
  border-radius: 0%;
}


#slide ul{
	position:relative;
  text-align: center;
  
}

#slide li{
	position:absolute;
	 width:100%; 
}

#button{
	padding-top:36%;
	text-align:center;
}

#button ul{
	display:inline-block;
}

#button ul li{
	float:left;
	margin-right:15px;
}

#button ul li:last-child{
	margin-right:0;
}

#button ul li a{
	text-indent:-9999px;
	text-decoration:none;
	display:block;
	width:8px;
	height:8px;
	border-radius:7px;
	background:#c0c0c0;
}

#button ul li a.target{
	background:#696969;
}


</style>

<script>
export default {
  mounted: function() {

    //  $(function(){
	var count = $("#slide li").length;
	var current = 1;
	var next = 2;
	var interval = 3000;
	var duration = 500;
	var timer;

	console.log(next);

	// 1番目の写真以外は非表示
	$("#slide li:not(:first-child)").hide();

	// 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
	timer = setInterval(slideTimer, interval);
	
	// slideTimer関数
	function slideTimer(){
		$("#slide li:nth-child(+" + current + ")").fadeOut(duration);
		$("#slide li:nth-child(+" + next + ")").fadeIn(duration);


		current = next;
		next = next+1;

		if(next > count){
			next = 1;
		}

		$("#button li a").removeClass("target");
		$("#button li:nth-child("+ current +") a").addClass("target");
	}

	$("#button li a").click(function(){
		next = $(this).html();

		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		slideTimer();
		
		return false;
	});



  },
  beforeDestroy:function(){
	  	clearInterval(timer);
		
  }
}


</script>
