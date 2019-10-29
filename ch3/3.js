function countBs(str){
    let len=str.length,s=0;
    for(let i=0;i<len;i++)
        if(str.charAt(i)=='B')
            s++;
    return s;
}

function countChar(str,ch){
    let len=str.length,s=0;
    for(let i=0;i<len;i++)
        if(str.charAt(i)==ch)
            s++;
    return s;
}

console.log(countBs('Bitor BBC'));
console.log(countChar('fuck shit poop bitch','o'));