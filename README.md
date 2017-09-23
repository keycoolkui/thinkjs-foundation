
### ThinkJS 项目练习

### Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```

## 项目创建流程 [ ThinkJs 3.2.1 ]

### 创建新项目 `禁用babel编译` `多模块参数`

```
 thinkjs new thinkjs-foundation -w --mode=module
```

### 创建api模块

```
thinkjs module api
```

