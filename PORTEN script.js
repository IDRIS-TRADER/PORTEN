// Бургер-кнопка

const menuHeader = document.querySelector('.header__menu--list--is-active')

document.addEventListener('click', (event) => {
    if (event.target.closest('.header--burger--button')) {
        menuHeader.classList.add('menu-active')
    } else {
        menuHeader.classList.remove('menu-active')
    }
})



// Модальные окна "Корзина" и "Поиск"

const basket = document.querySelector('.modal-window__basket')

document.addEventListener('click', (event) => {
    if (event.target.closest('.header__column__second--img1') || event.target.closest('.modal-window__basket--is-active')) {
        basket.classList.add('modal-window__basket--is-active')
    }else {
        basket.classList.remove('modal-window__basket--is-active')
    }
})

const search = document.querySelector('.modal-window__search')

document.addEventListener('click', (event) => {
    if (event.target.closest('.header__column__second--img2') || event.target.closest('.modal-window__search--is-active')) {
        search.classList.add('modal-window__search--is-active')
    }else {
        search.classList.remove('modal-window__search--is-active')
    }
})



// Добавить в "Корзина"

const basketAppend = document.querySelectorAll('.basket')
const basketElements = document.querySelector('.modal-window__basket__elements')
const addedItems = []

basketAppend.forEach((one) => {
    one.addEventListener('click', (event) => {
        one.classList.toggle('basket-is-active')
        const current = event.target.closest('.watch')
        const watchName = current.querySelector('.watch--name').textContent
        const watchPrice = current.querySelector('.watch--price').textContent
        const nameElement = document.createElement('p')
        const priceElement = document.createElement('p')

        nameElement.className = "name-element"
        priceElement.className = "price-element"
        
        nameElement.textContent = watchName
        priceElement.textContent = watchPrice
        
        if (one.classList.contains('basket-is-active')) {
            basketElements.append(nameElement)
            basketElements.append(priceElement)
            
            addedItems.push({
                name: nameElement,
                price: priceElement
            })
        } else {
            const itemIndex = addedItems.findIndex(item => 
                item.name.textContent === watchName && 
                item.price.textContent === watchPrice
            )
            
            if (itemIndex !== -1) {
                const item = addedItems[itemIndex]
                item.name.remove()
                item.price.remove()
                addedItems.splice(itemIndex, 1)
            }
        }
    })
})



// Добавить в "Понравилось"

const like = document.querySelector('.modal-window__like')

document.addEventListener('click', (event) => {
    if (event.target.closest('.item-like') || event.target.closest('.modal-window__like--is-active')) {
        like.classList.add('modal-window__like--is-active')
    }else {
        like.classList.remove('modal-window__like--is-active')
    }
})

const likeAppend = document.querySelectorAll('.like')
const likeElements = document.querySelector('.modal-window__like__elements')
const addedLikes = []

likeAppend.forEach((one) => {
    one.addEventListener('click', (event) => {
        one.classList.toggle('like-is-active')
        const current = event.target.closest('.watch')
        const watchImg = current.querySelector('.watch--img')
        const watchImgClone = watchImg.cloneNode(true)
        const watchName = current.querySelector('.watch--name').textContent
        const watchPrice = current.querySelector('.watch--price').textContent
        const nameElement = document.createElement('p')
        const priceElement = document.createElement('p')

        watchImgClone.className = "img-element"
        nameElement.className = "name-element"
        priceElement.className = "price-element"
        
        nameElement.textContent = watchName
        priceElement.textContent = watchPrice
        
        if (one.classList.contains('like-is-active')) {
            likeElements.append(watchImgClone)
            likeElements.append(nameElement)
            likeElements.append(priceElement)
            
            addedLikes.push({
                img:  watchImgClone,
                name: nameElement,
                price: priceElement
            })
        } else {
            const itemIndex = addedLikes.findIndex(item => 
                item.name.textContent === watchName && 
                item.price.textContent === watchPrice &&
                item.img
            )
            
            if (itemIndex !== -1) {
                const item = addedLikes[itemIndex]
                item.img.remove()
                item.name.remove()
                item.price.remove()
                addedLikes.splice(itemIndex, 1)
            }
        }
    })
})



// Модальное окно "Настройки"

const settings = document.querySelector('.modal-window__settings')

document.addEventListener('click', (event) => {
    if (event.target.closest('.item-settings') || event.target.closest('.modal-window__settings--is-active')) {
        settings.classList.add('modal-window__settings--is-active')
    }else {
        settings.classList.remove('modal-window__settings--is-active')
    }
})



// Модальное окно "Личный кабинет"

const personal = document.querySelector('.modal-window__personal')

document.addEventListener('click', (event) => {
    if (event.target.closest('.item-personal') || event.target.closest('.modal-window__personal--is-active')) {
        personal.classList.add('modal-window__personal--is-active')
    }else {
        personal.classList.remove('modal-window__personal--is-active')
    }
})


