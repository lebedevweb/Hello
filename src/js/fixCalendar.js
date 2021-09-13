(() => {
	let calendarBody = document.querySelectorAll('.calendar_body')
	if (calendarBody) {
		calendarBody.forEach(e => {
			let row = e.rows
			//      console.log(row)
			if (row.length > 3) {
				for (let y = 0; y < e.rows.length; y++) {
					let firstCell = parseInt(row[y].cells[0].children[0].innerText)
					let lastCell = parseInt(row[y].cells[6].children[0].innerText)
//      console.log(cell)
					if (isNaN(firstCell) && isNaN(lastCell)) {
// 					row[y].parentNode.removeChild(row[y])
						row[y].innerHTML = ''
					}
				}
			}
		})
	}
})()