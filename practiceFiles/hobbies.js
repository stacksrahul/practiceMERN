const hobbies = ['coding', '', 'playing', 'people'];

// const hobbyIndex = hobbies.findIndex(
//     (hobbyName)=>{
//         if (hobbyName==='people') {
//             return hobbyName;
//         }

//     }
// );

const hobbyIndex = hobbies.findIndex( hobbyName => hobbyName  ==='people' )

console.log(hobbyIndex);

const transformIndex = hobbies.map(hobbyIndex => (hobbyIndex != '') ? (hobbyIndex + '!') : hobbyIndex)

console.log(transformIndex)
