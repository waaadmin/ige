var IgeBox2dDebugPainter = IgeObject.extend({
	classId: 'IgeBox2dDebugPainter',

	tick: function (ctx) {
		if (this._parent && this._parent.isometricMounts() === true) {
			ctx.scale(1.414, 0.707); // This should be super-accurate now
			ctx.rotate(45  * Math.PI / 180);
		}
		
		this._entity.box2d._world.DrawDebugData();

		IgeObject.prototype.tick.call(this, ctx);
	}
});