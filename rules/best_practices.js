// see http://eslint.org/docs/rules/#best-practices

module.exports = {
  'rules': {
    'accessor-pairs': 0,
    'block-scoped-var': 2,
    'complexity': [0, 11],
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-notation': [2, { 'allowKeywords': true}],
    'dot-location': 0,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-div-regex': 0,
    'no-else-return': 2,
    'no-empty-label': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 0,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 0,
    'no-void': 0,
    'no-warning-comments': [0, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    'no-with': 2,
    'radix': 0,
    'vars-on-top': 0,
    'wrap-iife': [2, 'any'],
    'yoda': 2
  }
};
