import Diff from "deep-diff";

// WIP
export class CheckDiffs {
  public checkForChanges (previous : Array<object>, current : Array<object>) : object {
    return Diff.diff(previous, current);
  }
  // Check for every combination of previous array to find minimal diff
}

