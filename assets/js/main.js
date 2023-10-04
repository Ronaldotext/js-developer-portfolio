
function updateProfileInfo(profileData){

    
    const photo = document.getElementById('photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('name');
    name.innerText = profileData.name;

    const job = document.getElementById('job');
    job.innerText=profileData.job

    const location=document.getElementById('location')
    location.innerText=profileData.location

    const phone=document.getElementById('phone')
    phone.innerText=profileData.phone
    phone.href=`tel:${profileData.phone}`
    const email=document.getElementById('email')
    email.innerText=profileData.email
    email.href=`mailto:${profileData.email}`

}

function updateSoftSkills(profileData){
   const softSkills= document.getElementById('skills.softSkills')
  softSkills.innerHTML= profileData.skills.softSkills.map(skill=>`<li>${skill}</li>`).join('')
}
function updateHardSkills(profileData){
    const hardSkills= document.getElementById('skills.hardSkills')
    hardSkills.innerHTML= profileData.skills.softSkills.map(skill=>`<li> <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
 }
 function updateLanguages(profileData){
    const hardSkills= document.getElementById('languages')
    languages.innerHTML= profileData.languages.map(language=>`<li>${language}</li>`).join('')
 }
(async ()=>{
    const profileData= await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
})()//HABIA OLVIDADE DE LLAMAR LA FUNCION