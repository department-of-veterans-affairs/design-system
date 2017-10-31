const Adapter = require('@frctl/fractal').Adapter;
const ReactAdapter = require('./reactAdapter');

class ProxyAdapter extends Adapter {
  constructor(engineName, instance, source, app, adapter) {
    super(instance, source);
    this.nunjucksAdapter = adapter;
    this.reactAdapter = new ReactAdapter(engineName, instance, source, app);
  }

  render(...args) {
    if (args[0].endsWith('.react.njk')) {
      return this.reactAdapter.render(...args);
    } else {
      return this.nunjucksAdapter.render(...args);
    }
  }
}

module.exports = ProxyAdapter;
