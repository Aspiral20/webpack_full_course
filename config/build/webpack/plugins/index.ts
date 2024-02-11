import { Configuration } from "webpack";
import { BuildOptionsType } from "../types/config.types";
import withOptionsHtmlWebpackPlugin from "./HtmlWebpackPlugin"
import withOptionsDotenv from "./DotenvWebpack";
import MiniCssExtractPlugin from "./MiniCssExtractPlugin"
import ProgressPlugin from "./ProgressPlugin"
import BundleAnalyzer from "./BundleAnalyzer"

const plugins = (options: BuildOptionsType): Configuration['plugins'] => {
  const { mode, analyzer, isBuilding } = options

  const jointPlugins = [
    withOptionsDotenv(options),
    withOptionsHtmlWebpackPlugin(options),
    isBuilding && ProgressPlugin,
    analyzer && BundleAnalyzer,
  ]

  switch (mode) {
    case "development":
      // jointPlugins.push(
      //
      // )
      break;
    case "production":
      jointPlugins.push(
        MiniCssExtractPlugin
      )
      break;
  }

  return jointPlugins.filter(Boolean)
}

export default plugins