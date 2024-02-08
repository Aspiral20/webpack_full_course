import HtmlWebpackPlugin from "./HtmlWebpackPlugin"
import Dotenv from "./DotenvWebpack"
import ProgressPlugin from "./ProgressPlugin"

export const plugins = (options: { isDev: boolean, isBuilding: boolean }) => {
  const { isDev, isBuilding } = options

  return [
    Dotenv,
    HtmlWebpackPlugin,
    isDev && isBuilding && ProgressPlugin, // Disabled for production
  ]
}