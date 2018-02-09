//首页
function homepage(lTime){
	backLayer.removeAllChild();
	backLayer.die();
	//首页
	var homeLayer = new LSprite(); 
	backLayer.addChild(homeLayer);
	//添加背景
	var back = getBitmap(imgList['homepage']);
	homeLayer.addChild(back);	
	//添加灯光
	var clight = getBitmap(imgList['clight']);
	clight.x = -(clight.getWidth()-LGlobal.width)/2;
	clight.y = 60;
	homeLayer.addChild(clight);
	LTweenLite.to(clight,lTime,{rotate:360,loop:true,onComplete:function(){
		clight.rotate = 0;
	}});
	//添加舞台
	var stage = getBitmap(imgList['stage']);
	stage.x = 0;
	stage.y = LGlobal.height - stage.getHeight();
	homeLayer.addChild(stage);	
	//添加舞台
	var stageUp = getBitmap(imgList['stageUp']);
	homeLayer.addChild(stageUp);
	//红包1
	var redBag1 = getBitmap(imgList['red4']);
	redBag1.y = 850;
	redBag1.x = 250;
	homeLayer.addChild(redBag1);
	LTweenLite.to(redBag1,1.2,{y:602,x:-redBag1.getWidth(),loop:true,alpha:0,onComplete:function(){
		redBag1.x = 250;
		redBag1.y = 850;
		redBag1.alpha = 1;
	}});
	//红包2
	var redBag2 = getBitmap(imgList['red3']);
	redBag2.y = 880;
	redBag2.x = 438;
	homeLayer.addChild(redBag2);
	LTweenLite.to(redBag2,1.6,{y:606,x:750,loop:true,alpha:0,onComplete:function(){
		redBag2.x = 438;
		redBag2.y = 880;
		redBag2.alpha = 1;
	}});
	//红包3
	var redBag3 = getBitmap(imgList['red3']);
	redBag3.y = 658;
	redBag3.x = 364;
	homeLayer.addChild(redBag3);
	LTweenLite.to(redBag3,2,{y:318,x:750,loop:true,alpha:0,onComplete:function(){
		redBag3.x = 364;
		redBag3.y = 658;
		redBag3.alpha = 1;
	}});
	
	//星星
	var starTime = 0.5;
	var star1 = getBitmap(imgList['bigStar']);
	star1.y = 466;
	star1.x = 528;
	homeLayer.addChild(star1);
	bigAndSmall(star1,2,2,1,0.12,0,true);
	var star2 = getBitmap(imgList['bigStar']);
	star2.y = 369;
	star2.x = 14;
	homeLayer.addChild(star2);
	bigAndSmall(star2,2,2,1,0.1,0,true);
	var star3 = getBitmap(imgList['bigStar']);
	star3.y = 824;
	star3.x = 720;
	star3.alpha = 0.4;
	homeLayer.addChild(star3);
	bigAndSmall(star3,2,2,1,0.1,0,true);
	//添加灯光
	var light = getBitmap(imgList['light']);
	light.x = 116;
	light.y = 312;
	homeLayer.addChild(light);
	bling(light,0.1,0.5,1,true);
	//logo
	var logo = getBitmap(imgList['logo']);
	logo.x = 10;
	logo.y = 14;
	homeLayer.addChild(logo);
	//400毫秒后
	setTimeout(function(){
		//首页标题
		var homeTitle = getBitmap(imgList['homeTitle']);
		homeTitle.x = rCenterWidth(homeTitle);
		homeTitle.y = 30;
		homeLayer.addChild(homeTitle);
		var tm = new LTransitionManager(homeTitle);
		var tp = {
			type: LTransition.Fly,
			startPoint: 2,
			duration: 0.2,
			direction: LTransition.IN,
			easing: Strong.easeIn()
		};
		tm.startTransition(tp);
		//狗
		var dog = getBitmap(imgList['dog']);
		dog.x = 197;
		dog.y = 482;
		homeLayer.addChild(dog);
		var gm = new LTransitionManager(dog);
		var gp = {
			type: LTransition.Fly,
			startPoint: 7,
			duration: 0.2,
			direction: LTransition.IN,
			easing: Strong.easeIn()
		};
		gm.startTransition(gp);
		//开始游戏
		var startGame = getButton(imgList['startGame']);
		startGame.x = rCenterWidth(startGame);
		startGame.y = 856;
		homeLayer.addChild(startGame);
		bigAndSmall(startGame,2,2,1,0.02,0,true);
		startGame.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			//开始游戏点击事件
			startGame.removeEventListener(LMouseEvent.MOUSE_DOWN);
			homeLayer.remove();
		});
		//步步高升
		var homeBtn01 = getButton(imgList['homeBtn01']);
		homeBtn01.x = 61;
		homeBtn01.y = 989;
		homeLayer.addChild(homeBtn01);
		bigAndSmall(homeBtn01,2,2,1,0.02,0,true);
		homeBtn01.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			//开始游戏点击事件
			startGame.removeEventListener(LMouseEvent.MOUSE_DOWN);
			homeLayer.remove();
		});
		//兑换年货
		var homeBtn02 = getButton(imgList['homeBtn02']);
		homeBtn02.x = 393;
		homeBtn02.y = 989;
		homeLayer.addChild(homeBtn02);
		bigAndSmall(homeBtn02,2,2,1,0.02,0,true);
		homeBtn02.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			//开始游戏点击事件
			startGame.removeEventListener(LMouseEvent.MOUSE_DOWN);
			homeLayer.remove();
		});
	},400);
	//纸
	var positions = [50,200,350,500,650];
	var homeTime = 1.0;
	var last = 0;
	LTweenLite.to(homeLayer,homeTime,{loop:true,onComplete:function(){
		var num = parseInt(Math.random()*5);
		while(last==num)
		{
			num = parseInt(Math.random()*5);
		}
		last = num;
		var pTime = 9+parseInt(Math.random()*1);
		var pPosition = positions[num]+parseInt(Math.random()*50);
		homeLayer.addChild(new paper(pPosition,pTime));

	}});
//	$.get('http://wmgj.hengdikeji.com/index.php/index/index/test.html',function(data){
//		var d = JSON.parse(data["0"].content);
//		console.log(d);
//	},'JSON');
	
}
//纸屑
function paper(x,time){
	base(this,LSprite,[]);	
	var self = this;
	self.x = x;
	self.y = -17;
	self.bitmap = new LBitmap(new LBitmapData(imgList['paper']));	
	self.addChild(self.bitmap);
	LTweenLite.to(self,time,{y:1207,onComplete:function(){
		self.remove();
	}});
}