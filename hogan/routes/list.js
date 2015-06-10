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
    sqlOperator.query('select * from products',function(err,recordset){
        res.render('list', { productlist:recordset    });


    })


});

router.post('/delete',function(req,res,next){
    if(req.body.id){
        sqlOperator.query('select * from products where id='+req.body.id,function(err,recordset){
            if(recordset){
                sqlOperator.query('delete from products where id='+req.body.id,function(err,recordset){
                    if(err)
                    throw err;
                   res.send("True");

            });
            }
        });
    }
})

module.exports = router;