let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/gay', {
    avatar: pp, 
  }), 'gay.png', `🏳️‍🌈  *Gay :* ${name}\n\n*_Who wants to rape this gay☠️!_*
  *من يريد اغتصاب هذا المثلي الزامل 😂😂😂☠️*`, m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['GAY'] 

export default handler
