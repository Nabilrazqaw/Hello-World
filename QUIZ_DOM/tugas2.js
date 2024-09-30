document.addEventListener("DOMContentLoaded", function() {
    const namaInput = document.getElementById('nama');
    const nimInput = document.getElementById('nim');
    const kelasInput = document.getElementById('kelas');
    const prodiInput = document.getElementById('prodi');
    const registrationForm = document.getElementById('registrationForm');
    const dataTable = document.getElementById('dataTable');

    namaInput.addEventListener('blur', function() {
        if (!namaInput.value) {
          alert("Nama tidak boleh kosong!");
        }
      });
      nimInput.addEventListener('keypress', function(event) {
        if (!/\d/.test(event.key)) {
          event.preventDefault();
        }
      });
      
      prodiInput.addEventListener('change', function() {
        const previewElement = document.getElementById('preview');
        previewElement.innerText = `You selected: ${prodiInput.value}`;
      });

      namaInput.addEventListener('focus', function() {
        console.log("Nama input is focused!");
      });

      dataTable.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'TD') {
          event.target.style.backgroundColor = 'green';
        }
      });

      dataTable.addEventListener('mouseout', function(event) {
        if (event.target.tagName === 'TD') {
          event.target.style.backgroundColor = 'grey';
        }
      });

      registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const namaValue = namaInput.value;
        const nimValue = nimInput.value;
        const kelasValue = kelasInput.value;
        const prodiValue = prodiInput.value;
        
        if (!namaValue || !nimValue || !kelasValue || !prodiValue) {
          alert("Tolong isi bagian ini!");
          return;
        }
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${namaValue}</td>
            <td>${nimValue}</td>
            <td>${kelasValue}</td>
            <td> <a href="${prodiValue}" target="_blank">${prodiValue}</a></td>
`;       
        dataTable.appendChild(newRow);

        namaInput.value = '';
        nimInput.value = '';
        kelasInput.value = '';
        prodiInput.value = '';
    });
});