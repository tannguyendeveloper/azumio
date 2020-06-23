// Handling of selecton
const selectionButtons = document.querySelectorAll('.selection-container .selection-button');
const handleSelectionButtonClick = function(e) {
    this.classList.toggle('active')
    e.preventDefault();
}
for(let selection of selectionButtons) {
    selection.addEventListener('click', handleSelectionButtonClick)
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
    pageIndex = e.target.dataset.page;
    setPageIndicator(pageIndex);
}

for(let pageIndicator of pageIndicators) {
    pageIndicator.addEventListener('click', handlePageIndicatorDotClick)
}

const buttonBack = document.querySelector('#button-back');
const buttonNext = document.querySelector('#button-next');

buttonBack.addEventListener('click', function() {
    if(pageIndex > 0) {
        pageIndex--;
        setPageIndicator(pageIndex);
    }
})

buttonNext.addEventListener('click', function() {
    if(pageIndex < numOfPages) {
        pageIndex++;
        setPageIndicator(pageIndex);
    }
})

let pageIndex = 0;
setPageIndicator(pageIndex);
