let empParrollList;

window.addEventListener('DOMContentLoaded',(event)=>
{
    empParrollList=getEmployeePayrollDataFromStorage();
    createInnerHtml();
    document.querySelector('.emp-count').textContent=empParrollList.length;
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml=()=>
{
    const headerHTml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml=`${headerHTml}`;
     empParrollList=createEmployeePayrollJSON();
    // empParrollList=createEmployeePayrollJSON();
    for(const empParrollData of empParrollList)
     { 

        innerHtml=`${innerHtml}
    
    <tr>
    <td><img class = "profile" alt="" src=${empParrollData._profilePic}></td>
    <td>${empParrollData._name}</td>
    <td>${empParrollData._gender}</td>  
    
    <td>${getDepthtml(empParrollData._department)}</td>
    
    
    
    <td>${empParrollData._salary}</td>
    <td>${empParrollData._startDate}</td>
    <td>
        <button name="${empParrollData._id} onclick = "remove(this)">Delete</button>
        <button name="${empParrollData._id} onclick = "edit(this)">Edit</button>   
    </td>  
    </tr>
    `};
    document.querySelector('#display').innerHTML=innerHtml;
     
}
const getDepthtml=(depList)=>
{
    let depHtml='';
    for(const dept of depList)
    {
        depHtml=`${depHtml}<div class ='dept-label'>${dept}</div>`
    }
    return depHtml;
}



const createEmployeePayrollJSON=()=>
{
    let empPayrollListLocal=
    [
    {
        _name: 'Ganesh',
        _gender: 'Male',
        _department: ['Engineering', ' ','Finance'],
        _salary: '50000',
        _startDate:'28 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'emp3.jpg'
    },
    {
        _name: 'Chaitra',
        _gender: 'female',
        _department: ['HR' ,'Finance'],
        _salary: '60000',
        _startDate:'30 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'emp1.jpg'
    },
    {
        _name: 'Bhumika',
        _gender: 'Female',
        _department: ['HR' ,'Engineering'],
        _salary: '50000',
        _startDate:'05 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'emp1.jpg'
    },
    {
        _name: 'Megha',
        _gender: 'female',
        _department: ['HR' ,'Quality'],
        _salary: '60000',
        _startDate:'20 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'emp2.jpg'
    },
    {
        _name: 'Savita',
        _gender: 'female',
        _department: ['Sales' ,'Finance'],
        _salary: '70000',
        _startDate:'15 Jan 2022',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'emp1.jpg'
    },
    {
        _name: 'Nikhil',
        _gender: 'Female',
        _department: ['HR' ,'Engineering'],
        _salary: '80000',
        _startDate:'30 Sep 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'emp4.jpg'
    }
];
return empPayrollListLocal;
}
