// post data fach korbo only id and title//

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(postpeb => postpeb.json())
    .then(data => arryloop(data))

let postbody = document.getElementById("post-body")
let count = 0;
function arryloop(data) {
    for (let man of data) {
        count++;
        if (count > 10) {
            break;
        }
        let div = document.createElement("div")
        div.innerHTML = `
                   <div class= "postdib">
                       <h1>id: ${man.id}</h1>
                        <h3>id: ${man.title}</h3>
                   </div>
                  `
        postbody.appendChild(div)

    }
}


// comment data fach korbo only Email and body//

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(commentpeb => commentpeb.json())
    .then(datacom => refarcoment(datacom))

let commenttbody = document.getElementById("comment-body")
function refarcoment(comment) {
    for (let arcom of comment) {
        let div = document.createElement("div")
        div.innerHTML = `
            <div class="comdiv">
                <h1> ${arcom.email}</h1>
                <h3> ${arcom.body}</h3>
            </div>
        
        `
        commenttbody.appendChild(div)
    }
}


//  clik able function//

document.getElementById("comment-btn").addEventListener("click", () => {
    document.getElementById("comment-body").style.display = "block"
    document.getElementById("post-body").style.display = "none"
    document.getElementById("post-btn").style.background = "none"
    document.getElementById("post-btn").style.border = "1px solid"
    document.getElementById("comment-btn").style.background = "aqua"
    document.getElementById("comment-btn").style.border = "none"
    document.getElementById("comment-btn").style.borderRadius = "6px"
})

document.getElementById("post-btn").addEventListener("click", () => {
    document.getElementById("comment-body").style.display = "none"
    document.getElementById("post-body").style.display = "block"
    document.getElementById("post-btn").style.background = "aqua"
    document.getElementById("post-btn").style.border = "none"
    document.getElementById("comment-btn").style.background = "none"
    document.getElementById("comment-btn").style.border = "1px solid"
})