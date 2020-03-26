namespace openfl._internal.formats.agal.assembler;

#if!openfl_debug
@: fileXml('tags="haxe,release"')
@: noDebug
#end
class Opcode
{
	public a: FS;
	public b: FS;
	public dest: string;
	public flags: Flags;
	public opcode: number;

	public new(dest: string, aformat: string, asize: number, bformat: string, bsize: number, opcode: number, simple: boolean, horizontal: boolean = false,
		fragonly: boolean = false, matrix: boolean = false)
	{
		this.a = new FS();
		this.b = new FS();
		this.flags = new Flags();
		this.dest = dest;
		this.a.format = aformat;
		this.a.size = asize;
		this.b.format = bformat;
		this.b.size = bsize;
		this.opcode = opcode;
		this.flags.simple = simple;
		this.flags.horizontal = horizontal;
		this.flags.fragonly = fragonly;
		this.flags.matrix = matrix;
	}
}