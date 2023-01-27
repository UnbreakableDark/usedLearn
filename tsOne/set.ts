/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

function aclean(arr:Array<string>){
    let map=new Map();
    
    for(let word of arr){
        let sorted=word.toLowerCase().split('').sort().join('');
        map.set(sorted,word);
    }

    return Array.from(map.values());
}

*/















/*
function unique(arr:string[]) {
    let sets=new Set(arr);
    return Array.from(sets);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O
  */