<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log("Agro Pro: Pronto para uso Offline!"))
      .catch((err) => console.log("Erro no SW:", err));
  }
</script>
