function AboutAssistant() {
}

AboutAssistant.prototype = {
	setup: function() {
		
this.controller.setupWidget(Mojo.Menu.appMenu,
this.attributes = {
  omitDefaultItems: true
},
this.appMenuModel = {
  visible: false,
  items: [
  ]
});

if(this.isTouchPad()){

	var menuModel = {
  visible: true,
  items: [
      {
          items: [
              { icon: "back", command: "goBack"},
          ]
      }
  ]
};
this.controller.setupWidget(Mojo.Menu.commandMenu,
         this.attributes = {
             spacerHeight: 0,
             menuClass: 'no-fade'
         },
         menuModel
	);

}; // konec if Touchpad

this.controller.getSceneScroller();

this.controller.setupWidget("aboutScroller",
    this.attributes = {
    },
    this.model = {
        scrollbars: true,
        mode: "vertical"
    });
    
    this.controller.get("aboutScroller").setStyle({ height: this.controller.window.innerHeight + "px"});
	this.controller.get("aboutScroller").setStyle({ width: "100%"});
    	
},
	
handleCommand: function(event) {
                if (event.type === Mojo.Event.command) {
                        if (event.command == 'goBack') {
                        this.controller.stageController.popScene();
                        }
                }
                

  },
  
isTouchPad: function(){

    if(Mojo.Environment.DeviceInfo.modelNameAscii.indexOf("ouch")>-1) {

        return true;

		}

		if(Mojo.Environment.DeviceInfo.screenWidth==1024){ return true; }

		if(Mojo.Environment.DeviceInfo.screenHeight==1024){ return true; }

 

		return false;

},
	cleanup: function() {
	}
};
