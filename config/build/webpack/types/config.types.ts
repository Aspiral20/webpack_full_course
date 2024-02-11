import { Configuration } from "webpack";

export type BuildPathsType = {
  entry: string
  output: string
  html: string
  src: string
  dotenv: string
  resolveTsconfigPaths: string
}

export type BuildOptionsType = {
  port: number
  paths: BuildPathsType
  mode: Configuration["mode"]
  isBuilding: boolean
  analyzer?: boolean
}