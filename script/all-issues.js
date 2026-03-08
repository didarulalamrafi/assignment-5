// for login page

// console.log(allIssuesCard)

const allIssuesCard = document.getElementById("all-issues-card");

const openIssuesbtn = document.getElementById("all-btn");
openIssuesbtn.addEventListener("click", () => {
  const allIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
      .then((res) => res.json())
      .then((issues) => {
        displayAllIssues(issues.data);
      });
  };

  const displayAllIssues = (issues) => {
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
                        <h4 class="font-semibold text-md">${issues.title}</h4>
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
  };
  allIssues();
});

// All button end **************************

// Open btn

const openIssues = document.getElementById("open-btn");
openIssues.addEventListener("click", () => {
  const openIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
      .then((res) => res.json())
      .then((status) => {
        displayOpenIssues(status.data);
      });
  };

  const displayOpenIssues = (status) => {
    // openIssuesCardcreate.innerHTML = "";
    status.forEach((st) => {
      if (st.status === "open") {
        console.log(status);
        const totalIssues = document.getElementById("total-issues");

        const openCount = status.filter((iss) => iss.status === "open").length;
        totalIssues.innerText = openCount;

        const openIssuesCardcreate = document.createElement("div");
        const borderTop =
          st.status === "open"
            ? "border-t-4 border-green-600"
            : "border-t-4 border-red-600";

        openIssuesCardcreate.innerHTML = `
                <div id="card" class ="card shadow-lg h-[100%] w-[100%] ">
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

// Closed btn ***************************************************

// const closeIssues = document.getElementById("close-btn");
// openIssues.addEventListener("click", ()=>{
// const openIssues = () => {
//   const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
//   fetch(url)
//     .then((res) => res.json())
//     .then((issues) => {
//       displayOpenIssues(issues.data);
//     });
// };

//   const displayOpenIssues = (issues) => {
//   issues.forEach((issues) => {
//     // console.log(issues)
//     const totalIssues = document.getElementById("total-issues");
//     totalIssues.innerText = issues.id;
//     const closeIssuesCardcreate = document.createElement("div");
//     // const borderTop =
//     //   issues.status === "open"
//     //     ? "border-t-4 border-green-600"
//     //     : "border-t-4 border-[#A855F7]";

//     closeIssuesCardcreate.innerHTML = `
//                 <div id="card" class ="card shadow-lg h-[100%] w-[100%] ">
//                     <div class="top-part p-4 rounded-md">
//                     <div class="top flex justify-between items-center">

//                   <img src="${issues.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">

//                     <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${issues.priority}</button>
//                     </div>
//                         <h4 class="font-semibold text-md">${issues.title}</h4>
//                         <p class="text-[#64748B]">${issues.description}</p>
//                         <div class="mt-3">
//                             <button class="flex items-center justify-center btn btn-soft bg-red-100 btn-error rounded-full text-red-500 "> <i class="fa-solid fa-bug"></i> ${issues.labels[0]} </button>
//                             <button class="flex items-center text-center justify-center btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i class="fa-solid fa-circle-radiation"></i> ${issues.labels[1]} </button>
//                         </div>
//                     </div>
//                     <div class="divider my-0"></div>
//                     <div class="p-4 mt-0 space-y-2">
//                         <p class="text-[#64748B]">${issues.author}</p>
//                         <p class="text-[#64748B]">${issues.createdAt}</p>
//                     </div>
//                 </div>`;
//     allIssuesCard.append(closeIssuesCardcreate);
//   });
// };
// openIssues();
// });

// ***********************************************************************

// const displayOpenIssues=(issueOpen)=>{
//   issueOpen.forEach((issueOpen)=>{
//     allIssuesCard.innerHTML = " "
//     console.log(issueOpen);

//     const allIssuesCardcreate = document.createElement("div");
//     const borderTop =
//       issues.status === "open"
//         ? "border-t-4 border-green-600"
//         : "border-t-4 border-[#A855F7]";

//     allIssuesCardcreate.innerHTML = `
//                 <div id="card" class ="card shadow-lg h-[100%] w-[100%] ">
//                     <div class="top-part p-4 rounded-md ${borderTop}">
//                     <div class="top flex justify-between items-center">

//                   <img src="${issues.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">

//                     <button class="btn btn-soft bg-red-100 btn-error rounded-full text-red-500 px-6">${issues.priority}</button>
//                     </div>
//                         <h4 class="font-semibold text-md">${issues.title}</h4>
//                         <p class="text-[#64748B]">${issues.description}</p>
//                         <div class="mt-3">
//                             <button class="flex items-center justify-center btn btn-soft bg-red-100 btn-error rounded-full text-red-500 "> <i class="fa-solid fa-bug"></i> ${issues.labels[0]} </button>
//                             <button class="flex items-center text-center justify-center btn btn-soft bg-yellow-100 btn-warning rounded-full text-yellow-500"><i class="fa-solid fa-circle-radiation"></i> ${issues.labels[1]} </button>
//                         </div>
//                     </div>
//                     <div class="divider my-0"></div>
//                     <div class="p-4 mt-0 space-y-2">
//                         <p class="text-[#64748B]">${issues.author}</p>
//                         <p class="text-[#64748B]">${issues.createdAt}</p>
//                     </div>
//                 </div>`;
//     allIssuesCard.append(allIssuesCardcreate);

//   })
// allIssuesCard.append(allIssuesCard);
// openIssues();
// }

// issues.forEach((issues) => {
//     // console.log(issues)
