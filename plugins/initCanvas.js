var canvas,
	stage,
	exportRoot,
	anim_container,
	dom_overlay_container,
	fnStartAnimation;

module.exports = {
	init() {
		// 	canvas = undefined;
		// 	stage = undefined;
		// 	exportRoot = undefined;
		// 	anim_container = undefined;
		// 	dom_overlay_container = undefined;
		// 	fnStartAnimation = undefined;
		// console.log(canvas);
		canvas = document.getElementById('canvas');
		anim_container = document.getElementById('animation_container');
		dom_overlay_container = document.getElementById('dom_overlay_container');
		var comp = AdobeAn.getComposition('A4E129528A6B044284296302A6762275');
		var lib = comp.getLibrary();

		var loader = new createjs.LoadQueue(true);

		loader.addEventListener('fileload', (evt) => {
			this.handleFileLoad(evt, comp);
		});
		loader.addEventListener('complete', (evt) => {
			this.handleComplete(evt, comp);
		});
		var lib = comp.getLibrary();
		loader.loadManifest(lib.properties.manifest);
	},
	handleFileLoad(evt, comp) {
		var img = comp.getImages();
		if (evt && evt.item.type == 'image') {
			img[evt.item.id] = evt.result;
		}
	},
	handleComplete(evt, comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for (let i = 0; i < ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({
				images: [queue.getResult(ssMetadata[i].name)],
				frames: ssMetadata[i].frames,
			});
		}
		exportRoot = new lib.kv();
		stage = new lib.Stage(canvas);
		stage.addChild(exportRoot);
		//Registers the "tick" event listener.
		fnStartAnimation = function () {
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener('tick', stage);
		};
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {
			var lastW,
				lastH,
				lastS = 1;
			window.addEventListener('resize', resizeCanvas);
			resizeCanvas();

			function resizeCanvas() {
				var w = lib.properties.width,
					h = lib.properties.height;
				var iw = window.innerWidth,
					ih = window.innerHeight;
				var pRatio = window.devicePixelRatio || 1,
					xRatio = iw / w,
					yRatio = ih / h,
					sRatio = 1;
				if (isResp) {
					if (
						(respDim == 'width' && lastW == iw) ||
						(respDim == 'height' && lastH == ih)
					) {
						sRatio = lastS;
					} else if (!isScale) {
						if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
					} else if (scaleType == 1) {
						sRatio = Math.min(xRatio, yRatio);
					} else if (scaleType == 2) {
						sRatio = Math.max(xRatio, yRatio);
					}
				}
				canvas.width = w * pRatio * sRatio;
				canvas.height = h * pRatio * sRatio;
				canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =
					w * sRatio + 'px';
				canvas.style.height = anim_container.style.height = dom_overlay_container.style.height =
					h * sRatio + 'px';
				stage.scaleX = pRatio * sRatio;
				stage.scaleY = pRatio * sRatio;
				lastW = iw;
				lastH = ih;
				lastS = sRatio;
			}
		}
		makeResponsive(false, 'width', false, 2);
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();
	}
}
