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
];
//全局变量
var backLayer,imgList;
var lLayer,wordText,step,loadLayer,stepNumber=0,stepWord=0,process=0;