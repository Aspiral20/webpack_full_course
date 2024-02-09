import { Configuration } from "webpack";
import { resolvePlugins } from "./plugins";
import { BuildOptionsType } from "../types/config.types";

const resolvers = (options: BuildOptionsType): Configuration["resolve"] => {
  const {paths} = options

  return {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      "@": paths.src,
    },
    // plugins: resolvePlugins
  }
}

export default resolvers