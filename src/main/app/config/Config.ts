export default class Config {

  public static get(key: string) {
    return Config.config[key];
  }

  private static config = {
  };
}