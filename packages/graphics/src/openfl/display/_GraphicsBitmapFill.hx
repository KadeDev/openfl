package openfl.display;

import openfl._internal.renderer.GraphicsDataType;
import openfl._internal.renderer.GraphicsFillType;
import openfl.geom.Matrix;

#if !openfl_debug
@:fileXml('tags="haxe,release"')
@:noDebug
#end
@:noCompletion
class _GraphicsBitmapFill implements _IGraphicsData implements _IGraphicsFill
{
	public var bitmapData:BitmapData;
	public var matrix:Matrix;
	public var repeat:Bool;
	public var smooth:Bool;

	public var __graphicsDataType(default, null):GraphicsDataType;
	public var __graphicsFillType(default, null):GraphicsFillType;

	private var graphicsBitmapFill:GraphicsBitmapFill;

	public function new(graphicsBitmapFill:GraphicsBitmapFill, bitmapData:BitmapData = null, matrix:Matrix = null, repeat:Bool = true, smooth:Bool = false)
	{
		this.graphicsBitmapFill = graphicsBitmapFill;

		this.bitmapData = bitmapData;
		this.matrix = matrix;
		this.repeat = repeat;
		this.smooth = smooth;

		this.__graphicsDataType = BITMAP;
		this.__graphicsFillType = BITMAP_FILL;
	}
}