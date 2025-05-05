function createLayout() {
	const root = document.getElementById('root')

	root.innerHTML = `
      <header>
        <div class="header-shadow">
            <div class="header-container">
                <div class="header-inner">
                    <div class="header-content">
                        <!-- Left section -->
                        <div class="header-left">
                            <div class="burger-menu-container hidden lg-block">
                                <div class="burger-container">
                                    <div class="burger-button">
                                        <span class="burger-line"></span>
                                        <span class="burger-line"></span>
                                        <span class="burger-line"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mobile-header">
                                <div class="burger-container">
                                    <div class="burger-button">
                                        <span class="burger-line"></span>
                                        <span class="burger-line"></span>
                                        <span class="burger-line"></span>
                                    </div>
                                </div>
                                
                                <a href="/" class="logo-mobile">
                                    <img src="/assets/Header/logo.svg" alt="Logo">
                                </a>
                                
                                <img src="/assets/Header/search.svg" alt="Search" class="search-icon mobile-search-trigger">
                            </div>
                            
                            <div class="contact-info">
                                <div class="contact-item">
                                    <img src="/assets/Header/pin.svg" alt="Location">
                                    <a href="https://go.2gis.com/cshfg" target="_blank" rel="noopener noreferrer" class="contact-text">
                                        Проспект Чуй,132
                                    </a>
                                </div>
                                
                                <div class="contact-item">
                                    <img src="/assets/Header/phone.svg" alt="Phone">
                                    <a href="tel:+996504003033" class="contact-text">
                                        +996 504-00-30-33
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Center section -->
                        <a href="/" class="logo">
                            <img src="/assets/Header/logo.svg" alt="Logo">
                        </a>
                        
                        <!-- Right section -->
                        <div class="header-right">
                            <div class="search-container">
                                <input type="text" placeholder="Введите поисковой запрос..." class="search-input">
                                <img src="/assets/Header/search.svg" alt="Search" class="search-icon desktop-search-trigger">
                            </div>
                            
                            <img src="/assets/Header/bag.svg" alt="Bag" class="bag-icon" onclick="navigateTo('/basket')">
                            <img src="/assets/Header/heart.svg" alt="Heart" class="heart-icon" onclick="navigateTo('/favorites')">
                            <img src="/assets/Header/img/avatar.png" alt="Avatar" class="avatar" onclick="navigateTo('/profile')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Burger menu content -->
        <div class="burger-menu">
            <div class="burger-content">
                <!-- Mobile Menu -->
                <ul class="mobile-menu">
                    <li><a href="/a">Новинки</a></li>
                    <li><a href="/categories">Категории</a></li>
                    <li><a href="/catalog">Каталог</a></li>
                    <li><a href="/about">О магазине</a></li>
                    <li><a href="/c">Акции</a></li>
                    <li><a href="/cart">Корзина</a></li>
                    <li><a href="/faq">Часто задаваемые вопросы</a></li>
                    <li><a href="/profile">Личный кабинет</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/favorites">Избранное</a></li>
                    <li><a href="/delivery">Доставка</a></li>
                </ul>
                
                <!-- Desktop Menu -->
                <div class="desktop-menu">
                    <ul class="menu-column">
                        <li><a href="/a">Новинки</a></li>
                        <li><a href="/categories">Категории</a></li>
                        <li><a href="/catalog">Каталог</a></li>
                        <li><a href="/about">О магазине</a></li>
                        <li><a href="/c">Акции</a></li>
                        <li><a href="/cart">Корзина</a></li>
                    </ul>
                    
                    <ul class="menu-column">
                        <li><a href="/faq">Часто задаваемые вопросы</a></li>
                        <li><a href="/profile">Личный кабинет</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                        <li><a href="/favorites">Избранное</a></li>
                        <li><a href="/delivery">Доставка</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Mobile search panel -->
        <div class="mobile-search-panel">
            <button type="button" class="mobile-search-back">&lt;</button>
            <div class="flex items-center justify-center mt-20">
                <input type="text" placeholder="Введите поисковой запрос..." class="mobile-search-input">
            </div>
        </div>
    </header>
    `
}

createLayout()

// Burger menu functionality
const burgerButtons = document.querySelectorAll('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')

burgerButtons.forEach((button) => {
	button.addEventListener('click', function () {
		this.classList.toggle('active')
		burgerMenu.classList.toggle('active')

		// Toggle body overflow
		if (this.classList.contains('active')) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	})
})

// Close menu when clicking on links
const menuLinks = document.querySelectorAll('.mobile-menu a, .menu-column a')
menuLinks.forEach((link) => {
	link.addEventListener('click', function () {
		burgerButtons.forEach((button) => button.classList.remove('active'))
		burgerMenu.classList.remove('active')
		document.body.style.overflow = 'auto'
	})
})

// Search functionality
const desktopSearchTrigger = document.querySelector('.desktop-search-trigger')
const mobileSearchTrigger = document.querySelector('.mobile-search-trigger')
const searchInput = document.querySelector('.search-input')
const mobileSearchPanel = document.querySelector('.mobile-search-panel')
const mobileSearchBack = document.querySelector('.mobile-search-back')

if (desktopSearchTrigger) {
	desktopSearchTrigger.addEventListener('click', function () {
		searchInput.classList.toggle('active')
	})
}

if (mobileSearchTrigger) {
	mobileSearchTrigger.addEventListener('click', function () {
		mobileSearchPanel.classList.add('active')
		document.body.style.overflow = 'hidden'
	})
}

if (mobileSearchBack) {
	mobileSearchBack.addEventListener('click', function () {
		mobileSearchPanel.classList.remove('active')
		document.body.style.overflow = 'auto'
	})
}

// Navigation function
function navigateTo(path) {
	window.location.href = path
}

// Close mobile search when route changes
window.addEventListener('popstate', function () {
	mobileSearchPanel.classList.remove('active')
	document.body.style.overflow = 'auto'
})
