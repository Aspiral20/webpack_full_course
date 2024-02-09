import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { PluginOptions } from 'mini-css-extract-plugin'

const filename = 'css/[name].[contenthash:8].css'

const options: PluginOptions = {
  filename,
  chunkFilename: filename
}

export default new MiniCssExtractPlugin(options)