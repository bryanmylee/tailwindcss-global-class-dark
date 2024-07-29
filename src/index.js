/** @type {import('tailwindcss/plugin')} */
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({
    /** @type {Function} - for registering custom static variants */
    addVariant,
    /** @type {Function} - for manually escaping strings meant to be used in class names */
    e
  }) => {
    addVariant('gdark', ({ container, separator }) => {
      container.walkRules((rule) => {
        const className = rule.selector.slice(1);
        rule.selector = `:global(.dark) .${e(`gdark${separator}${className}`)}`;
      });
    });
  }
);
