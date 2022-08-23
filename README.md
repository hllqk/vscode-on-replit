# vscode-on-replit

### 在线vscode安装在replit一键运行code server最新版本4.6.0，修改版，已经配置python，可以pip安装包，剩下的自己⛏

### 用法:

##### 一键安装或者手动克隆，语言选Bash~~随便选~~，然后RUN就当然不可能就这样就完成了，还有密码设置看下文

<a href="https://repl.it/github/hllqk/vscode-on-replit" rel="nofollow">
  <img alt="Run on Repl.it" src="https://camo.githubusercontent.com/5b5316dd014ebbf028c608ff43c6530250b667bea92cdcf87ab231ce583437cc/68747470733a2f2f7265706c2e69742f62616467652f6769746875622f616c6973742d6f72672f616c6973742d7265706c6974" style="height: 40px; width: 190px; max-width: 100%;">
</a>

安装失败，缺少文件？意料之中呵呵哈哈哈，[点我直接fork安装](https://replit.com/@hllqk/vscode?v=1)

#### 密码:

##### 建议：

点开**setup_password.sh**查看详细步骤

##### 不建议：

在 **.config/code-server/config.yaml** 的 **password=** 注意隐私，然后删除**hashed-password:**，或者自己创建一个**secrets**

#### Python:

看*index.py*还有 **！！！shell是指vscode里面的shell不是replit的！！！**

#### 关于pip包的问题：

太麻烦啦！！！不想多说，给你们个思路吧，毕竟这种东西还是要自己想办法，因为replit不允许pip install 包，要用pip install 包 --user才可以，然后Import还是没有的，还要设置ENABLE_USER_SITE=True，有两种方法，一种是自己想办法，困难总比办法多，一种是改python的site.py，自己看相关教程吧[教程](https://www.cnblogs.com/xibanqiu/p/13353978.html#:~:text=pip%E7%9A%84%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4%E7%9A%84%E8%B7%AF%E5%BE%84%201%20bug%20%E8%AF%B4%E6%98%8E%20%E5%A6%82%E4%B8%8A%E5%9B%BE%E3%80%82%20%E5%BC%80%E5%A7%8Bpip%20location%20%3A%E4%BC%9A%E5%9C%A8,%E4%BF%AE%E6%94%B9%20PIP%20%E9%BB%98%E8%AE%A4%E5%AE%89%E8%A3%85%E4%BD%8D%E7%BD%AE%20%E9%97%AE%E9%A2%98%20%E4%B8%8A%E9%9D%A2%E5%9C%A8%E5%AE%89%E8%A3%85%E6%97%B6%EF%BC%8C%E9%80%89%E6%8B%A9%E4%BA%86%E5%AE%89%E8%A3%85pip%EF%BC%88%20%E6%B3%A8%E6%84%8F%EF%BC%9A%E4%BB%8E3.4%E7%89%88%E6%9C%AC%E4%B9%8B%E5%90%8E%EF%BC%8Cpip%E6%89%8D%E5%BC%80%E5%A7%8B%E4%B8%BA%E9%BB%98%E8%AE%A4%E7%BB%84%E4%BB%B6%EF%BC%8C%E4%B9%8B%E5%89%8D%E7%9A%84%E7%89%88%E6%9C%AC%E6%98%AF%E6%B2%A1%E6%9C%89%E7%9A%84%20%EF%BC%89%E3%80%82%20)

#### 问题:

有任何问题提**issue**

![](https://cloud.shuia.tk/Qexo/2022/8/5a1bd6aaebee957a456a74992820bdb3.png)
