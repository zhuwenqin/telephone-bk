$(document).ready(function () {
   var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		onInit: function(swiper){ 
			swiperAnimateCache(swiper); 
			swiperAnimate(swiper); 
		}, 
		onSlideChangeEnd: function(swiper){ 
			if(swiper.activeIndex==0){
				swiperAnimate(swiper); 
				
			}
			else{
					swiperAnimate(swiper); 
			} 
	
			if(swiper.activeIndex==3){
				swiperAnimate(swiper); 
				$('.rot').css('animation','roe 3.5s 2s ease forwards');
			}
			else{
				swiperAnimate(swiper); 
				$('.rot').css('animation','');
			}

			if(swiper.activeIndex==4){
				swiperAnimate(swiper); 
				$('.five img').css('animation','fiv 1.6s linear 1');
			}
			else{
				swiperAnimate(swiper); 
				$('.five img').css('animation','');
			}

			 if(swiper.activeIndex==5){
				swiperAnimate(swiper); 
				$('.six img').css('animation','fiv 1.6s linear 1');
			}
			else{
				swiperAnimate(swiper); 
				$('.six img').css('animation','');
			} 

			 if(swiper.activeIndex==6){
				swiperAnimate(swiper); 
				$('.seven img').css('animation','fiv 1.6s linear 1');
			}
			else{
				swiperAnimate(swiper); 
				$('.seven img').css('animation','');
			} 
			 if(swiper.activeIndex==7){
				swiperAnimate(swiper); 
				$('.eight img').css('animation','fiv 1.6s linear 1');
			}
			else{
				swiperAnimate(swiper); 
				$('.eight img').css('animation','');
			}
			 if(swiper.activeIndex == 9){
		    	swiperAnimate(swiper);
		    	typing();
		    	mydiv.innerHTML='';
		    }
		    else{
		   		swiperAnimate(swiper);
		    	// typing();
		    	mydiv.innerHTML='';
	    		}
			if(swiper.activeIndex == 11){
	    	for(var i = 0;i<7;i++){
	    		$('.twe img').eq(i).css('-webkit-animation','infoAni 0.7s '+(1+0.3*i)+'s linear forwards');
	    	}
		    }
		    else{
		   		$('.twe img').css('-webkit-animation','');
		    }
		} 
	})     
	
$('#music').click(function(){
		if(audio.paused){
			audio.play();
			$('#close').css('display','none');
			$('#open').css('display','block');
			$('#open').css({'-weikit-animation':'miu 1s linear infinite','animation':'miu 1s linear infinite'});
			
		}
		else{
			audio.pause();
			$('#close').css('display','block');
			$('#open').css('display','none');
				$('#open').css({'-weikit-animation':'','animation':''});
		}
}) 

var str = '战略联盟与合作伙伴关系是博看文思也无持续发展的重要保证，博看文思已经与行业领导者建立了战略合作伙伴关系，紧密的合作伙伴关系，确保博看文思能够满足客户的各种需求，并为客户提供最优秀的解决方案。';
var mydiv = document.getElementById("wordP");
function typing(){
	mydiv.innerHTML += str.charAt(i);
	i++;
	var id = setTimeout(typing,100);
	if(i==str.length){
	    clearTimeout(id);
	    //alert("³ÌÐòÖ´ÐÐÍê±Ï£¡");
	}
}

 // var mySwiper = new Swiper ('.swiper-container', {
 //  onInit: function(swiper){ //Swiper2.xµÄ³õÊ¼»¯ÊÇonFirstInit
 //    swiperAnimateCache(swiper); //Òþ²Ø¶¯»­ÔªËØ 
 //    swiperAnimate(swiper); //³õÊ¼»¯Íê³É¿ªÊ¼¶¯»­
 //  }, 
 //  onSlideChangeEnd: function(swiper){ 
 //    swiperAnimate(swiper); //Ã¿¸öslideÇÐ»»½áÊøÊ±Ò²ÔËÐÐµ±Ç°slide¶¯»­
 //  } 
 //  }) 
          

                           
}) 




window.onload =function(){
	var winW = document.documentElement.clientWidth;
	console.log(winW);
	var num = winW/640;
	document.getElementsByTagName('html')[0].style.fontSize=num*10+'px';
}
window.onresize = function(){
	var winW = document.documentElement.clientWidth;
	var num = winW/640;
	console.log(winW);
	document.getElementsByTagName('html')[0].style.fontSize=num*10+'px';
}     
      


