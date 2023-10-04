async function fetchProfileData(){
   const url='https://raw.githubusercontent.com/Ronaldotext/js-developer-portfolio/patch-1/data/profile.json'

    const fetching =await fetch(url)
    return await fetching.json()
}