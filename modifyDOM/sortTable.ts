let table = document.getElementsByTagName('table')[0];
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => {
        let nameA = rowA.cells[0].textContent;
        let nameB = rowB.cells[0].textContent;
        if (nameA > nameB)
            return 1;
        else if (nameA < nameB)
            return -1;
        else
            return 0;
    });

table.tBodies[0].append(...sortedRows);
/*
    <table>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>John</td>
            <td>Smith</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Pete</td>
            <td>Brown</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Ann</td>
            <td>Lee</td>
            <td>5</td>
        </tr>
    </table>
*/
