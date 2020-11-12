exports.definitions = function () {
  const randomElement = function (items) {
    return items[Math.floor(Math.random() * items.length)]
  }

  const sayCumming = function (message, word) {
    message.channel.send(randomElement(gifs.cumming))
    message.channel.send('Hi hi hi, du hast ' + word + ' gesagt')
  }
  const sayHaha= function (message, word) {
    message.channel.send(randomElement(gifs.lol))
    message.channel.send('Haha! Du hast ' + word + ' gesagt')
  }

  const gifs = {
    'lol': [
      'https://media.giphy.com/media/L0SaMZxxqMgsAJf69v/giphy.gif',
      'https://media.giphy.com/media/GpyS1lJXJYupG/giphy.gif',
      'https://media.giphy.com/media/U0L0whTE3lzMc/giphy.gif',
      'https://media.giphy.com/media/fbUWl2JJezSbm/giphy.gif',
      'https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif',
      'https://media.giphy.com/media/B3Po4SymLMfYc/giphy.gif',
      'https://media.giphy.com/media/qpUsz8mMgmIak/giphy.gif',
      'https://media.giphy.com/media/QgixZj4y3TwnS/giphy.gif',
    ],
    'cumming': [
      'https://media.giphy.com/media/QSzTAwITkM0FO/giphy.gif',
      'https://media.giphy.com/media/nEZ822P20D1NeEv0lU/giphy.gif',
      'https://media.giphy.com/media/l0HlUHWbjYgK211zG/giphy.gif',
      'https://media.giphy.com/media/2wwZRBY93H1YY/giphy.gif',
      'https://media.giphy.com/media/aDG2cg3pMLQcw/giphy.gif',
      'https://media.giphy.com/media/utWpnMhVWRw1G/giphy.gif',
      'https://media.giphy.com/media/CO7xyiUlvkG6Q/giphy.gif',
      'https://media.giphy.com/media/zEvIW7J6pTL1K/giphy.gif',
    ],
  }

  return {
    'komm': function (message) {
    message.channel.send(randomElement(gifs.cumming))
    message.channel.send(':rofl: Ich komme auch gleich XD')
    },
    'penis': function (message) {
        sayHaha(message,'Penis');
    },
    'arsch': function (message) {
        sayHaha(message,'Arsch');
    },
  }
}
