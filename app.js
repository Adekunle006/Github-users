 ////SELECTORS ///////
 
 const lightText = document.getElementById('light-text') ;

const darkIcon = document.getElementById('dark-icon') ;

const lightIcon = document.getElementById ('light-icon')

const darkText = document.getElementById('dark-text') ;

const card= document.querySelector('.card') ;

const result = document.getElementById('result') ;

const account = document.querySelector ('.acct')

const input = document.querySelector ('.input') ;

const button = document.querySelector ('.btn') ;

const output = document.querySelector ('.result') ;

const body = document.querySelector ('.body') ;

////EVENTS ///////

darkIcon.addEventListener ( 'click' , darkMode) ;

lightIcon.addEventListener ( 'click' , lightMode) ;

button.addEventListener('click' , loadOutput) ;

/////FUNCTIONS //////

function darkMode() {
    darkIcon.style.display ='none'
    darkText.style.display ='none'
    lightIcon.style.display ='block'
    lightText.style.color ='white' 
    lightIcon.style.color ='white'
    lightText.style.display ='block' 
    card.style.backgroundColor ='black'
    card.style.color ='white'
    result.style.backgroundColor ='black'
    result.style.color = 'white'
    account.style.backgroundColor = 'white'
    body.style.backgroundColor = '#004270'
    }


function lightMode() {
    darkIcon.style.display = 'block'
    darkText.style.display = 'block'
    lightIcon.style.display = 'none'
    lightText.style.display = 'none'
    card.style.backgroundColor = 'white'
    card.style.color = 'black'
    result.style.backgroundColor = 'white'
    result.style.color = '#333'
    account.style.backgroundColor = 'rgba(115, 115, 115, 0.26)' 
    body.style.backgroundColor = 'rgba(115, 115, 115, 0.26)'
}

function loadOutput() {
 
    let userName = input.value;

    let URL = `https://api.github.com/users/${userName }` ;

    console.log (URL) ;

    fetch (URL).then( (response)=> response.json() )

    .then( (data)=> {

        console.log (data) ; 

       console.log (data.created_at) ;

       console.log (data.login) ;

        console.log (data.avatar_url) ;

       // console.log (data.followers) ;

        //console.log (data.following) ;

       // console.log (data.id) ;

       // console.log (data.public_repos) ;

       // console.log (data.html_url) ;

       // console.log (data.name) ;

       // console.log (data.location) ;

       // console.log (data.blog) ;

       var serverValue = data.created_at ;

       var serverStr = serverValue.substr(0 , 10) ;

       var joinStr =serverStr.replace (/-/g , ",") ;

       var joinDay = joinStr.slice (8 ,10) ;

       var joinyear = joinStr.slice (0 ,4) ;

       var joinMonth = joinStr.slice (5 ,7) ;

       var months = ['Jan,' , 'Feb,' , 'March,' , 'April,' , 'May,' , 'June,' , 'July,' , 'Aug,' , 'Sept,' , 'Oct,' , 'Nov,' , 'Dec,'] ;
       
       var outputMonth = months[joinMonth-1] ;

       var joinDate = 'Join on' +  ' ' + joinDay + ' ' + outputMonth + ' ' + joinyear + '.';

        ////////result///////////

        output.innerHTML = `

        <div class="container ">
    
        <div class="card " id="result">
    
        <div class="profile  flex">
    
            <img src="${data.avatar_url}" alt="">
    
            <div>
                <h2>${data.name}</h2>
                <p style="color:#1c3fa4;">@${data.login}</p>
                <p>${joinDate}</p>
            </div>
    
        </div>
    
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt quidem autem. Consequuntur, distinctio? Fuga excepturi qui ipsum! 
                Expedita illum consectetur provident et eos in tenetur magnam! Sed, vero facilis.</p>
        </div>
    
        <div class="acct flex card" style="background-color: rgba(115, 115, 115, 0.26) ;  margin: 15px 0;">
         
            <div>
                <p>Repos</p>
                <p>${data.public_repos}</p>
            </div>
    
    
            <div>
                <p>Followers</p>
                <p>${data.followers}</p>
            </div>
    
            <div>
                <p>following</p>
                <p>${data.following}</p>
            </div>
    
        </div>
    
        <div class="links">
    
            <div class="flex-link">
                <i class="fas fa-home fa-2x"></i>
                <p>${data.location}</p>
            </div>
    
            <div class="flex-link">
                <i class="fas fa-link fa-2x"></i>
                <p>${data.html_url}</p>
            </div>
    
            <div class="flex-link">
                <i class="fab fa-twitter fa-2x"></i>
                <p>Not available</p>
            </div>
    
            <div class="flex-link">
                <i class="fas fa-book fa-2x" ></i>
                <p>${data.blog}</p>
            </div>
    
        </div>
    
          </div>
    
        </div>
    

        `

    }).catch(()=> {
        if (output.innerHTML == null) {
            output.innerHTML = 'Not Available'
        }
    })

}
