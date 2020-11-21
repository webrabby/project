function insertNum(number) {
    var result = $('#cal_heading').val()
    $('#cal_heading').val(result+number)
}
function calculate(){
    var result=eval($('#cal_heading').val());
    $('#cal_heading').val(result)
}
function clearNum(){
    $('#cal_heading').val('');
}
function delNum(){
    var presentNumber=$('#cal_heading').val();
    if(presentNumber!=''){
        $('#cal_heading').val(presentNumber.slice(0,-1))
    }
}