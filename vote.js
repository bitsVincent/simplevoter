var maxvotes;
var formname,formid;
var postdata=new Object();
postdata.name=postdata.uid=0;
postdata.selection=new Array();

function createSelections(){
    $.getJSON("testform.json",function(result){
        $.each(result.selections, function(i, infos){
            var htmlstr ="<input type='checkbox' class='_selections' value=s"+i+" />"+infos+"<br>"
            $("#voteform").append(htmlstr);
        });
        maxvotes=result.max_votes;
        formid=result.form_id;
        formname=result.formname;
    });
}

var status="Success with JSON";
function postdatainit(){
    postdata.name=postdata.uid=0;
    postdata.selection=[];
}

function onVoteSubmit(){
    var currentvotes=0;
    var vaild;
    status="投票成功。";
    $("._selections").each(function(i,selection){
        if(selection.checked==true && currentvotes<=maxvotes){
            postdata.selection.push(i);
            currentvotes+=1;
        }
    });
   
    
    vaild = vaildcheck(currentvotes);
    postdata.name=$("#name").prop("value");
    postdata.uid=$("#uid").prop("value");

    if(!vaild){
        postdatainit();
    }
    // commit here.
    if(vaild){
        alert(status+JSON.stringify(postdata));
    } else {
        alert("错误:"+status);
    }
    
}

function vaildcheck(currentvotes){
    
    if(currentvotes==0){
        status="您一票未投。";
        return false;
    }
    if(currentvotes>maxvotes){
        status="您投了"+currentvotes+"票,但投票限额是"+maxvotes+"票";
        return false;
    }    
    if($("#uid").prop("value") == undefined || $("#uid").prop("value") == ''){
        status="请输入你的学籍号";
        return false;
    }
    if($("#name").prop("value") == undefined || $("#name").prop("value") == ''){
        status="请输入你的姓名";
        return false;
    }

    return true;
}