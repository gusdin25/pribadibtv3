exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XPTN}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${XPTN}*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: _Gus Din_
║├≽️🛡️ *DESIGNER*: _Gus Din_
║├≽️🛡️ *saweria*: https://saweria.co/gusdin
╠════════════════════
╠════════════════════
║  *${XPTN}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Instagram <Follow>*
║│ _${instagram}_
║│2. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY GusDin*
╚════════════════════`
}
