// function myFunction1 (num) {
//     document.body.style.backgroundColor = "darkred";
//     document.body.style.color = "yellow";
//  }

//  function myFunction2 (num) {
//     document.body.style.backgroundColor = "lightblue";
//     document.body.style.color = "black";
//  }


//  function myFunction (theme) {
//      var x = theme.id;
//      switch (x) {
//          case 'dark':
//              myFunction1(x);
//              break;
//          case 'light':
//              myFunction2(x);
//              break;
//          default:
//              return false;
//      }
//  }

//  var buttons = document.getElementsByTagName('button');
//  for (var i = 0; i < buttons.length; i++) {
//      buttons[i].onclick = function (){
//          myFunction (this);
//      }
//  }




var darkTheme = document.getElementById("dark");
darkTheme = {
    backgroundcolor: "black",
    color: "white"
};
var lightTheme = document.getElementById("light");
lightTheme = {
    backgroundcolor: "orange",
    color: "black"
};


function applyTheme(theme) {
    document.body.style.backgroundColor = theme.backgroundcolor;
    document.body.style.color = theme.color;
}



//create a function addStyles
var addstyle = document.getElementById("add_style");
addstyle.addEventListener('click', addStyle);

function addStyle() {
    var wedoList = document.getElementById("wedoList");
    wedoList.lastElementChild.classList.add("text-primary");
    var addStyleToLink = wedoList.querySelectorAll('ul>li>a');
    for (var i = 0; i < addStyleToLink.length; i++) {
        addStyleToLink[i].classList.add('label', 'label-info');
    }
    var table = document.getElementById("table2");
    var rowsTable = table.querySelectorAll("tr:nth-child(even)");

    for (var b = 0; b < rowsTable.length; b++) {
        rowsTable[b].classList.add("striped");
    }
    
};

//adding new function addEvent with 'onmouseenter' and 'onmouseleave'

// var parag = document.getElementsByTagName("p");
//     for (i = 0; i < parag.length; i++) {
//       parag[i].onmouseenter = function(event) {
//           var target = event.target;
//           target.style.color = 'yellow';
//       }
//        parag[i].onmouseleave = function(event) {
//           var target = event.target;
//           target.style.color = '';
//       }
//     }
// <- this works too, but wihout creating function addEvent();


var parag = document.getElementsByTagName("p");
parag.onmouseenter = addEvent();

function addEvent() {
    var parag = document.getElementsByTagName("p");

    for (i = 0; i < parag.length; i++) {
        parag[i].onmouseenter = function (event) {
            var target = event.target;
            target.style.color = 'yellow';
            
        }
        parag[i].onmouseleave = function (event) {
            var target = event.target;
            target.style.color = '';
        }
    }
    
}

// var table = document.getElementById('table');

// table.onmouseover =  addHighlight();
// function addHighlight () {
//    var tr = document.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       tr[i].onmouseover = function(event) {
//           var target = event.target;

//           target.style.backgroundColor = 'yellow';
//       }
//         tr[i].onmouseout = function(event) {
//           var target = event.target;
//           target.style.backgroundColor = '';
//       }
//      }
// }

// var table = document.getElementById('tableExample');
// var tr = table.querySelectorAll('tr');
// tr.onmouseenter = addHighlight();

// function addHighlight() {
//     var table = document.getElementById('tableExample');
//     var tr = table.querySelectorAll('tr');

//     for (var i = 0; i < tr.length; i++) {
//         tr[i].onmouseenter = function (event) {
//             var target = event.target;
//             target.style.backgroundColor = 'lightgreen';
//         }
//         tr[i].onmouseleave = function (event) {
//             var target = event.target;
//             target.style.backgroundColor = '';
//         }
//     }
//     var td = table.querySelectorAll('td');
//     for (var x = 0; x < td.length; x++) {
//         td[x].onmouseenter = function (event) {
//             var target = event.target;
//             target.style.backgroundColor = 'lightgreen';
//         }
//     }
// }
//not works to highlight columns;

var table = document.getElementById('table2');
table.onmouseover = function(e) {
    e = e || window.event;
      
    var cell, cells, i, row,
        target = e.target || e.srcElement;
      
    if (target.tagName == 'TD') {
      cells = this.getElementsByTagName('TD');
        
      for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        row = cell.parentNode;
   
          
        if (cell == target) {
            cell.style.backgroundColor = 'green';
        } else {            
          cell.style.backgroundColor = cell.className == target.className ? 'yellow' : 'transparent';
        }
        
        if (row == target.parentNode) {
            row.style.backgroundColor = 'yellow';
        } else {
            row.style.backgroundColor = 'transparent';            
        }
      }
    }
  };