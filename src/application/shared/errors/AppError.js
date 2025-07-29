module.exports = class AppeError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }

  static dependencias = "Alguma dependecia obrigatória não foi fornecida";
};
