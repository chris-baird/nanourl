(() => {
  const generateButtonEl = document.getElementById('generate')

  generateButtonEl.addEventListener('click', () => {
    let userUrl = document.getElementById('url-input')
    console.log(userUrl.value)
    if (userUrl.value === '') {
      return
    }
    fetch('api/nanourl/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url_input: userUrl.value
      })
    }).then(res => {
      return res.json()
    }).then(data => {
      if (data.error) {
        document.getElementById('error-message').innerText = data.error
      } else {
        let userUrl = document.getElementById('url-input').value = ''
        let message = document.createElement('span')
        message.innerText = 'Your Link Is: ' + window.location.href + 'api/nanourl/'
        let link = data.short_url
        let copyButton = document.createElement('button')
        copyButton.classList.add('btn', 'btn-info', 'mt-2')
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(window.location.href + 'api/nanourl/' + data.short_url);
        })
        copyButton.innerText = 'Copy'

        document.querySelector('#link').innerHTML = ''
        document.querySelector('#link').append(message, link, copyButton)
      }

    }).catch(err => {
      console.log(err);
    })
  })
})()
