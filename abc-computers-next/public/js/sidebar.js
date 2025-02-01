
const allSubmenu = document.querySelectorAll('.vertical-menu .submenu-active')


const handleSubmenuToggle = (item) => {

    const currentActive = item?.classList?.contains("active")

    if (currentActive) {
        item?.classList?.remove("active")
        return
    }

    const activeSubmenu = document.querySelector('.vertical-menu .submenu-active.active')

    if (activeSubmenu) {
        activeSubmenu?.classList?.remove("active")
    }

    item?.classList?.add("active")
}

allSubmenu.forEach(item => {
    const button = item?.querySelector(".submenu-toggle")

    button.addEventListener("click", () => handleSubmenuToggle(item))
})