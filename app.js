//モジュール群(NPMからインストール)
var express       = require('express');
var morgan        = require('morgan');
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var mongoose      = require('mongoose');
var session       = require('express-session');
var MongoStore    = require('connect-mongo')(session);
var passport      = require('passport');
var localStrategy = require('passport-local').Strategy;
var nodemailer = require('nodemailer');

// JSインポート
var members = require('./server/api/members/members.controller.js');
var stores = require('./server/api/stores/stores.controller.js');
var sendMail = require('./server/common/sendMail.js');

//Mongoose接続定義
var connection = mongoose.connect('mongodb://ec2-52-22-178-90.compute-1.amazonaws.com/meanSample');
var db = connection.connection;

//接続エラー時コールバック関数
db.on('error', console.error.bind(console, 'connection error:'));
//接続成功時コールバック関数
db.once('open', function(callback) {
    console.log('mongoose connection!');
});

//WEBサーバー作成
var app = express();
var port = process.env.port || 5555;



//ミドルウェア定義
    //静的ファイル置き場作成
    app.use(express.static('client'));
    //POSTフォーム受け取り
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    //Cookie受け取り
    app.use(cookieParser());
    //HTTP通信監視
    app.use(morgan('dev'));
    //Cookie・Sessionの設定
    app.use(session({
        secret: 'secret',
        store: new MongoStore({
            db: 'session',
            host: 'ec2-52-22-178-90.compute-1.amazonaws.com',
            clear_interval: 60 * 60
        }),
        cookie: {
            httpOnly: false,
            maxAge: new Date(Date.now() + 60 * 60 * 1000)
        }
    }));

//ルーティング
    //Members
    app.post('/login', members.login);
    app.post('/signUp', members.signUp);

    //Stores
    app.get('/getStores', stores.getStores);
    app.post('/registerStore', stores.registerStore);
    app.post('/deleteStore', stores.deleteStore);
    app.post('/updateStore', stores.updateStore);
    app.post('/sendMail', sendMail.mail);



//サーバー起動
app.listen(port);
console.log('server running... with port: ' + port);
