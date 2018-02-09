function problem(){
	backLayer.removeAllChild();
	backLayer.die();
	//首页
	var pLayer = new LSprite();
	backLayer.addChild(pLayer);
	//添加背景
	var back = getBitmap(imgList['questionBkg']);
	homeLayer.addChild(back);
}
