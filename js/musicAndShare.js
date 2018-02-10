$(function(){
	$('.delete').remove();
	var music = 0;
	var musicOpen = true;
	var musicTween = setInterval(function() {
		music += 2;
		$('#music').css('transform', "rotate(" + music + "deg)");
		if(music == 360) {
			music = 0;
		}
	}, 10);
	$('#music').on('touchstart', function() {
		if(musicOpen == true) {
			musicOpen = false;
			clearInterval(musicTween);
			$('#bg')[0].pause();
		} else {
			musicOpen = true;
			musicTween = setInterval(function() {
				music += 2;
				$('#music').css('transform', "rotate(" + music + "deg)");
				if(music == 360) {
					music = 0;
				}
			}, 10);
			$('#bg')[0].play();
		}
	
	});
});
//分享
function sharing(){
	var shareLayer = new LSprite();
	shareLayer.graphics.drawRect(0, "#000000", [0, 0, 750, 1207], true, "rgba(0,0,0,0.5)");
	backLayer.addChild(shareLayer);
	//箭头
	var arrow = getBitmap(imgList['arrow']);
	arrow.y = 80;
	arrow.x = 600;
	shareLayer.addChild(arrow);
	var at =  LTweenLite.to(arrow,1.0,{x:650,y:40,loop:true}).to(arrow,1.0,{x:600,y:80,loop:true});
	//分享语
	var shareWord = getBitmap(imgList['shareWord']);
	shareWord.y = 255;
	shareWord.x = rCenterWidth(shareWord);
	shareLayer.addChild(shareWord);
	var swt =  bigAndSmall(shareWord,2,2,1,0.01,0,true);
	//分享语
	var sharePeople = getBitmap(imgList['sharePeople']);
	sharePeople.y = 215;
	sharePeople.x = 74;
	shareLayer.addChild(sharePeople);
	var st =LTweenLite.to(sharePeople,0.5,{rotate:-5,loop:true}).to(sharePeople,0.5,{rotate:0});
	shareLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		at.pause();
		st.pause();
		swt.pause();
		shareLayer.remove();
	});
}
