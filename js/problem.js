function problemRules(){
	backLayer.removeAllChild();
	backLayer.die();
	LTweenLite.pauseAll()
	//规则层
	var rLayer = new LSprite(); 
	backLayer.addChild(rLayer);
	//添加背景
	var rRule = getBitmap(imgList['pRule']);
	rLayer.addChild(rRule);
	//文字
	var wordText1 = new setText(0,424,34,"10秒内快速答题","#000000",false,'wd');
	wordText1.x = rCenterWidth(wordText1);
	rLayer.addChild(wordText1);
	var wordText2 = new setText(0,474,34,"答对一题，获得一次机会","#000000",false,'wd');
	wordText2.x = rCenterWidth(wordText2);
	rLayer.addChild(wordText2);
	var wordText3 = new setText(0,524,34,"共三题","#000000",false,'wd');
	wordText3.x = rCenterWidth(wordText3);
	rLayer.addChild(wordText3);
	//开始
	var start = getButton(imgList['start']);
	start.x = rCenterWidth(start);
	start.y = 660;
	rLayer.addChild(start);
	bigAndSmall(start,2,2,1,0.02,0,true);
	start.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		start.removeEventListener(LMouseEvent.MOUSE_DOWN);
		backLayer.removeAllChild();
		backLayer.die();
		LTweenLite.pauseAll();
		problem();
	});
}
function problem(){
	backLayer.removeAllChild();
	backLayer.die();
	//首页
	var pLayer = new LSprite();
	backLayer.addChild(pLayer);
	//添加背景
	var back = getBitmap(imgList['questionBkg']);
	pLayer.addChild(back);
	//答案
	var anTitle = "";
	var ans = [];
	$.get('http://wmgj.hengdikeji.com/index.php/index/index/test.html',function(data){
		var d = JSON.parse(data["0"].content);
		var k = 0;
		anTitle = d[k].title;
		var inputs=d[k].input;
		for(i in inputs){
			ans[i]=new answers(inputs[i].val,parseInt(i)+1);
			ans[i].x = rCenterWidth(ans[i]);
			ans[i].y = 500 + i*110;
			pLayer.addChild(ans[i]);
		}
	},'JSON');
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
function answers(title,num){
	var str = "";
	switch(num)
	{
		case 1:
			str = "a";
			break;
		case 2:
			str = "b";
			break;
		case 3:
			str = "c";
			break;
		case 4:
			str = "d";
			break;
	}
	base(this,LSprite,[]);
	var self = this;
	self.bitmap = getBitmap(imgList[str]);
	self.addChild(self.bitmap);
	self.wt = new setText(0,538,30,title,"#000000",false,'wd');
	self.wt.x = 84+(442-self.wt.getWidth())/2;
	
	self.addChild(self.wt);
	self.wt.y = (self.bitmap.getHeight() - self.wt.getHeight())/2-8;
}
