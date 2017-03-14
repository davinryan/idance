export class Logger {
  private type: string;
  private logger: any;

  constructor(type: string, logger: any) {
    this.type = type;
    this.logger = logger;
  }

  public info(message: string, obj?: any) {
    this.logger.info(this.type + ': ' + message, obj);
  }

  public error(message: string, obj?: any) {
    this.logger.error(this.type + ': ' + message, obj);
  }

  public debug(message: string, obj?: any) {
    this.logger.debug(this.type + ': ' + message, obj);
  }

  public warn(message: string, obj?: any) {
    this.logger.warn(this.type + ': ' + message, obj);
  }
}

export default Logger;