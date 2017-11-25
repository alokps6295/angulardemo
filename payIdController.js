
var paySlip=require('./model.js');
exports.payIdGenerator=function(data){
    if(!data[0]){
        var first_id=new paySlip(
            {
                PID:"000000",
                id_to_locate:'PID'});
        first_id.save(function(error){
            console.log("your dta has been saved");
            if(error){
                console.log('error');
            }
        });
    }
else{
var arr=[0,9,99,999,9999,99999,999999];
var psId=data[0].PID;
var count=0;
for (var i = 0; i < psId.length; i++){
    if(psId[i]=='0')
    {
        count=count+1;
    }
    else{
        break;
    }
}
//converting the string id into number
var psId_num=Number(psId);
count=arr.indexOf(psId_num)!=-1?count-1:count;
var psId_num=psId_num+1;
for(var i=1;i<=count;i++)
{
 psId_num='0'+psId_num;
}
if(psId_num>999999){
    return;
}
updatePID(psId_num);
}
}
function updatePID(id){
    paySlip.update(
        {id_to_locate: 'PID'}, 
        {$set: {'PID': id}}, 
        function(error){
            console.log("updated");
            if(error){
                console.log("not updated");
            }
        });
}