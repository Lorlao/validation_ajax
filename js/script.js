let myTitle=document.querySelector(".title");
/*pour renommer un document ou console et creer un raccourci*/

/*document.querySelector(".title").addEventListener("mouseover", function(){
    myTitle.classList.toggle("modified-title");
});

document.querySelector(".title").addEventListener("mouseout", function(){
    myTitle.classList.toggle("modified-title");
});
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function myFunction() {
  var x = document.getElementById("my_top_nav");
  if (x.className === "top_nav") {
    x.className += " responsive";
  } else {
    x.className = "top_nav";
  }
}

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("main").innerHTML = "";
    let pokemon = document.querySelector("input").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then( (response) => {
        response.json()
        .then( (data) => {
            //debugger;
            let table = document.createElement("table");
            document.querySelector("main").appendChild(table);

            let tr_1 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_1);

            let th_1 = document.createElement("th");
            th_1.innerHTML = "Name";
            document.querySelector("table").appendChild(th_1);

            let th_2 = document.createElement("th");
            th_2.innerHTML = "Type 1";
            document.querySelector("table").appendChild(th_2);

            if (data.types.length>1) {
                let th_3 = document.createElement("th_3");
                th_3.innerHTML = "Type 2"
                document.querySelector("table").appendChild(th_3);
            }

            let th_4 = document.createElement("th");
            th_4.innerHTML = "Move 1";
            document.querySelector("table").appendChild(th_4);

            let th_5 = document.createElement("th");
            th_5.innerHTML = "Move 2";
            document.querySelector("table").appendChild(th_5);

            let th_6 = document.createElement("th");
            th_6.innerHTML = "Move 3";
            document.querySelector("table").appendChild(th_6);

            let th_7 = document.createElement("th");
            th_7.innerHTML = "Move 4";
            document.querySelector("table").appendChild(th_7);

            let th_8 = document.createElement("th");
            document.querySelector("table").appendChild(th_8);

            let tr_2 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_2);

            let tr_3 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_3);

            let tr_4 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_4);

            let tr_5 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_5);

            let tr_6 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_6);

            let tr_7 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_7);

            let tr_8 = document.createElement("tr");
            document.querySelector("table").appendChild(tr_8);

            let td_1 = document.createElement("td");
            td_1.innerHTML = data.name;
            document.querySelector("table").appendChild(td_1);
            console.log(data);

            let td_2 = document.createElement("td");
            td_2.innerHTML = data.types[0].type.name;
            document.querySelector("table").appendChild(td_2);
            console.log(data);

            if (data.types.length>1) {
                let td_3 = document.createElement("td_3");
                td_3.innerHTML = data.types[1].type.name;
                document.querySelector("table").appendChild(td_3);
            }

            let td_4 = document.createElement("td");
            td_4.innerHTML = data.moves[0].move.name;
            document.querySelector("table").appendChild(td_4);
            console.log(data);

            let td_5 = document.createElement("td");
            td_5.innerHTML = data.moves[1].move.name;
            document.querySelector("table").appendChild(td_5);
            console.log(data);

            let td_6 = document.createElement("td");
            td_6.innerHTML = data.moves[2].move.name;
            document.querySelector("table").appendChild(td_6);
            console.log(data);

            let td_7 = document.createElement("td");
            td_7.innerHTML = data.moves[3].move.name;
            document.querySelector("table").appendChild(td_7);
            console.log(data);

            let img = document.createElement("img");
            img.src = data.sprites.front_shiny;
            document.querySelector("table").appendChild(img);         
        });
    });
});



