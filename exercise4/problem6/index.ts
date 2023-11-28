export class BankAccount { 
  withdraw(amount: number) {} 
} 
 
export class FedexAccount { 
  sendMail(recipient: string) { 
    console.log(`Sending mail to ${recipient} via FedEx`); 
  } 
  recieveMail(sender: string) { 
    console.log(`Receiving mail from ${sender} via FedEx`); 
  } 
} 
 
export class KazPostAccount extends BankAccount { 
  sendMail(recipient: string) { 
    console.log(`Sending mail to ${recipient} via KazPost`); 
  } 
  recieveMail(sender: string) { 
    console.log(`Receiving mail from ${sender} via KazPost`); 
  } 
} 
 
export function withdrawMoney( 
  accounts: (BankAccount | KazPostAccount)[], 
  amount: number 
) { 
  for (const account of accounts) { 
    account.withdraw(amount); 
  } 
} 
 
export function sendLetterTo( 
  accounts: (FedexAccount | KazPostAccount)[], 
  recipient: string 
) { 
  for (const account of accounts) { 
    account.sendMail(recipient); 
  } 
}