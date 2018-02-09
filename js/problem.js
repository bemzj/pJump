function problem(){
	backLayer.removeAllChild();
	backLayer.die();
	//首页
	var pLayer = new LSprite();
	backLayer.addChild(pLayer);
	//添加背景
	var back = getBitmap(imgList['questionBkg']);
	pLayer.addChild(back);
	pLayer.addChild(new titles(3));
	
}
function titles(num){
	var str = "";
	switch(num)
	{
		case 1:
			str = "一";
			break;
		case 2:
			str = "二";
			break;
		case 3:
			str = "三";
			break;
	}
	base(this,LSprite,[]);
	var self = this;
	self.bitmap = getBitmap(imgList['titleBkg']);
	self.addChild(self.bitmap);
	self.x = 215;
	self.y = 133;
	var wt = new setText(0,538,50,"第 "+str+" 题","#faeeca",false,'wd');
	wt.x = (self.bitmap.getWidth()-wt.getWidth())/2;
	wt.y = 26;
	self.addChild(wt);
}
function answers(){
	
}
