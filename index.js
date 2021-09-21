
// Fetching data from URl and converting JSON
fetch('https://api.github.com/repos/facebook/react/issues')
.then(response => response.json())
.then(data => displayIssues(data))

// Get Today Date
const date1 = new Date();

// Top Issue Display header row
let html = `
        <div class="issues-element issues-elementHeader">
            <div class="issues-elementLeftPart">
                <p class="issues-elementPtagStyle1"><i class="fas fa-dot-circle"></i></p>
                <p>625 Open </p>
                <p class="issues-elementPtagStyle2"><i class="fas fa-check-circle"></i> 10,111 Closed</p>        
            </div>
            <div class="assign-message">
                <p class="issues-elementPtagStyle3">Author<i class="fas fa-caret-down"></i></p>
                <p class="issues-elementPtagStyle3">Label<i class="fas fa-caret-down"></i></p>
                <p class="issues-elementPtagStyle3">Projects<i class="fas fa-caret-down"></i></p>
                <p class="issues-elementPtagStyle3">Milestones<i class="fas fa-caret-down"></i></p>
                <p class="issues-elementPtagStyle3">Assignee<i class="fas fa-caret-down"></i></p>
                <p class="issues-elementPtagStyle3">Sort<i class="fas fa-caret-down"></i></p>
            </div>
        </div>
        `
function displayIssues(data){
   // Looping through every object issue data  
  for(let i = 0; i < data.length; i++){
        let date2 = new Date(data[i].updated_at);
        let diffTime = Math.abs(date2 - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        // Getting date in days
        if(diffDays > 1){
            diffDays = diffDays + ' days'
        }else {
            diffDays = diffDays + ' day'
        }
        html += `
        <div class="issues-element">
            <div class="issues-elementLeftPart">
                <p class="issues-elementPtagStyle1"><i style="color:green;" class="fas fa-dot-circle"></i></p>
                <div>
                    <h5>${data[i].title} </h5>
                    <p class="issues-elementPtagStyle4">#${data[i].number}  opened ${diffDays} ago by ${data[i].user.login} </p>                   
                </div>
            </div>
            <div class="assign-message">
                ${data[i].assignee ? `<p class="issues-elementPtagStyle5"><img src=${data[i].assignee.avatar_url} width='30' height='30'/></p>` : ''}        
                ${data[i].comments > 0 ? `<p class="issues-elementPtagStyle6"><i class="fas fa-mail-bulk"></i> ${data[i].comments}</p>` : ''}  
            </div>
        </div>
        `
  }  
  // Displaying all the data in the HTML file
  document.getElementById('display').innerHTML=html
}
