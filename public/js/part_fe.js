let dataSet = []
let objPartEntry = {
    "RxNo": "",
    "PartNo": "",
    "PartName": "",
    "Model": "",
    "Production": "",
    "SectionCode": "",
    "InspectedQTY": 0,
    "Detail": "",
    "Detail2": "",
    "Active": "",
    "AddDate": "",
    "UpdateDate": "",
    "AddBy": "",
    "UpdateBy": ""
}
let objPartSearch = {
    "RxNo": "",
    "PartNo": "",
    "PartName": "",
    "Model": "",
    "Production": "",
    "SectionCode": "",
    "InspectedQTY": 0,
    "Detail": "",
    "Detail2": "",
    "Active": "",
    "AddDate": "",
    "UpdateDate": "",
    "AddBy": "",
    "UpdateBy": ""
}
let dataControlPartEntry = ''
function clearPartEntry() {
    document.getElementById('edtRxNo_Entry').value = ''
    document.getElementById('edtPartNo_Entry').value = ''
    document.getElementById('edtPartName_Entry').value = ''
    document.getElementById('edtModel_Entry').value = ''
    document.getElementById('edtProduction_Entry').value = ''
    document.getElementById('edtSectionCode_Entry').value = ''
    document.getElementById('edtInspectedQTY_Entry').value = 0
    document.getElementById('edtDetail_Entry').value = ''
    document.getElementById('edtDetail2_Entry').value = ''
    document.getElementById('chkActive_Entry').checked = true
}
function clearPartSearch() {
    document.getElementById('edtRxNo_Search').value = ''
    document.getElementById('edtPartNo_Search').value = ''
    document.getElementById('edtPartName_Search').value = ''
    document.getElementById('edtModel_Search').value = ''
    document.getElementById('edtProduction_Search').value = ''
    document.getElementById('edtSectionCode_Search').value = ''
    document.getElementById('edtInspectedQTY_Search').value = 0
    document.getElementById('edtDetail_Search').value = ''
    document.getElementById('edtDetail2_Search').value = ''
    document.getElementById('chkActive_Search').checked = true
}

function collectPartEntry() {
    objPartEntry.RxNo = document.getElementById('edtRxNo_Entry').value
    objPartEntry.PartNo = document.getElementById('edtPartNo_Entry').value
    objPartEntry.PartName = document.getElementById('edtPartName_Entry').value
    objPartEntry.Model = document.getElementById('edtModel_Entry').value
    objPartEntry.Production = document.getElementById('edtProduction_Entry').value
    objPartEntry.SectionCode = document.getElementById('edtSectionCode_Entry').value
    objPartEntry.InspectedQTY = document.getElementById('edtInspectedQTY_Entry').value
    objPartEntry.Detail = document.getElementById('edtDetail_Entry').value
    objPartEntry.Detail2 = document.getElementById('edtDetail2_Entry').value
    objPartEntry.Active = document.getElementById('chkActive_Entry').checked ? 1 : 0
    objPartEntry.AddDate = ''
    objPartEntry.UpdateDate = ''
    objPartEntry.AddBy = ''
    objPartEntry.UpdateBy = ''
}
function collectPartSearch() {
    objPartSearch.RxNo = document.getElementById('edtRxNo_Search').value
    objPartSearch.PartNo = document.getElementById('edtPartNo_Search').value
    objPartSearch.PartName = document.getElementById('edtPartName_Search').value
    objPartSearch.Model = document.getElementById('edtModel_Search').value
    objPartSearch.Production = document.getElementById('edtProduction_Search').value
    objPartSearch.SectionCode = document.getElementById('edtSectionCode_Search').value
    objPartSearch.InspectedQTY = document.getElementById('edtInspectedQTY_Search').value
    objPartSearch.Detail = document.getElementById('edtDetail_Search').value
    objPartSearch.Detail2 = document.getElementById('edtDetail2_Search').value
    objPartSearch.Active = document.getElementById('chkActive_Search').checked ? 1 : 0
    objPartSearch.AddDate = ''
    objPartSearch.UpdateDate = ''
    objPartSearch.AddBy = ''
    objPartSearch.UpdateBy = ''
}

function displayPartEntry() {
    document.getElementById('edtRxNo').value = objPartEntry.RxNo
    document.getElementById('edtPartNo').value = objPartEntry.PartNo
    document.getElementById('edtPartName').value = objPartEntry.PartName
    document.getElementById('edtModel').value = objPartEntry.Model
    document.getElementById('edtProduction').value = objPartEntry.Production
    document.getElementById('edtSectionCode').value = objPartEntry.SectionCode
    document.getElementById('edtInspectedQTY').value = objPartEntry.InspectedQTY
    document.getElementById('edtDetail').value = objPartEntry.Detail
    document.getElementById('edtDetail2').value = objPartEntry.Detail2
    document.getElementById('edtDetail2').checked = objPartEntry.Active
}

async function dataEntry_Part() {
    let url = '/part_api'
    let method = ''
    if (dataControlPartEntry === 'Add') {
        method = 'post'
    }
    else if (dataControlPartEntry === 'Edit') {
        method = 'put'
    }
    else if (dataControlPartEntry === 'Search' || dataControlPartEntry === 'Get') {
        method = 'get'
    }
    else if (dataControlPartEntry === 'Delete') {
        method = 'delete'
    }
    if (dataControlPartEntry !== '') {
        collectPartEntry()
        await reqAndRes(url, method, objPartEntry, function (dataRes) {
            console.log(dataRes)

            document.getElementById('btnPartClose').click()
            document.getElementById('modal-title-label-control').innerHTML = 'NONE'
            clearPartSearch()
            showDataSearch()
        })
    }

    dataControlPartEntry = ''
}

async function showDataSearch() {
    $("#part_table").DataTable().destroy()
    let innerHTML = ''
    let tbody = document.getElementById('part_body')
    tbody.innerHTML = innerHTML
    collectPartSearch()

    await reqAndRes('http://localhost:8080/part_api', 'GET', objPartSearch, function (dataRes) {
        dataSet = dataRes
        dataSet.forEach(data => {
            innerHTML += `
          <tr>
            <td>${data.RxNo}</td>
            <td>${data.PartNo}</td>
            <td>${data.PartName}</td>
            <td>${data.Model}</td>
            <td>${data.Production}</td>
            <td>${data.SectionCode}</td>
            <td></td>
            <td>${data.Detail}</td>
            <td>${data.Detail2}</td>
            <td>${data.Active}</td>
            <td>${data.AddDate}</td>
            <td>${data.UpdateDate}</td>
            <td>${data.AddBy}</td>
            <td>${data.UpdateBy}</td>
            
           
          </tr>
      `

        });

    })


    tbody.innerHTML = innerHTML

    $("#part_table").dataTable({
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
    document.getElementById('part_table_wrapper').classList.add('p-2')
    // let thead = document.querySelector('#tbTableTroubleAndActionHistory thead')
    let row = document.querySelectorAll('#part_table_wrapper .row')

    row[1].classList.add('mb-2', 'mt-2')
    row[1].querySelector('div').id = 'boxPartTable'
    row[1].classList.remove('row')

    document.querySelectorAll('#part_table_wrapper thead tr th.sorting_asc').forEach(th => {
        th.classList.remove('sorting_asc')
    });

    document.querySelectorAll('#part_body tr td')[0].click()
}


function startPage() {
    clearPartSearch()
    showDataSearch()
}

document.getElementById('btnPartAdd').onclick = function () {
    dataControlPartEntry = 'Add'
    document.getElementById('modal-title-label-control').innerHTML = 'ADD'
    clearPartEntry()
    displayPartEntry()
}

document.getElementById('btnSearchPart').onclick = function () {
    showDataSearch()
}
document.getElementById('btnResetPart').onclick = function () {
    clearPartSearch()
    showDataSearch()
}




startPage()