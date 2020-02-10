## 正则表达式速查表
1. 基本规则
    * `/abc/` : 字符序列
    * `/[abc]/` : 字符集中的任意字符
    * `/[^abc]/` : 不在字符集中的任意字符
    * `/[0-9]/` : 字符范围内的任意字符
    * `/a+/` : 出现一次或多次
    * `/a+?/` : 出现一次或多次，非贪婪模式
    * `/a*/` : 出现零次或多次
    * `/a{2}/` : 出现2次
    * `/a{2,}/` : 至少出现2次
    * `/(abc)/` : 子模式
    * `/a|b|c/` : 匹配任意一个模式
    * `/^abc/` : 目标串的起始
    * `/abc$/` : 目标串的末尾
2. 通配符
    * `/./` : 除'\n'外的任意字符
    * `/\b/` : 单词边界
    * `/\d/` : 数字字符
    * `/\w/` : 字母和数字字符(单词字符)
    * `/\s/` : 空白字符
    * `/\D/` : 非数字字符
    * `/\W/` : 非单词字符
    * `/\S/` : 非空白字符
3. 模式选项
    * `g` : 全局匹配
    * `i` : 忽略大小写
    * `u` : 支持UTF-8
    * `m` : 多行匹配，必须有^或$