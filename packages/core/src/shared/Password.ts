export default class Password {
  static generate() {
    return Math.random().toString(36).substring(2, 10);
  }
}
