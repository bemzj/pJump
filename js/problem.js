function problemRules(){
	backLayer.removeAllChild();
	backLayer.die();
	LTweenLite.removeAll();
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
		LTweenLite.removeAll();
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
	//答题层
	var qLayer = new LSprite();
	pLayer.addChild(qLayer);
	//答案	
	$.get('http://wmgj.hengdikeji.com/index.php/index/index/test.html',function(data){
		//时间
		var time = new setText(0,538,30,"时间：10s","#ff3530",false,'wd');
		time.x = 88;
		time.y = 115;
		pLayer.addChild(time);
		var timeCount = 10;
		var timeTween
		timeTween = LTweenLite.to(time,1.0,{loop:true,onStart:function(){
			
			if(timeCount==-1)
			{
				LTweenLite.removeAll();
				//答题时间结束
				if(maxscore==0)
				{
					sorry();
				}else{
					//获得机会次数
					$.get('json/change.json',function(data){
						pop(maxscore,data.change);
					});
				}
			}else{
				time.childList["0"].text = "时间："+timeCount+"s";
				timeCount--;
			}
		}});
		maxscore = 0;
		qt(qLayer,0,data,true,timeTween);
	},'JSON');
}

function qt(layer,k,data,aOpen,tw){
	var anTitle;
	var ans = [];
	var anq;
	var rightQ = -1;
	var ansOpen = aOpen;
	tw.resume();
	//题号
	anTitle = new titles(k+1);
	anTitle.x = rCenterWidth(anTitle);
	anTitle.y = 160;
	layer.addChild(anTitle);
	var d = JSON.parse(data[k].content);
	//题目
	anq = new setWrapText(0,280,36,d["0"].title,"#000000",false,480,true,68,'wd');
	anq.x = 135;
	anq.y = 320;
	layer.addChild(anq);;
	var inputs=d["0"].input;
	//开始答题
	for(i in inputs){
		if(inputs[i].answer==1)
		{
			rightQ = i;
		}
		ans[i]=new answers(inputs[i].val,parseInt(i)+1,inputs[i].answer);
		ans[i].x = rCenterWidth(ans[i]);
		ans[i].y = 360+anq.getHeight() + i*110;
		layer.addChild(ans[i]);
		ans[i].addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			if(ansOpen == true)
			{
				ansOpen = false;
				var self = this;
				tw.pause();
				if(self.sp.answer==1)
				{
					$('#right')[0].currentTime = 0;
					$('#right')[0].play();						 
					self.sp.childList[1].childList["0"].color = '#00ff00';
					setTimeout(function(){
						layer.removeAllChild();
						maxscore++;
						++k
						if(k==3)
						{
							if(maxscore==0)
							{
								sorry();
							}else{
								//获得机会次数
								$.get('json/change.json',function(data){
									pop(maxscore,data.change);
								});
							}
							
						}else{
							qt(layer,k,data,true,tw);
						}
					},1000);
					
				}else{
					$('#error')[0].currentTime = 0;
					$('#error')[0].play();
					self.sp.childList[1].childList["0"].color = '#ff3530';
					ans[rightQ].childList[1].childList["0"].color = '#00ff00';					
					setTimeout(function(){
						layer.removeAllChild();
						++k						
						if(k==3)
						{
							if(maxscore==0)
							{
								sorry();
							}else{
								//获得机会次数
								$.get('json/change.json',function(data){
									pop(maxscore,data.change);
								});
							}
						}else{
							qt(layer,k,data,true,tw);
						}
					},1500);
				}
			}
		});
	}
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
function answers(title,num,answer){
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
	self.answer = answer;
	self.addChild(self.wt);
	self.wt.y = (self.bitmap.getHeight() - self.wt.getHeight())/2-8;
}
