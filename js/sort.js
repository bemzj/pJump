function sort(){
	backLayer.removeAllChild();
	backLayer.die();
	LTweenLite.pauseAll();
	//排名
	var sortLayer = new LSprite(); 
	backLayer.addChild(sortLayer);
	//添加背景
	var rules = getBitmap(imgList['topBkg']);
	sortLayer.addChild(rules);
	var topTitle = getBitmap(imgList['topTitle']);
	topTitle.y = 20;
	topTitle.x = rCenterWidth(topTitle);
	sortLayer.addChild(topTitle);
	//排行版
	$('#sort').show();
	//获取排行版数据
	$.get('json/sort.json',function(data){
		var mydata = data;
		
		var head = [];
		var loader = [];
		var maskObj = [];
		//第一名
		loader[0] = new LLoader();
			loader[0].load(data[0].open.open_face, "bitmapData");
		    loader[0].addEventListener(LEvent.COMPLETE, function(event){   	
		        whead=event.target;
		        //头像
				head[0] = new LBitmap(new LBitmapData(whead));		
				head[0].scaleX = 101/head[0].getWidth();
				head[0].scaleY = 101/head[0].getHeight();
				head[0].x = 329;
				head[0].y = 166;
				maskObj[0] = new LSprite();
			  	maskObj[0].graphics.drawArc(3, "red", [head[0].x+50.5,head[0].y+50.5, 50.5, 0,Math.PI*2]);
			    head[0].mask = maskObj[0];	
				sortLayer.addChild(head[0]);
				//添加排名
				var f1 = getBitmap(imgList['f1']);
				f1.x =  311;
				f1.y =  240;
				sortLayer.addChild(f1);
				bigAndSmall(f1,2,2,1,0.02,0,true);
				var nt1 = new setText(244,366,22,"昵称："+data[0].open.open_name,"#1d1d1d",false,'wd');
				nt1.x = rCenterWidth(nt1);
				nt1.y = 290;
				sortLayer.addChild(nt1);
				var nt2 = new setText(244,366,22,data[0].score+"分","#1d1d1d",false,'wd');
				nt2.x = rCenterWidth(nt2);
				nt2.y = 318;
				sortLayer.addChild(nt2);
		});
		//第二名
		loader[1] = new LLoader();
			loader[1].load(data[1].open.open_face, "bitmapData");
		    loader[1].addEventListener(LEvent.COMPLETE, function(event){   	
		        whead=event.target;
		        //头像
				head[1] = new LBitmap(new LBitmapData(whead));		
				head[1].scaleX = 105/head[1].getWidth();
				head[1].scaleY = 105/head[1].getHeight();
				head[1].x = 150;
				head[1].y = 162;
				maskObj[1] = new LSprite();
			  	maskObj[1].graphics.drawArc(3, "red", [head[1].x+52.5,head[1].y+52.5, 52.5, 0,Math.PI*2]);
			    head[1].mask = maskObj[1];	
				sortLayer.addChild(head[1]);
				//添加排名
				var f2 = getBitmap(imgList['f2']);
				f2.x =  146;
				f2.y =  248;
				sortLayer.addChild(f2);
				bigAndSmall(f2,2,2,1,0.02,0,true);
				var nt3 = new setText(244,366,22,"昵称："+data[1].open.open_name,"#1d1d1d",false,'wd');
				nt3.x = 96+(210-nt3.getWidth())/2;
				nt3.y = 290;
				sortLayer.addChild(nt3);
				var nt4 = new setText(244,366,22,data[1].score+"分","#1d1d1d",false,'wd');
				nt4.x = 96+(210-nt4.getWidth())/2;
				nt4.y = 318;
				sortLayer.addChild(nt4);
		});
		//第三名
		loader[2] = new LLoader();
			loader[2].load(data[2].open.open_face, "bitmapData");
		    loader[2].addEventListener(LEvent.COMPLETE, function(event){   	
		        whead=event.target;
		        //头像
				head[2] = new LBitmap(new LBitmapData(whead));		
				head[2].scaleX = 105/head[2].getWidth();
				head[2].scaleY = 105/head[2].getHeight();
				head[2].x = 502;
				head[2].y = 162;
				maskObj[2] = new LSprite();
			  	maskObj[2].graphics.drawArc(3, "red", [head[2].x+52.5,head[2].y+52.5, 52.5, 0,Math.PI*2]);
			    head[2].mask = maskObj[2];	
				sortLayer.addChild(head[2]);
				//添加排名
				var f3 = getBitmap(imgList['f3']);
				f3.x =  502;
				f3.y =  248;
				sortLayer.addChild(f3);
				bigAndSmall(f3,2,2,1,0.02,0,true);
				var nt5 = new setText(244,366,22,"昵称："+data[2].open.open_name,"#1d1d1d",false,'wd');
				nt5.x = 450+(210-nt5.getWidth())/2;
				nt5.y = 290;
				sortLayer.addChild(nt5);
				var nt6 = new setText(244,366,22,data[2].score+"分","#1d1d1d",false,'wd');
				nt6.x = 450+(210-nt6.getWidth())/2;
				nt6.y = 318;
				sortLayer.addChild(nt6);
		});
		
	});
	$.get('json/wx.json',function(data){
		var headwx;
		var loaderwx = new LLoader();
		var maskObjwx;
		loaderwx.load(data[0].open.open_face, "bitmapData");
	    loaderwx.addEventListener(LEvent.COMPLETE, function(event){
	        wechatHead=event.target;
	        //头像
			headwx = new LBitmap(new LBitmapData(wechatHead));		
			headwx.scaleX = 78/headwx.getWidth();
			headwx.scaleY = 78/headwx.getHeight();
			headwx.x = 133;
			headwx.y = 362;
			maskObjwx = new LSprite();
		    maskObjwx.graphics.drawArc(3, "#6d161b", [headwx.x+39,headwx.y+39, 39, 0,Math.PI*2]);
		    headwx.mask = maskObjwx;	
			sortLayer.addChild(headwx);
	    });
	    var wt1 = new setText(244,366,30,"NO."+data[0].sort,"#f4e8ab",false,'wd');
		sortLayer.addChild(wt1);
		var wt2 = new setText(244,400,30,"昵称:"+data[0].open.open_name,"#f4e8ab",false,'wd');
		sortLayer.addChild(wt2);
		var wt3 = new setText(503,383,30,data[0].score+"分","#f4e8ab",false,'wd');
		sortLayer.addChild(wt3);
	});
	//返回首页
	var backhome = getButton(imgList['backhome']);
	backhome.x = rCenterWidth(backhome);
	backhome.y = 1064;
	sortLayer.addChild(backhome);
	backhome.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		sortLayer.die();
		sortLayer.remove();
		LTweenLite.pauseAll();
		backLayer.removeAllChild();
		backLayer.die();
		homepage();
		$('#sort').hide();
	});
}
