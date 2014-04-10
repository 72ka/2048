function StageAssistant(stageController) {

}

StageAssistant.prototype.setup = function() {
	this.controller.pushScene({name: "main", disableSceneScroller:'true'});
};
