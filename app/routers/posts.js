const express =  require ('express')
const router = express.Router();
// const mongoose = require ('mongoose');
const PostController = require('../controllers/admin/posts');
const multer = require ('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/assest/image');
      },
      filename:function(req,file,cb){
        cb(null,file.originalname);
      }
  });
const fileFilter = (req,file,cb)=>{
  if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png'){
    cb(null,true);
  }else{
    cb(null,false);
  }
};

//init upload
const upload = multer({
  storage:storage,
  limits:{fileSize:1024 * 1024 * 5},
  fileFilter:fileFilter
});

 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded({ extended: false })
// mongoose.connect('mongodb://localhost/ghemassage',{useMongoClient:true});
// mongoose.Promise = global.Promise;
router.get('/posts',PostController.posts_get_all);
router.get('/posts/posts-create',PostController.posts_add_posts)
router.post('/posts/posts-create',upload.single('image'),urlencodedParser,PostController.posts_create_posts);
router.get('/posts/:postsId',PostController.posts_get_posts);
router.get('/posts/edit/:postsId',PostController.posts_get_posts_edit);
router.post('/posts/edit/:postsId',upload.single('image'),urlencodedParser,PostController.posts_update_posts_edit);
router.delete("/posts/:postsId",  PostController.posts_delete);

module.exports = router;
