'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAJLVzS5xh8BAF8cnwdXdH7BNh9qu33WGgD01z6GLFHeTdmGKidn9t2irq8yieJrY8IpWPXZC4JhXe7opUdJrdy1W6KXZAgxdMuoo8QNhTt4pGgLaHj3w1npbkl34TwFNGy5dJwMUWY0JxxB3nICUfXn3Nmz79CS1ZBMmZAMagZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}