function GetSelectedTextValue() {
        var ddlFruits = document.getElementById("cities");
        //var selectedText = ddlFruits.options[ddlFruits.selectedIndex].innerHTML;
        var ch = ddlFruits.value;
fetch(ch).then((data)=>{return data.json();}
).then((cd)=>{
  let d="";
  cd.map((values)=>{
    d+=`<div class="one">
      <div class="hn"><span><h3>${values.Hospital_Name}</h3></span>
      </div>
      <div class="ad row">
        <div class="ad col-lg-4"><a href="https://${values.Address}" target="_blank">address
        </a>
</div>
        <div class="dn col-lg-4">${values.Doctor_Name}
        </div>
        <div class="cn col-lg-4">${values.Contact}
        </div>
      </div>
    </div>`;
  });
  document.getElementById("right").innerHTML=d;
}).catch((err)=>{
  console.log(err);
})
}



function GetSelectedTextValue2() {

var ddlFruits2 = document.getElementById("Prctns");
//var selectedText = ddlFruits.options[ddlFruits.selectedIndex].innerHTML;
var scnd = ddlFruits2.value;
fetch(scnd).then((data)=>{return data.json();}
).then((cd)=>{
  let d="";
  cd.map((values)=>{
    d+=`<div class="row one two" style="background-color:#5DADE2; color:white; width:500px">
                <div class="col">
                    <div class="row">
                        <div class="ad col"><span><h4 style="color:black;">Emergency</h4></span><br><h4 style="text-decoration: underline;">${values.Ename}</h4></div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="dn col"><span><h3 style="color:black;">Symptoms</h3></span><br>${values.Esymptoms}</div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="cn col"><span><h3 style="color:black;">Precautions</h3></span><br>${values.Pr}</div>
                    </div>
                </div>
</div>`;
  });
  document.getElementById("right1").innerHTML=d;
}).catch((err)=>{
  console.log(err);
})
}
