/**
 * Created by Administrator on 2015/6/10.
 */
var mssql=require('mssql');
var config={
    user:'sa',
    password:'sql@123',
    server:'192.168.2.199',
    database:'testing',
    options:{
        encrypt:false
    }
}

//create connection
//var connection=new mssql.Connection(config,function(err){
//    if(err){
//        console.log(err);
//    }else{
//        console.log('Connected');
//    }
//    //Create Request
//    //var request=new mssql.Request(connection,function(err){
//    //    console.log('request init');
//    //})
//    var request=new mssql.Request(connection);
//    request.query('select * from products',function(err,recordset){
//        if(err){
//            console.log(err);
//        }else {
//            console.log(recordset);
//        }
//    });
//
//
//
//
//});











exports.query=function(sql,callback){
    //Create Connection
    var connection=new mssql.Connection(config,function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Connected');
        }
        var request=new mssql.Request(connection);
        request.query(sql,callback);

    });

}

//exports.query("select top 1 * from products",function(err,recoreset){
//    console.log(recoreset);
//})