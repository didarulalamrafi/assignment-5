// for login page

// console.log(allIssuesCard)
const allIssues = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((issues) => {
      displayAllIssues(issues.data);
    });
};

const displayAllIssues = (issues) => {
  const allIssuesCard = document.getElementById("all-issues-card");
  issues.forEach((issues) => {
    // console.log(issues)
    const totalIssues = document.getElementById("total-issues");
    totalIssues.innerText = issues.id;
    const allIssuesCardcreate = document.createElement("div");

    const borderTop =
      issues.status === "open"
        ? "border-t-4 border-green-600"
        : "border-t-4 border-[#A855F7]";

    allIssuesCardcreate.innerHTML = `
                <div id="card" class ="card shadow-lg h-[100%] w-[100%] ">
                    <div class="top-part p-4 rounded-md ${borderTop}">
                    <div class="top flex justify-between items-center">
                    
                  <img src="${issues.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">

                    <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${issues.priority}</button>  
                    </div>
                        <h4 class="font-semibold text-lg">${issues.title}</h4>
                        <p class="text-[#64748B]">${issues.description}</p>
                        <div class="mt-3">
                            <button class="flex items-center justify-center btn btn-soft bg-red-100 btn-error rounded-full text-red-500 "> <i class="fa-solid fa-bug"></i> ${issues.labels[0]} </button>
                            <button class="flex items-center text-center justify-center btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i class="fa-solid fa-circle-radiation"></i> ${issues.labels[1]} </button>
                        </div>
                    </div>
                    <div class="divider my-0"></div>
                    <div class="p-4 mt-0 space-y-2">
                        <p class="text-[#64748B]">${issues.author}</p>
                        <p class="text-[#64748B]">${issues.createdAt}</p>
                    </div>
                </div>`;
    allIssuesCard.append(allIssuesCardcreate);
  });
  // console.log(issues);
};

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
