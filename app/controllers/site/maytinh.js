const mongoose = require("mongoose");
const Laptop = require("../../models/laptop");

const Post = require("../../models/posts");
const useragent = require('express-useragent');
exports.suaghemassagehungyen_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagehungyen',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagehungyen'});
       })
}
exports.suaghemassagehungyenredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-hung-yen')
}
exports.suaghemassagehadong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagehadong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagehadong'});
       })
}
exports.suaghemassagehadongredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-ha-dong')
}
exports.suaghemassagedonganhmelinhsocson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagedonganhmelinhsocson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagedonganhmelinhsocson'});
       })
}
exports.suaghemassagedonganhmelinhsocsonredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-donganh-melinh-socson')
}
exports.suaghemassagexuanmai_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagexuanmai',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagexuanmai'});
       })
}
exports.suaghemassagexuanmairedirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-xuan-mai')
}
exports.suaghemassagehoabinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagehoabinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagehoabinh'});
       })
}
exports.suaghemassagehoabinhredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-hoa-binh')
}
exports.suaghemassagequangninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagequangninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagequangninh'});
       })
}
exports.suaghemassagequangninhredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-quang-ninh')
}
exports.suaghemassagehaiphong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagehaiphong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagehaiphong'});
       })
}
exports.suaghemassagehaiphongredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-hai-phong')
}
exports.suaghemassagehaiduong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagehaiduong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagehaiduong'});
       })
}
exports.suaghemassagehaiduongredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-hai-duong')
}
exports.suaghemassagephutho_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagephutho',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagephutho'});
       })
}
exports.suaghemassagephuthoredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-phu-tho')
}
exports.suaghemassagevinhphuc_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagevinhphuc',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagevinhphuc'});
       })
}
exports.suaghemassagevinhphucredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-vinh-phuc')
}
exports.suaghemassagenghean_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagenghean',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagenghean'});
       })
}
exports.suaghemassagengheanredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-nghe-an')
}
exports.suaghemassagethanhhoa_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagethanhhoa',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagethanhhoa'});
       })
}
exports.suaghemassagethanhhoaredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-thanh-hoa')
}
exports.suaghemassageninhbinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassageninhbinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassageninhbinh'});
       })
}
exports.suaghemassageninhbinhredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-ninh-binh')
}
exports.suaghemassagethaibinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagethaibinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagethaibinh'});
       })
}
exports.suaghemassagethainguyen_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagethainguyen',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagethainguyen'});
       })
}
exports.suaghemassagethaibinhredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-thai-binh')
}
exports.suaghemassagenamdinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagenamdinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagenamdinh'});
       })
}
exports.suaghemassagenamdinhredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-nam-dinh')
}
exports.suaghemassagehanam_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagehanam',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagehanam'});
       })
}
exports.suaghemassagehanamredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-ha-nam')
}
exports.suaghemassagelangson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagelangson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagelangson'});
       })
}
exports.suaghemassagelangsonredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-lang-son')
}
exports.suaghemassagebacgiang_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagebacgiang',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagebacgiang'});
       })
}
exports.suaghemassagebacgiangredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-bac-giang')
}
exports.suaghemassagebacninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/suaghemassagebacninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassagebacninh'});
       })
}
exports.suaghemassagebacninhredirect_get_home = (req, res) => {
  res.redirect('/sua-ghe-massage-bac-ninh')
}
exports.suaghemassage_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/suaghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilesuaghemassage'});
       })
}
exports.thaydaghemassage_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thaydaghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thaydaghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.suaghemassagehanoi_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/suaghemassagehanoi',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/suaghemassagehanoi',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.thaydaghemassagebacgiang_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagebacgiang',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydabacgiang'});
       })
}
exports.thaydaghemassagebacninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagebacninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydabacninh'});
       })
}
exports.thaydaghemassagedonganhmelinhsocson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagedonganhmelinhsocson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydadonganhmelinhsocson'});
       })
}
exports.thaydaghemassagehadong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagehadong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydahadong'});
       })
}
exports.thaydaghemassagehaiduong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagehaiduong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydahaiduong'});
       })
}
exports.thaydaghemassagehaiphong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagehaiphong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydahaiphong'});
       })
}
exports.thaydaghemassagehanam_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagehanam',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydahanam'});
       })
}
exports.thaydaghemassagehoabinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagehoabinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydahoabinh'});
       })
}
exports.thaydaghemassagehungyen_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagehungyen',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydahungyen'});
       })
}
exports.thaydaghemassagelangson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagelangson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydalangson'});
       })
}
exports.thaydaghemassagenamdinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagenamdinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydanamdinh'});
       })
}
exports.thaydaghemassagenghean_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagenghean',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydanghean'});
       })
}
exports.thaydaghemassageninhbinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassageninhbinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydaninhbinh'});
       })
}
exports.thaydaghemassagephutho_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagephutho',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydaphutho'});
       })
}
exports.thaydaghemassagequangninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagequangninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydaquangninh'});
       })
}
exports.thaydaghemassagethaibinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagethaibinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydathaibinh'});
       })
}
exports.thaydaghemassagethainguyen_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagethainguyen',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydathainguyen'});
       })
}
exports.thaydaghemassagethanhhoa_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagethanhhoa',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydathanhhoa'});
       })
}
exports.thaydaghemassagevinhphuc_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagevinhphuc',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydavinhphuc'});
       })
}
exports.thaydaghemassagexuanmai_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thaydaghemassagexuanmai',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethaydaxuanmai'});
       })
}
exports.bocdaghemassagebacgiang_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagebacgiang',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdabacgiang'});
       })
}
exports.bocdaghemassagebacninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagebacninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdabacninh'});
       })
}
exports.bocdaghemassagedonganhmelinhsocson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagedonganhmelinhsocson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdadonganhmelinhsocson'});
       })
}
exports.bocdaghemassagehadong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagehadong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdahadong'});
       })
}
exports.bocdaghemassagehaiduong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagehaiduong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdahaiduong'});
       })
}
exports.bocdaghemassagehaiphong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagehaiphong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdahaiphong'});
       })
}
exports.bocdaghemassagehanam_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagehanam',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdahanam'});
       })
}
exports.bocdaghemassagehoabinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagehoabinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdahoabinh'});
       })
}
exports.bocdaghemassagehungyen_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagehungyen',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdahungyen'});
       })
}
exports.bocdaghemassagelangson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagelangson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdalangson'});
       })
}
exports.bocdaghemassagenamdinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagenamdinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdanamdinh'});
       })
}
exports.bocdaghemassagenghean_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagenghean',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdanghean'});
       })
}
exports.bocdaghemassageninhbinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassageninhbinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdaninhbinh'});
       })
}
exports.bocdaghemassagephutho_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagephutho',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdaphutho'});
       })
}
exports.bocdaghemassagequangninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagequangninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdaquangninh'});
       })
}
exports.bocdaghemassagethaibinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagethaibinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdathaibinh'});
       })
}
exports.bocdaghemassagethanhhoa_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagethanhhoa',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdathanhhoa'});
       })
}
exports.bocdaghemassagevinhphuc_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagevinhphuc',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdavinhphuc'});
       })
}
exports.bocdaghemassagexuanmai_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/bocdaghemassagexuanmai',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilebocdaxuanmai'});
       })
}
exports.thaytuihoighemassage_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thaytuihoighemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thaytuihoighemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.vanchuyenlapdatghemassage_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/vanchuyenlapdatghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/vanchuyenlapdatghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.chothueghemassage_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/chothueghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
         }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/chothueghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.thumuaghemassage_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thumuaghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thumuaghemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.thumuaghemassagebacgiang_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagebacgiang',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuabacgiang'});
       })
}
exports.thumuaghemassagebacninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagebacninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuabacninh'});
       })
}
exports.thumuaghemassagedonganhmelinhsocson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagedonganhmelinhsocson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuadonganhmelinhsocson'});
       })
}
exports.thumuaghemassagehadong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagehadong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuahadong'});
       })
}
exports.thumuaghemassagehaiduong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagehaiduong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuahaiduong'});
       })
}
exports.thumuaghemassagehaiphong_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagehaiphong',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuahaiphong'});
       })
}
exports.thumuaghemassagehanam_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagehanam',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuahanam'});
       })
}
exports.thumuaghemassagehoabinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagehoabinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuahoabinh'});
       })
}
exports.thumuaghemassagehungyen_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagehungyen',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuahungyen'});
       })
}
exports.thumuaghemassagelangson_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagelangson',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumualangson'});
       })
}
exports.thumuaghemassagenamdinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagenamdinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuanamdinh'});
       })
}
exports.thumuaghemassagenghean_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagenghean',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuanghean'});
       })
}
exports.thumuaghemassageninhbinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassageninhbinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuaninhbinh'});
       })
}
exports.thumuaghemassagephutho_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagephutho',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuaphutho'});
       })
}
exports.thumuaghemassagequangninh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagequangninh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuaquangninh'});
       })
}
exports.thumuaghemassagethaibinh_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagethaibinh',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuathaibinh'});
       })
}
exports.thumuaghemassagethanhhoa_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagethanhhoa',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuathanhhoa'});
       })
}
exports.thumuaghemassagevinhphuc_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagevinhphuc',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuavinhphuc'});
       })
}
exports.thumuaghemassagexuanmai_get_home = (req, res, next) => {
  Post.find({typepost:"Tư Vấn Chọn Mua"})
       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
       .limit(6)
       .sort('index')
       .exec()
       .then(docs => {
         const poststuvan = {
           count: docs.length,
           post: docs.map(doc => {
             return {
               title: doc.title,
               titleseo: doc.titleseo,
               shortdescription: doc.shortdescription,
               _id: doc._id,
               description:doc.description,
               day:doc.day,
               ogtitle:doc.ogtitle,
               ogdescription:doc.ogdescription,
               keywords:doc.keywords,
               typepost:doc.typepost,
               image:doc.image,
               index:doc.index,
               request: {
                 type: "GET",
                 url: "http://localhost:3000/ghemassages/" + doc._id
               }
             };
           })
         };
         res.render('mobile/ghemassage/mienbac/thumuaghemassagexuanmai',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobilethumuaxuanmai'});
       })
}
exports.thanhlyghemassagecu_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thanhlyghemassagecu',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
  else{
    Post.find({typepost:"Tư Vấn Chọn Mua"})
         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
         .limit(6)
         .sort('index')
         .exec()
         .then(docs => {
           const poststuvan = {
             count: docs.length,
             post: docs.map(doc => {
               return {
                 title: doc.title,
                 titleseo: doc.titleseo,
                 shortdescription: doc.shortdescription,
                 _id: doc._id,
                 description:doc.description,
                 day:doc.day,
                 ogtitle:doc.ogtitle,
                 ogdescription:doc.ogdescription,
                 keywords:doc.keywords,
                 typepost:doc.typepost,
                 image:doc.image,
                 index:doc.index,
                 request: {
                   type: "GET",
                   url: "http://localhost:3000/ghemassages/" + doc._id
                 }
               };
             })
           };
           res.render('mobile/ghemassage/thanhlyghemassagecu',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
         })
  }
}
exports.maytinh_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var laptopdell = {
                  count: docs.length,
                  laptops: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopasus = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var laptophp = {
                          count: docs.length,
                          laptops: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/laptop/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var laptopacer = {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                            Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                            .limit(12)
                            .skip(0)
                            .sort('index')
                            .exec()
                            .then(docs => {
                                var laptoplenovo = {
                                  count: docs.length,
                                  laptops: docs.map(doc => {
                                    return {
                                      name: doc.name,
                                      nameseo: doc.nameseo,
                                      nsx:doc.nsx,
                                      nhucau:doc.nhucau,
                                      price:doc.price,
                                      tinhnang:doc.tinhnang,
                                      baohanh: doc.baohanh,
                                      _id: doc._id,
                                      index:doc.index,
                                      description:doc.description,
                                      imagedefault:doc.imagedefault,
                                      image: doc.image,
                                      request: {
                                        type: "GET",
                                        url: "http://localhost:3000/laptop/" + doc._id
                                      }
                                    }
                                  })
                                };
                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/laptop',{laptopall:laptopall,laptoplenovo:laptoplenovo,laptopdell:laptopdell,laptophp:laptophp,laptopasus:laptopasus,laptopacer:laptopacer,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});

            })
            })
            })
            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
    Laptop.find({phanloai:"Laptop"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var laptopdell = {
                  count: docs.length,
                  laptops: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopasus = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var laptophp = {
                          count: docs.length,
                          laptops: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/laptop/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var laptopacer = {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                            Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                            .limit(12)
                            .skip(0)
                            .sort('index')
                            .exec()
                            .then(docs => {
                                var laptoplenovo = {
                                  count: docs.length,
                                  laptops: docs.map(doc => {
                                    return {
                                      name: doc.name,
                                      nameseo: doc.nameseo,
                                      nsx:doc.nsx,
                                      nhucau:doc.nhucau,
                                      price:doc.price,
                                      tinhnang:doc.tinhnang,
                                      baohanh: doc.baohanh,
                                      _id: doc._id,
                                      index:doc.index,
                                      description:doc.description,
                                      imagedefault:doc.imagedefault,
                                      image: doc.image,
                                      request: {
                                        type: "GET",
                                        url: "http://localhost:3000/laptop/" + doc._id
                                      }
                                    }
                                  })
                                };
                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/maytinh',{laptopall:laptopall,laptoplenovo:laptoplenovo,laptopdell:laptopdell,laptophp:laptophp,laptopasus:laptopasus,laptopacer:laptopacer,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});
            })
            })
            })
            })
            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.mayphoto_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"photocopy"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"photocopy",nsx:"xerox"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var xerox = {
                  count: docs.length,
                  xeroxs: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };

                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/photocopy/photocopy',{laptopall:laptopall,xerox:xerox,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});

          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
    Laptop.find({phanloai:"photocopy"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"photocopy",nsx:"xerox"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var xerox = {
                  count: docs.length,
                  xeroxs: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };

                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/photocopy/photocopy',{laptopall:laptopall,xerox:xerox,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});

            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.mayin_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"mayin"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"mayin",nsx:"canon"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var canon = {
                  count: docs.length,
                  canons: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };

                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/photocopy/mayin',{laptopall:laptopall,canon:canon,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});

          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
    Laptop.find({phanloai:"mayin"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"mayin",nsx:"canon"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var canon = {
                  count: docs.length,
                  canons: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };

                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/photocopy/mayin',{laptopall:laptopall,canon:canon,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});

            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.thuemayphotocopy_get_home = (req, res, next) => {
  if(req.useragent.isMobile){

                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/photocopy/thuemayphotocopy',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});


          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{


                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/photocopy/thuemayphotocopy',{postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});


          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.bachhoaonline_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"bachhoaonline"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .limit(20)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };

                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/bachhoaonline/bachhoaonline',{laptopall:laptopall,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});

          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
    Laptop.find({phanloai:"bachhoaonline"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
        .limit(20)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };

                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/bachhoaonline/bachhoaonline',{laptopall:laptopall,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});


          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.thietbisuckhoe_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Thietbisuckhoe"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .limit(20)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage mới"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var ghemassagemoi = {
                  count: docs.length,
                  ghemassages: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/thiet-bi-suc-khoe/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage cũ"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var ghemassagecu = {
                      count: docs.length,
                      ghemassages: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy lọc không khí"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var maylockhongkhi = {
                          count: docs.length,
                          maylockhongkhis: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/laptop/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy hút ẩm"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var mayhutam = {
                              count: docs.length,
                              mayhutams: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/thietbisuckhoe/thietbisuckhoe',{laptopall:laptopall,ghemassagemoi:ghemassagemoi,ghemassagecu:ghemassagecu,maylockhongkhi:maylockhongkhi,mayhutam:mayhutam,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
            })
            })
            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
    Laptop.find({phanloai:"Thietbisuckhoe"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
        .limit(20)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage mới"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var ghemassagemoi = {
                  count: docs.length,
                  ghemassages: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({phanloai:"Thietbisuckhoe",nsx:"Ghemassage cũ"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var ghemassagecu = {
                      count: docs.length,
                      ghemassages: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy lọc không khí"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var maylockhongkhi = {
                          count: docs.length,
                          maylockhongkhis: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/may-loc-khong-khi/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy hút ẩm"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var mayhutam = {
                              count: docs.length,
                              mayhutams: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/thietbisuckhoe/thietbisuckhoe',{laptopall:laptopall,ghemassagemoi:ghemassagemoi,ghemassagecu:ghemassagecu,maylockhongkhi:maylockhongkhi,mayhutam:mayhutam,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});

            })
            })
            })
            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.ghemassagemoi_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage mới"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/thietbisuckhoe/ghemassagemoi',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage mới"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/thietbisuckhoe/ghemassagemoi',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.ghemassagecu_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage cũ"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/thietbisuckhoe/ghemassagecu',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Ghemassage cũ"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/thietbisuckhoe/ghemassagecu',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.maylockhongkhi_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy lọc không khí"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/thietbisuckhoe/maylockhongkhi',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy lọc không khí"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/thietbisuckhoe/maylockhongkhi',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.mayhutam_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy hút ẩm"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/thietbisuckhoe/mayhutam',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Thietbisuckhoe",nhucau:"Máy hút ẩm"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/thietbisuckhoe/mayhutam',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.camera_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Camera"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .limit(20)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var cameraall = {
              count: docs.length,
              cameras: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"Camera",nhucau:"Camera Trong Nhà"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var cameratrongnha = {
                  count: docs.length,
                  cameras: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({phanloai:"Camera",nhucau:"Camera Ngoài Trời"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var camerangoaitroi = {
                      count: docs.length,
                      cameras: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({phanloai:"Camera",nhucau:"Camera IP"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var cameraip = {
                          count: docs.length,
                          cameras: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/laptop/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({phanloai:"Camera",nhucau:"Đầu Ghi Hình"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var daughihinh = {
                              count: docs.length,
                              cameras: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                            Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/camera/camera',{cameraall:cameraall,cameratrongnha:cameratrongnha,camerangoaitroi:camerangoaitroi,cameraip:cameraip,daughihinh:daughihinh,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});

            })
            })
            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
    Laptop.find({phanloai:"Camera"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var cameraall = {
              count: docs.length,
              cameras: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  nhucau:doc.nhucau,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({phanloai:"Camera",nhucau:"Camera Trong Nhà"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(20)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var cameratrongnha = {
                  count: docs.length,
                  cameras: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({phanloai:"Camera",nhucau:"Camera Ngoài Trời"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var camerangoaitroi = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({phanloai:"Camera",nhucau:"Camera IP"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var cameraip = {
                          count: docs.length,
                          cameras: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/laptop/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({phanloai:"Camera",nsx:"Đầu Ghi Hình"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var daughihinh = {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };

                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/camera/camera',{cameraall:cameraall,cameratrongnha:cameratrongnha,camerangoaitroi:camerangoaitroi,daughihinh:daughihinh,cameraip:cameraip,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});

            })
            })
            })
            })
          })
          })
          })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
}
exports.dichvughemassage_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
      Post.find()
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
              res.render('mobile/ghemassage/dichvughemassage',{poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});
            })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
  else{
              res.render('fontend/ghemassage/dichvughemassage',{layout:'layouts/layoutadmin'});
  }
}
exports.cameratrongnha_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Camera",nhucau:"Camera Trong Nhà"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/camera/cameratrongnha',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Camera",nhucau:"Camera Trong Nhà"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/camera/cameratrongnha',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.camerangoaitroi_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Camera",nhucau:"Camera Ngoài Trời"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/camera/camerangoaitroi',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Camera",nhucau:"Camera Ngoài Trời"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/camera/camerangoaitroi',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.cameraip_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Camera",nhucau:"Camera IP"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/camera/cameraip',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Camera",nhucau:"Camera IP"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/camera/cameraip',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.daughihinh_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Camera",nhucau:"Đầu Ghi Hình"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/camera/daughihinh',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Camera",nhucau:"Đầu Ghi Hình"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/camera/daughihinh',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.laptopdell_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/laptopdell',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/laptopdell',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.laptopasus_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/laptopasus',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                res.render('fontend/laptopasus',{laptop:laptop,layout:'layouts/layout'});
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
}
exports.laptophp_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop= {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                  Post.find()
                       .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                       .limit(6)
                       .sort('index')
                       .exec()
                       .then(docs => {
                         const poststuvan = {
                           count: docs.length,
                           post: docs.map(doc => {
                             return {
                               title: doc.title,
                               titleseo: doc.titleseo,
                               shortdescription: doc.shortdescription,
                               _id: doc._id,
                               description:doc.description,
                               day:doc.day,
                               ogtitle:doc.ogtitle,
                               ogdescription:doc.ogdescription,
                               keywords:doc.keywords,
                               typepost:doc.typepost,
                               image:doc.image,
                               index:doc.index,
                               request: {
                                 type: "GET",
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/laptophp',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop= {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                res.render('fontend/laptophp',{laptop:laptop,layout:'layouts/layout'});
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
}
exports.laptopacer_get_home = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopacer',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptopacer',{laptop:laptop,layout:'layouts/layout'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptoplenovo_get_home = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptoplenovo',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptoplenovo',{laptop:laptop,layout:'layouts/layout'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_hoctapvanphong = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"học tập văn phòng"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopvanphong',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"học tập văn phòng"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptopvanphong',{laptop:laptop,layout:'layouts/layout'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_dohoa = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"đồ họa"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopdohoa',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"đồ họa"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptopdohoa',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_gaming = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"gaming"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopgaming',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"gaming"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptopgaming',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_mongnhe = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"mỏng nhẹ"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopmongnhe',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"mỏng nhẹ"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptopmongnhe',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_caocap = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"cao cấp"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopcaocap',{laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"cao cấp"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                  res.render('fontend/laptopcaocap',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.desktop_get_home = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Desktop"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          nhucau: doc.nhucau,
                          price:doc.price,
                          nsx:doc.nsx,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/desktop',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else{
      Laptop.find({phanloai:"Desktop"})
                .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopall = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find({typepost:"Tư Vấn Chọn Mua"})
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                           Post.find({typepost:"Hướng dẫn kỹ thuật"})
                                .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                .limit(8)
                                .sort('index')
                                .exec()
                                .then(docs => {
                                  const postshuongdan = {
                                    count: docs.length,
                                    post: docs.map(doc => {
                                      return {
                                        title: doc.title,
                                        titleseo: doc.titleseo,
                                        shortdescription: doc.shortdescription,
                                        _id: doc._id,
                                        description:doc.description,
                                        day:doc.day,
                                        ogtitle:doc.ogtitle,
                                        ogdescription:doc.ogdescription,
                                        keywords:doc.keywords,
                                        typepost:doc.typepost,
                                        image:doc.image,
                                        index:doc.index,
                                        request: {
                                          type: "GET",
                                          url: "http://localhost:3000/ghemassages/" + doc._id
                                        }
                                      };
                                    })
                                  };
                  res.render('fontend/desktop',{poststuvan:poststuvan,postshuongdan:postshuongdan,laptopall:laptopall,layout:'layouts/layout'});
                })
                })
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }

  }
exports.phukien_get_home =  (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Phukien"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          nhucau: doc.nhucau,
                          price:doc.price,
                          nsx:doc.nsx,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find()
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/phukien',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else{
      Laptop.find({phanloai:"Phukien"})
                .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopall = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Post.find({typepost:"Tư Vấn Chọn Mua"})
                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                         .limit(6)
                         .sort('index')
                         .exec()
                         .then(docs => {
                           const poststuvan = {
                             count: docs.length,
                             post: docs.map(doc => {
                               return {
                                 title: doc.title,
                                 titleseo: doc.titleseo,
                                 shortdescription: doc.shortdescription,
                                 _id: doc._id,
                                 description:doc.description,
                                 day:doc.day,
                                 ogtitle:doc.ogtitle,
                                 ogdescription:doc.ogdescription,
                                 keywords:doc.keywords,
                                 typepost:doc.typepost,
                                 image:doc.image,
                                 index:doc.index,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                           Post.find({typepost:"Hướng dẫn kỹ thuật"})
                                .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                .limit(8)
                                .sort('index')
                                .exec()
                                .then(docs => {
                                  const postshuongdan = {
                                    count: docs.length,
                                    post: docs.map(doc => {
                                      return {
                                        title: doc.title,
                                        titleseo: doc.titleseo,
                                        shortdescription: doc.shortdescription,
                                        _id: doc._id,
                                        description:doc.description,
                                        day:doc.day,
                                        ogtitle:doc.ogtitle,
                                        ogdescription:doc.ogdescription,
                                        keywords:doc.keywords,
                                        typepost:doc.typepost,
                                        image:doc.image,
                                        index:doc.index,
                                        request: {
                                          type: "GET",
                                          url: "http://localhost:3000/ghemassages/" + doc._id
                                        }
                                      };
                                    })
                                  };
                  res.render('fontend/phukien',{poststuvan:poststuvan,postshuongdan:postshuongdan,laptopall:laptopall,layout:'layouts/layout'});
                })
                })
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }

  }
exports.maytinh_get_maytinhnameseo = (req, res, next) => {
    if(req.useragent.isMobile){
          const nameseo = req.params.maytinhnameseo;
          Laptop.find({nameseo:nameseo})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .exec()
            .then(docs => {
                    var productdetail={
                                count: docs.length,
                                products: docs.map(doc => {
                                  return {
                                    name: doc.name,
                                    nameseo: doc.nameseo,
                                    price:doc.price,
                                    nsx:doc.nsx,
                                    nhucau:doc.nhucau,
                                    tinhnang:doc.tinhnang,
                                    baohanh: doc.baohanh,
                                    _id: doc._id,
                                    index:doc.index,
                                    description:doc.description,
                                    imagedefault:doc.imagedefault,
                                    image: doc.image,
                                    request: {
                                      type: "GET",
                                      url: "http://localhost:3000/maytinh/" + doc._id
                                          }
                                        }
                                      })
                                    };
                                    Post.find()
                                         .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                         .limit(6)
                                         .sort('index')
                                         .exec()
                                         .then(docs => {
                                           const poststuvan = {
                                             count: docs.length,
                                             post: docs.map(doc => {
                                               return {
                                                 title: doc.title,
                                                 titleseo: doc.titleseo,
                                                 shortdescription: doc.shortdescription,
                                                 _id: doc._id,
                                                 description:doc.description,
                                                 day:doc.day,
                                                 ogtitle:doc.ogtitle,
                                                 ogdescription:doc.ogdescription,
                                                 keywords:doc.keywords,
                                                 typepost:doc.typepost,
                                                 image:doc.image,
                                                 index:doc.index,
                                                 request: {
                                                   type: "GET",
                                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                                 }
                                               };
                                             })
                                           };
                    res.render('mobile/product-detail-mb',{productdetail:productdetail,poststuvan:poststuvan,layout:"layouts/layoutmobile/layoutmobiledetail"});
                  })})
            .catch(err => {
                            console.log(err);
                            res.status(500).json({ error: err });
                          });
    }else{
      const nameseo = req.params.maytinhnameseo;
      console.log(nameseo);
      Laptop.find({nameseo:nameseo})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .exec()
        .then(docs => {
                var productdetail={
                            count: docs.length,
                            products: docs.map(doc => {
                              return {
                                name: doc.name,
                                nameseo: doc.nameseo,
                                price:doc.price,
                                nsx:doc.nsx,
                                tinhnang:doc.tinhnang,
                                baohanh: doc.baohanh,
                                _id: doc._id,
                                index:doc.index,
                                description:doc.description,
                                imagedefault:doc.imagedefault,
                                image: doc.image,
                                request: {
                                  type: "GET",
                                  url: "http://localhost:3000/maytinh/" + doc._id
                                      }
                                    }
                                  })
                                };
                res.render('fontend/maytinh-detail',{productdetail:productdetail,layout:"layouts/layoutdesktop/layoutmaytinhdetail"});
              })
        .catch(err => {
                        console.log(err);
                        res.status(500).json({ error: err });
                      });
    }
  }
