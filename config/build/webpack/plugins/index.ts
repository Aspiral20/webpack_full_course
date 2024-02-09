import { Configuration } from "webpack";
import withOptionsHtmlWebpackPlugin from "./HtmlWebpackPlugin"
import Dotenv from "./DotenvWebpack"
import MiniCssExtractPlugin from "./MiniCssExtractPlugin"
import ProgressPlugin from "./ProgressPlugin"
import { BuildOptionsType } from "../types/config.types";

const plugins = (options: BuildOptionsType): Configuration['plugins'] => {
  const { mode, isBuilding } = options

  const jointPlugins = [
    Dotenv,
    withOptionsHtmlWebpackPlugin(options),
    isBuilding && ProgressPlugin
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