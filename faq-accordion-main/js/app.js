let plusIcon = document.querySelectorAll(".plus");
let minusIcon = document.querySelectorAll(".minus");
let faqMentor = document.querySelectorAll(".faq-mentor");

for (let i = 0; i < plusIcon.length; i++)
{
plusIcon[i].addEventListener("click", () => 
{
minusIcon[i].style.display = "block";
plusIcon[i].style.display = "none";
    faqMentor[i].style.display = "block";
})

minusIcon[i].addEventListener("click", () => 
{
    plusIcon[i].style.display = "block";
    faqMentor[i].style.display = "none";
    minusIcon[i].style.display = "none";
})
}
