module.exports = {

    // 追加
    publicPath: '',

    pages: {
      index: {
        // entry for the page  srcフォルダのなかにindexフォルダをおいて、main.jsを置く
        entry: 'src/index/main.js',

        // the source template ページ毎に作る必要がある
        template: 'public/index.html',

        // output as dist/index.html  distフォルダに吐き出すときのファイル名 を作る
        filename: 'index.html',

        // when using title option,  タイトルを作る
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',

        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        // distフォルダにはきだしたときにjavascriptフォルダに分割するためにこうかく
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },

    //   usersというページをつくる場合、上をコピペ
      users: {
        // entry for the page  srcフォルダのなかにindexフォルダをおいて、main.jsを置く
        entry: 'src/users/main.js',

        // the source template ページ毎に作る必要がある
        template: 'public/users.html',

        // output as dist/index.html  distフォルダに吐き出すときのファイル名 を作る
        filename: 'users.html',

        // when using title option,  タイトルを作る
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Users  Page',

        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        // distフォルダにはきだしたときにjavascriptフォルダに分割するためにこうかく
        chunks: ['chunk-vendors', 'chunk-common', 'users']
      },
    }
  }