function createCalendar(elem, year, month) {
    const WEEK_DAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    const table = document.createElement("table");
    const headtr = document.createElement("tr");
    const date = new Date(year, month - 1);

    elem.append(table);
    table.append(headtr);

    for (const day of WEEK_DAYS) {
        const th = document.createElement("th");
        
        th.textContent = day;
        headtr.append(th);
    }

    do {
        const tr = document.createElement("tr");

        table.append(tr);
        
        for (let day = 1; day <= 7; day++) {
            const td = document.createElement("td");

            tr.append(td);

            if (day < date.getDay()) continue;

            td.textContent = date.getDate();
            date.setDate(date.getDate() + 1);
        }
    } while (date.getDate() != 1);
}

const container = document.getElementById("container");

createCalendar(container, 2012, 9);