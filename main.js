const openModalBtn = document.getElementById('button')
const closeBtn = document.getElementById('close')
const submitBtn = document.getElementById('submit')
const modalDialog = document.getElementById('modal')
const modalForm = document.forms[0]


openModalBtn.onclick = () => modalDialog.showModal()
closeBtn.onclick = () => modalDialog.close()
// modalForm.onsubmit = () => modalForm.classList.add('checked')
submitBtn.onclick = () => modalForm.classList.add('checked')