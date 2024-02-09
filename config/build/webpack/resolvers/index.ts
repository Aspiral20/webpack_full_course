import { Configuration } from "webpack";
import { resolvePlugins } from "./plugins";
import { BuildOptionsType } from "../types/config.types";

const resolvers = (options: BuildOptionsType): Configuration["resolve"] => {

  return {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    plugins: resolvePlugins
  }
}

export default resolvers