function MainAssistant() { 

	}

MainAssistant.prototype.setup = function() {
	
this.controller.enableFullScreenMode(false);
	
	/* Initiate app menu */

	this.controller.setupWidget(Mojo.Menu.appMenu,
	this.attributes = {
	  omitDefaultItems: true
	},

	this.appMenuModel = {
	  visible: true,
	  items: [
		  { label: "About", command: 'about' }
	  ]
	});

		
};

MainAssistant.prototype.handleCommand = function(event) {
  if (event.type === Mojo.Event.command) {
      switch (event.command) {
		 
		case 'help':
			this.openUrlInBrowser("http://aladinhelp.androworks.org/");
		break;
		case 'about':
			this.controller.stageController.pushScene({name: "about", disableSceneScroller:'false'});
		break;  
      }
  };
  
  if (event.type == Mojo.Event.back) {
				//prevent from going back on Undo
				event.preventDefault();
			};
			
};

MainAssistant.prototype.openUrlInBrowser = function(url) {
	this.controller.serviceRequest("palm://com.palm.applicationManager", {
		method: "open",
		parameters: {
		id: 'com.palm.app.browser',
		params: {
			target: url
			}
		}
	}); 
};

