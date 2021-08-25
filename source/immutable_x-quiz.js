let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    button = document.body.querySelector('.js-submit'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Option 1: 400,000; Option 2: 600,000',
      'Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room',
      'Ethereum',
      'NFT minting and trading',
      'BTC, ETH, USDC, USDT',
      'Option 1: $10 per token, $500 limit. Option 2: $15 per token, $500 limit',
      'The user\'s purchase may be cancelled and the user may be banned from future CoinList sales',
      'CoinList.co',
      'The user\'s account will be terminated and all purchases will be cancelled '
    ]
  
  console.log('❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  await timeout(200)
  button.click()
}

run()