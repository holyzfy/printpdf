# printpdf

根据html页面生成pdf

![supported](https://img.shields.io/badge/Win_7-ok-brightgreen.svg)
![supported](https://img.shields.io/badge/Mac_OS_X-ok-brightgreen.svg)
![supported](https://img.shields.io/badge/Ubuntu-ok-brightgreen.svg)
![unsupported](https://img.shields.io/badge/CentOS-fail-red.svg)

## 安装

    如果使用Ubuntu系统，请安装依赖
    
    sudo apt-get install -y Xvfb libgtk2.0-0 libxtst6 libxss1 libgconf-2-4 libasound2
    
    如果终端提示缺少某个依赖，请在 http://packages.ubuntu.com/ 里查找到相应`软件包内容`并安装

0. 配置环境变量`ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/`
0. 运行`npm install`


## 使用

- Mac, Win 7

    ```
    node index.js <options>
    ```

- Ubuntu

    ```
    xvfb-run -a -s "-screen 0 1440x900x24" node index.js <options>
    ```

### options

参数 | 说明
:--- | :---
url | 需要生成pdf的网址
path | pdf的保存路径
selector | css选择器，等这个选择器出现后开始生成pdf，例如`--selector "#chart_done"`
timeout | 超时时间（单位`ms`），默认30s

## 示例

- `node index.js --url https://www.baidu.com/`
- 调试模式下运行：
    
    ```
    DEBUG=nightmare:*,electron:* node index.js --url https://www.baidu.com/
    ```
## 常见问题

- ubuntu下生成的pdf乱码：安装字体 `sudo apt-get install -y fonts-noto-cjk`
