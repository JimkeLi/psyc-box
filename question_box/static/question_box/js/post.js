document.addEventListener("DOMContentLoaded", function () {

  //PUT Questions
  Array.from(document.getElementsByClassName("question")).forEach((button) => {
    button.onclick = () => {
      var content = button.innerHTML;
      let question_id = button.id.slice(12);
      if (content === "Post") {
        
        //PUT whether it should be posted or not
        fetch("/post/fetch", {
          method: "PUT",
          body: JSON.stringify({
            question_id: question_id,
            post: true,
          }),
        })
          .then(result => {
            location.href = window.location.href
        });
      }
      
      else {

        //PUT whether it should be posted or not
        fetch("/post/fetch", {
          method: "PUT",
          body: JSON.stringify({
            question_id: question_id,
            post: false,
          }),
        })
          .then(result => {
            location.href = window.location.href
          });
      }
    };
  });

  //PUT Answers
  Array.from(document.getElementsByClassName("answer")).forEach((button) => {
    button.onclick = () => {
      var content = button.innerHTML;
      let answer_id = button.id.slice(10);
      if (content === "Post") {
        
        //PUT whether it should be posted or not
        fetch("/post/fetch", {
          method: "PUT",
          body: JSON.stringify({
            answer_id: answer_id,
            post: true,
          }),
        })
          .then(result => {
            location.href = window.location.href
          });
      }
      
      else {

        //PUT whether it should be posted or not
        fetch("/post/fetch", {
          method: "PUT",
          body: JSON.stringify({
            answer_id: answer_id,
            post: false,
          }),
        })
          .then(result => {
            location.href = window.location.href
          });
      }
    };
  });
});
