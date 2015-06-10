/**
 * Created by Administrator on 2015/6/10.
 */
var express = require('express');
var router = express.Router();
var sqlOperator=require('../db/sqlOperator.js');
/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render('list', { productlist:[
//        {name:"First Product"},
//        {name:"Second Product"}
//    ]
//    });
//});






router.get('/', function(req, res, next) {
        if(req.query.id){
        sqlOperator.query('select * from products where id='+req.query.id,function(err,recordset){
            res.render('addEdit', {hid:req.query.id, productlist:recordset    });
        });
    }else{
        res.render('addEdit', {hid:"", productlist:[
        {id:"",name:"",des:"",image:""}]    });
    }
});





router.post('/', function(req, res, next) {
    if(req.body.hid){
        var sql1="update products set name='"+req.body.pname+"',des='"+req.body.pdes+"'where id="+req.body.hid;
        sqlOperator.query(sql1,function(err,recordset){
            if(err)
                throw err;
            res.redirect('/list');
        });
    }else{
        var sql="insert into products (name,des,image) values('"+req.body.pname+"','"+req.body.pdes+"','http://img.1caifu.com/Upload/Company/Logo/20150421/2015042120084035052816.jpg')";

        sqlOperator.query(sql,function(err,recordset){
            console.log(err);
           if(err)
           throw err;
            res.redirect('/list');
        });
    }




});


module.exports = router;