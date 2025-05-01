//compartilhar página

const shareButton = document.getElementById("shareBtn");

shareButton.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text: "",
        url: window.location.href,
      });
    } catch (error) {
      alert(
        `Desculpe, não foi possível compartilhar: ${error.message}. Tente novamente!`
      );
    }
  } else {
    alert("O compartilhamento não é suportado neste navegador.");
    window.open(
      `https://api.whatsapp.com/send?text=Confira%20minha%20página! ${window.location.href}`,
      "_blank"
    );
  }
});

// Função para copiar a chave PIX

function copiarPix() {
  const chavePix = "(86) 9 9956-2472";

  navigator.clipboard
    .writeText(chavePix)
    .then(() => {
      const toast = document.getElementById("toast");
      toast.style.opacity = "1";

      setTimeout(() => {
        toast.style.opacity = "0";
      }, 2000);

      const botao = document.querySelector(".botao-copiar");
      botao.style.color = "#696969";
      setTimeout(() => {
        botao.style.color = "#bcbcbc";
      }, 500);
    })
    .catch((err) => {
      console.error("Falha ao copiar:", err);
      alert("Não foi possível copiar. Tente manualmente.");
    });
}

// Função para abrir o modal

document.getElementById("abrirModal").addEventListener("click", function () {
  document.getElementById("modalQrCode").style.display = "flex";
});

document.querySelector(".fechar").addEventListener("click", function () {
  document.getElementById("modalQrCode").style.display = "none";
}); // Fecha o modal ao clicar no X

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("modalQrCode")) {
    document.getElementById("modalQrCode").style.display = "none";
  }
}); // Fecha o modal ao clicar fora do conteúdo

// Função para baixar qr code

function downloadImagem() {
  const imagem = document.getElementById("imagemParaDownload");

  const link = document.createElement("a");
  link.href = imagem.src;
  link.download = "QR Code.jpg";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
