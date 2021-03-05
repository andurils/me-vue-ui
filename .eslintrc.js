module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // "off"或0 -关闭规则
  // “warn” 或1 - 开启规则, 使用警告 程序不会退出
  // "error"或2 - 开启规则, 使用错误 程序退出
  rules: {
    'prettier/prettier': 'error',
    // 'accessor-pairs': 2,
    // 'array-bracket-spacing': 0,
    // 'block-scoped-var': 0,
    // 'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // camelcase: 0,
    // 'comma-dangle': [2, 'never'],
    // 'comma-spacing': [2, { before: false, after: true }],
    // 'comma-style': [2, 'last'],
    // complexity: 0,
    // 'computed-property-spacing': 0,
    // 'consistent-return': 0,
    // 'consistent-this': 0,
    // 'constructor-super': 2,
    // curly: [2, 'multi-line'],
    // 'default-case': 0,
    // 'dot-location': [2, 'property'],
    // 'dot-notation': 0,
    // 'eol-last': 2,
    // eqeqeq: [2, 'allow-null'],
    // 'func-names': 0,
    // 'func-style': 0,
    // 'generator-star-spacing': [2, { before: true, after: true }],
    // 'guard-for-in': 0,
    // 'handle-callback-err': [2, '^(err|error)$'],
    // indent: [2, 2, { SwitchCase: 1 }],
    // 'key-spacing': [2, { beforeColon: false, afterColon: true }],
    // 'linebreak-style': 0,
    // 'lines-around-comment': 0,
    // 'max-nested-callbacks': 0,
    // 'new-cap': [2, { newIsCap: true, capIsNew: false }],
    // 'new-parens': 2,
    // 'newline-after-var': 0,
    'no-alert': 0, //禁用 alert、confirm 和 prompt
    'no-array-constructor': 2, //禁用 Array 构造函数
    'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
    'no-cond-assign': 2, //禁止条件表达式中出现赋值操作符
    'no-console': 0, //禁用 console
    'no-constant-condition': 0, //禁止在条件中使用常量表达式
    'no-continue': 0, //禁用 continue 语句
    'no-control-regex': 2, //禁止在正则表达式中使用控制字符
    'no-debugger': 2, //禁用 debugger
    'no-delete-var': 2, //禁止删除变量
    'no-div-regex': 0, //禁止除法操作符显式的出现在正则表达式开始的位置
    'no-dupe-args': 2, //禁止 function 定义中出现重名参数
    'no-dupe-keys': 2, //禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, //禁止出现重复的 case 标签
    'no-else-return': 0, //禁止 if 语句中 return 语句之后有 else 块
    'no-empty': 0, //禁止出现空语句块
    'no-empty-character-class': 2, //禁止在正则表达式中使用空字符集
    'no-eq-null': 0, //禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eval': 2, //禁用 eval()
    'no-ex-assign': 2, //禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, //禁止扩展原生类型;
    'no-extra-bind': 2, //禁止不必要的 .bind() 调用
    'no-extra-boolean-cast': 2, //禁止不必要的布尔转换
    'no-extra-parens': 0, //禁止冗余的括号
    'no-extra-semi': 0, //禁止不必要的分号
    'no-fallthrough': 2, //禁止 case 语句落空
    'no-floating-decimal': 2, //禁止数字字面量中使用前导和末尾小数点
    'no-func-assign': 2, //禁止对 function 声明重新赋值
    'no-implied-eval': 2, //禁止使用类似 eval() 的方法
    'no-inline-comments': 0, //禁止在代码后使用内联注释
    'no-inner-declarations': [2, 'functions'], //禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 2, //禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2, //禁止不规则的空白
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-label-var': 2, //不允许标签与变量同名
    'no-labels': 2, //禁用标签语句
    'no-lone-blocks': 2, //禁用不必要的嵌套块
    'no-lonely-if': 0, //禁止 if 作为唯一的语句出现在 else 语句中
    'no-loop-func': 0, //禁止在循环语句中出现包含不安全引用的函数声明
    'no-mixed-requires': 0, //禁止混合常规变量声明和 require 调用
    'no-mixed-spaces-and-tabs': 2, //禁止空格和 tab 的混合缩进
    'no-multi-spaces': 2, //禁止使用多个空格
    'no-multi-str': 2, //禁止使用多行字符串
    'no-multiple-empty-lines': [2, { max: 1 }], //禁止出现多行空行;
    'no-nested-ternary': 0, //禁止使用嵌套的三元表达式
    'no-new': 2, //禁止使用 new 以避免产生副作用
    'no-new-func': 0, //禁止对 Function 对象使用 new 操作符
    'no-new-object': 2, //禁用 Object 的构造函数
    'no-new-require': 2, //禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 2, //禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, //禁止把全局对象作为函数调用
    'no-octal': 2, //禁用八进制字面量
    'no-octal-escape': 2, //禁止在字符串中使用八进制转义序列
    'no-param-reassign': 0, //禁止对 function 的参数进行重新赋值
    'no-path-concat': 0, //禁止对 __dirname 和 __filename 进行字符串连接
    'no-process-env': 0, //禁用 process.env
    'no-process-exit': 0, //禁用 process.exit()
    'no-proto': 0, //禁用 __proto__ 属性
    'no-redeclare': 2, //禁止多次声明同一变量
    'no-regex-spaces': 2, //禁止正则表达式字面量中出现多个空格
    'no-restricted-modules': 0, //禁用通过 require 加载的指定模块
    'no-return-assign': 2, //禁止在 return 语句中使用赋值语句
    'no-script-url': 0, //禁止使用 javascript: url
    'no-self-compare': 2, //禁止自身比较
    'no-sequences': 2, //禁用逗号操作符
    'no-shadow': 0, //禁止变量声明覆盖外层作用域的变量;
    'no-shadow-restricted-names': 2, //禁止将标识符定义为受限的名字
    'no-sparse-arrays': 2, //禁用稀疏数组
    'no-sync': 0, //禁用同步方法
    'no-ternary': 0, //禁用三元操作符
    'no-this-before-super': 2, //禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-throw-literal': 2, //禁止抛出异常字面量
    'no-trailing-spaces': 2, // 禁用行尾空格
    'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 2, //禁止将变量初始化为 undefined
    'no-undefined': 0, //禁止将 undefined 作为标识符
    'no-underscore-dangle': 0, //禁止标识符中有悬空下划线
    'no-unexpected-multiline': 2, //禁止出现令人困惑的多行表达式
    'no-unneeded-ternary': 2, //禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 2, //禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unused-expressions': 0, //禁止出现未使用过的表达式
    'no-unused-vars': [2, { vars: 'all', args: 'none' }], //禁止出现未使用过的变量
    'no-use-before-define': 0, //禁止在变量定义之前使用它们
    'no-var': 0, //要求使用 let 或 const 而不是 var
    'no-void': 0, // 禁用 void 操作符
    'no-warning-comments': 0, //禁止在注释中使用特定的警告术语
    'no-with': 2, //禁用 with 语句
    // 'object-curly-spacing': 0,
    // 'object-shorthand': 0,
    // 'one-var': [2, { initialized: 'never' }],
    // 'operator-assignment': 0,
    // 'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],
    // 'padded-blocks': 0,
    // 'prefer-const': 0,
    // 'quote-props': 0,
    // quotes: [2, 'single', 'avoid-escape'],
    // radix: 2,
    // semi: [2, 'always'],
    // 'semi-spacing': 0,
    // 'sort-vars': 0,
    // 'keyword-spacing': 2,
    // 'space-before-blocks': [2, 'always'],
    // 'space-before-function-paren': [2, 'never'],
    // 'space-in-parens': [2, 'never'],
    // 'space-infix-ops': 2,
    // 'space-unary-ops': [2, { words: true, nonwords: false }],
    // 'spaced-comment': [
    //   2,
    //   'always',
    //   { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] },
    // ],
    // strict: 0,
    // 'use-isnan': 2,
    // 'valid-jsdoc': 0,
    // 'valid-typeof': 2,
    // 'vars-on-top': 0,
    // 'wrap-iife': [2, 'any'],
    // 'wrap-regex': 0,
  },
};
