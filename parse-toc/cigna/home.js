


const data = fetch('./planObj.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data[0].planNames);
        // console.log(data[0].location);

        // add to table content div, multiple rows with columns data[i].planNames data[i].location
        const table = document.querySelector('.table-content');
        // create rows from data
        data.map((item, index) => {
            const row = document.createElement('div');
            row.classList.add('table-row');
            const column1 = document.createElement('div');
            column1.classList.add('table-cell-plan');
            const column2 = document.createElement('div');
            column2.classList.add('table-cell-location');

            const column1Text = document.createTextNode(item.planNames);
            const column2Text = document.createTextNode(item.location);

            column1.appendChild(column1Text);
            column2.appendChild(column2Text);

            row.appendChild(column1);
            row.appendChild(column2);

            table.appendChild(row);
        });
        // });

        const searchInput = document.querySelector("#search-input");
        const searchButton = document.getElementById("search-button");
        const tableRows = document.querySelectorAll(".table-row");
        const resultCounter = document.querySelector(".result-counter");


        searchButton.addEventListener("click", () => {
            const searchTerm = searchInput.value.toLowerCase();
            let matchingRows = 0;

            tableRows.forEach(row => {
                const planNameCell = row.querySelector(":nth-child(1)");
                const locationCell = row.querySelector(":nth-child(2)");
                const planNameMatch = planNameCell.textContent.toLowerCase().includes(searchTerm);
                const locationMatch = locationCell.textContent.toLowerCase().includes(searchTerm);
                if (planNameMatch || locationMatch) {
                    row.style.display = "";
                    matchingRows++;

                } else {
                    row.style.display = "none";
                }
            });
            resultCounter.textContent = `${matchingRows} results`



        });



















        // for (let i = 0; i < data.length; i++) {
        //     // console.log(data[i].planNames);
        //     // console.log(data[i].location);
        //     let tableRow = document.createElement('tr');
        //     let tableData1 = document.createElement('td');
        //     tableData1.style.maxHeight = '250px';
        //     tableData1.style.overflow = 'auto';
        //     let tableData2 = document.createElement('td');

        //     let textNode1 = document.createTextNode(data[i].planNames);
        //     let textNode2 = document.createTextNode(data[i].location);
        //     tableData1.appendChild(textNode1);
        //     tableData2.appendChild(textNode2);
        //     tableRow.appendChild(tableData1);
        //     tableRow.appendChild(tableData2);
        //     tableBody.appendChild(tableRow);
        // }
        // table.appendChild(tableBody);
        // document.getElementById('toc').appendChild(table);

    });


// document.addEventListener('DOMContentLoaded', function () {
//     // your code here
//     document.getElementById('search').addEventListener('click', function () {
//         console.log('clicked')
//         let input = document.getElementById('searchInput').value
//         input = input.toLowerCase();
//         let table = document.getElementById('toc');
//         let tr = table.getElementsByTagName('tr');
//         for (let i = 0; i < tr.length; i++) {
//             let td = tr[i].getElementsByTagName('td')[0];
//             if (td) {
//                 let textValue = td.textContent || td.innerText;
//                 if (textValue.toLowerCase().indexOf(input) > -1) {
//                     tr[i].style.display = "";
//                 } else {
//                     tr[i].style.display = "none";
//                 }
//             }
//         }

//     });
// });

