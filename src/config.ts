export type ConfigType = {
  TEST: string
}

export const config: ConfigType = {
  TEST: process.env.TEST || "TEST"
}