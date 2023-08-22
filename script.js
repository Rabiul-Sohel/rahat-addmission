
// medical application

{
let x = document.getElementById("medi_ap_day").innerHTML;

let y = Number(x);

let a = new Date().getDate();
let time = y-a;
let m = new Date().getMonth() + 1;
let n = document.getElementById("medi_ap_month").innerHTML;
let M = Number(n);
let l= M-m;

if (time<6 && time>0 && l==0){document.getElementById("medi_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("medi_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("medi_ap_alarm").innerHTML = "FinaL DaY!!!!!!!!!"} else {console.log("not ok")}
// console.log(typeof M)
}

// medical exam
{
let x = document.getElementById("medi_ex_day").innerHTML;

let y = Number(x);

let a = new Date().getDate();
let time = y-a;
let m = new Date().getMonth() + 1;
let n = document.getElementById("medi_ex_month").innerHTML;
let M = Number(n);
let l= M-m;

if (time<6 && time>0 && l==0){document.getElementById("medi_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("medi_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("medi_ex_alarm").innerHTML = "ExaM DaY!!!!!!!!!!"} else {console.log("not ok")}
// console.log(month)
}



// // buet application
// {
//     let x = document.getElementById("buet_ap_day").innerHTML;
    
//     let y = Number(x);
    
//     let a = new Date().getDate();
//     let time = y-a;
//     let m = new Date().getMonth() + 1;
//     let n = document.getElementById("buet_ap_month").innerHTML;
//     let M = Number(n)
//     let l= M-m;

// if (time<6 && time>0 && l==0){document.getElementById("buet_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<1){document.getElementById("buet_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("buet_ap_alarm").innerHTML = "FinaL DaY!!!!!!!!!!"} else {console.log("not ok")}
//     // console.log(typeof M)
//     }

// // buet exam
// {
//     let x = document.getElementById("buet_ex_day").innerHTML;
    
//     let y = Number(x);
    
//     let a = new Date().getDate();
//     let time = y-a;
//     let m = new Date().getMonth() + 1;
//     let n = document.getElementById("buet_ex_month").innerHTML;
//     let M = Number(n)
//     let l= M-m;

//     if (time<6 && time>0 && l==0){document.getElementById("buet_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("buet_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("buet_ex_alarm").innerHTML = "ExaM DaY!!!!!!"} else {console.log("not ok")}
//     // console.log(typeof M)
//     }

// du application
{
    let x = document.getElementById("du_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("du_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("du_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("du_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("du_ap_alarm").innerHTML = "Final DaY!!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// du exam Arts
{
    let x = document.getElementById("dua_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("dua_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("dua_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("dua_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("dua_ex_alarm").innerHTML = "ExaM DaY!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// du exam Science
{
    let x = document.getElementById("dus_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("dus_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("dus_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("dus_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("dus_ex_alarm").innerHTML = "ExaM DaY!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// du exam Business
{
    let x = document.getElementById("dub_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("dub_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("dub_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("dub_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("dub_ex_alarm").innerHTML = "ExaM DaY!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// Agri application
{
    let x = document.getElementById("agri_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("agri_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("agri_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("agri_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("agri_ap_alarm").innerHTML = "Final DaY!!!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// agri exam
{
    let x = document.getElementById("agri_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("agri_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("agri_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("agri_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("agri_ex_alarm").innerHTML = "ExaM DaY!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }
    
// cluster application
{
    let x = document.getElementById("cl_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("cl_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("cl_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("cl_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("cl_ap_alarm").innerHTML = "Final DaY!!!!!!"} else {console.log("not ok")}


    }

// agri exam
{
    let x = document.getElementById("cl_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("cl_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("cl_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("cl_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("cl_ex_alarm").innerHTML = "ExaM DaY!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// RU application
{
    let x = document.getElementById("ru_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("ru_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("ru_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("ru_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("ru_ap_alarm").innerHTML = "Final DaY!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// RU exam
{
    let x = document.getElementById("ru_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("ru_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("ru_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("ru_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("ru_ex_alarm").innerHTML = "ExaM DaY!!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// Chittagong application
{
    let x = document.getElementById("cu_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("cu_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("cu_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("cu_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("cu_ap_alarm").innerHTML = "Final DaY!!!!!!!"} else {console.log("not ok")}

    // console.log(typeof M)
    }

// cu exam
{
    let x = document.getElementById("cu_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("cu_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("cu_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("cu_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("cu_ex_alarm").innerHTML = "ExaM DaY!!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// // Armed Forces application
// {
//     let x = document.getElementById("amc_ap_day").innerHTML;
    
//     let y = Number(x);
    
//     let a = new Date().getDate();
//     let time = y-a;
//     let m = new Date().getMonth() + 1;
//     let n = document.getElementById("amc_ap_month").innerHTML;
//     let M = Number(n)
//     let l= M-m;

//     if (time<6 && time>0 && l==0){document.getElementById("amc_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("amc_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("amc_ap_alarm").innerHTML = "Final DaY!!!!!!!!"} else {console.log("not ok")}
//     // console.log(typeof M)
//     }

// // AMC exam
// {
//     let x = document.getElementById("amc_ex_day").innerHTML;
    
//     let y = Number(x);
    
//     let a = new Date().getDate();
//     let time = y-a;
//     let m = new Date().getMonth() + 1;
//     let n = document.getElementById("amc_ex_month").innerHTML;
//     let M = Number(n)
//     let l= M-m;

//     if (time<6 && time>0 && l==0){document.getElementById("amc_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("amc_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("amc_ex_alarm").innerHTML = "ExaM DaY!!!!!!!"} else {console.log("not ok")}

//     // console.log(typeof M)
//     }

// JahangirNagar Forces application
{
    let x = document.getElementById("ju_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("ju_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("ju_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("ju_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("ju_ap_alarm").innerHTML = "Final DaY!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// JahangirNagar exam
{
    let x = document.getElementById("ju_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("ju_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("ju_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("ju_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("ju_ex_alarm").innerHTML = "ExaM DaY!!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// Engineering application
{
    let x = document.getElementById("en_ap_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("en_ap_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("en_ap_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("en_ap_alarm").innerHTML= "Time Over"} else if(time==0 && l==0) {document.getElementById("en_ap_alarm").innerHTML = "Final DaY!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }

// JahangirNagar exam
{
    let x = document.getElementById("en_ex_day").innerHTML;
    
    let y = Number(x);
    
    let a = new Date().getDate();
    let time = y-a;
    let m = new Date().getMonth() + 1;
    let n = document.getElementById("en_ex_month").innerHTML;
    let M = Number(n)
    let l= M-m;

    if (time<6 && time>0 && l==0){document.getElementById("en_ex_alarm").style.color= "red"} else if ((time<0 && l<1)|| l<0){document.getElementById("en_ex_alarm").innerHTML= "Exam Held"} else if(time==0 && l==0) {document.getElementById("en_ex_alarm").innerHTML = "ExaM DaY!!!!!!!!"} else {console.log("not ok")}
    // console.log(typeof M)
    }