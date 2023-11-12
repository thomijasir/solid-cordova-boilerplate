interface IJS_BRIDGE {}
interface ICordova {
  platformId: any;
  version: any;
}
declare global {
  interface Window {
    JS_BRIDGE: IJS_BRIDGE | any;
    cordova: ICordova;
  }
}

window.cordova = window.cordova || false;

export {};
