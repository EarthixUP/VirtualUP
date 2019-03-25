using UnrealBuildTool;

public class VirtualUPTarget : TargetRules
{
	public VirtualUPTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
		ExtraModuleNames.Add("VirtualUP");
	}
}
