function bin2dec(bin){
   let dex = 0
   for (let i = bin.lenght - 1; i--; i>=0){
       if  (bin[i] == '1'){
           dex = 2*dex+1
       }
       else if (bin[i]=='0') {
           dex = 2*dex
       }
       else{
           return undefined
       
       }
   } 
   return dex
}

