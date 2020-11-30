module.exports = {
    env: {
        "browser": true,
        "node": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    parserOptions: {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: [
        "vue"
    ],
    rules: {
        "comma-dangle": 0, //尾部没有,
        "eqeqeq": 0, //强制全等
        "no-const-assign": 2,//禁止修改const声明的变量
        "no-implicit-coercion": 1,//禁止隐式转换
        "no-trailing-spaces": 1,//一行结束后面不要有空格
        "no-use-before-define": 2,//未定义前不能使用
        "no-var": 0,//禁用var，用let和const代替
        "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
        "init-declarations": 0,//声明时必须赋初值
    }
};
