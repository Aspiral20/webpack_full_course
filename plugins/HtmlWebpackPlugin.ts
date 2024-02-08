import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const options = {
  template: path.resolve('public', 'index.html')
}

export default new HtmlWebpackPlugin(options)
