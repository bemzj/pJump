//显示规则
function showRule(){
	backLayer.removeAllChild();
	backLayer.die();
	LTweenLite.pauseAll();
	//规则层
	var rLayer = new LSprite(); 
	backLayer.addChild(rLayer);
	//添加背景
	var rules = getBitmap(imgList['rules']);
	rLayer.addChild(rules);
	//狗
	var ruleDog = getBitmap(imgList['ruleDog']);
	ruleDog.x = 78;
	ruleDog.y = 123;
	rLayer.addChild(ruleDog);
	var rgm = new LTransitionManager(ruleDog);
	var rgp = {
		type: LTransition.Fly,
		startPoint: 1,
		duration: 0.2,
		direction: LTransition.IN,
		easing: Strong.easeIn()
	};
	rgm.startTransition(rgp);
	//太子
	var rulePeople = getBitmap(imgList['rulePeople']);
	rulePeople.x = 503;
	rulePeople.y = 126;
	rLayer.addChild(rulePeople);
	var rpm = new LTransitionManager(rulePeople);
	var rpp = {
		type: LTransition.Fly,
		startPoint: 3,
		duration: 0.2,
		direction: LTransition.IN,
		easing: Strong.easeIn()
	};
	rpm.startTransition(rpp);
	//开始按钮
	var start = getButton(imgList['start']);
	start.x = rCenterWidth(start);
	start.y = 984;
	rLayer.addChild(start);
	bigAndSmall(start,2,2,1,0.02,0,true);
	start.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		LTweenLite.pauseAll();
		//开始游戏点击事件
		start.removeEventListener(LMouseEvent.MOUSE_DOWN);
		rLayer.remove();
	});
}
