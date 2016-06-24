# printpdf

根据html页面生成pdf


## 安装

0. 为了加快安装，国内用户请配置electron下载镜像

    ```
    npm config set electron-mirror https://npm.taobao.org/mirrors/electron/
    ```
0. `npm install`

## 使用

```
node index.js --url url --path path/to/report.pdf
```

### 参数
- `url`： 需要生成pdf的网址
- `path`: pdf的保存路径