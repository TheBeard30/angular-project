import { InjectionToken } from "@angular/core";

export interface WorkSpaceInfo{
  name: string;
  id: number;
}

export const WorkspaceToken = new InjectionToken<WorkSpaceInfo>('workspace');



