(function () {
  const email = document.getElementById("email");

  email.addEventListener("click", eventCopyEmail);

  function copyEmail() {
    navigator.clipboard.writeText(email.getAttribute("content"));
  }

  function eventCopyEmail() {
    copyEmail();
    feedbackCopied();
  }

  function feedbackCopied() {
    alert("Email copiado para sua área de transferência!");
  }
})();
