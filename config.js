const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="arthurnyamula@gmail.com"
global.location="Zimbabwe,Harare."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sixom67481:QMF41NMTDOazw0tH@cluster0.toptapq.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/DarkPrince2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VacZExgEwEk0IFagfm2t";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VacZExgEwEk0IFagfm2t" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "263734255671" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263734255671";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_34_04_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIeU1tcng2Mzd6NFN1OEFIdGV5ZTNWaE9TeEx1SGRSQWpjdkpsWjZZbjMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzczNDI1NTY3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEYwMzc3MTg0REQ2MDYwQjcxOTQyOTVDNDU2RUM1MzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzEzNzUzMjQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzM0MjU1NjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NTY2QjJCOTBFN0Q5QzZDMjhGRkQ1QzU2QUIwRDgzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM3NTMyNDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXFsbnV6OG1SRDJVclU4VVBod3dlZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZTU5MDczNC05ZWQwLTQ3ZTUtYTljNS00NzY3ZTU0MmU2MGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAyOSxcbiAgICAgIDUsXG4gICAgICAxNzMsXG4gICAgICA1MSxcbiAgICAgIDExOSxcbiAgICAgIDksXG4gICAgICAxNjEsXG4gICAgICA0OCxcbiAgICAgIDg2LFxuICAgICAgNDgsXG4gICAgICAzNSxcbiAgICAgIDE1LFxuICAgICAgMTAzLFxuICAgICAgMTc5LFxuICAgICAgMjA4LFxuICAgICAgMjM2LFxuICAgICAgOTYsXG4gICAgICA1NSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDEzNSxcbiAgICAgIDcwLFxuICAgICAgMTk3LFxuICAgICAgMTE5LFxuICAgICAgMjE3LFxuICAgICAgMTMxLFxuICAgICAgMjA0LFxuICAgICAgMTE5LFxuICAgICAgMjQxLFxuICAgICAgMjQyLFxuICAgICAgMTc1LFxuICAgICAgMjMsXG4gICAgICA1NixcbiAgICAgIDEwOSxcbiAgICAgIDkyLFxuICAgICAgMjQ3LFxuICAgICAgMTUyLFxuICAgICAgMTM3LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKS044Tk1FRUpPWmw3RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRTNmdTeUZLTk1tN3Y5NGVwNlpTSGl0bTNFNzlQdHJUMzJFdjBhTTAyekU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRjMvUkxZSXRpQW4xemVHK2J5WjI2UmNuQVVVaS9vNzZpSlFSS1htWnFSVzdseWo3NG1aUTlydCtPc1d5YnhNMjdQKzlFeVowekR4b0krckhaNWhNREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY1lLVGlYMzlUeWRyRm9JZWNyb3NzUVZ2U3laOGVtRnMxSTd0MCtoKy93NFVaOVJtYWcxbTR5TVpNLzBVa1k5eWdCaHFuTFRNWU5WY1BUV05CdXNHQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MzQyNTU2NzE6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1MjQ1MDIxNzQ5NDg1OjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1lXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MzQyNTU2NzE6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM3NTMyMzlcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Wolf",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Wolf",
  ownername:process.env.OWNER_NAME|| "It'x Wolf",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
