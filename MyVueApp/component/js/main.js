// 外部のライブラリの読み込み等がstrictモードに対応せずエラーになるとき、スクリプトが停止するのを防ぐため即時関数を利用している
// 即時関数の中にuse strictを書けば外部のライブラリに影響を与えない
// 即時関数を利用する理由：スコープの汚染を防ぐため
// 関数スコープの中でvarを使って定義された変数は関数の中でローカルな変数になるので、関数の外側の変数を上書きしたりすることはない。
(function() {
    'use strict';


    // likeComponentを定義
    var likeComponent = Vue.extend({

        // カスタム属性はpropsというキーで受け取ることができる （message="Like 等）
        // props: ['message'],

        // propsで型やデフォルト値を指定する場合の書き方。オブジェクトでの記述必須
        props: {
            message: {
                // カスタム属性messageには、文字列型を指定する
                type: String,
                // 何も指定されなかった場合は、カスタム属性であるmessageに下記のデフォルト値が入る
                default: 'Hello'
            }
        },

        // componentのdataに関しては関数で返してあげないといけないルールがある
        data: function() {
            return {
                count: 0
            }
        },

        // コンポーネントの中身をtemplate以下に記述する
        template: '<button v-on:click="countUp"> {{ message }}  {{ count }} </button>',

        methods: {
            countUp: function() {
                this.count++;

                // イベントの発火には$emitという命令を使う。incrementというカスタムイベントを発火させる
                this.$emit('increment');
            }
        }
        // template: '<button>Like</button><button>Like</button>'  //複数の要素を含めることはできない
        // template: '<div><button>Like</button><button>Like</button></div'  // 複数の要素を含める場合は何らかの親要素でくくってあげる必要がある
    });




    var app = new Vue({
        el: '#app',

        // コンポーネントの使用を宣言
        components: {
            // likeコンポーネントの使用を宣言  likeComponent：オブジェクト
            'like-component': likeComponent
        },
        data: {
            // 合計いいね数
            total: 0
        },
        methods: {
            incrementTotal: function() {
                this.total++;
            }
        }

    });







})();