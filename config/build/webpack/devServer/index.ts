import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptionsType } from "../types/config.types";

const devServer = (options: BuildOptionsType): DevServerConfiguration => {
  const { port } = options

  return {
    port: port,
    open: true,
    historyApiFallback: true
  }
}

export default devServer