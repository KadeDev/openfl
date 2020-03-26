import ColorTransfrom from "openfl/geom/ColorTransform";
import Matrix from "openfl/geom/Matrix";
import Rectangle from "openfl/geom/Rectangle";

namespace openfl.display
{
	/**
		The Tile class is the base class for all objects that can be contained in a
		ITileContainer object. Use the Tilemap or TileContainer class to arrange the tile
		objects in the tile list. Tilemap or TileContainer objects can contain tile'
		objects, while other the Tile class is a "leaf" node that have only parents and
		siblings, no children.

		The Tile class supports basic functionality like the _x_ and _y_ position of an
		tile, as well as more advanced properties of a tile such as its transformation
		matrix.

		Tile objects render from a Tileset using either an `id` or a `rect` value, to
		reference either an existing rectangle within the Tileset, or a custom rectangle.

		Tile objects cannot be rendered on their own. In order to display a Tile object,
		it should be contained within a Tilemap instance.
	**/
	export class Tile
	{
		/**
			Indicates the alpha transparency value of the object specified. Valid
			values are 0 (fully transparent) to 1 (fully opaque). The default value is 1.
			Tile objects with `alpha` set to 0 _are_ active, even though they are invisible.
		**/
		public alpha(get, set): number;

		/**
			A value from the BlendMode class that specifies which blend mode to use.

			This property is supported only when using hardware rendering or the Flash target.
		**/
		public blendMode(get, set): BlendMode;

		/**
			A ColorTransform object containing values that universally adjust the
			colors in the display object.

			This property is supported only when using hardware rendering.
		**/
		public colorTransform(get, set): ColorTransform;

		/**
			An additional field for custom user-data
		**/
		public data: any;

		/**
			Indicates the height of the tile, in pixels. The height is
			calculated based on the bounds of the tile after local transformations.
			When you set the `height` property, the `scaleY` property
			is adjusted accordingly.
			If a tile has a height of zero, no change is applied
		**/
		public height(get, set): number;

		/**
			The ID of the tile to draw from the Tileset
		**/
		public id(get, set): number;

		/**
			A Matrix object containing values that alter the scaling, rotation, and
			translation of the tile object.

			If the `matrix` property is set to a value (not `null`), the `x`, `y`,
			`scaleX`, `scaleY` and the `rotation` values will be overwritten.
		**/
		public matrix(get, set): Matrix;

		/**
			Modifies the origin x coordinate for this tile, which is the center value
			used when determining position, scale and rotation.
		**/
		public originX(get, set): number;

		/**
			Modifies the origin y coordinate for this tile, which is the center value
			used when determining position, scale and rotation.
		**/
		public originY(get, set): number;

		/**
			Indicates the ITileContainer object that contains this display
			object. Use the `parent` property to specify a relative path to
			tile objects that are above the current tile object in the tile
			list hierarchy.
		**/
		public parent(default , null): TileContainer;

		/**
			The custom rectangle to draw from the Tileset
		**/
		public rect(get, set): Rectangle;

		/**
			Indicates the rotation of the Tile instance, in degrees, from its
			original orientation. Values from 0 to 180 represent clockwise rotation;
			values from 0 to -180 represent counterclockwise rotation. Values outside
			this range are added to or subtracted from 360 to obtain a value within
			the range. For example, the statement `tile.rotation = 450`
			is the same as ` tile.rotation = 90`.
		**/
		public rotation(get, set): number;

		/**
			Indicates the horizontal scale (percentage) of the object as applied from
			the origin point. The default origin point is (0,0). 1.0
			equals 100% scale.

			Scaling the local coordinate system changes the `x` and
			`y` property values, which are defined in whole pixels.
		**/
		public scaleX(get, set): number;

		/**
			Indicates the vertical scale (percentage) of an object as applied from the
			origin point of the object. The default origin point is (0,0).
			1.0 is 100% scale.

			Scaling the local coordinate system changes the `x` and
			`y` property values, which are defined in whole pixels.
		**/
		public scaleY(get, set): number;

		/**
			Uses a custom Shader instance when rendering this tile.

			This property is only supported when using hardware rendering.
		**/
		public shader(get, set): Shader;

		/**
			The Tileset that this Tile is rendered from.

			If `null`, this Tile will use the Tileset value of its parent.
		**/
		public tileset(get, set): Tileset;

		/**
			Whether or not the tile object is visible.
		**/
		public visible(get, set): boolean;

		/**
			Indicates the width of the tile, in pixels. The width is
			calculated based on the bounds of the tile after local transformations.
			When you set the `width` property, the `scaleX` property
			is adjusted accordingly.
			If a tile has a width of zero, no change is applied
		**/
		public width(get, set): number;

		/**
			Indicates the _x_ coordinate of the Tile instance relative
			to the local coordinates of the parent ITileContainer. If the
			object is inside a TileContainer that has transformations, it is
			in the local coordinate system of the enclosing TileContainer.
			Thus, for a TileContainer rotated 90° counterclockwise, the
			TileContainer's children inherit a coordinate system that is
			rotated 90° counterclockwise. The object's coordinates refer to the
			registration point position.
		**/
		public x(get, set): number;

		/**
			Indicates the _y_ coordinate of the Tile instance relative
			to the local coordinates of the parent ITileContainer. If the
			object is inside a TileContainer that has transformations, it is
			in the local coordinate system of the enclosing TileContainer.
			Thus, for a TileContainer rotated 90° counterclockwise, the
			TileContainer's children inherit a coordinate system that is
			rotated 90° counterclockwise. The object's coordinates refer to the
			registration point position.
		**/
		public y(get, set): number;

		protected __alpha: number;
		protected __blendMode: BlendMode;
		protected __colorTransform: ColorTransform;
		protected __dirty: boolean;
		protected __id: number;
		protected __length: number;
		protected __matrix: Matrix;
		protected __originX: number;
		protected __originY: number;
		protected __rect: Rectangle;
		protected __rotation: null | number;
		protected __rotationCosine: number;
		protected __rotationSine: number;
		protected __scaleX: null | number;
		protected __scaleY: null | number;
		protected __shader: Shader;
		protected __tileset: Tileset;
		protected __visible: boolean;

		public constructor(id: number = 0, x: number = 0, y: number = 0, scaleX: number = 1, scaleY: number = 1, rotation: number = 0, originX: number = 0, originY: number = 0)
		{
			__id = id;

			__matrix = new Matrix();
			if (x != 0) this.x = x;
			if (y != 0) this.y = y;
			if (scaleX != 1) this.scaleX = scaleX;
			if (scaleY != 1) this.scaleY = scaleY;
			if (rotation != 0) this.rotation = rotation;

			__dirty = true;
			__length = 0;
			__originX = originX;
			__originY = originY;
			__alpha = 1;
			__blendMode = null;
			__visible = true;
		}

		/**
			Duplicates an instance of a Tile subclass.

			@return A new Tile object that is identical to the original.
		**/
		public clone(): Tile
		{
			var tile = new Tile(__id);
			tile.__alpha = __alpha;
			tile.__blendMode = __blendMode;
			tile.__originX = __originX;
			tile.__originY = __originY;

			if (__rect != null) tile.__rect = __rect.clone();

			tile.matrix = __matrix.clone();
			tile.__shader = __shader;
			tile.tileset = __tileset;

			if (__colorTransform != null)
			{
			#if flash
				tile.__colorTransform = new ColorTransform(__colorTransform.redMultiplier, __colorTransform.greenMultiplier, __colorTransform.blueMultiplier,
					__colorTransform.alphaMultiplier, __colorTransform.redOffset, __colorTransform.greenOffset, __colorTransform.blueOffset,
					__colorTransform.alphaOffset);
			#else
				tile.__colorTransform = __colorTransform.__clone();
			#end
			}

			return tile;
		}

		/**
			Gets you the bounding box of the Tile.
			It will find a tileset to know the original rect
			Then it will apply all the transformations from his parent.

			@param targetCoordinateSpace The tile that works as a coordinate system.
			@return Rectangle The bounding box. If no box found, this will return {0,0,0,0} rectangle instead of null.
		**/
		public getBounds(targetCoordinateSpace: Tile): Rectangle
		{
			var result: Rectangle = new Rectangle();

			__findTileRect(result);

			// Copied from DisplayObject. Create the translation matrix.
			var matrix = #if flash __tempMatrix #else Matrix.__pool.get() #end;

			if (targetCoordinateSpace != null && targetCoordinateSpace != this)
			{
				matrix.copyFrom(__getWorldTransform()); // ? Is this correct?
				var targetMatrix = #if flash new Matrix() #else Matrix.__pool.get() #end;

				targetMatrix.copyFrom(targetCoordinateSpace.__getWorldTransform());
				targetMatrix.invert();

				matrix.concat(targetMatrix);

			#if!flash
				Matrix.__pool.release(targetMatrix);
			#end
			}
			else
			{
				matrix.identity();
			}

			__getBounds(result, matrix);

		#if!flash
			Matrix.__pool.release(matrix);
		#end

			return result;
		}

		protected __getBounds(result: Rectangle, matrix: Matrix): void
		{
			#if flash
			function __transform(rect: Rectangle, m: Matrix): void
			{
				var tx0 = m.a * rect.x + m.c * rect.y;
				var tx1 = tx0;
				var ty0 = m.b * rect.x + m.d * rect.y;
				var ty1 = ty0;

				var tx = m.a * (rect.x + rect.width) + m.c * rect.y;
				var ty = m.b * (rect.x + rect.width) + m.d * rect.y;

				if (tx < tx0) tx0 = tx;
				if (ty < ty0) ty0 = ty;
				if (tx > tx1) tx1 = tx;
				if (ty > ty1) ty1 = ty;

				tx = m.a * (rect.x + rect.width) + m.c * (rect.y + rect.height);
				ty = m.b * (rect.x + rect.width) + m.d * (rect.y + rect.height);

				if (tx < tx0) tx0 = tx;
				if (ty < ty0) ty0 = ty;
				if (tx > tx1) tx1 = tx;
				if (ty > ty1) ty1 = ty;

				tx = m.a * rect.x + m.c * (rect.y + rect.height);
				ty = m.b * rect.x + m.d * (rect.y + rect.height);

				if (tx < tx0) tx0 = tx;
				if (ty < ty0) ty0 = ty;
				if (tx > tx1) tx1 = tx;
				if (ty > ty1) ty1 = ty;

				rect.setTo(tx0 + m.tx, ty0 + m.ty, tx1 - tx0, ty1 - ty0);
			}
			__transform(result, matrix);
		#else
			result.__transform(result, matrix);
		#end
		}

		/**
			Evaluates the bounding box of the tile to see if it overlaps or
			intersects with the bounding box of the `obj` tile.
			Both tiles must be under the same Tilemap for this to work.

			@param obj The tile to test against.
			@return `true` if the bounding boxes of the tiles
					intersect; `false` if not.
		**/
		public hitTestTile(obj: Tile): boolean
		{
			if (obj != null && obj.parent != null && parent != null)
			{
				var currentBounds = getBounds(this);
				var targetBounds = obj.getBounds(this);
				return currentBounds.intersects(targetBounds);
			}

			return false;
		}

		/**
			Calling the `invalidate()` method signals to have the current tile
			redrawn the next time the tile object is eligible to be rendered.

			Invalidation is handled automatically, but in some cases it is
			necessary to trigger it manually, such as changing the parameters
			of a Shader instance attached to this tile.
		**/
		public invalidate(): void
		{
			__setRenderDirty();
		}

		protected __findTileRect(result: Rectangle): void
		{
			if (tileset == null)
			{
				if (parent != null)
				{
					var parentTileset: Tileset = parent.__findTileset();
					if (parentTileset == null)
					{
						result.setTo(0, 0, 0, 0);
					}
					else
					{
						// ? Is this a way to call getRect once without making extra vars? I don't fully grasp haxe pattern matching. Could be done with an if?
						switch parentTileset.getRect(id)
					{
							case null:
								result.setTo(0, 0, 0, 0);
							case not_null:
								result.copyFrom(not_null);
						}
					}
				}
				else
				{
					result.setTo(0, 0, 0, 0);
				}
			}
			else
			{
				result.copyFrom(tileset.getRect(id));
			}

			result.x = 0;
			result.y = 0;
		}

		protected __findTileset(): Tileset
		{
			// TODO: Avoid Std.is

			if (tileset != null) return tileset;
			if (Std.is(parent, Tilemap)) return parent.tileset;
			if (parent == null) return null;
			return parent.__findTileset();
		}

		/**
			Climbs all the way up to get a transformation matrix
			adds his own matrix and then returns it.
			@return Matrix The final transformation matrix from stage to this point.
		**/
		protected __getWorldTransform(): Matrix
		{
			var retval = matrix.clone();

			if (parent != null)
			{
				retval.concat(parent.__getWorldTransform());
			}

			return retval;
		}

		protected __setRenderDirty(): void
		{
		#if!flash
			if (!__dirty)
			{
				__dirty = true;

				if (parent != null)
				{
					parent.__setRenderDirty();
				}
			}
		#end
		}

		// Get & Set Methods
		protected get_alpha(): number
		{
			return __alpha;
		}

		protected set_alpha(value: number): number
		{
			if (value != __alpha)
			{
				__alpha = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_blendMode(): BlendMode
		{
			return __blendMode;
		}

		protected set_blendMode(value: BlendMode): BlendMode
		{
			if (value != __blendMode)
			{
				__blendMode = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_colorTransform(): ColorTransform
		{
			return __colorTransform;
		}

		protected set_colorTransform(value: ColorTransform): ColorTransform
		{
			if (value != __colorTransform)
			{
				__colorTransform = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_height(): number
		{
			var result: Rectangle = #if flash __tempRectangle #else Rectangle.__pool.get() #end;

			__findTileRect(result);

			__getBounds(result, matrix);
			var h = result.height;
		#if!flash
			Rectangle.__pool.release(result);
		#end
			return h;
		}

		protected set_height(value: number): number
		{
			var result: Rectangle = #if flash __tempRectangle #else Rectangle.__pool.get() #end;

			__findTileRect(result);
			if (result.height != 0)
			{
				scaleY = value / result.height;
			}
		#if!flash
			Rectangle.__pool.release(result);
		#end
			return value;
		}

		protected get_id(): number
		{
			return __id;
		}

		protected set_id(value: number): number
		{
			if (value != __id)
			{
				__id = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_matrix(): Matrix
		{
			return __matrix;
		}

		protected set_matrix(value: Matrix): Matrix
		{
			if (value != __matrix)
			{
				__rotation = null;
				__scaleX = null;
				__scaleY = null;
				__matrix = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_originX(): number
		{
			return __originX;
		}

		protected set_originX(value: number): number
		{
			if (value != __originX)
			{
				__originX = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_originY(): number
		{
			return __originY;
		}

		protected set_originY(value: number): number
		{
			if (value != __originY)
			{
				__originY = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_rect(): Rectangle
		{
			return __rect;
		}

		protected set_rect(value: Rectangle): Rectangle
		{
			if (value != __rect)
			{
				__rect = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_rotation(): number
		{
			if (__rotation == null)
			{
				if (__matrix.b == 0 && __matrix.c == 0)
				{
					__rotation = 0;
					__rotationSine = 0;
					__rotationCosine = 1;
				}
				else
				{
					var radians = Math.atan2(__matrix.d, __matrix.c) - (Math.PI / 2);

					__rotation = radians * (180 / Math.PI);
					__rotationSine = Math.sin(radians);
					__rotationCosine = Math.cos(radians);
				}
			}

			return __rotation;
		}

		protected set_rotation(value: number): number
		{
			if (value != __rotation)
			{
				__rotation = value;
				var radians = value * (Math.PI / 180);
				__rotationSine = Math.sin(radians);
				__rotationCosine = Math.cos(radians);

				var __scaleX = this.scaleX;
				var __scaleY = this.scaleY;

				__matrix.a = __rotationCosine * __scaleX;
				__matrix.b = __rotationSine * __scaleX;
				__matrix.c = -__rotationSine * __scaleY;
				__matrix.d = __rotationCosine * __scaleY;

				__setRenderDirty();
			}

			return value;
		}

		protected get_scaleX(): number
		{
			if (__scaleX == null)
			{
				if (matrix.b == 0)
				{
					__scaleX = __matrix.a;
				}
				else
				{
					__scaleX = Math.sqrt(__matrix.a * __matrix.a + __matrix.b * __matrix.b);
				}
			}

			return __scaleX;
		}

		protected set_scaleX(value: number): number
		{
			if (value != __scaleX)
			{
				__scaleX = value;

				if (__matrix.b == 0)
				{
					__matrix.a = value;
				}
				else
				{
					var rotation = this.rotation;

					var a = __rotationCosine * value;
					var b = __rotationSine * value;

					__matrix.a = a;
					__matrix.b = b;
				}

				__setRenderDirty();
			}

			return value;
		}

		protected get_scaleY(): number
		{
			if (__scaleY == null)
			{
				if (__matrix.c == 0)
				{
					__scaleY = matrix.d;
				}
				else
				{
					__scaleY = Math.sqrt(__matrix.c * __matrix.c + __matrix.d * __matrix.d);
				}
			}

			return __scaleY;
		}

		protected set_scaleY(value: number): number
		{
			if (value != __scaleY)
			{
				__scaleY = value;

				if (__matrix.c == 0)
				{
					__matrix.d = value;
				}
				else
				{
					var rotation = this.rotation;

					var c = -__rotationSine * value;
					var d = __rotationCosine * value;

					__matrix.c = c;
					__matrix.d = d;
				}

				__setRenderDirty();
			}

			return value;
		}

		protected get_shader(): Shader
		{
			return __shader;
		}

		protected set_shader(value: Shader): Shader
		{
			if (value != __shader)
			{
				__shader = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_tileset(): Tileset
		{
			return __tileset;
		}

		protected set_tileset(value: Tileset): Tileset
		{
			if (value != __tileset)
			{
				__tileset = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_visible(): boolean
		{
			return __visible;
		}

		protected set_visible(value: boolean): boolean
		{
			if (value != __visible)
			{
				__visible = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_width(): number
		{
			// TODO how does pooling work with flash target?
			var result: Rectangle = #if flash new Rectangle() #else Rectangle.__pool.get() #end;

			__findTileRect(result);

			__getBounds(result, matrix);
			var w = result.width;
		#if!flash
			Rectangle.__pool.release(result);
		#end
			return w;
		}

		protected set_width(value: number): number
		{
			var result: Rectangle = #if flash __tempRectangle #else Rectangle.__pool.get() #end;

			__findTileRect(result);
			if (result.width != 0)
			{
				scaleX = value / result.width;
			}
		#if!flash
			Rectangle.__pool.release(result);
		#end
			return value;
		}

		protected get_x(): number
		{
			return __matrix.tx;
		}

		protected set_x(value: number): number
		{
			if (value != __matrix.tx)
			{
				__matrix.tx = value;
				__setRenderDirty();
			}

			return value;
		}

		protected get_y(): number
		{
			return __matrix.ty;
		}

		protected set_y(value: number): number
		{
			if (value != __matrix.ty)
			{
				__matrix.ty = value;
				__setRenderDirty();
			}

			return value;
		}
	}
}

export default openfl.display.Tile;