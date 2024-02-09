import webpack, { Configuration } from 'webpack';
import { ConfigEnvType } from "config/build/webpack/types/env.types";
import buildWebpack from "./config/build/webpack/config";
import { BuildOptionsType, BuildPathsType } from "./config/build/webpack/types/config.types";
import path from "path";

const config = (env: ConfigEnvType): webpack.Configuration => {
  const paths: BuildPathsType = {
    html: path.resolve('public', 'index.html'),
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve('build'),
    src: path.resolve('src')
  }

  const options: BuildOptionsType = {
    port: parseInt(env.PORT) || 3000,
    paths,
    mode: (env.WEBPACK_MODE ?? "development") as Configuration["mode"],
    isBuilding: env.BUILDING === "true",
    analyzer: !!env.ANALYZER
  }

  return buildWebpack(options)
}

export default config;