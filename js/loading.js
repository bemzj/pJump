//预加载页面
function loadImging(result){
	lLayer = new LSprite();
	backLayer.addChild(lLayer);
	//添加背景
	var back = getBitmap(result['loading']);
	lLayer.addChild(back);
	//文字
	wordText = new setText(258,612,30,"LOADING.","#ffffff",false,'wd');
	lLayer.addChild(wordText);
	//步数
    var list = LGlobal.divideCoordinate(628,284,1,4);
    var data = new LBitmapData(result['step'],0,0,157,284);
    step = new LAnimation(lLayer,data,list);
    step.x = 276;
    step.y = 258;
    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
    //加载层
	loadLayer = new LSprite();
	loadLayer.graphics.drawRoundRect(0, "#000000", [100, 570, 0, 24, 12], true, "#ffbd0a");
    lLayer.addChild(loadLayer);
	LLoadManage.load(gameImg,loadProgress,startGame);
	//文字
	var wordText1 = new setText(0,700,30,"小伙伴们太热情了，福袋装不下啦，","#ffffff",false,'wd');
	wordText1.x = rCenterWidth(wordText1);
	lLayer.addChild(wordText1);
	//文字
	var wordText2 = new setText(0,745,30,"请稍后再来。","#ffffff",false,'wd');
	wordText2.x = rCenterWidth(wordText2);
	lLayer.addChild(wordText2);
}
//人在跑
function onframe(){
	if(stepNumber%10==0)
	{
		step.onframe();
		stepNumber = 1;
		switch(stepWord)
		{
			case 0:
				wordText.word.text = "LOADING.";
				break;
			case 1:
				wordText.word.text = "LOADING..";
				break;
				
			case 2:
				wordText.word.text = "LOADING...";
				break;
			case 3:
				wordText.word.text = "LOADING....";
				break;
			case 4:
				wordText.word.text = "LOADING.....";
				break;				
			case 5:
				wordText.word.text = "LOADING......";
				break
		}
		if(++stepWord==6){
			stepWord=0;
		}
		
	}else{
		stepNumber++;
	}
    
}

//加载函数
function loadProgress(pre){
	process = parseInt(pre);
	loadLayer.graphics.clear();
	loadLayer.graphics.drawRoundRect(0, "#000000", [100, 570, process/100*545, 24, 12], true, "#ffbd0a");
}