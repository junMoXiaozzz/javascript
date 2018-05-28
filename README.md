# javascript
#对自己日常技术积累总结

#之前不会git  git基本使用
#git init 本地初始化仓库
#$ git config --global user.name "Your Name"
#$ git config --global user.email "email@example.com"

#第1步：创建SSH Key。在用户主目录下(C:\Users\zhaokai)，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
#$ ssh-keygen -t rsa -C "youremail@example.com"
#第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：
然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：

#fork开源项目 可以自己的账号下克隆一个仓库 ，然后从自己账号下clone本地
#如果你希望bootstrap的官方库能接受你的修改，你就可以在GitHub上发起一个pull request。当然，对方是否接受你的pull request就不一定了。
#git add 添加到暂存区
#git commit 提交到git仓库
#git push  推项目到远程仓库
#git pull  远程仓库拉项目