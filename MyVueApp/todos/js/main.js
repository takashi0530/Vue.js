// 外部のライブラリの読み込み等がstrictモードに対応せずエラーになるとき、スクリプトが停止するのを防ぐため即時関数を利用している
// 即時関数の中にuse strictを書けば外部のライブラリに影響を与えない
// 即時関数を利用する理由：スコープの汚染を防ぐため
// 関数スコープの中でvarを使って定義された変数は関数の中でローカルな変数になるので、関数の外側の変数を上書きしたりすることはない。
(function() {
    'use strict';


    var app = new Vue({
        el: '#app',
        data: {
            newItem: '',
            // 初期値は空（最初はtodoが存在していない）
            todos: []
        },

        // 指定したデータの変更を監視する
        watch: {

            // todosに変更があった場合は次の処理をさせる。データの中身まで監視させる：ディープウォッチャ
            todos: {
                handler: function() {
                    // ローカルストレージへの値の保存 setItem()。  JSON.stringify  :   JavaScript のオブジェクトや値を JSON 文字列に変換する
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                    // alert('データが保存されました');
                },

                // deepオプションをtrueにすると、ディープウォッチャが作動し、追加・チェック・削除 全ての変更を監視できるようになる
                deep: true
            }
        },

        // アプリがページにマウントされるタイミングで保存されてあるtodoデータを読み込む
        mounted: function() {
            // ローカルストレージに保存されている値を読み込む   localStorageの
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },

        methods: {
            addItem: function(e) {

                var item = {
                    title: this.newItem,   // input要素で入力された値を代入
                    isDone: false          // 完了状態のデフォルトはfalseを代入
                };

                // todosオブジェクトにitemを追加する
                this.todos.push(item);
                // 追加済みのタスクをテキストボックスから削除する
                this.newItem = '';
            },
            deleteItem: function(index) {
                if (confirm('削除してもいいですか？')) {
                    this.todos.splice(index, 1);
                }
            },
            purge: function(index) {
                if (!confirm('完了したタスクを一括削除してもいいですか？')) {
                    return;
                }
                console.log(this.todos);

                // 完了していないタスクのみをピックアップして、todos全体に上書き代入する
                this.todos = this.remaining;
            }
        },

        // 未完了タスクの算出
        computed: {
            remaining: function() {
                // isDoneがfalseになってるものを返す(未完了のタスクをreturn)
                return this.todos.filter(function(todo) {
                    // isDoneがfalseのものだけを抽出する
                    return !todo.isDone;
                });
            }
        }

    });







})();