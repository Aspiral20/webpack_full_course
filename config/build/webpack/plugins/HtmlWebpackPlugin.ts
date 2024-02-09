import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Options } from "html-webpack-plugin";
import { BuildOptionsType } from "../types/config.types";

const withOptionsHtmlWebpackPlugin = (options: BuildOptionsType) => {
  const { paths } = options
  const pluginOptions: Options = {
    template: paths.html
  }
  return new HtmlWebpackPlugin(pluginOptions)
}

export default withOptionsHtmlWebpackPlugin
