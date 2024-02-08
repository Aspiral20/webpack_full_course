import Dotenv from "dotenv-webpack";

const options = {
  path: './.env',
  safe: true
}

export default new Dotenv(options)