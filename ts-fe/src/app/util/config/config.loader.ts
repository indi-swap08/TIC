import { ConfigService } from './config.service';
import { ConfigModel } from './config.model';

export function configLoader(appConfig: ConfigModel, configService: ConfigService): (_) => Promise<boolean> {
  return (): Promise<boolean> =>
    new Promise<boolean>((resolve: (a: boolean) => void): void => {
      configService.config = appConfig;
      resolve(true);
    });
}
