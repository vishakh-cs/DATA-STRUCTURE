// string replace \

    function stringReplace(str,value){

        let result = ""
        for(let i = 0;i<str.length;i++){
          let AscciCode = str.charCodeAt(i)  
          result += String.fromCharCode(AscciCode + value)

        }
        return result;
        
    }

    let stringToReplace = "abc"

    console.log("string Replace =",stringReplace(stringToReplace,2));