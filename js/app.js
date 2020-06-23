// Handling of selecton
const selectionButtons = document.querySelectorAll('.selection-container .selection-button');
const handleSelectionButtonClick = function(e) {
    e.preventDefault();
    this.classList.toggle('active')
}

for(let selection of selectionButtons) {
    selection.addEventListener('click', handleSelectionButtonClick, false)
    selection.addEventListener('touchstart', handleSelectionButtonClick, false)
} 

const pageIndicatorContainer = document.getElementById('page-indicator-container')
const pageIndicators = document.querySelectorAll('.page-indicator .dot');
const numOfPages = pageIndicators.length - 1

const setPageIndicator = function(index) {
    for(let pageIndicator of pageIndicators) {
        pageIndicator.classList.remove('active');
    }
    pageIndicators[index].classList.add('active')
    buttonNext.innerHTML = index === numOfPages ? 'DONE' : 'NEXT'
}

const handlePageIndicatorDotClick = function (e) {
    e.preventDefault();
    pageIndex = e.target.dataset.page;
    setPageIndicator(pageIndex);
}

for(let pageIndicator of pageIndicators) {
    pageIndicator.addEventListener('click', handlePageIndicatorDotClick)
    pageIndicator.addEventListener('touchstart', handlePageIndicatorDotClick)
}

const buttonBack = document.querySelector('#button-back');
const buttonNext = document.querySelector('#button-next');

const goToPreviousPage = function(e) {
    e.preventDefault();
    if(pageIndex > 0) {
        pageIndex--;
        setPageIndicator(pageIndex);
    }
}

const goToNextPage = function(e) {
    e.preventDefault();
    if(pageIndex < numOfPages) {
        pageIndex++;
        setPageIndicator(pageIndex);
    }
}

// Back and next button event listeners
buttonBack.addEventListener('click', goToPreviousPage)
buttonBack.addEventListener('touchstart', goToPreviousPage)
buttonNext.addEventListener('click', goToNextPage)
buttonNext.addEventListener('touchstart', goToNextPage)

let pageIndex = 0;
setPageIndicator(pageIndex);
