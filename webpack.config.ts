import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import path from "path";
import webpack from 'webpack';
import { plugins } from './plugins';
import { EnvsEnum } from "@/_types/env";
import { resolvePlugins } from "./plugins/resolve";

const config = (env: Record<EnvsEnum, string>) => {
  const mode = (env.NODE_ENV ?? "development") as webpack.Configuration["mode"]
  const isDev = env.NODE_ENV === "development"
  const isBuilding = env.BUILDING === "true"

  const config: webpack.Configuration = {
    entry: path.resolve('./src/app/index.ts'),
    mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },
    output: {
      path: path.resolve("./build"),
      filename: "[name].[contenthash].js",
      clean: true
    },
    plugins: [...plugins({ isDev, isBuilding }).filter(Boolean)],
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      plugins: resolvePlugins
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && {
      port: env.PORT ?? 3000,
      open: true
    },
  }

  return config
}

export default config;