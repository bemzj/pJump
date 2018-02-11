var url="";
//加载页面的图片
var loadImg = [
	{path:url+'img/loading.jpg',type:'img',name:'loading'},//加载页面
	{path:url+'img/step.png',type:'img',name:'step'},//人走的步子
];
//加载的图片的资源
var gameImg = [
	{path:url+'img/music.png',type:'img',name:'music'},//音乐
	{path:url+'img/sharePeople.png',type:'img',name:'sharePeople'},//分享头像
	{path:url+'img/arrow.png',type:'img',name:'arrow'},//加载页面
	{path:url+'img/shareWord.png',type:'img',name:'shareWord'},//分享话语
	{path:url+'img/homepage.jpg',type:'img',name:'homepage'},//首页
	{path:url+'img/light.png',type:'img',name:'light'},//灯光
	{path:url+'img/sky.png',type:'img',name:'sky'},//云
	{path:url+'img/stage.png',type:'img',name:'stage'},//舞台
	{path:url+'img/clight.png',type:'img',name:'clight'},//光圈
	{path:url+'img/stageUp.png',type:'img',name:'stageUp'},//舞台上方
	{path:url+'img/red3.png',type:'img',name:'red3'},//红包
	{path:url+'img/red4.png',type:'img',name:'red4'},//红包1
	{path:url+'img/bigStar.png',type:'img',name:'bigStar'},//星星
	{path:url+'img/paper.png',type:'img',name:'paper'},//纸屑
	{path:url+'img/homeTitle.png',type:'img',name:'homeTitle'},//首页标题
	{path:url+'img/logo.png',type:'img',name:'logo'},//logo
	{path:url+'img/startGame.png',type:'img',name:'startGame'},//开始游戏
	{path:url+'img/homeBtn01.png',type:'img',name:'homeBtn01'},//首页按钮1
	{path:url+'img/homeBtn02.png',type:'img',name:'homeBtn02'},//首页按钮2
	{path:url+'img/dog.png',type:'img',name:'dog'},//狗
	{path:url+'img/backhome.png',type:'img',name:'backhome'},//返回首页
	{path:url+'img/nochange.png',type:'img',name:'nochange'},//没有机会
	{path:url+'img/rules.jpg',type:'img',name:'rules'},//规则页面
	{path:url+'img/start.png',type:'img',name:'start'},//开始游戏
	{path:url+'img/ruleDog.png',type:'img',name:'ruleDog'},//规则狗
	{path:url+'img/rulePeople.png',type:'img',name:'rulePeople'},//规则人
	{path:url+'img/answerPeople.png',type:'img',name:'answerPeople'},//规则人
	{path:url+'img/answer.png',type:'img',name:'answer'},//规则人
	{path:url+'img/invitation.png',type:'img',name:'invitation'},//邀请
	{path:url+'img/overShow.png',type:'img',name:'overShow'},//规则人
	{path:url+'img/shareFriend.png',type:'img',name:'shareFriend'},//分享给好友
	{path:url+'img/again.png',type:'img',name:'again'},//再玩一次
	{path:url+'img/scoreBkg.png',type:'img',name:'scoreBkg'},//得分背景
	{path:url+'img/a.png',type:'img',name:'a'},//答案背景
	{path:url+'img/b.png',type:'img',name:'b'},//答案背景
	{path:url+'img/c.png',type:'img',name:'c'},//答案背景
	{path:url+'img/d.png',type:'img',name:'d'},//答案背景
	{path:url+'img/questionBkg.jpg',type:'img',name:'questionBkg'},//问题背景
	{path:url+'img/titleBkg.png',type:'img',name:'titleBkg'},//问题背景
	{path:url+'img/gift.jpg',type:'img',name:'gift'},//查看礼物
	{path:url+'img/fu1.png',type:'img',name:'fu1'},//福袋
	{path:url+'img/fu2.png',type:'img',name:'fu2'},//福袋
	{path:url+'img/fu3.png',type:'img',name:'fu3'},//福袋
	{path:url+'img/message.png',type:'img',name:'message'},//信息
	{path:url+'img/cry.png',type:'img',name:'cry'},//哭
	{path:url+'img/mgBkg.jpg',type:'img',name:'mgBkg'},//信息背景
	{path:url+'img/pRule.jpg',type:'img',name:'pRule'},//答题背景
	{path:url+'img/topBkg.jpg',type:'img',name:'topBkg'},//排行版
	{path:url+'img/f1.png',type:'img',name:'f1'},//排行版
	{path:url+'img/f2.png',type:'img',name:'f2'},//排行版
	{path:url+'img/f3.png',type:'img',name:'f3'},//排行版
	{path:url+'img/topTitle.png',type:'img',name:'topTitle'},//排行版
	{path:url+'img/jumpBottom.png',type:'img',name:'jumpBottom'},//跳一跳下部
	{path:url+'img/jumpback.jpg',type:'img',name:'jumpback'},//跳一跳背景
	{path:url+'img/person01.png',type:'img',name:'person01'},//人
	{path:url+'img/person02.png',type:'img',name:'person02'},//人
	{path:url+'img/person03.png',type:'img',name:'person03'},//人
	{path:url+'img/person04.png',type:'img',name:'person04'},//人
	{path:url+'img/pro00.png',type:'img',name:'pro00'},//产品00
	{path:url+'img/pro01.png',type:'img',name:'pro01'},//产品01
	{path:url+'img/pro02.png',type:'img',name:'pro02'},//产品02
	{path:url+'img/pro03.png',type:'img',name:'pro03'},//产品03
	{path:url+'img/pro04.png',type:'img',name:'pro04'},//产品04
	{path:url+'img/pro05.png',type:'img',name:'pro05'},//产品05
	{path:url+'img/pro06.png',type:'img',name:'pro06'},//产品06
	{path:url+'img/pro07.png',type:'img',name:'pro07'},//产品07
	{path:url+'img/pro08.png',type:'img',name:'pro08'},//产品08
	{path:url+'img/pro09.png',type:'img',name:'pro09'},//产品09
	{path:url+'img/score.png',type:'img',name:'score'},//分数
];
//全局变量
var backLayer,imgList;
var lLayer,wordText,step,loadLayer,stepNumber=0,stepWord=0,process=0;
var maxscore;
//微信头像
var wxurl = 'img/wxhead.jpg';
var wxname = "梓+";
var wxsort = 27;
var wxscore = 255;
//
var openTouch = false;
