const items = [
  { img: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&auto=format&fit=crop&q=60', title: 'Ночник LEGO' },
  { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60', title: 'Ночник LEGO' },
  { img: 'https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?w=800&auto=format&fit=crop&q=60', title: 'Ночник LEGO' },
  // ... Другие товары
];

const sortOptions = ['Популярности', 'По скидкам', 'Сначала дешевле', 'Сначала дороже', 'По алфавиту'];
let currentSort = 'Популярности';
let activePage = 1;
const totalPages = 4;

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupSortDropdown();
  setupPagination();
});

function renderProducts() {
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = ''; // Очищаем перед рендерингом

  items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('product-item');

      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.title;

      const title = document.createElement('p');
      title.classList.add('title');
      title.textContent = item.title;

      itemDiv.appendChild(img);
      itemDiv.appendChild(title);
      grid.appendChild(itemDiv);
  });
}

function setupSortDropdown() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('sort-options');

  dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
  });

  dropdownMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
          currentSort = e.target.textContent;
          document.getElementById('current-sort').textContent = currentSort;
          dropdownMenu.classList.remove('show');
      }
  });
}

function setupPagination() {
  const pageButtons = document.querySelectorAll('.page-number');
  pageButtons.forEach(button => {
      button.addEventListener('click', () => {
          activePage = parseInt(button.textContent);
          updatePagination();
      });
  });

  const prevButton = document.querySelector('.prev-page');
  const nextButton = document.querySelector('.next-page');

  prevButton.addEventListener('click', () => {
      if (activePage > 1) {
          activePage--;
          updatePagination();
      }
  });

  nextButton.addEventListener('click', () => {
      if (activePage < totalPages) {
          activePage++;
          updatePagination();
      }
  });

  updatePagination();
}

function updatePagination() {
  const pageButtons = document.querySelectorAll('.page-number');
  pageButtons.forEach(button => {
      button.classList.remove('active');
      if (parseInt(button.textContent) === activePage) {
          button.classList.add('active');
      }
  });

  const prevButton = document.querySelector('.prev-page');
  const nextButton = document.querySelector('.next-page');

  prevButton.disabled = activePage === 1;
  nextButton.disabled = activePage === totalPages;
}

function changePage(direction) {
  if (activePage + direction >= 1 && activePage + direction <= totalPages) {
      activePage += direction;
      updatePagination();
  }
}

function goToCatalog() {
  window.location.href = '/catalog';
}