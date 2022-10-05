//select all articles
//len() used to return lenght in python
//index() returns index of a character
//abs() means absolute
//max()gives highest value
//round() bin() prints binary numbers other fuctions you must iport them from the math functions before you can use them
//type() returns the data type list constructor it takes the form a list class constructor list() it takes double quotes list(())
const questions = document.querySelectorAll(".question");

//each individual
questions.forEach( (question)=>{
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', ()=>{

    questions.forEach( (item)=>{
        if(item !== question){
            item.classList.remove("show-text");
        }
    });

    question.classList.toggle("show-text");
  });
});