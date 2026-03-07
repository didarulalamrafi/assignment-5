// for login page

// console.log(allIssuesCard)
const allIssues=()=>{
    const url = ("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    fetch(url).then(res => res.json()).then(issues=>{
        displayAllIssues(issues.data);
    })
}

const displayAllIssues=(issues)=>{
    const allIssuesCard = document.getElementById("all-issues-card");
    issues.forEach(issues=>{
        // console.log(issues)
        const allIssuesCardcreate = document.createElement("div");
        allIssuesCardcreate.innerHTML= `
                    <div class="top-part p-4">
                    <div class="top flex justify-between items-center">
                    <img src="./assets/Open-Status.png" alt="">
                    <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${data.priority}</button>
                </div>
                    <h4 class="font-semibold text-lg">Fix navigation menu on mobile devices</h4>
                    <p class="text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices...</p>
                    <div class="mt-3">
                        <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 "> <i class="fa-solid fa-bug"></i> BUG</button>
                        <button class="btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i class="fa-solid fa-circle-radiation"></i> HELP WANTED</button>
                    </div>
                </div>
                <div class="divider my-0"></div>
                <div class="p-4 mt-0">
                    <p class="text-[#64748B]" >#1by john_doe</p>
                    <p class="text-[#64748B]">1/15/2024</p>
                </div>`
                allIssuesCard.append(allIssuesCardcreate);
    })
    // console.log(issues);
}
//     {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need 
//      to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }



allIssues();