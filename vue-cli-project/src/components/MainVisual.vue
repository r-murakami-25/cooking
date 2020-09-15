<template>
<div id="MainVisual">
<head>
<!-- <link rel="stylesheet" href="css/reset.css"> -->
<!-- <link rel="stylesheet" href="css/style.css"> -->
<!-- <script src="js/jquery-2.1.4.min.js"></script> -->
<!-- <script src="js/script.js"></script> -->
</head>
<body>
<div id="wrapper">
  <!-- <header>
    <h1>Slider</h1>
  </header> -->
  <div id="slide">
    <ul>
      <li><img src="../assets/salmonappetizer.jpg"  alt="img1" class="img"></li>
      <li><img src="../assets/coldpasta.jpg"  alt="img2" class="img"></li>
      <li><img src="../assets/rawhamsalada.jpg"  alt="img3" class="img"></li>
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
</body>
</div>
</template>

<style scoped>
body{
	font-family:Arial, sans-serif;
	-webkit-font-smoothing:antialiased;
	color:#A8DCDB;
}

li{
	list-style-type:none;
}

#wrapper{
	max-width:980px;  
	margin:0 auto;
}

.img{
  width:95%;
  height: 47vw;
  object-fit:cover;
  border-radius: 0%;
}

/* header h1{
	font-size:3em;
	font-weight:bold;
	text-align:center;
	padding:40px 25px;
} */

#slide ul{
	position:relative;
  text-align: center;
  
}

#slide li{
	position:absolute;
	 width:100%; 
}

#button{
	padding-top:51%;
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
	width:10px;
	height:10px;
	border-radius:7px;
	background:#A8DCDB;
}

#button ul li a.target{
	background:#41AFAD;
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

	// 1番目の写真以外は非表示
	$("#slide li:not(:first-child)").hide();

	// 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
	timer = setInterval(slideTimer, interval);
	
	// slideTimer関数
	function slideTimer(){
		$("#slide li:nth-child(+" + current + ")").fadeOut(duration);
		$("#slide li:nth-child(+" + next + ")").fadeIn(duration);


		current = next;
		next = ++next;

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
// });


  }
}


</script>
<!-- <carousel
:per-page="1"
:autoplay="true" 
:autoplayTimeout="3000"
:loop="true"
:speed="2000"

>

  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド1">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド2">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド3">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド4">
  </slide>
</carousel>
 

</div>
    
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name:"MainVisual",
    components: {
        Carousel,
        Slide
    }
}

</script>


<style>

.slide img{
  width: 100%;
  
}

.VueCarousel-slide{
  padding:100px;
}

.VueCarousel-dot{
  padding:2%;
}



</style> -->

<!-- <carousel
:per-page="1"
:autoplay="true" 
:autoplayTimeout="3000"
:loop="true"
:speed="2000"

>

  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド1">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド2">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド3">
  </slide>
  <slide class="slide">
    <img src="../assets/rawhamsalada_1.jpg" alt="スライド4">
  </slide>
</carousel>
 

</div>
    
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name:"MainVisual",
    components: {
        Carousel,
        Slide
    }
}

</script>


<style scoped>

.slide img{
  width: 100%;
  
}



</style> -->
