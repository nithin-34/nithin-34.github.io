function test() {
  // Get the element.
  alert("Download starting");

var n=timestamp;
var array=[];
var final=[];
var sum=[];
var pcs=[];
var totalar=[];
var namear=[];
var lot=[];
var grandtotal=0;
var grandpcs=0;
var a=0;
var s=0;
var d=0;
final=JSON.parse(localStorage.getItem("unsaved"))[n];


var name12=final[0];
var adress=final[1];
var phone=final[2];
var date1=final[3];
var gho=final[3].split("-");
var date=gho[2]+"-"+gho[1]+"-"+gho[0];
var con=final[3];
var con=final[4];
var vehicle=final[5];
var refer=final[7];
var load=final[8];
var aprvd=final[9];
var sales=final[10];
var output1="";
output1='<table width="100%"><tbody><tr><th class="main printing" colspan="12" style="font-size:20px">MEASUREMENT LIST </th></tr> <tr><td class="td-printing" style="text-align:left" colspan="12"> <div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p>&nbsp&nbsp&nbsp&nbspNAME:&nbsp&nbsp&nbsp&nbsp<b>'+name12+'</b></p></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p>DATE:&nbsp&nbsp&nbsp&nbsp<b>'+date+'</b></p></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p>&nbsp&nbsp&nbsp&nbspADDRESS:&nbsp&nbsp&nbsp&nbsp<b>'+adress+'</b></p></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p>VEHICLE NO:&nbsp&nbsp&nbsp&nbsp<b>'+vehicle+'</b></p></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p>MOBILE NO:&nbsp&nbsp&nbsp&nbsp<b>'+phone+'</b></p></div></div></td></tr></tbody></table>';
$("#ex").append(output1);
var name="";
var c=1;
var t=1;
var d=1;
var xv="";
var n=1;
var table=1;
var output='<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><table width="100%"><tbody>';
 n++;
 
 /*alert(final[4]);*/
 var str1=final[11];
str1=str1.toString();

 var data=str1.split(",");
 var cou=data.length;
 // alert(cou);
 for(var i=0;i<cou;i++){
var str=data[i];
str=str.toString();
 var b=str.split("-");


if(b[0]==name){
c++;
 
output+='<tr class="cen"><td style="width:2%">'+c+'</td><td style="width:14%" >'+b[1]+' <b>X</b> '+b[2]+'</td><td style="width:7%">'+b[3]+' <b>X</b> '+b[4]+'</td><td style="width:7%">'+b[5]+' <b>X</b> '+b[6]+'</td><td style="width:7%">'+b[7]+' <b>X</b> '+b[8]+'</td><td style="width:7%">'+b[9]+' <b>X</b> '+b[10]+'</td><td style="width:7%">'+b[11]+' <b>X</b> '+b[12]+'</td><td style="width:7%">'+b[13]+' <b>X</b> '+b[14]+'</td><td  style="width:11%">'+b[15]+'</td>';
d++;

}
else{
namear[s]=b[0];
lot[s]=b[17];

s++;

if(t!=1){
    
//var ghj=xv.split(":");
var ghj=xv;
//alert(ghj);
    pcs[a]=c;
    totalar[a]=ghj;
    
    a++;
    output+='<tr> <td style="text-align:right"  colspan="9"><b>TOTAL:'+parseFloat(xv).toFixed(2)+'&nbsp&nbsp&nbsp&nbsp</b></td>';
    d++;

}
var xv=b[16];
alert(xv);
c=1;

output+='<tr> <th colspan="5">Colour:&nbsp&nbsp'+b[0]+'</th><th colspan="4">Lot Id:&nbsp&nbsp'+b[17]+'</th>';
t++;
d++;

output+='<tr class="cen"><td style="width:2%">S.No</td><td style="width:14%" >L &nbsp &nbsp&nbsp &nbsp &nbsp W</td><td style="width:7%">Less1</td><td style="width:7%">Less2</td><td style="width:7%">Less3</td> <td style="width:7%">Less4</td><td style="width:7%">Less5</td><td style="width:7%">Less6</td><td style="width:11%">Area</td>';
d++;

output+='<tr class="cen"><td style="width:2%">'+c+'</td><td style="width:14%" >'+b[1]+' <b>X</b> '+b[2]+'</td><td style="width:7%">'+b[3]+' <b>X</b> '+b[4]+'</td><td style="width:7%">'+b[5]+' <b>X</b> '+b[6]+'</td><td style="width:7%">'+b[7]+' <b>X</b> '+b[8]+'</td><td style="width:7%">'+b[9]+' <b>X</b> '+b[10]+'</td><td style="width:7%">'+b[11]+' <b>X</b> '+b[12]+'</td><td style="width:7%">'+b[13]+' <b>X</b> '+b[14]+'</td><td   style="width:11%">'+b[15]+'</td>';
d++;
name=b[0];
}


}

pcs[a]=c;
    totalar[a]=xv;
    
    a++;
output+='<tr> <td colspan="9" style="text-align:right"><b>TOTAL:'+parseFloat(xv).toFixed(2)+'&nbsp&nbsp&nbsp&nbsp</b></td></tr>';
d++;


output+='<tr> <td colspan="9" style="text-align:right"><b>&nbsp&nbsp&nbsp&nbsp</b></td></tr>';
d++;

output+='<tr style="border-top: 1px solid white;"> <td colspan="9" style="text-align:center; "><b > &nbsp</b></td></tr>';
d++;   

output+='<tr style="border-top: 1px solid white;"> <td colspan="9" style="text-align:center; "><b > &nbsp</b></td></tr>';
d++;


output+='<tr style="border-top: 1px solid white;"> <td colspan="9" style="text-align:center; "><b >SUMMARY</b></td></tr>';
d++;


output+='<tr class="cen"><th style="width:2%">S.No</th><th style="width:21%" colspan="3" >Colour</th><th style="width:21%" colspan="3" >Lot Id</th><th style="width:7%">Pcs</th><th colspan="3" style="width:18%">Quantity</th> ';
d++;
var item_count=0;
for(var m=0;m<a;m++){

item_count++;
grandpcs=grandpcs+pcs[m];
var totalgh=Number(totalar[m]);
//alert(totalgh);
grandtotal=grandtotal+totalgh;
var grandto=grandtotal.toFixed(2)
output+='<tr class="cen"><td style="width:2%">'+item_count+'</td><td style="width:21%" colspan="3" >'+namear[m]+' </td><td style="width:21%" colspan="3" >'+lot[m]+' </td><td style="width:7%">'+pcs[m]+'</td><td colspan="3" style="width:18%">'+parseFloat(totalar[m]).toFixed(2)+' </td></tr>';
d++;
}

output+='<tr class="cen"><th style="width:23%" colspan="3" >Total No.of Pcs</th><th style="width:7%" colspan="4">'+grandpcs+'</th><th colspan="4" style="width:18%">TOTAL AREA:'+grandto+'</th></tr> ';
d++;

output+='<tr style="border-top: 1px solid white;"> <td colspan="9" style="text-align:center; "><b > &nbsp</b></td></tr>';
d++;


output+='<tr style="border-top: 1px solid white;"> <td colspan="9" style="text-align:center; "><b > &nbsp</b></td></tr>';
d++;
var y=n-1;
if(y%2==0){
  for(var w=d;w<41;w++){

output+=' <td style="width:2%">&nbsp</td><td style="width:14%" > </td><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"></td><td style="width:11%"></td></tr>';
   
}
  
}
else{
  for(var w=d;w<41;w++){

output+=' <td style="width:2%">&nbsp</td><td style="width:14%" > </td><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"></td></td><td style="width:11%"></td></tr>';
   
}
/*output+=' </table></table></div>';
  output+='<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-left:-31px"><table width="100%"><tbody>';
for(w=1;w<41;w++){

output+=' <td style="width:2%">&nbsp</td><td style="width:14%" > </td><td style="width:7%"></td><td style="width:7%"></td><td style="width:7%"></td><td style="width:11%"></td></tr>';
   
}*/
}
output+='</table></table></div></div>';
$("#ex").append(output);
  var element = document.getElementById('ex');

  // Generate the PDF.
  html2pdf().from(element).set({
    margin: 0.5,
    filename: name12+'-'+date+'.pdf',
    html2canvas: { scale: 2 },
    jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
  }).save();
  setTimeout(function func(){
    document.getElementById('ex').innerHTML="";
  }, 50);
  //document.getElementById('ex').innerHTML="";
}
  
      function submit(){
        areac();
      var array = new Array(c-cancel);
    var elem=0;
      	var sum=0;
             var clr=0;
          var lid=0;
          var len=0;
           for(var g=1;g<=t;g++){
               len++;
               var item_name=$("#ty"+g).text();
               if(item_name!=''){
               	   $("#ty"+t).css("background-color", "white");
                   clr++;
               }
               var lot_id=$("#lot"+t).text();
               if(lot_id!=''){
               	   $("#lot"+t).css("background-color", "white");
                   lid++;
               }
               
           }
          //  if(clr<len){
          //  	   $("#ty"+t).css("background-color", "skyblue");
          //      alert('please fill Color');
          //  }
          //  else if(lid<len){
          //  	$("#lot"+t).css("background-color", "skyblue");
          //  	alert('please fill LOTID');
          //  }
          //  else{
             for(var h=0;h<c;h++){
                 var a=$("#ty"+t+"a"+h).text();
                var b=Number(a);
                 sum+=b;
             }
              var totalar= sum.toFixed(2);
      
     var item_nm="";
     var name=$("#name").val();
     var adress=$("#adress").val();
     var phone=$("#phone").val();
     var date=$("#date").val();
     var refer=$("#refer").val();
     var load=$("#load").val();
     var aprvd=$("#aprvd").val();
     var sales=$("#sales").val();
     var vehicle=$("#vehicle").val();
     var less=6;

     var con=document.getElementById('selecto').value;
     if(!(event.target.id=="name"||event.target.id=="ty1"||event.target.id=="lot1"||event.target.id=="adress"||event.target.id=="phone"||event.target.id=="date"||event.target.id=="refer"||event.target.id=="load"||event.target.id=="aprvd"||event.target.id=="sales"||event.target.id=="vehicle")){
     if(name == ""|| $('#ty1').text()==""|| $('#lot1').text()=="")
     {
      //  alert("Enter name, colour and lotID");
     }
     if(clr<len){
           	   $("#ty"+t).css("background-color", "skyblue");
               alert('please fill Color');
               return 0;
           }
           else if(lid<len){
           	$("#lot"+t).css("background-color", "skyblue");
           	alert('please fill LOTID');
            return 0;
           }
     }
   var pra=[name,adress,phone,date,con,vehicle,less,refer,load,aprvd,sales];
     for(var g=1;g<=t;g++){

      var item_name=$("#ty"+g).text();
      var lot_id=$("#lot"+g).text();
     var to=(($("#tyt"+g).text()).split(":"))[1];

     if(to==""){
         var total=totalar;
     }
     else{
         var total=to;
     }

      if(item_name!=""){
          
        for(var f=0;f<c;f++){
           
          var x="";
         var  l=$("#ty"+g+"l"+f).val();
        var  w=$("#ty"+g+"w"+f).val();
        var  l1=$("#ty"+g+"l1-"+f).val();
        var  w1=$("#ty"+g+"w1-"+f).val();
        var  l2=$("#ty"+g+"l2-"+f).val();
        var  w2=$("#ty"+g+"w2-"+f).val();
        var  l3=$("#ty"+g+"l3-"+f).val();
        var  w3=$("#ty"+g+"w3-"+f).val();
        var  l4=$("#ty"+g+"l4-"+f).val();
        var  w4=$("#ty"+g+"w4-"+f).val();
        var  l5=$("#ty"+g+"l5-"+f).val();
        var  w5=$("#ty"+g+"w5-"+f).val();
        var  l6=$("#ty"+g+"l6-"+f).val();
        var  w6=$("#ty"+g+"w6-"+f).val();
        var are=$("#ty"+g+"a"+f).text();

        //only one item total
        if(g==t){
        	var item_total=0;
        	for(var z=0;z<c;z++){
        		if($("#ty"+g+"a"+z).length){
        		 item_total=item_total+parseFloat($("#ty"+g+"a"+z).text());
        		 //alert(item_total);
        		}

        	}
        	total=item_total;

        	
        }
        //alert(total);
        //only one item total

          if(l==undefined||w==undefined){
             
          } 
          else{
          
        
        elem++;
            
           
           x+=item_name+"-"+l+"-"+w+"-"+l1+"-"+w1+"-"+l2+"-"+w2+"-"+l3+"-"+w3+"-"+l4+"-"+w4+"-"+l5+"-"+w5+"-"+l6+"-"+w6+"-"+are+"-"+total+"-"+lot_id;

            
            array[elem-1]=x;
            /*alert( $.toJSON(array) );*/
           /* alert(JSON.stringify(array));*/
      
          
         



}


        }
        
        
      }

     

     }
     //alert(array);
     pra.push(array);
     pra.push("YES");
     var d = new Date();
     localStorage.setItem("time",d.getTime());
     pra.push(d.getTime());
     
     //alert("1");

     var prac={};
     if(localStorage.getItem("unsaved")){
       prac = JSON.parse(localStorage.getItem("unsaved"));
     }
     prac[timestamp]=pra;
     localStorage.setItem("unsaved",JSON.stringify(prac));
     console.log(timestamp);

       /*
    * by NK to download as file

     */
     var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(prac)));
  element.setAttribute('download', name+'_'+date+'.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.focus();
  element.click();

  document.body.removeChild(element);



    /* bill.push(array);
     if(!(localStorage.getItem('bills'))){
     
     
     var bills=[];
     }
     else{
         var bills=[];
          bills=JSON.parse(localStorage.getItem('bills'));
         
     }
     
     bills.push(bill);
     localStorage.setItem("bills",JSON.stringify(bills));*/
     localStorage.setItem("row",timestamp);
                        window.location.href="pdf1.html";
                         

      //}	
  }
  
    function update(){
      /*alert("Start one " + t);*/
    areac();
      var array = new Array(c);
    var elem=0;
      	var sum=0;
             var clr=0;
          var lid=0;
          var len=0;
           for(var g=1;g<=t;g++){
               len++;
               var item_name=$("#ty"+g).text();
               if(item_name!=''){
               	   $("#ty"+t).css("background-color", "white");
                   clr++;
               }
               var lot_id=$("#lot"+t).text();
               if(lot_id!=''){
               	   $("#lot"+t).css("background-color", "white");
                   lid++;
               }
               
           }
          //  if(clr<len){
          //  	   $("#ty"+t).css("background-color", "skyblue");
          //      alert('please fill Color');
          //  }
          //  else if(lid<len){
          //  	$("#lot"+t).css("background-color", "skyblue");
          //  	alert('please fill LOTID');
          //  }
          //  else{
             for(var h=0;h<c;h++){
             /* alert(c);*/
                 var a=$("#ty"+t+"a"+h).text();
                 /*alert(a);*/
                var b=Number(a);
                 sum+=b;
                 /*alert(sum);*/
             }
              var totalar= sum.toFixed(2);
              /*alert(totalar);*/
      
     var item_nm="";
     var name=$("#name").val();
     var adress=$("#adress").val();
     var phone=$("#phone").val();
     var date=$("#date").val();
     var refer=$("#refer").val();
     var load=$("#load").val();
     var aprvd=$("#aprvd").val();
     var sales=$("#sales").val();
     var vehicle=$("#vehicle").val();
     var less=6;

     var con=document.getElementById('selecto').value;
     if(!(event.target.id=="name"||event.target.id=="ty1"||event.target.id=="lot1"||event.target.id=="adress"||event.target.id=="phone"||event.target.id=="date"||event.target.id=="refer"||event.target.id=="load"||event.target.id=="aprvd"||event.target.id=="sales"||event.target.id=="vehicle")){
     if(name == ""|| $('#ty1').text()==""|| $('#lot1').text()=="")
     {
      //  alert("Enter name, colour and lotID");
     }
     if(clr<len){
           	   $("#ty"+t).css("background-color", "skyblue");
               alert('please fill Color');
           }
           else if(lid<len){
           	$("#lot"+t).css("background-color", "skyblue");
           	alert('please fill LOTID');
           }
     }
   var pra=[name,adress,phone,date,con,vehicle,less,refer,load,aprvd,sales];
     for(var g=1;g<=t;g++){

      var item_name=$("#ty"+g).text();
      var lot_id=$("#lot"+g).text();
     var to=(($("#tyt"+g).text()).split(":"))[1];

     if(to==""){
         var total=totalar;
     }
     else{
         var total=to;
     }

      if(item_name!=""){
          
        for(var f=0;f<c;f++){
           
          var x="";
         var  l=$("#ty"+g+"l"+f).val();
        var  w=$("#ty"+g+"w"+f).val();
        var  l1=$("#ty"+g+"l1-"+f).val();
        var  w1=$("#ty"+g+"w1-"+f).val();
        var  l2=$("#ty"+g+"l2-"+f).val();
        var  w2=$("#ty"+g+"w2-"+f).val();
        var  l3=$("#ty"+g+"l3-"+f).val();
        var  w3=$("#ty"+g+"w3-"+f).val();
        var  l4=$("#ty"+g+"l4-"+f).val();
        var  w4=$("#ty"+g+"w4-"+f).val();
        var  l5=$("#ty"+g+"l5-"+f).val();
        var  w5=$("#ty"+g+"w5-"+f).val();
        var  l6=$("#ty"+g+"l6-"+f).val();
        var  w6=$("#ty"+g+"w6-"+f).val();
        var are=$("#ty"+g+"a"+f).text();

        //only one item total
        if(g==t){
        	var item_total=0;
        	for(var z=0;z<c;z++){
        		if($("#ty"+g+"a"+z).length){
        		 item_total=item_total+parseFloat($("#ty"+g+"a"+z).text());
        		 
        		}

        	}
        	total=item_total;

        	/*alert(item_total);*/
        }
        //alert(total);
        //only one item total

          if(l==undefined||w==undefined){
             
          } 
          else{
          
        
        elem++;
            
           
           x+=item_name+"-"+l+"-"+w+"-"+l1+"-"+w1+"-"+l2+"-"+w2+"-"+l3+"-"+w3+"-"+l4+"-"+w4+"-"+l5+"-"+w5+"-"+l6+"-"+w6+"-"+are+"-"+total+"-"+lot_id;


            array[elem-1]=x;
            
      
          
         



}


        }
        
        
      }

     

     }
     //alert(array);
     pra.push(array);
     pra.push("NO");
     var d = new Date();
     localStorage.setItem("time",d.getTime());
     pra.push(d.getTime());
     
     //alert("1");
     
     var prac={};
     console.log(JSON.parse(localStorage.getItem("unsaved")));
     console.log('..........');
     if(localStorage.getItem("unsaved")){
       prac = JSON.parse(localStorage.getItem("unsaved"));
     }
     prac[timestamp]=pra;
     //console.log(prac);
     console.log(pra);
     localStorage.setItem("unsaved",JSON.stringify(prac));
     console.log(prac);
     console.log(JSON.stringify(prac));
     console.log(timestamp);
     





    /* bill.push(array);
     if(!(localStorage.getItem('bills'))){
     
     
     var bills=[];
     }
     else{
         var bills=[];
          bills=JSON.parse(localStorage.getItem('bills'));
         
     }
     
     bills.push(bill);
     localStorage.setItem("bills",JSON.stringify(bills));*/
    
                        //window.location.href="pdf1.html";
                         

      //}	
 /* alert("End one " + t);*/
  }