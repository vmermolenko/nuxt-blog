# nuxt-blog
git init
git remote origin https://github.com/vmermolenko/nuxt-blog.git
git pull origin master
git checkout -b newBranch
git add . 
git commit -m "Comments"
git push origin newBranch
git checkout master
git branch -D newBranch


npm init
npm install express sequelize pg pg-hstore cors jsonwebtoken bcryptjs --save
npm i nuxt-express-module
npm i @nuxtjs/auth-next
npm i @nuxtjs/axios
