import { Injectable } from '@angular/core';
import { ConfigModel, UiConfigModel } from './config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _config: ConfigModel;

  get config(): ConfigModel {
    return this._config;
  }

  set config(value: ConfigModel) {
    this._config = value;
  }

  constructor(private httpClient: HttpClient) {}

  getUiConfig() {
    return this.httpClient.get<UiConfigModel>(`${this._config.backend.contentPath}/ui-config`);
  }
}
