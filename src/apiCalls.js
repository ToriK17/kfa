// example api calls

// export const fetchPaintingPost = () => {
//   // return fetch(`https://cdn.contentful.com`)
//   return fetch(`https://cdn.contentful.com/spaces/cfexampleapi/entries?access_token=b4c0n73n7fu1`)
//   .then(response => checkResponse(response))
// }

// const checkResponse = (response) => {
//   if (response.ok) {
//     return response.json()
//   } else {
//     return Promise.reject(`error ${response.status}`)
//   }
// }

// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'SPACE_ID',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: 'ACCESS_TOKEN'
// })

// client.getAsset('<asset_id>')
// .then((asset) => console.log(asset))
// .catch(console.error)
