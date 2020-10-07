<!--

  addEvent(window, 'load', initCorners);

  function initCorners() {
    var settings = {
      tl: { radius: 10 },
      tr: { radius: 10 },
      bl: { radius: 10 },
      br: { radius: 10 },
      antiAlias: true
    }
 
	
/*	curvyCorners(settings, "#main");
		
	curvyCorners(settings, "#coverLogin");
    curvyCorners(settings, "#login");
	curvyCorners(settings, "#loginCenter");
	
	curvyCorners(settings, "#friend_out");
	//curvyCorners(settings, "#friend_in");
	
	//curvyCorners(settings, "#activity_box");
	
*/
	
	
  }
  
  function flowVido(vdo){
 
	flashembed("example", 
	{
				src:'flowplayer/FlowPlayerDark.swf',
				width: 607, 
				height: 385
	},
			
	
			{config: {   
				autoPlay:true,
				showStopButton: true, 
				showVolumeSlider: false,
				controlsOverVideo: 'ease',
				controlBarBackgroundColor: -1,
				controlBarGloss: 'low',
				initialScale: 'scale',
				videoFile: vdo
			}} 
		);
	
  }

-->