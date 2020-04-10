// export const getAllData = () => {
//     fetch('http://localhost:5000/api/getTestData')
//       .then(res => {return res.data})
// }

export async function getAllData () {
    let host;
    if (window.location.origin.includes('localhost')) {
        host = 'http://localhost:5000/api/getData';
    } else {
        host = 'https://deltavis.herokuapp.com/api/getData'; //replace here
    }
    const data = await fetch(host, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
        .then(res => {return res.json()})
        console.log('data fetched', data)
    return data
}