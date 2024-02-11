import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { BuildOptionsType } from "../../types/config.types";
import { ClassConstructorParameters } from "../../types/class.types";

type FirstConstructorParameter = ClassConstructorParameters<typeof TsconfigPathsPlugin>[0]

const withOptionsTsconfigPathsPlugin = (options: BuildOptionsType) => {
  const { paths } = options
  const pluginOptions: FirstConstructorParameter = {
    configFile: paths.resolveTsconfigPaths
  }
  return new TsconfigPathsPlugin(pluginOptions)
}

export default withOptionsTsconfigPathsPlugin