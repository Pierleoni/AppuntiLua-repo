function copyToClipboard(idTxt,idBtn) {
    const codeSnippet = document.getElementById(idTxt);
    const btn = document.getElementById(idBtn);
    
    navigator.clipboard.writeText(codeSnippet.textContent);
    alert('Code copied to clipboard!');
    btn.innerHTML = '<img src="/Media/verified.png" alt="Verified Icon" class="verified-icon">';
}