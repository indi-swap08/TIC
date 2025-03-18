// import { RoleType } from '../../shared/model/user.model';

export interface ConfigModel {
  auth: {
    clientId: string;
    scope: string;
    requireHttps?: boolean;
  };
  backend: {
    contentPath: string;
  };
  kks: {
    valid1: string;
    valid2: string;
    valid3: string;
    valid4: string;
  };
  // role: Partial<Record<RoleType, string[]>>;
}

export interface UiConfigModel {
  featureToggles: FeatureFlagModel;
  contact: ContactModel;
  documentConfig: DocumentConfig;
}

export interface ContactModel {
  email: string;
}

export interface FeatureFlagModel {
  controllerEnabled: boolean;
  binEnabled: boolean;
  kksCreationEnabled: boolean;
  kksViewEnabled: boolean;
  interfacesBdataEnabled: boolean;
  directShiftHandoverEnabled: boolean;
  facilityDeleteEnabled: boolean;
  facilityReportViewEnabled: boolean;
  finalizeLogByCategoryEnabled: boolean;
  splitShiftInterfaceEnabled: boolean;
  categoryMenuEnabled: boolean;
}

export interface DocumentConfig {
  maxExportLimit: number;
}
