const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const mayvpRouter = require('./app/routers/mayvp');
const nsxRouter = require('./app/routers/nsx');
const nsxlaptopRouter = require('./app/routers/nsxlaptop');
const phanloaiRouter = require('./app/routers/phanloai');
const laptopRouter = require('./app/routers/laptop');
const desktopRouter = require('./app/routers/desktop');
const cameraRouter = require('./app/routers/camera');
const danhmucRouter = require('./app/routers/danhmuc');
const postRouter = require('./app/routers/posts');
const slideHome = require('./app/routers/slidehome');
const bannerfix = require('./app/routers/bannerfix');
const nhucaulaptop = require('./app/routers/nhucaulaptop');
const postRoutersite = require('./app/routersSite/posts');
const typepostRouter = require('./app/routers/typepost');
const camerasiteRouter = require('./app/routersSite/camera');
const trangchusiteRouter = require('./app/routersSite/trangchu');
const maytinhsiteRouter = require('./app/routersSite/maytinh');
const userRouter = require('./app/routers/user');
const orderRouter = require('./app/routers/order');
const cartRouter = require('./app/routersSite/cart');
var Cart = require('./app/models/cart');
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');
const connect = require('connect');
const User = require("./app/models/user");
const customerRouter=require('./app/routers/customer');
var useragent = require('express-useragent');
//var compression = require('compression');
const app=express();
//app.use(compression());
app.use(useragent.express());
//useragent chia desktop mobile
//app.get('/', function(req, res){
//    res.send(req.useragent);
//});
//passport1
var Passport = require('passport');
var flash = require('connect-flash');
//var validator = require('express-validator');
var LocalStrategy= require('passport-local').Strategy;
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  secret: 'mysecret',
   resave: false,
   saveUninitialized: false,
   store: new MongoStore({mongooseConnection:mongoose.connection}),
   cookie:{
    maxAge:180 * 60 *10000 //100 phut
    //maxAge:180 * 60 *10000
}}));
app.use(flash());
app.use(Passport.initialize());
app.use(Passport.session());
//endpassport1.

//mongoose.connect('mongodb://localhost:27017/mayvp',{ useNewUrlParser: true,useUnifiedTopology: true });
//mongoose.connect('mongodb://localhost:27017/mayvp',{useMongoClient:true});

//mongoose.connect('mongodb://atlasghemassage:ghemassage123@cluster0-shard-00-00-qm2ug.mongodb.net:27017,cluster0-shard-00-01-qm2ug.mongodb.net:27017,cluster0-shard-00-02-qm2ug.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser: true});
mongoose.connect('mongodb://suaghemassage247:ghemassage123@cluster0-shard-00-00.hmjgb.mongodb.net:27017,cluster0-shard-00-01.hmjgb.mongodb.net:27017,cluster0-shard-00-02.hmjgb.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-4wz0jc-shard-0&authSource=admin&retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser: true});

//mongodb_url='mongodb+srv://atlasghemassage:ghemassage123@cluster0-qm2ug.mongodb.net/test?retryWrites=true&w=majority';
//mongoose.connect(mongodb_url,{useUnifiedTopology: true,useNewUrlParser: true});
mongoose.Promise=global.Promise;

//render scss sang css
app.use(sassMiddleware({
    src: path.join(__dirname, 'public/assest/css/sass'),
    dest: path.join(__dirname, 'public/assest/css'),
    debug: true,
    outputStyle: 'compressed',
  prefix: '/css'
}));
//end sass
//begin passsport2
app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated();
  res.locals.session =req.session;
  next();
})
// end  passsport2
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'app/views/'));
app.use(expressLayouts);
app.set('layout',path.join(__dirname,'app/views/layouts/layout'));
app.get('/admin/cms',(req,res)=>{res.render('backend/login/cms',{layout:'layouts/layoutsadmin'})});
app.use(bodyParser.json());
//begin passsport3
app.use(bodyParser.urlencoded({ extended: false }));
//end passport3
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public/assest')));
//upload image = ckeditor

app.use('/',userRouter);
app.use('/',mayvpRouter);
app.use('/',nsxRouter);
app.use('/',nsxlaptopRouter);
app.use('/',cameraRouter);
app.use('/',danhmucRouter);
app.use('/',laptopRouter);
app.use('/',desktopRouter);
app.use('/',laptopRouter);
app.use('/',postRouter);
app.use('/',typepostRouter);
app.use('/',orderRouter);
app.use('/',cartRouter);

app.use('/',slideHome);
app.use('/',bannerfix);
app.use('/',nhucaulaptop);
app.use('/',phanloaiRouter);
app.use('/',camerasiteRouter);
app.use('/',trangchusiteRouter);
app.use('/',maytinhsiteRouter);
app.use('/',postRoutersite);
app.use(require('skipper')());
var browser = require('file-manager-js');
app.all('/browser/browse', browser.browse);
app.post('/uploader/upload', browser.upload);

//app.use('/customer',customerRouter);
//end upload image ckeditor

//begin Passport4
app.get('/admin/loginok',(req,res)=>{res.render('backend/login/loginok')});
app.get('/admin/login',(req,res)=>res.render('backend/login/login',{layout:false}));
app.post('/admin/login',Passport.authenticate('local',{
    failureRedirect:'/admin/login',
    successRedirect:'/admin/cms'
}));
Passport.use(new LocalStrategy(
    (username,password,done)=>{
      User.find()
      .exec()
      .then((db)=>{
        console.log(db);
          const userRecord = db.find((user)=>user.username==username);
          if(userRecord && userRecord.password==password){
            return done(null,userRecord)
          }else{
            return done(null,false);
          }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  ));
  Passport.serializeUser((user,done)=>{
    done(null,user.username)
  })
  Passport.deserializeUser((name,done)=>{
    User.find().exec().then((db)=>{
      const userRecord=db.find(user=>user.username==name);
      if(userRecord){
        return done(null,userRecord);
      }
      else{
        return done(null,false);
      }
    })
  });
  //passport sign up signin
  require('./app/config/passport');

  const port = process.env.PORT || 3000;
  app.listen(port, function(){
    console.log('server is listening on port:',port)
  })
