# alcatraz

## 仮想世界で出会おう

↓サイトはこちら  
[Alcatraz](http://20.194.182.72/)

# 開発環境の立ち上げ方

```
# イメージの作成
$ docker-compose build

# コンテナの立ち上げ
$ docker-compose up -d

# DB の作成とマイグレーション(DB のコンテナを作り直すたび)
$ docker-compose exec api rails db:create
```
http://localhost:3000/ でアクセス

# 使用技術
- Ruby on Rails(API モード), NEXT.js, material-ui
- MySQL
- AKS, Tekton
