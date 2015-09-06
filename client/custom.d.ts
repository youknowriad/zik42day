/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />
/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/rx/rx-lite.d.ts" />
/// <reference path="typings/rx/rx.d.ts" />
/// <reference path="typings/whatwg-fetch/whatwg-fetch.d.ts" />

declare module SoundCloud {
    export var SC: any;
}

declare module "soundcloud" {
    export = SoundCloud;
}
