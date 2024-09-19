document.addEventListener("DOMContentLoaded", function() {
    const namaInput = document.getElementById('nama');
    const nimInput = document.getElementById('nim');
    const kelasInput = document.getElementById('kelas');
    const prodiInput = document.getElementById('prodi');
    const alamatInput = document.getElementById('alamat');
    const registrationForm = document.getElementById('registrationForm');
    const dataTable = document.getElementById('dataTable');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const namaValue = namaInput.value;
        const nimValue = nimInput.value;
        const kelasValue = kelasInput.value;
        const prodiValue = prodiInput.value;
        const alamatValue = alamatInput.value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${namaValue}</td>
            <td>${nimValue}</td>
            <td>${kelasValue}</td>
            <td>${prodiValue}</td>
            <td>${alamatValue}</td>
        `;
        dataTable.appendChild(newRow);

        namaInput.value = '';
        nimInput.value = '';
        kelasInput.value = '';
        prodiInput.value = '';
        alamatInput.value = '';

    });
});