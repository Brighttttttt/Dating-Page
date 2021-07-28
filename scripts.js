var reqs=0;

function userCreator() {
    var req=new XMLHttpRequest();
    req.open('Get','https://random-data-api.com/api/users/random_user');
    req.onreadystatechange=function() {
        let data=JSON.parse(this.responseText);
        let fullName=JSON.stringify(data.first_name+' '+data.last_name);
        let avatar=data.avatar;
        if(this.readyState===4 && this.status===200) {
            document.querySelector('#user-profile').setAttribute('src',avatar);
            document.querySelector('#user-profile').setAttribute('alt','user-profile');
            document.querySelector('#user-name').innerHTML=data.first_name+' '+data.last_name;
            document.querySelector('#user-info').innerHTML='Username: '+data.username+'<br><br>'
                +'Email: '+data.email+'<br><br>'+'Employment: '+data.employment.title+'<br><br>'+'Country: '+data.address.country+'<br><br>'+
                '<button onclick="userCreator();addFriend()" id="request" class='+fullName+'>Request</button>'+
                '<button onclick="userCreator()" id="reject">Reject</button>';
        }
    }
    req.send();
}

function addFriend() {
    let newFriend=document.createElement('p');
    newFriend.className='new-friend';
    newFriend.innerHTML=document.getElementById('request').className;
    document.getElementById('my-friends').appendChild(newFriend);
    reqs++;
    document.querySelector('#friend-reqs').innerHTML='Requests: '+reqs;
}