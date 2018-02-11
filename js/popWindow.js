//没有机会
function noChange(){
	var noLayer = new LSprite();
	noLayer.graphics.drawRect(0, "#000000", [0, 0, 750, 1207], true, "rgba(0,0,0,0.5)");
	backLayer.addChild(noLayer);
	noLayer.addEventListener(LMouseEvent.MOUSE_DOWN,setNull);
	//分享语
	var nochange = getBitmap(imgList['nochange']);
	nochange.y = rCenterHeight(nochange);
	nochange.x = rCenterWidth(nochange);
	noLayer.addChild(nochange);
	//哭
	var cry = getBitmap(imgList['cry']);
	cry.y = 315;
	cry.x = rCenterWidth(cry);
	noLayer.addChild(cry);
	//文字1
	var wordText1 = new setText(0,538,30,"哎呀~","#ffffff",false,'wd');
	wordText1.x = rCenterWidth(wordText1);
	noLayer.addChild(wordText1);
	//文字2
	var wordText2 = new setText(0,588,30,"您今天抢年货的机会用完了","#ffffff",false,'wd');
	wordText2.x = rCenterWidth(wordText2);
	noLayer.addChild(wordText2);
	//文字3
	var wordText3 = new setText(0,640,30,"请明天再来吧！","#ffffff",false,'wd');
	wordText3.x = rCenterWidth(wordText3);
	noLayer.addChild(wordText3);
	//返回首页
	var backhome = getButton(imgList['backhome']);
	backhome.x = rCenterWidth(backhome);
	backhome.y = 725;
	noLayer.addChild(backhome);
	noLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		noLayer.die();
		noLayer.remove();
		LTweenLite.removeAll();
		backLayer.removeAllChild();
		backLayer.die();
		homepage();
	});
}
//游戏结束
function gameOver(){
	var gLayer = new LSprite();
	gLayer.graphics.drawRect(0, "#000000", [0, 0, 750, 1207], true, "rgba(0,0,0,0.5)");
	backLayer.addChild(gLayer);
	gLayer.addEventListener(LMouseEvent.MOUSE_DOWN,setNull);
	var oLayer = new LSprite();
	gLayer.addChild(oLayer);
	//游戏结束
	var overShow = getBitmap(imgList['overShow']);
	overShow.y = 254;
	overShow.x = rCenterWidth(overShow);
	oLayer.addChild(overShow);
	//ren
	var answerPeople = getBitmap(imgList['answerPeople']);
	answerPeople.y = 577;
	answerPeople.x = 111;
	answerPeople.rotate = -3
	oLayer.addChild(answerPeople);
	LTweenLite.to(answerPeople,0.5,{rotate:3,loop:true}).to(answerPeople,0.5,{rotate:-3});
	//ren
	var sharePeople = getBitmap(imgList['sharePeople']);
	sharePeople.y = 315;
	sharePeople.x = 111;
	oLayer.addChild(sharePeople);
	LTweenLite.to(sharePeople,0.5,{rotate:5,loop:true}).to(sharePeople,0.5,{rotate:0});
	//回答
	var answer = getButton(imgList['answer']);
	answer.x = 393;
	answer.y = 866;
	oLayer.addChild(answer);
	bigAndSmall(answer,2,2,1,0.02,0,true);
	answer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		gLayer.die();
		gLayer.remove();
		LTweenLite.removeAll();
		backLayer.removeAllChild();
		backLayer.die();
		//
		problemRules();
	});
	//邀请
	var invitation = getButton(imgList['invitation']);
	invitation.x = 65;
	invitation.y = 866;
	oLayer.addChild(invitation);
	bigAndSmall(invitation,2,2,1,0.02,0,true);
	invitation.addEventListener(LMouseEvent.MOUSE_DOWN,sharing);
	
}
//等分页面
function score(s){
	var sLayer = new LSprite();
	sLayer.graphics.drawRect(0, "#000000", [0, 0, 750, 1207], true, "rgba(0,0,0,0.5)");
	backLayer.addChild(sLayer);
	sLayer.addEventListener(LMouseEvent.MOUSE_DOWN,setNull);
	//背景
	var scoreBkg = getBitmap(imgList['scoreBkg']);
	scoreBkg.x = 61;
	scoreBkg.y = 258;
	sLayer.addChild(scoreBkg);
	//人
	var rulePeople = getBitmap(imgList['rulePeople']);
	rulePeople.x = 335;
	rulePeople.y = 402;
	rulePeople.scaleX = 1.6;
	rulePeople.scaleY = 1.6;
	rulePeople.rotate = -2;
	sLayer.addChild(rulePeople);
	LTweenLite.to(rulePeople,0.4,{rotate:2,loop:true}).to(rulePeople,0.4,{rotate:-2});
	//文字
	s = s.toString();
	var wx = 120;
	var wy = 505;
	if(s.length>3)
	{
		wx = 90;
		wy = 540;
	}
	var wordText = new setText(0,538,94,s,"#fcecd5",false,'wd');
	wordText.x = wx;
	wordText.y = wy;
	sLayer.addChild(wordText);	
	
	var wordText1 = new setText(0,538,42,"分","#fcecd5",false,'wd');
	wordText1.x = wx+5+wordText.getWidth();
	wordText1.y = wy+42;
	sLayer.addChild(wordText1);
	//再玩一次
	var again = getButton(imgList['again']);
	again.x = 66;
	again.y = 872;
	sLayer.addChild(again);
	bigAndSmall(again,2,2,1,0.02,0,true);
	again.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		again.removeEventListener(LMouseEvent.MOUSE_DOWN);
		//没有填写信息
		$.get('json/message.json',function(data){
			if(data.has==1)
			{
				$('#mg').show();
			}
		});
		$.get('json/number.json',function(data){			
			if(data.number==1){
				//答题页面
				sLayer.die();
				sLayer.remove();
				LTweenLite.removeAll();
				gameOver();
			}else{
				//没有机会
				sLayer.die();
				sLayer.remove();
				LTweenLite.removeAll();
				noChange();
			}
		});
		
	});
	//分享
	var shareFriend = getButton(imgList['shareFriend']);
	shareFriend.x = 394;
	shareFriend.y = 872;
	sLayer.addChild(shareFriend);
	bigAndSmall(shareFriend,2,2,1,0.02,0,true);
	shareFriend.addEventListener(LMouseEvent.MOUSE_DOWN,sharing);
}
//弹窗
function sorry(){
	var noLayer = new LSprite();
	noLayer.graphics.drawRect(0, "#000000", [0, 0, 750, 1207], true, "rgba(0,0,0,0.5)");
	backLayer.addChild(noLayer);
	noLayer.addEventListener(LMouseEvent.MOUSE_DOWN,setNull);
	//分享语
	var nochange = getBitmap(imgList['nochange']);
	nochange.y = rCenterHeight(nochange);
	nochange.x = rCenterWidth(nochange);
	noLayer.addChild(nochange);
	//哭
	var cry = getBitmap(imgList['cry']);
	cry.y = 315;
	cry.x = rCenterWidth(cry);
	noLayer.addChild(cry);
	//文字1
	var wordText1 = new setText(0,538,30,"哎呀~","#ffffff",false,'wd');
	wordText1.x = rCenterWidth(wordText1);
	noLayer.addChild(wordText1);
	//文字2
	var wordText2 = new setText(0,588,30,"很抱歉！","#ffffff",false,'wd');
	wordText2.x = rCenterWidth(wordText2);
	noLayer.addChild(wordText2);
	//文字3
	var wordText3 = new setText(0,640,30,"您没有答对一道题！","#ffffff",false,'wd');
	wordText3.x = rCenterWidth(wordText3);
	noLayer.addChild(wordText3);
	//返回首页
	var backhome = getButton(imgList['backhome']);
	backhome.x = rCenterWidth(backhome);
	backhome.y = 725;
	noLayer.addChild(backhome);
	noLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		noLayer.die();
		noLayer.remove();
		LTweenLite.removeAll();
		backLayer.removeAllChild();
		backLayer.die();
		homepage();
	});
}
//获得机会
function pop(n,m){
	var noLayer = new LSprite();
	noLayer.graphics.drawRect(0, "#000000", [0, 0, 750, 1207], true, "rgba(0,0,0,0.5)");
	backLayer.addChild(noLayer);
	noLayer.addEventListener(LMouseEvent.MOUSE_DOWN,setNull);
	//分享语
	var nochange = getBitmap(imgList['nochange']);
	nochange.y = rCenterHeight(nochange);
	nochange.x = rCenterWidth(nochange);
	noLayer.addChild(nochange);
	//哭
	var cry = getBitmap(imgList['rulePeople']);
	cry.y = 315;
	cry.x = rCenterWidth(cry);
	noLayer.addChild(cry);
	//文字1
	var wordText1 = new setText(0,538,30,"恭喜您","#ffffff",false,'wd');
	wordText1.x = rCenterWidth(wordText1);
	noLayer.addChild(wordText1);
	//文字2
	var wordText2 = new setText(0,588,30,"您总共答对"+n+"道题","#ffffff",false,'wd');
	wordText2.x = rCenterWidth(wordText2);
	noLayer.addChild(wordText2);
	//文字3
	var wordText3 = new setText(0,640,30,"共获得"+m+"次机会","#ffffff",false,'wd');
	wordText3.x = rCenterWidth(wordText3);
	noLayer.addChild(wordText3);
	//返回首页
	var backhome = getButton(imgList['backhome']);
	backhome.x = rCenterWidth(backhome);
	backhome.y = 725;
	noLayer.addChild(backhome);
	noLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		noLayer.die();
		noLayer.remove();
		LTweenLite.removeAll();
		backLayer.removeAllChild();
		backLayer.die();
		homepage();
	});
}