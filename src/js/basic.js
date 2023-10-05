export default class ErrorRepository {
  constructor() {
    this.dataError = new Map([[1, 'Файл не найден'], [2, 'Сетевая ошибка'], [3, 'Файл поврежден']]);
  }

  translate(code) {
    if (this.dataError.has(code) && typeof code === 'number') {
      const result = this.dataError.get(code);
      return result;
    }
    return 'Unknown error';
  }
}