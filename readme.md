# printpdf

根据html页面生成pdf

![supported](https://img.shields.io/badge/Win_7-ok-brightgreen.svg)
![supported](https://img.shields.io/badge/Mac_OS_X-ok-brightgreen.svg)
![supported](https://img.shields.io/badge/Ubuntu-ok-brightgreen.svg)
![unsupported](https://img.shields.io/badge/CentOS-fail-red.svg)

## 安装

0. `ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ npm install`
0. 如果使用Ubuntu系统，请安装依赖

    ```
    sudo apt-get install -y Xvfb libgtk2.0-0 libxtst6 libxss1 libgconf-2-4 libasound2
    ```
    如果终端提示缺少某个依赖，请在 http://packages.ubuntu.com/ 里查找到相应`软件包内容`并安装

## 使用

- Mac, Win 7

    ```
    node index.js --url url --path path/to/report.pdf [--selector selector]
    ```

- Ubuntu

    ```
    xvfb-run node index.js --url url --path path/to/report.pdf [--selector selector]
    ```

参数 | 说明
--- | ---
url | 需要生成pdf的网址
path | pdf的保存路径
selector | css选择器，等这个选择器出现后开始生成pdf
