//游戏初始化
LInit(1000/40,"game",750,1207,main);
//游戏入口主函数
function main(){
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
    LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
    backLayer = new LSprite();//创建背景层
    addChild(backLayer);//添加背景层到游戏环境中
    LLoadManage.load(loadImg,'',loadImging);
}

//游戏开始
function startGame(result){
	imgList=result;
	if(process==100)
	{
		//情况回收
		backLayer.removeEventListener(LEvent.ENTER_FRAME);
		wordText = null;
		step = null;
		loadLayer = null;
		stepNumber= null;
		stepWord= null;
		process= null;
		lLayer.remove();
		homepage(10);
		
	}
}