import Dotenv from "dotenv-webpack";
import type { Options } from 'dotenv-webpack'
import { BuildOptionsType } from "../types/config.types";

const withOptionsDotenv = (options: BuildOptionsType) => {
  const { paths } = options
  const pluginOptions: Options = {
    path: paths.dotenv,
    safe: true
  }

  return new Dotenv(pluginOptions)
}

export default withOptionsDotenv