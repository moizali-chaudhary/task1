const tableData = [
    {
        "Name": "Moiz chaudhry",
        "Email": "moizali33@gmail.com",
        "City" : "Muzaffarabard",
        "Gender": "Male",
        "Qualification": "BS/graduation"
    },
    {
        "Name": "Mubashar chaudhry",
        "Email": "mubashar44@gmail.com",
        "City" : "Muzaffarabard",
        "Gender": "Male",
        "Qualification": "BS/graduation"
    },
    {
        "Name": "Ahmed chaudhry",
        "Email": "ahmed11@gmail.com",
        "City" : "Muzaffarabard",
        "Gender": "Male",
        "Qualification": "BS/graduation"
    },
    {
        "Name": "haris Abbasi",
        "Email": "haris66@gmail.com",
        "City" : "Muzaffarabard",
        "Gender": "Male",
        "Qualification": "BS/graduation"
    }

]

function getTH (){
    const column = Object.keys(tableData[0]);
    const head = document.querySelector("thead");
    let tags = '<tr>';
    for (i = 0; i < column.length; i++){
        tags = tags + `<th>${column[i]}</th>`;
    }
    tags += '</tr>';
    head.innerHTML = tags;
   
}
function getTD (){
    const tableBody = document.querySelector("tbody");
    let tags = "";
    tableData.map(d =>{
        tags += `<tr>
                    <td>${d.Name}</td>
                    <td>${d.Email}</td>
                    <td>${d.City}</td>
                    <td>${d.Gender}</td>
                    <td>${d.Qualification}</td>

                </tr>`
    })
    tableBody.innerHTML = tags;
}
getTD(); 
getTH();