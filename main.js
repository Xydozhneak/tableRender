const parentDiv = document.createElement('div');
const table = document.createElement('table');
parentDiv.append(table);

for (let i = 0; i < 10; i++) {
  const tr = document.createElement('tr');
  table.append(tr);
  tr.style.border = '1px solid black';
  for (let j = 0; j < 10; j++) {
    const td = document.createElement('td');
    tr.append(td);
    td.innerText = (i * 10) + (j + 1);
    td.style.border = '1px solid black';
  }
}
table.style.border = '1px solid black';
document.body.append(parentDiv);