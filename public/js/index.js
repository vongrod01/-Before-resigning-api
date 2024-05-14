function startPage(){
    $("#insp_data_table").DataTable().destroy()
  let innerHTML = ''
  let tbody = document.getElementById('insp_data_body')
  tbody.innerHTML = innerHTML
  for (let index = 0; index < 120; index++) {
    
    innerHTML += `
      <tr>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
        <td>Data row ${index + 1}</td>
       
      </tr>
  `
  }
  
  tbody.innerHTML = innerHTML

  $("#insp_data_table").dataTable({
    ordering: false,
    "lengthMenu": [
      [25, 50, 100, -1],
      [25, 50, 100, "All"]
    ],
    "pageLength": 25,
    select: {
      items: 'row',

    },

  })

  // #tbTableTroubleAndActionHistory_wrapper <---- datatable genarate ขึ้นมา
  document.getElementById('insp_data_table_wrapper').classList.add('p-2')
  // let thead = document.querySelector('#tbTableTroubleAndActionHistory thead')
  let row = document.querySelectorAll('#insp_data_table_wrapper .row')

  row[1].classList.add('mb-2', 'mt-2')
  row[1].querySelector('div').id = 'boxInspDataTable'
  row[1].classList.remove('row')

  document.querySelectorAll('#insp_data_table_wrapper thead tr th.sorting_asc').forEach(th => {
    th.classList.remove('sorting_asc')
  });

  document.querySelectorAll('#insp_data_body tr td')[0].click()
}


startPage()