# printpdf

根据html页面生成pdf

## 安装

1. 自行安装[Chromium](https://download-chromium.appspot.com/)，或者[Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html)
2. 运行 `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install`
3. 新建文件`config/local.json`，填写Chromium的绝对路径，例如

```js
{
    "executablePath": "/Applications/Chromium.app/Contents/MacOS/Chromium"
}
```

## 如何使用

```
node index.js <options>
```

### options

参数 | 说明
:--- | :---
url | 需要生成pdf的网址
path | pdf的保存路径
selector | css选择器，等这个选择器出现后开始生成pdf，例如`--selector "#chart_done"`
timeout | 超时时间（单位`ms`），默认30s

## 示例

```
node index.js --url http://news.qq.com
```