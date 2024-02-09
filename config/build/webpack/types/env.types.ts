export enum EnvsEnum {
  WEBPACK_MODE = 'WEBPACK_MODE',
  NODE_ENV = 'NODE_ENV',
  PORT = 'PORT',
  BUILDING = 'BUILDING'
}

export enum NodeEnvWebpackEnum {
  none='none',
  development='development',
  production='production',
}

export type ConfigEnvType = Record<EnvsEnum, string>