const RichEmbed = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
function clMsg(){

}
const fs = require('fs');
var ticking = false;
var skill1 = {

	
 name : "Мгновенное лечение", 
            
 description : "Восстанавливает 15 hp",
 
 use: function(boss1) {

 boss1.hp += 15;	
	
}

}
var Boss = {
  maxHP : 100,
  hp : 100,
  dmg : 10,
  def : 5,
  mana : 100,
  manaRecovery : 5,
  hpRecovery : 5,
  skills : [skill1, null],  
  
}

function update(boss1, player1){

if(boss1.hp <= 0){
if(player1.hp > 0){
   
   Win();
   
   }else{
   
   Draw();
   
   }   



   
}
if(player1.hp <= 0){
if(boss1.hp > 0){
  
  Lose();
  
}else{
  
 Draw();
  
}}
}

var prefix = "lev!"
let UserData = JSON.parse(fs.readFileSync("UserData.json", "utf8"));
client.on("ready", () => {
  console.log("Ready");
  client.user.setPresence({ game: { name: 'Хентай', type: 0 } });
});


client.on('message', message =>{
        if (ticking === false){
          setTimeout(clMsg, 172800000);
	  ticking = true;
	}
	if(!!message.guild){
	let mGuild = message.guild;
	let sender = message.author;
	if(!UserData[sender.id + message.guild.id]) UserData[sender.id + message.guild.id] = {};
	if(!UserData[sender.id + message.guild.id].money) UserData[sender.id + message.guild.id].money = 0;
	if(!UserData[sender.id + message.guild.id].appedSatan) UserData[sender.id + message.guild.id].appedSatan = false;
	if(!UserData[sender.id + message.guild.id].appedAnime) UserData[sender.id + message.guild.id].appedAnime = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedVal2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedAnime2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedSatan2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedActiv = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedActiv2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedVal = false;
	if(!UserData[sender.id + message.guild.id].slots) UserData[sender.id + message.guild.id].slots = 1;
	if(!UserData[sender.id + message.guild.id].slot1) UserData[sender.id + message.guild.id].slot1 = "nothing";
  if(!UserData[sender.id + message.guild.id].hasKortik) UserData[sender.id + message.guild.id].hasRA = false;  
    
    
    
	const laMember = message.guild.member(message.author);
	
	if(UserData[sender.id + message.guild.id].appedSatan === false){
		if (message.guild.member(message.author).roles.find('id' , '527101457007247372')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedSatan = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedAnime === false){
		if (message.guild.member(message.author).roles.find('id' , '527105592087674880')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedAnime = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedVal === false){
		if (message.guild.member(message.author).roles.find('id' , '527112341628780555')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedVal = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedActiv === false){
		if (message.guild.member(message.author).roles.find('id' , '527915620369563668')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedActiv = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedSatan2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527227720279654409')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedSatan2 = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedAnime2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527420158906597378')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedAnime2 = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedVal2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527420175931408384')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedVal2 = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedActiv2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527915919599468554')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedActiv2 = true;
		}
	}
	fs.writeFile("UserData.json", JSON.stringify(UserData), (err) =>{
	if (err) console.error (err);
	});
	
	
	if(message.content.startsWith(prefix + 'raid ')){
		
		let arg = message.slice((prefix + 'raid ').lenghth);
		
		if (arg === "1"){
		
			message.chanel.send("Битва начата! Ваш противник: **ВАЛАКАСОНЕНАВИСТНИК**");
      message.channel.send("Ваш ход");
			
		}
		
		};
	if(message.content.startsWith(prefix + 'balance')){
        message.channel.send("Ваш баланс уровней:" + UserData[sender.id + message.guild.id].money);
		message.delete();
		};
	if(message.content.startsWith(prefix + 'shop')){
		message.channel.send("1.Ньюфаг - 3 левела");
        message.channel.send("2.Двуклеточное - 10 левелов");
        message.channel.send("3.Яйца жирафа - 2 левела");
		message.delete();
		};
	if(message.content.startsWith(prefix + 'buy 1')){
		if(UserData[sender.id + message.guild.id].money >= 3){
			message.member.addRole('527113461617000448');
			UserData[sender.id + message.guild.id].money -= 3;
			message.channel.send("Теперь " + message.author.username + " ньюфаг!!!");
			message.delete();
		}else{
			message.author.send("Ти нищий кролб");
			message.delete();
		};
		};
		if(message.content.startsWith(prefix + 'buy 2')){
		if(UserData[sender.id + message.guild.id].money >= 10){
			message.member.addRole('528172871617347584');
			UserData[sender.id + message.guild.id].money -= 10;
			message.channel.send("Теперь " + message.author.username + " двуклеточное!!!");
			message.delete();
		}else{
			message.channel.send(message.author.username + " - нищий кролб");
			message.delete();
		};
		};
    if(message.content.startsWith(prefix + 'buy 3')){
		if(UserData[sender.id + message.guild.id].money >= 2){
			UserData[sender.id + message.guild.id].hasRA = true;
			UserData[sender.id + message.guild.id].money -= 2;
			message.channel.send("Теперь " + message.author.username + " имеет яйца жирафа!!!");
			message.delete();
		}else{
			message.channel.send(message.author.username + " - нищий кролб");
			message.delete();
		};
		};
	};
});

client.login(process.env.BOT_TOKEN);
