// for login page

// console.log(allIssuesCard)

const allIssuesCard = document.getElementById("all-issues-card");
const allIssuesbtn = document.getElementById("all-btn");
allIssuesbtn.addEventListener("click", () => {
  const allIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
      .then((res) => res.json())
      .then((issues) => {
        displayAllIssues(issues.data);
      });
  };

  const displayAllIssues = (issues) => {
    allIssuesCard.innerHTML = " ";
    issues.forEach((issues) => {
      // console.log(issues)
      const totalIssues = document.getElementById("total-issues");
      totalIssues.innerText = issues.id;
      const borderTop =
        issues.status === "open"
          ? "border-t-4 border-green-600"
          : "border-t-4 border-[#A855F7]";

      const allIssuesCardcreate = document.createElement("div");
      allIssuesCardcreate.innerHTML = `
                <div onclick="issueDetail(${issues.id})" id="card" class ="card shadow-lg h-[100%] w-[100%] ">
                    <div class="top-part p-4 rounded-md ${borderTop}">
                    <div class="top flex justify-between items-center">
                    
                  <img src="${issues.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">

                    <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${issues.priority}</button>  
                    </div>
                        <h4 class="font-semibold text-md">${issues.title}</h4>
                        <p class="text-[#64748B]">${issues.description}</p>
                        <div class="mt-3 flex justify-start items-center gap-2 md:flex-wrap">
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
  };
  allIssues();
});

// All button end **************************

// Open btn

const closeIssues = document.getElementById("open-btn");
closeIssues.addEventListener("click", () => {
  const openIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
      .then((res) => res.json())
      .then((status) => {
        displayOpenIssues(status.data);
      });
  };

  const displayOpenIssues = (status) => {
    const totalIssues = document.getElementById("total-issues");
    allIssuesCard.innerHTML = "";
    status.forEach((st) => {
      if (st.status === "open") {
        // console.log(status);

        const openCount = status.filter((iss) => iss.status === "open").length;
        totalIssues.innerText = openCount;

        const openIssuesCardcreate = document.createElement("div");
        const borderTop =
          st.status === "open"
            ? "border-t-4 border-green-600"
            : "border-t-4 border-purple-600";
        // openIssuesCardcreate.innerHTML = " ";
        openIssuesCardcreate.innerHTML = `
                <div onclick="issueDetail(${st.id})" id="card" class ="card shadow-lg h-[100%] w-[100%] ">
                    <div class="top-part p-4 rounded-md ${borderTop}">
                    <div class="top flex justify-between items-center ">
                    
                  <img src="${st.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">

                    <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${st.priority}</button>  
                    </div>
                        <h4 class="font-semibold text-md">${st.title}</h4>
                        <p class="text-[#64748B]">${st.description}</p>
                        <div class="mt-3">
                            <button class="flex items-center justify-center btn btn-soft bg-red-100 btn-error rounded-full text-red-500 "> <i class="fa-solid fa-bug"></i> ${st.labels[0] || " "} </button>
                            <button class="flex items-center text-center justify-center btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i class="fa-solid fa-circle-radiation"></i> ${st.labels[1] || " "} </button>
                        </div>
                    </div>
                    <div class="divider my-0"></div>
                    <div class="p-4 mt-0 space-y-2">
                        <p class="text-[#64748B]">${st.author}</p>
                        <p class="text-[#64748B]">${st.createdAt}</p>
                    </div>
                </div>`;
        allIssuesCard.append(openIssuesCardcreate);
      }
      // console.log(st);
    });
  };
  openIssues();
});

// Open btn section closed

// Closed btn ***************************************************

const closeIssuebtn = document.getElementById("close-btn");
closeIssuebtn.addEventListener("click", () => {
  const closeIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
      .then((res) => res.json())
      .then((status) => {
        displayCloseIssues(status.data);
      });
  };

  const displayCloseIssues = (status) => {
    allIssuesCard.innerHTML = " ";
    status.forEach((st) => {
      if (st.status === "closed") {
        const totalIssues = document.getElementById("total-issues");
        // console.log(status);

        const closeCount = status.filter(
          (iss) => iss.status === "closed",
        ).length;
        totalIssues.innerText = closeCount;

        const closeIssuesCardcreate = document.createElement("div");
        const borderTop =
          st.status === "closed"
            ? "border-t-4 border-purple-600"
            : "border-t-4 border-red-600";
        closeIssuesCardcreate.innerHTML = `
                <div onclick="issueDetail(${st.id})" id="card" class ="card shadow-lg h-[100%] w-[100%] ">
                    <div class="top-part p-4 rounded-md ${borderTop}">
                    <div class="top flex justify-between items-center ">
                    
                  <img src="${st.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">

                    <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${st.priority}</button>  
                    </div>
                        <h4 class="font-semibold text-md">${st.title}</h4>
                        <p class="text-[#64748B]">${st.description}</p>
                        <div class="mt-3">
                            <button class="flex items-center justify-center btn btn-soft bg-red-100 btn-error rounded-full text-green-500 "> <i class="fa-solid fa-bug"></i> ${st.labels[0] || " "} </button>
                            <button class="flex items-center text-center justify-center btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i class="fa-solid fa-circle-radiation"></i> ${st.labels[1] || " "} </button>
                        </div>
                    </div>
                    <div class="divider my-0"></div>
                    <div class="p-4 mt-0 space-y-2">
                        <p class="text-[#64748B]">${st.author}</p>
                        <p class="text-[#64748B]">${st.createdAt}</p>
                    </div>
                </div>`;
        allIssuesCard.append(closeIssuesCardcreate);
      }
      // console.log(st);
    });
  };
  closeIssues();
});

// Modal=====================================================

const issueDetail = (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((issues) => {
      displayDeatil(issues);
    });
};

// {
//   "status": "success",
//   "message": "Issue fetched successfully",
//   "data": {
//     "id": 33,
//     "title": "Add bulk operations support",
//     "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
//     "status": "open",
//     "labels": [
//       "enhancement"
//     ],
//     "priority": "low",
//     "author": "bulk_barry",
//     "assignee": "",
//     "createdAt": "2024-02-02T10:00:00Z",
//     "updatedAt": "2024-02-02T10:00:00Z"
//   }
// }

const modalCard = document.getElementById("issue_modal");
const displayDeatil = (issue) => {
  const modalInfo = document.getElementById("modal_info");
  modalInfo.innerHTML = ` <div id="modal_info class= "space-y-5">
                        <h3 class="font-bold text-xl">${issue.data.title}</h3>
                        <button class="btn px-4 py-2 rounded-full bg-[#00A96E]"> ${issue.data.status}</button>
                        <span> Opened by ${issue.data.author}</span>
                        <span>${issue.data.createdAt}</span>
                        <div class="mt-3 space-y-5">
                            <div class="flex items-center justify-start gap-2">
                            <button
                                class="flex items-center justify-center btn btn-soft bg-red-100 btn-error rounded-full text-red-500 ">
                                <i class="fa-solid fa-bug"></i> ${issue.data.labels[0] || " "} </button>
                            <button
                                class="flex items-center text-center justify-center btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i
                                    class="fa-solid fa-circle-radiation"></i> ${issue.data.labels[1]} </button>
                                    </div>
                      </div class="space-y-5">
                        <p>${issue.data.description}</p>
                        <div class="flex justify-start items-center">
                        <div class="flex-1">
                            <p> Assignee: </p>
                            <h3>${issue.data.author}</h3>
                        </div>
                        <div class="flex-1">
                            <p>Priority: </p>
                            <button class="btn bg-[#EF4444] rounded-full text-white">${issue.data.priority}</button>
                        </div>
                    </div>
                    </div>
  `;
  document.getElementById("issue_modal").showModal();
  console.log(issue);
};
