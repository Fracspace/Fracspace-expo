document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("previous");
    const items = document.querySelectorAll(".item");
    let currentIndex = 0;
    let intervalId;


    startAutoSlide();


    function startAutoSlide() {
        intervalId = setInterval(function() {
            showItem(currentIndex + 1);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    nextButton.addEventListener("click", function() {
        showItem(currentIndex + 1);
    });


    prevButton.addEventListener("click", function() {
        showItem(currentIndex - 1);
    });

    function showItem(index) {
        items[currentIndex].style.display = "none";
        currentIndex = (index + items.length) % items.length;
        items[currentIndex].style.display = "block";
    }
});
  
