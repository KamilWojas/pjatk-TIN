document.addEventListener('DOMContentLoaded', () => {
    const localStorageVar = localStorage.getItem('localStorageVar') || '';
    document.getElementById('localStorageValue').textContent = localStorageVar;

    document.querySelector('form').addEventListener('submit', (event) => {
        const localStorageVar = document.getElementById('localStorageVar').value;
        localStorage.setItem('localStorageVar', localStorageVar);
    });
});
