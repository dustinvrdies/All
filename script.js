async function askAssistant() {
  const input = document.getElementById('userInput').value;
  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input })
  });
  const data = await res.json();
  document.getElementById('response').innerText = data.reply;
}
