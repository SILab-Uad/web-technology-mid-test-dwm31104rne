// Fungsi untuk menghasilkan kata sandi berdasarkan input pengguna
const generatePassword = (length, options) => {
    // Set karakter untuk pembuatan kata sandi
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // Buat variabel untuk set karakter berdasarkan opsi yang dipilih
    let selectedChar = "";
    if (options.includeUppercase) selectedChar += uppercase;
    if (options.includeLowercase) selectedChar += lowercase;
    if (options.includeNumbers) selectedChar += numbers;
    if (options.includeSpecialChars) selectedChar += specialChars;

    if (selectedChar === "") {
        alert("Error WOY LAH, CENTANG DULU");
        return null;
    }
    
    // Hasilkan kata sandi berdasarkan kriteria yang dipilih
    let password = "";
    for (let i = 0; i < length; i++) {
        const indexChar = Math.floor(Math.random() * selectedChar.length);
        password += selectedChar[indexChar];
    }

    return password;
};

// Tambahkan event listener pada tombol untuk memanggil generatePassword dan menampilkan output
document.getElementById("generateBtn").addEventListener('click', () => {
    const length = parseInt(document.getElementById("length").value, 10);
    const options = {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked
    };
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password || "Kata sandi gagal dibuat.";
});

// Implementasikan fungsionalitas salin ke papan klip
document.getElementById("copyBtn").addEventListener('click', () => {
    const password = document.getElementById("passwordOutput").textContent;
    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => alert("Kata sandi telah disalin ke clipboard!"))
            .catch(err => console.error("Gagal menyalin kata sandi:", err));
    } else {
        alert("Tidak ada kata sandi untuk disalin.");
    }
});
