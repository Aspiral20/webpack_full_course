import withOptionsTsconfigPathsPlugin from "./TsconfigPathsPlugin";
import { Configuration } from "webpack";
import { BuildOptionsType } from "../../types/config.types";

export const resolvePlugins = (options: BuildOptionsType): Configuration["resolve"]["plugins"] => {
  return [
    withOptionsTsconfigPathsPlugin(options),
  ]
}