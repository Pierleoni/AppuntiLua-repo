function copyToClipboard(idTxt, idBtn) {
    const codeSnippet = document.getElementById(idTxt);
    const btn = document.getElementById(idBtn);

    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = codeSnippet.textContent;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Code copied to clipboard!');
    btn.innerHTML = '<img src="/Media/verified.png" alt="Verified Icon" class="verified-icon">';
}






