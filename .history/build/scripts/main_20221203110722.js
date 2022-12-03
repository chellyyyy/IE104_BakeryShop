const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const paginationLimit = 9;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;
const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};
const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");

        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};
const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};
const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();


    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};
getPaginationNumbers();
setCurrentPage(1);
document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
        button.addEventListener("click", () => {
            setCurrentPage(pageIndex);
        });
    }
});
document.querySelectorAll('.item').forEach((item) => {
    const listLabel = item.querySelectorAll('label')
    listLabel.forEach((itemLabel, index) => {
        itemLabel.addEventListener('click', async () => {
            for (let i = 4; i >= index; i--) {
                console.log(323);
                listLabel[i].classList.add('add_color')
            }

        })

    })


})

// Rating
$('.rating').starRating({
    starIconEmpty: 'far fa-star',
    starIconFull: 'fas fa-star',
    starColorEmpty: 'lightgray',
    starColorFull: '#FFC107',
    starsSize: 4, // em
    stars: 5,
    showInfo: true,
    titles: ["Very Bad", "Poorly", "Medium", "Good", "Excellent!"],
    inputName: 'rating',
});


// ---------------------------------------------------
// Product
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Tang giam sl
function increment() {
  document.getElementById('demoInput').stepUp();
}
function decrement() {
  document.getElementById('demoInput').stepDown();
}


// ---------------------------------------------------
// Payment
var indexInit = 0
document.querySelector("#sidebar-ct").querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", (e) => {
        console.log(indexInit);
        document.querySelector("#sidebar-ct").querySelectorAll("li")[indexInit].classList.remove("active")
        item.classList.add("active");
        console.log(index);
        indexInit = index
        Page(index)

    })
})
const Page = (index) => {
    const page = document.querySelectorAll(".content-page>div")
    for (let i = 0; i <= 3; i++) {
        page[i].classList.remove("hide")
    }
    document.querySelectorAll(".content-page>div")[index].classList.add("hide")

}
document.querySelector(".btn-primary").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".popup").classList.add("show-popup")
})
document.querySelector(".popup").addEventListener("click", (e) => {
    e.stopPropagation()
    document.querySelector(".popup").classList.remove("show-popup")
})
Page(0)

// ---------------------------------------------------
// Header