import webpack from "webpack";

let prevIsShutdown = false

const handler = (percentage: number, message: string, ...args: any[]) => {
  const percent = parseInt(`${percentage * 100}`)
  const printConsoleProgress = () => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);

    if (prevIsShutdown && percent >= 100) {
      process.stdout.write(`${percent}% Complete\n`); // end the line
    } else {
      process.stdout.write(`${percent}% ${message} ${args}`);
    }
  }
  printConsoleProgress()
  prevIsShutdown = args.includes('shutdown')
}

export default new webpack.ProgressPlugin(handler)