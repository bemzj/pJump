function lookGift(str){
	backLayer.removeAllChild();
	backLayer.die();
	//首页
	var giftLayer = new LSprite(); 
	backLayer.addChild(giftLayer);
	//添加背景
	var back = getBitmap(imgList['gift']);
	giftLayer.addChild(back);
	//福袋1
	var fu1 = getBitmap(imgList['fu1']);
	fu1.x = 174;
	fu1.y = 332;
	fu1.rotate = -2;
	giftLayer.addChild(fu1);
	LTweenLite.to(fu1,0.5,{rotate:2,loop:true}).to(fu1,0.5,{rotate:-2});
	//福袋2
	var fu2 = getBitmap(imgList['fu2']);
	fu2.x = 174;
	fu2.y = 507;
	fu2.rotate = 2;
	giftLayer.addChild(fu2);
	LTweenLite.to(fu2,0.5,{rotate:-2,loop:true}).to(fu2,0.5,{rotate:2});
	//福袋3
	var fu3 = getBitmap(imgList['fu3']);
	fu3.x = 174;
	fu3.y = 687;
	fu3.rotate = -2;
	giftLayer.addChild(fu3);
	LTweenLite.to(fu3,0.5,{rotate:2,loop:true}).to(fu3,0.5,{rotate:-2});
	//读取头像
	
	var head;
	var loader = new LLoader();
	var maskObj;
	loader.load(wxurl, "bitmapData");
    loader.addEventListener(LEvent.COMPLETE, function(event){
        wechatHead=event.target;
        //头像
		head = new LBitmap(new LBitmapData(wechatHead));		
		head.scaleX = 78/head.getWidth();
		head.scaleY = 78/head.getHeight();
		head.x = 136;
		head.y = 186;
		maskObj = new LSprite();
	    maskObj.graphics.drawArc(0, "white", [head.x+39,head.y+39, 39, 0,Math.PI*2]);
	    head.mask = maskObj;	
		giftLayer.addChild(head);
    });
	//文字
	var wordText = new setText(432,186,50,str,"#fef0d0",false,'wd');
	giftLayer.addChild(wordText);
	//返回首页
	var backhome = getButton(imgList['backhome']);
	backhome.x = rCenterWidth(backhome);
	backhome.y = 928;
	giftLayer.addChild(backhome);
	bigAndSmall(backhome,2,2,1,0.02,0,true);
	backhome.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		LTweenLite.pauseAll();
		giftLayer.die();
		giftLayer.remove();
		backLayer.removeAllChild();
		backLayer.die();
		homepage();
	});
	
}
