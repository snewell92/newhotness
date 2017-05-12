export abstract class APIService {

  private _url: string = (new URL(location.toString())).origin;

  get url(): string {
    return this._url;
  }
}
