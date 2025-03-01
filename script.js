document.querySelectorAll(".card-header").forEach((button) => {
  button.addEventListener("click", function () {
    let target = document.querySelector(this.getAttribute("data-target"));
    target.classList.toggle("show");
  });
});
let titleSkills = "<h2 id='skillsHeader' class='py-5'>SKILLS</h2>"
let firstRowEl = "<div class='d-flex container justify-content-around py-5'><div class='skill firstRowSkill afterStop'> <h5>C++</h5> <img src='./svgs color/icons8-cplusplus-a-general-purpose-descriptive-programming-computer-language-24.png' /></div><div class='skill firstRowSkill'><h5>JAVA</h5><img src='./svgs color/icons8-java-94.png' /></div><div class='skill firstRowSkill'><h5 class='bs-title'>PYTHON</h5><img src='./svgs color/icons8-python-48.png' /></div><div class='skill firstRowSkill'><h6>ReactJS</h6><img src='./svgs color/icons8-react-80.png' /></div><div class='skill firstRowSkill'><h6>NextJS</h6><img src='./svgs color/icons8-nextjs-64.png' /></div> </div>"
let secondRowEl = " <div class='d-flex container justify-content-around py-5'><div class='skill firstRowSkill afterStop'><h6>HTML</h6><img src='./svgs color/icons8-html-48.png' /></div><div class='skill firstRowSkill'><h6>CSS</h6><img src='./svgs color/icons8-css-48.png' /></div><div class='skill firstRowSkill'><h6 class='bs-title'>BOOTSTRAP</h6><img src='./svgs color/icons8-bootstrap-48.png'/></div><div class='skill firstRowSkill'><h6>SASS</h6><img src='./svgs color/icons8-sass-avatar-48.png' /></div><div class='skill firstRowSkill'><h6 class='bs-title'>TYPESCRIPT</h6><img src='./svgs color/icons8-typescript-48.png'/></div> </div>"

          let stopBtn = document.getElementById("stopAnimaton")
          stopBtn.onclick = function(){
            let entire = document.getElementById("skills")
            entire.innerHTML = ""
            entire.innerHTML += titleSkills
            entire.innerHTML += firstRowEl
            entire.innerHTML += secondRowEl
          }