
export default class Model {
  constructor(values) {
    Object.assign(this, values);
  }
  static init(schema, options = {}) {
    if (!options.elastical) {
      throw new Error("No Inflx instance passed");
    }
    this.elastical = options.elastical;
    if (!options.modelName) {
      options.modelName = this.name;
    }
    this.modelName = options.modelName;
    this.schema = schema;
    this.hooks = schema.hooks;
    this.options = options;
  }
}
