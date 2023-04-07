import * as fs from 'fs';
class jsonhelper{
    public ExtractKeyValuePair(key1 :string, key2:string):string {
        const file= fs.readFileSync('./src/test-data/test.json',{encoding:'utf-8'}) 
        const rawdata=JSON.parse(file)
        const result=rawdata[key1][key2]; 
         console.log('-.---------------->',result)
           return result
       }
   }

   export default new jsonhelper();