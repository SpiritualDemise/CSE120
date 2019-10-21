
const PatientLogIn = document.querySelector('#Patient-Log-In');
const form = document.querySelector('#add-PatientLogIn-form');

//create elemet and render patient info 

function renderPatientLogIn(doc){

    let li = document.createElement('li');
    let PatientUserName = document.createElement('span');
    let PatientPassword = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('date-id', doc.id);
    PatientUserName.textContent = doc.data().Username;
    PatientPassword.textContent = doc.data().Password;
    cross.textContent = 'x';

    li.appendChild(PatientUserName);
    li.appendChild(PatientPassword);
    li.appendChild(cross);

    PatientLogIn.appendChild(li);

    //deleting data
    cross.addEventListener('click', (e) => {

        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('PatientLogIn').doc(id).delete();

    })

}
//getting data
db.collection('PatientLogIn').get().then(snapshot => {

    snapshot.docs.forEach(doc => {

        renderPatientLogIn(doc);

    });

});
//saving the data
form.addEventListener('submit', (e) => {


    e.preventDefault();
    db.collection('PatientLogIn').add({

    Username: form.Username.value,
    Password: form.Password.value

    });

    form.PatientUserName.value = '';
    form.PatientPassword.value = '';

});
