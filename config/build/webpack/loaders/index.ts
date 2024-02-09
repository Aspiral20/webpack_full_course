import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptionsType } from "../types/config.types";

const loaders = (options: BuildOptionsType): ModuleOptions["rules"] => {
  const { mode } = options

  const isDev = mode === 'development'

  const assetsLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
      },
    }
  }
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader"
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    assetsLoader,
    scssLoader,
    tsLoader
  ]
}

export default loaders