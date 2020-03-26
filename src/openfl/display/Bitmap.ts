import BitmapData from "openfl/display/BitmapData";
import DisplayObject from "openfl/display/DisplayObject";
import PixelSnapping from "openfl/display/PixelSnapping";
import Matrix from "openfl/geom/Matrix";
import Rectangle from "openfl/geom/Rectangle";

namespace openfl.display
{
	/**
		The Bitmap class represents display objects that represent bitmap images.
		These can be images that you load with the `openfl.Assets` or
		`openfl.display.Loader` classes, or they can be images that you
		create with the `Bitmap()` constructor.

		The `Bitmap()` constructor allows you to create a Bitmap
		object that contains a reference to a BitmapData object. After you create a
		Bitmap object, use the `addChild()` or `addChildAt()`
		method of the parent DisplayObjectContainer instance to place the bitmap on
		the display list.

		A Bitmap object can share its BitmapData reference among several Bitmap
		objects, independent of translation or rotation properties. Because you can
		create multiple Bitmap objects that reference the same BitmapData object,
		multiple display objects can use the same complex BitmapData object without
		incurring the memory overhead of a BitmapData object for each display
		object instance.

		A BitmapData object can be drawn to the screen by a Bitmap object in one
		of two ways: by using the default hardware renderer with a single hardware surface,
		or by using the slower software renderer when 3D acceleration is not available.

		If you would prefer to perform a batch rendering command, rather than using a
		single surface for each Bitmap object, you can also draw to the screen using the
		`openfl.display.Tilemap` class.

		**Note:** The Bitmap class is not a subclass of the InteractiveObject
		class, so it cannot dispatch mouse events. However, you can use the
		`addEventListener()` method of the display object container that
		contains the Bitmap object.
	**/
	export class Bitmap extends DisplayObject
	{
		/**
			The BitmapData object being referenced.
		**/
		public bitmapData: BitmapData;

		/**
			Controls whether or not the Bitmap object is snapped to the nearest pixel.
			This value is ignored in the native and HTML5 targets.
			The PixelSnapping class includes possible values:

			* `PixelSnapping.NEVER` - No pixel snapping occurs.
			* `PixelSnapping.ALWAYS` - The image is always snapped to
			the nearest pixel, independent of transformation.
			* `PixelSnapping.AUTO` - The image is snapped to the
			nearest pixel if it is drawn with no rotation or skew and it is drawn at a
			scale factor of 99.9% to 100.1%. If these conditions are satisfied, the
			bitmap image is drawn at 100% scale, snapped to the nearest pixel.
			When targeting Flash Player, this value allows the image to be drawn as fast
			as possible using the internal vector renderer.

		**/
		public pixelSnapping: PixelSnapping;

		/**
			Controls whether or not the bitmap is smoothed when scaled. If
			`true`, the bitmap is smoothed when scaled. If
			`false`, the bitmap is not smoothed when scaled.
		**/
		public smoothing: boolean;

		private __bitmapData: BitmapData;
		private __image: HTMLImageElement;
		private __imageVersion: number;

		/**
			Initializes a Bitmap object to refer to the specified BitmapData object.

			@param	bitmapData	The BitmapData object being referenced.
			@param	pixelSnapping	Whether or not the Bitmap object is snapped to the nearest pixel.
			@param	smoothing	Whether or not the bitmap is smoothed when scaled. For example, the following examples
			show the same bitmap scaled by a factor of 3, with `smoothing` set to `false` (left) and `true` (right):

			![A bitmap without smoothing.](/images/bitmap_smoothing_off.jpg) ![A bitmap with smoothing.](bitmap_smoothing_on.jpg)
		**/
		public constructor(bitmapData: BitmapData = null, pixelSnapping: PixelSnapping = null, smoothing: boolean = false)
		{
			super();

			this.__type = BITMAP;

			this.__bitmapData = bitmapData;
			this.pixelSnapping = pixelSnapping;
			this.smoothing = smoothing;

			if (pixelSnapping == null)
			{
				this.pixelSnapping = PixelSnapping.AUTO;
			}
		}

		private __getBounds(rect: Rectangle, matrix: Matrix): void
		{
			var bounds = Rectangle.__pool.get();
			if (this.__bitmapData != null)
			{
				bounds.setTo(0, 0, this.__bitmapData.width, this.__bitmapData.height);
			}
			else
			{
				bounds.setTo(0, 0, 0, 0);
			}

			bounds.__transform(bounds, matrix);
			rect.__expand(bounds.x, bounds.y, bounds.width, bounds.height);
			Rectangle.__pool.release(bounds);
		}

		private __hitTest(x: number, y: number, shapeFlag: boolean, stack: Array<DisplayObject>, interactiveOnly: boolean,
			hitObject: DisplayObject): boolean
		{
			if (!hitObject.visible || this.__isMask || this.__bitmapData == null) return false;
			if (this.mask != null && !this.mask.__hitTestMask(x, y)) return false;

			this.__getRenderTransform();

			var px = this.__renderTransform.__transformInverseX(x, y);
			var py = this.__renderTransform.__transformInverseY(x, y);

			if (px > 0 && py > 0 && px <= this.__bitmapData.width && py <= this.__bitmapData.height)
			{
				if (this.__scrollRect != null && !this.__scrollRect.contains(px, py))
				{
					return false;
				}

				if (stack != null && !interactiveOnly)
				{
					stack.push(hitObject);
				}

				return true;
			}

			return false;
		}

		private __hitTestMask(x: number, y: number): boolean
		{
			if (this.__bitmapData == null) return false;

			this.__getRenderTransform();

			var px = this.__renderTransform.__transformInverseX(x, y);
			var py = this.__renderTransform.__transformInverseY(x, y);

			if (px > 0 && py > 0 && px <= this.__bitmapData.width && py <= this.__bitmapData.height)
			{
				return true;
			}

			return false;
		}

		// Get & Set Methods

		/**
				The BitmapData object being referenced.
			**/
		public get bitmapData(): BitmapData
		{
			return this.__bitmapData;
		}

		public set bitmapData(value: BitmapData): void
		{
			this.__bitmapData = value;
			this.smoothing = false;

			this.__localBoundsDirty = true;
			this.__setRenderDirty();

			if (this.__filters != null)
			{
				// __updateFilters = true;
			}

			this.__imageVersion = -1;
		}

		private set height(value: number): void
		{
			if (this.__bitmapData != null)
			{
				this.scaleY = value / this.__bitmapData.height; // get_height();
			}
			else
			{
				this.scaleY = 0;
			}
		}

		private set width(value: number): number
		{
			if (this.__bitmapData != null)
			{
				this.scaleX = value / this.__bitmapData.width; // get_width();
			}
			else
			{
				this.scaleX = 0;
			}
		}
	}
}

export default openfl.display.Bitmap;