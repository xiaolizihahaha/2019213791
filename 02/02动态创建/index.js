json=[
    {"id":1,"name":"Windows程序设计","week":"1","when":"1-2节","where":"南湖综合楼N217","who":"赵卫中"},
    {"id":2,"name":"Web程序设计","week":"2","when":"1-2节","where":"南湖综合楼N108","who":"涂新辉"},
    {"id":3,"name":"人工智能","week":"3","when":"1-2节","where":"南湖综合楼N520","who":"张连发"},
    {"id":4,"name":"操作系统","week":"5","when":"1-2节","where":"南湖综合楼N524","who":"喻莹"}, 
    {"id":5,"name":"软件工程导论","week":"1","when":"3-4节","where":"南湖综合楼N108","who":"李蓉"},
    {"id":6,"name":"软件项目管理","week":"2","when":"3-4节","where":"南湖综合楼N108","who":"李蓉"},
    {"id":7,"name":"操作系统","week":"3","when":"3-4节","where":"南湖综合楼N213","who":"喻莹"},  
    {"id":8,"name":"习近平新时代中国特色社会主义思想概论","week":"4","when":"3-4节","where":"南湖综合楼N215","who":"张艳斌"},
    {"id":9,"name":"电子商务","week":"1","when":"5-6节","where":"南湖综合楼N522","who":"刘巍"},
    {"id":10,"name":"Web程序设计","week":"4","when":"5-6节","where":"南湖综合楼N108","who":"涂新辉"},
    {"id":11,"name":"设计模式","week":"2","when":"7-8节","where":"南湖综合楼N520","who":"；李增扬"},
    {"id":12,"name":"编译原理","week":"4","when":"7-8节","where":"南湖综合楼N213","who":"郭京蕾"}, 
    {"id":13,"name":"Windows程序设计","week":"3","when":"9-10节","where":"南湖综合楼N522","who":"赵卫中"},
    {"id":14,"name":"解码外交","week":"1","when":"11-12节","where":"南湖综合楼N327","who":"胡宗山"}
]

const body=document.querySelector("body");
body.style.backgroundColor="black";
body.style.display="grid";
body.style.gridTemplateRows="10% 90%";
body.style.gridTemplateColumns="5% 60% 30% 5%";

var title=document.createElement("h1");
title.innerText="My TimeTable";
title.style.color="rgb(244,208,62)"
title.style.gridRowStart="1";
title.style.gridRowEnd="2";
title.style.gridColumnStart="1";
title.style.gridColumnEnd="5";
title.style.textAlign="center";
body.appendChild(title);

const div1=document.createElement("div");
div1.id="data";
div1.style.gridColumnStart="2";
div1.style.gridColumnEnd="3";
div1.style.gridRowStart="2";
div1.style.gridRowEnd="3";
body.appendChild(div1);

const div2=document.createElement("div");
div2.id="show";
div2.style.visibility="hidden";
div2.style.color="rgb(244,208,62)";
div2.style.border="5px solid rgb(244,208,62)"
div2.style.gridColumnStart="3";
div2.style.gridColumnEnd="4";
div2.style.height="300px";
div2.style.marginTop="250px";
div2.style.gridRowStart="2";
div2.style.gridRowEnd="3";
body.appendChild(div2);


var table=document.createElement("table");
table.style.backgroundColor="rgb(244,208,62)";

var thead=document.createElement("thead");
var tr=document.createElement("tr");
thead.appendChild(tr);
table.appendChild(thead);

var th=document.createElement("th");
th.innerText='';
tr.appendChild(th);
th.style.width="100px";
th.style.border="solid 5px black";

th=document.createElement("th");
th.innerText="星期一";
tr.appendChild(th);
th.style.width="100px";
th.style.height="50px";
th.style.border="solid 5px black";

th=document.createElement("th");
th.innerText="星期二";
tr.appendChild(th);
th.style.width="100px";
th.style.border="solid 5px black";

th=document.createElement("th");
th.innerText="星期三";
tr.appendChild(th);
th.style.width="100px";
th.style.border="solid 5px black";

th=document.createElement("th");
th.innerText="星期四";
tr.appendChild(th);
th.style.width="100px";
th.style.border="solid 5px black";

th=document.createElement("th");
th.innerText="星期五";
tr.appendChild(th);
th.style.width="100px";
th.style.border="solid 5px black";

tbody=document.createElement("tbody");
table.appendChild(tbody);
var index=1;
for(let i=1;i<=12;i++)
{

    var tr=document.createElement("tr");
    tbody.appendChild(tr);
    var th=document.createElement("th");
    th.innerText=i;
    tr.appendChild(th); 
    th.style.height="50px";
    th.style.border="solid 5px black";

    if(i%2==1)
    {
        for(let k=1;k<=5;k++)
        {
            var flag=0;
            var td=document.createElement("td");
            td.style.border="solid 5px black";

            for(let j=0;j<json.length;j++)
            {
                if(i<10)
                {
                    if(json[j].when.substr(0,1)==i && json[j].week==k)
                    {
                        td.innerText=json[j].name;
                        td.rowSpan=2;
                        flag=1;
                        td.id=index;
                        index++;
                        break;
                    }                  
                }
                else
                {
                    if(json[j].when.substr(0,2)==i && json[j].week==k)
                    {
                        td.innerText=json[j].name;
                        td.rowSpan=2;
                        flag=1;
                        td.id=index;
                        index++;
                        break;
                    }                
                }

            }

            if(flag==0)
            {
                td.innerText=''; 
                td.rowSpan=2;
            }
            tr.appendChild(td);                  

        }         
    }
}

div1.appendChild(table);

var info=document.createElement("h1");
div2.appendChild(info);
info.innerText="课程详细信息"
info.style.textAlign="center";

var Name=document.createElement("h3");
div2.appendChild(Name);
Name.style.textAlign="center";

var Time=document.createElement("h3");
div2.appendChild(Time);
Time.style.textAlign="center";

var Where=document.createElement("h3");
div2.appendChild(Where);
Where.style.textAlign="center";

var Who=document.createElement("h3");
div2.appendChild(Who);
Who.style.textAlign="center";


function mouseover(event)
{
    const id=event.currentTarget.id; 
    if(id!="")
    {
        var element=document.getElementById("show");
        element.style.visibility="visible";        
    }

    for(let i=0;i<json.length;i++)
    {
        if(id==json[i].id)
        {
            if(json[i].week==="1")
                var Week="星期一";  
            else if(json[i].week==="2")
                var Week="星期二";                  
            else if(json[i].week==="3")
                var Week="星期三";  
            else if(json[i].week==="4")
                var Week="星期四";          
            else
                var Week="星期五";                  

            Name.textContent="课程名称："+json[i].name;
            Time.textContent="上课时间："+Week+json[i].when;
            Where.innerText="上课地点："+json[i].where;
            Who.innerText="上课教师："+json[i].who;           
        }
    }
}

function mouseout()
{
    var element=document.getElementById("show");
    element.style.visibility="hidden";

}

var elementList=document.querySelectorAll("td");
for(let i=0;i<elementList.length;i++)
{
    elementList[i].addEventListener('mouseover',mouseover);
    elementList[i].addEventListener('mouseout',mouseout);
}





