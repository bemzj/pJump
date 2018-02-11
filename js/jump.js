function jump(){
	openTouch = true;
	backLayer.removeAllChild();
	backLayer.die();
	LTweenLite.removeAll();
	//首页
	var jLayer = new LSprite(); 
	backLayer.addChild(jLayer);
	//滚动层
	var swiper = new LSprite(); 
	jLayer.addChild(swiper);
	var swiper1 = new LSprite(); 
	jLayer.addChild(swiper);
	var swiper2 = new LSprite(); 
	jLayer.addChild(swiper);

	//添加背景
	var jumpBottom = getBitmap(imgList['jumpBottom']);
	jumpBottom.y = LGlobal.height-jumpBottom.getHeight();
	jLayer.addChild(jumpBottom);
	var score1 = getBitmap(imgList['score']);
	score1.x = 20;
	jLayer.addChild(score1);
	//时间
	var sc = new setText(130,10,30,"0","#d60000",true,'wd');
	jLayer.addChild(sc);
	var scc = 0;
	console.log(sc);
	//产品
	var proy = [175,410,640,870,1100,1330,1550,1780,2010,2240];
	var product = [];
	//
	var back1 = getBitmap(imgList['jumpback']);
	swiper1.addChild(back1);	
	swiper1.y = -1207;
	var back2 = getBitmap(imgList['jumpback']);
	swiper2.addChild(back2);	
	swiper2.y = -3621;
	swiper.addChild(swiper2);
	swiper.addChild(swiper1);
	for(var i=0,j=0;i<10;i++,j++)
	{
		if(i%2==0)
		{
			product[j] = getBitmap(imgList['pro0'+i]);
			product[j].x = 120;
			product[j].y = swiper2.getHeight()-product[j].getHeight()-proy[i];
			swiper2.addChild(product[j]);
		}else{
			product[j] = getBitmap(imgList['pro0'+i]);
			product[j].x = 700-product[j].getWidth();
			product[j].y = swiper2.getHeight()-product[j].getHeight()-proy[i];
			swiper2.addChild(product[j]);
		}
		
	}
	for(var i=0;i<10;i++,j++)
	{
		if(i%2==0)
		{
			product[j] = getBitmap(imgList['pro0'+i]);
			product[j].x = 120;
			product[j].y = swiper1.getHeight()-product[j].getHeight()-proy[i];
			swiper1.addChild(product[j]);
		}else{
			product[j] = getBitmap(imgList['pro0'+i]);
			product[j].x = 700-product[j].getWidth();
			product[j].y = swiper1.getHeight()-product[j].getHeight()-proy[i];
			swiper1.addChild(product[j]);
		}
		
	}
	$(document).keydown(function(event){
		if(event.which==38)
		{
			swiper.y+=10;
		}else if(event.which==40){
			swiper.y+=-10;
		}
	});
	var more = new setText(50,-40,30,"+8","#d60000",true,'wd');
	more.alpha = 0;
	swiper.addChild(more);
	var player = new taizai(160,740);
//	player.y = product[0].y+800 - player.getHeight()+60;
	swiper.addChild(player);
	//计数
	var sj = 0;
	var jTween;
	var j;
	var y;
	var position = 1;
	//开始按下
	$(document).on('touchstart',function(){
		if(openTouch==true)
		{
			if(player.jopen==true)
			{
				y = player.y;
				player.jopen = false;			
				jTween = LTweenLite.to(player,0.05,{loop:true,onStart:function(){
					sj++;
					player.scaleY = 1-0.02*sj;			
					player.y = y+parseInt(player.top - player.getHeight());
					if(sj==21)
					{
						jTween.pause();
					}
				}});
			}
		}
			
	});
	var jumpx = [
		[70,110,145,200,280],
		[35,50,145,180,280],
		[45,70,145,180,280],
		[35,50,160,180,280],
		[45,70,165,180,280],
		[35,50,140,170,280],
		[45,70,150,180,280],
		[60,80,135,170,280],
		[45,70,120,180,280],
		[60,80,110,160,280]
	];
	var jumpy = [
		[120,160,440,430,600],
		[120,140,210,300,600],
		[140,160,265,300,600],
		[120,140,340,430,600],
		[140,220,270,300,600],
		[120,140,280,500,600],
		[140,220,305,350,600],
		[130,140,280,500,600],
		[140,220,265,350,600],
		[130,140,445,610,600]
	]
	var jumpl = [
		[3.2,2.6,2.2,2.2,2.2],
		[3.8,3.6,2.2,2.6,2.2],
		[3.6,3.2,2.2,2.6,2.2],
		[3.8,3.6,2.2,2.6,2.2],
		[3.6,3.2,2.2,2.6,2.2],
		[3.8,3.6,2.4,2.8,2.2],
		[3.6,3.2,2.2,2.6,2.2],
		[3.6,3.6,2.4,2.8,2.2],
		[3.6,3.2,2.2,2.6,2.2],
		[3.6,3.6,2.4,2.6,2.2]
	]
	var now = 0;
	//点击开始
	$(document).on('touchend',function(){
		if(openTouch==true)
		{
			
			if(player.jopen==false)
			{
				player.jopen=2;
				if(position==1)
				{
//					if(now==8)
//					{
//						sj = 14;
//					}else{
//						sj = 14;
//					}
					position = 0;
					console.log(sj);
					var jpx = 100;
					var jpy = 100;
					var jpl = 2;
					if(sj<=4)
					{
						jpx = jumpx[now][0];
						jpy = jumpy[now][0];
						jpl = jumpl[now][0];
						
					}else if(sj<=7)
					{
						jpx = jumpx[now][1];
						jpy = jumpy[now][1];
						jpl = jumpl[now][1];
					}else if(sj<=14)
					{
						jpx = jumpx[now][2];
						jpy = jumpy[now][2];
						jpl = jumpl[now][2];
					}else if(sj<=17)
					{
						jpx = jumpx[now][3];
						jpy = jumpy[now][3];
						jpl = jumpl[now][3];
					}else
					{
						jpx = jumpx[now][4];
						jpy = jumpy[now][4];
						jpl = jumpl[now][4];
					}
					sj = 0;
					now++;
					jTween.pause();
					LTweenLite.to(player,0.2,{scaleY:1,y:y,onComplete:function(){
						var px = player.x;
						var py = player.y;
						var add = 0.2;
						var jarray = [];
						for(var i=0.02;i<=jpl;i+=0.02)
						{
							jarray.push(
								{
									"x":px+jpx*i,
									"y":py-jpy*Math.sin(i)
								}
							);
						}
						player.change(2);
						var jt = LTweenLite.to(player,0.5,{ease:LEasing.None.easeIn,coordinate:jarray,onComplete:function(){
							
							player.change(3);
							if(sj>14||sj<8)
							{
								score(scc);
								player.jopen = false;
								//分数提交
								//$.post
							}else{
									if(now==2)
									{
										scc+=8;
										more.childList["0"].text = '+8';
										more.y = player.y-40;
										more.x = player.x+50;
										more.alpha = 1;
										LTweenLite.to(more,1.0,{alpha:0,y:more.y-80});
									}else if(now ==5){
										scc+=18;
										more.childList["0"].text = '+18';
										more.y = player.y-40;
										more.x = player.x+50;
										more.alpha = 1;
										LTweenLite.to(more,1.0,{alpha:0,y:more.y-80});
									}else{
										scc++;
									}
								sc.childList["0"].text = scc;
								var sy = swiper.y + 241.4;
								LTweenLite.to(swiper,1.0,{y:sy,onComplete:function(){
									if(now==10)
									{
										now=0;
										player.y = 740;
										swiper.y = 0;
										player.jopen = true;
									}else{
										player.jopen = true;
									}
								}});
							}
						}});
					}});
				}else{
//					if(now==9)
//					{
//						sj = 14;
//					}else{
//						sj = 14;
//					}
					
					position = 1;
					var jpx = 100;
					var jpy = 100;
					var jpl = 2;
					console.log(sj);
					if(sj<=4)
					{
						jpx = jumpx[now][0];
						jpy = jumpy[now][0];
						jpl = jumpl[now][0];
					}else if(sj<=7)
					{
						jpx = jumpx[now][1];
						jpy = jumpy[now][1];
						jpl = jumpl[now][1];
					}else if(sj<=14)
					{
						jpx = jumpx[now][2];
						jpy = jumpy[now][2];
						jpl = jumpl[now][2];
					}else if(sj<=17)
					{
						jpx = jumpx[now][3];
						jpy = jumpy[now][3];
						jpl = jumpl[now][3];
					}else
					{
						jpx = jumpx[now][4];
						jpy = jumpy[now][4];
						jpl = jumpl[now][4];
					}
					sj = 0;	
					now++;
					jTween.pause();
					LTweenLite.to(player,0.2,{scaleY:1,y:y,onComplete:function(){
						var px = player.x;
						var py = player.y;
						var add = 0.2;
						var jarray = [];
						for(var i=0.02;i<=jpl;i+=0.02)
						{
							jarray.push(
								{
									"x":px-jpx*i,
									"y":py-jpy*Math.sin(i)
								}
							);
						}
						player.change(4);
						var jt = LTweenLite.to(player,0.5,{ease:LEasing.None.easeIn,coordinate:jarray,onComplete:function(){
							player.change(1);
							if(sj>14||sj<8)
							{
								score(scc);
								player.jopen = false;
								//分数提交
								//$.post
							}else{
								var sy = swiper.y + 241.4;
								if(now==2)
								{
									scc+=8;
										more.childList["0"].text = '+8';
										more.y = player.y-40;
										more.x = player.x+50;
										more.alpha = 1;
										LTweenLite.to(more,1.0,{alpha:0,y:more.y-80});
								}else if(now ==5){
									scc+=18;
										more.childList["0"].text = '+18';
										more.y = player.y-40;
										more.x = player.x+50;
										more.alpha = 1;
										LTweenLite.to(more,1.0,{alpha:0,y:more.y-80});
								}else{
									scc++;
								}
								sc.childList["0"].text = scc;
								LTweenLite.to(swiper,1.0,{y:sy,onComplete:function(){
									
									if(now==10)
									{
										now=0;
										player.y = 740;
										swiper.y = 0;
										player.jopen = true;
									}else{
										player.jopen = true;
									}
								}});
							}
						}});
					}});
				}
					
			}
		}
	});
}
function product(){
	
}
//
function taizai(x,y){
	base(this,LSprite,[]);
	var self = this;
	self.x = x;
	self.y = y;
	
	//步数
    self.bitmap1 = getBitmap(imgList['person01']);
    self.addChild(self.bitmap1);
    self.top = self.getHeight();
	self.jopen = true;
    self.bitmap2 = getBitmap(imgList['person02']);
    self.addChild(self.bitmap2);
    self.bitmap3 = getBitmap(imgList['person03']);
    self.addChild(self.bitmap3);
    self.bitmap4 = getBitmap(imgList['person04']);
    self.addChild(self.bitmap4);
    self.bitmap2.visible=false;
	self.bitmap3.visible=false;
	self.bitmap4.visible=false;
}
taizai.prototype.change = function(n){
	var n = parseInt(n);
	var self = this;
	self.bitmap1.visible=false;
	self.bitmap2.visible=false;
	self.bitmap3.visible=false;
	self.bitmap4.visible=false;
	switch(n){
		case 1:
			self.bitmap1.visible=true;
			break;
		case 2:
			self.bitmap2.visible=true;
			break;
		case 3:
			self.bitmap3.visible=true;
			break;
		case 4:
			self.bitmap4.visible=true;
			break;
		default:
			self.bitmap1.visible=true;
			break;
	}
}

