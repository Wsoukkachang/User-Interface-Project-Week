// carousel component //

class Carousel {
    constructor(element) {
        this.element = element;
        this.images = element.querySelectorAll('.projects-content img'); // grab a reference to all of the images
        // console.log(this.images);

        this.currentIndex = 0; // set index to 0

        this.data = this.element.dataset.tab;
        
        this.itemElement = document.querySelector(`.projects-content[data-tab="${this.data}"]`);

        this.tabItem = new ProjectItem(this.itemElement);

        this.leftButton = element.querySelector('.left-button'); 

        this.rightButton = element.querySelector('.right-button');

        this.leftButton.addEventListener('click', () => {
          this.leftButtonClicked();
          console.log(this.currentIndex);
        });

        this.rightButton.addEventListener('click', () => {
          this.rightButtonClicked();
          console.log(this.currentIndex);
        });
    }

    leftButtonClicked() {
      console.log('left button clicked');
      this.images[this.currentIndex].style.display = 'none';

      // checks current index if it is greater than 0. If it is, then subtracts 1, sets display to block
      if(this.currentIndex > 0) {
        this.currentIndex -= 1;
        this.images[this.currentIndex].style.display = 'block';
      }
      // change current index to 2
      else {
        this.currentIndex = 2;
        this.images[this.currentIndex].style.display = 'block';
      }
    }

    rightButtonClicked() {
      console.log('right button clicked');
      this.images[this.currentIndex].style.display = 'none';

      // checks current index if it is less than 3. If it is, then add 1, sets display to block
      if(this.currentIndex < 2) {
        this.currentIndex += 1;
        this.images[this.currentIndex].style.display = 'block';
      }
      // change current index to 0
      else {
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = 'block';
      }
    }
}

// changes content when tab is selected
class ProjectItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        let items = document.querySelectorAll('.projects-content');

        items.forEach(item => item.classList.remove('project-item-selected'));
        this.element.classList.add('project-item-selected');
    }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

console.log(carousel);

carousel.images[0].style.display = 'block'; //sets picture on load