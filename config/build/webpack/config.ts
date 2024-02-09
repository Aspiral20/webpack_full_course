import webpack from "webpack";
import path from "path";
import { ConfigEnvType, NodeEnvWebpackEnum } from "./types/env.types";
import plugins from "./plugins";
import devServer from "./devServer";
import loaders from "./loaders";
import resolvers from "./resolvers";
import { BuildOptionsType } from "./types/config.types";

const buildWebpack = (options: BuildOptionsType): webpack.Configuration => {
  const { mode, paths } = options
  const isDev = mode === "development"

  return {
    entry: paths.entry,
    mode,
    plugins: plugins(options),
    module: {
      rules: loaders(options)
    },
    resolve: resolvers(options),
    output: {
      path: paths.output,
      filename: "[name].[contenthash:8].js",
      clean: true
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && devServer(options),
  }
}

export default buildWebpack