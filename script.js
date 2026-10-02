const select = document.getElementById('branchFilter');
const boxes = document.querySelectorAll('.merge-box');

select.addEventListener('change', (e) => {
    const branch = e.target.value;
    boxes.forEach(box => {
        if (box.dataset.branch === branch) {
        box.classList.remove('hidden');
        } else {
        box.classList.add('hidden');
        }
    });
});