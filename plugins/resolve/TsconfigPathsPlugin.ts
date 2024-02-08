import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const options = {
  configFile: './tsconfig.json'
}

export default new TsconfigPathsPlugin(options)