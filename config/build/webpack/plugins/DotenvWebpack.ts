import Dotenv from "dotenv-webpack";
import type { Options } from 'dotenv-webpack'

const options: Options = {
  path: './.env',
  safe: true
}

export default new Dotenv(options)