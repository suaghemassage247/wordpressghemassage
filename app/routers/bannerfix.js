const express =  require ('express')
const router = express.Router();
const SlidehomeController = require('../controllers/admin/bannerfix');
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

router.get('/bannerfix',SlidehomeController.slidehome_get_all);
router.get('/bannerfix/slidehome-create',SlidehomeController.slidehome_add_slidehome)
router.post('/bannerfix/slidehome-create',upload.single('image'),urlencodedParser,SlidehomeController.slidehome_create_slidehome);
router.get('/bannerfix/:slidehomeId',SlidehomeController.slidehome_get_slidehome);
router.get('/bannerfix/edit/:slidehomeId',SlidehomeController.slidehome_get_slidehome_edit);
router.post('/bannerfix/edit/:slidehomeId',upload.single('image'),urlencodedParser,SlidehomeController.slidehome_update_slidehome_edit);
router.delete("/bannerfix/:slidehomeId",  SlidehomeController.slidehome_delete);

module.exports = router;
