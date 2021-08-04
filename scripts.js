var reqs=0;

const userCreator=async ()=> {
    let response=await fetch('https://randomuser.me/api/');
    let data=await response.json();

    let fullName=JSON.stringify(data.results[0].name.first+' '+data.results[0].name.last);
    let avatar=data.results[0].picture.large;
    document.querySelector('#user-profile').setAttribute('src',avatar);
    document.querySelector('#user-profile').setAttribute('alt','user-profile');
    document.querySelector('#user-name').innerHTML=data.results[0].name.first+' '+data.results[0].name.last;
    document.querySelector('#user-info').innerHTML='Username: '+data.results[0].login.username+'<br><br>'
        +'Email: '+data.results[0].email+'<br><br>'+'City: '+data.results[0].location.city+'<br><br>'+
        '<button onclick="addFriend();userCreator()" id="request" class='+fullName+'>Request</button>'+
        '<button onclick="userCreator()" id="reject">Reject</button>';
}

function addFriend() {
    let newFriend=document.createElement('p');
    newFriend.className='new-friend';
    newFriend.innerHTML=document.getElementById('request').className;
    document.getElementById('my-friends').appendChild(newFriend);
    reqs++;
    document.querySelector('#friend-reqs').innerHTML='Requests: '+reqs;
}