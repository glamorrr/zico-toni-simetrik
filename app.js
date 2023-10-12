function main() {
  // Encrypt form logic
  const encryptForm = document.querySelector('#encrypt-form');
  encryptForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = e.target.key.value?.trim();
    const plaintext = e.target.plaintext.value?.trim();

    if (!key || !plaintext) return;

    const ciphertext = CryptoJS.AES.encrypt(plaintext, key);

    const tr = document.createElement('tr');

    tr.innerHTML = `
   <td>${key}</td>
   <td><mark>${plaintext}</mark></td>
   <td>${ciphertext}</td>
   `;
    document.querySelector('tbody').appendChild(tr);

    const modal = new bootstrap.Modal(document.getElementById('encryptModal'));
    document.querySelector('.encryptModal__key').textContent = key;
    document.querySelector('.encryptModal__plaintext').textContent = plaintext;
    document.querySelector('.encryptModal__ciphertext').textContent = ciphertext;
    modal.show();
  });

  // Decrypt form logic
  const decryptForm = document.querySelector('#decrypt-form');
  decryptForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = e.target.key.value?.trim();
    const ciphertext = e.target.ciphertext.value?.trim();

    if (!key || !ciphertext) return;

    const plaintext = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);

    const modal = new bootstrap.Modal(document.getElementById('decryptModal'));
    document.querySelector('.decryptModal__plaintext').textContent = plaintext;
    modal.show();
  });
}

main();
