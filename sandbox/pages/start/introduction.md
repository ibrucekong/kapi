# KAPI

1. 引入接口文件

   1.1 常规方式

    ```html
   <!-- 使用官网引用 -->
   <script src='https://wefamily.gitee.io/release/latest/kapi.js' type='application/javascript'></script>
   <!-- 使用unpkg的CDN -->
   <script src='https://unpkg.com/@ibrucekong/kapi' type='application/javascript'></script>
   <!-- 使用jsdelivr的CDN -->
   <script src='https://cdn.jsdelivr.net/npm/@ibrucekong/kapi' type='application/javascript'></script>
   ```

   1.2 require方式

   ```javascript
   require(['<js_path>/kapi.js'], (KAPI) => { '<Your Code>' })
   ```

   1.3 import方式

   ```shell
   npm install @ibrucekong/kapi --save-dev
   ```   

   ```javascript
   import KAPI from '@ibrucekong/kapi'
   ```


3. 添加`DOM`容器（id可以自定义）

    ```html
    <div id='kapi-container'></div>
    ```

4. 在`js`文件夹中实现

   ```javascript
   // 配合 async
   let kapi = await KAPI.build('<Your Auth Token>')
   // 初始化场景
   let options = {
     server: '<Your Service URL>' // 服务地址 
   }
   let scene = new kapi.Scene('kapi-container', options)
   // 等待场景响应好
   let readyStat = await scene.ready()
   console.log(readyStat)
   ```

<div style='height: 20px; background: transparent'></div>
