
import "./catalog-selects-style.scss"

const catalogSelect = ()=>{
    const elem = `
            <div class="catalog-list-selects">
                <div class="select-back">
                <span class="select-back-title">Спинка</span>
                <div class="select-zone">
                <div class="select-img">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3.15639C8 2.4122 7.2184 1.93611 6.59488 2.34237C6.53601 2.38072 6.47745 2.41949 6.41918 2.45867C5.86371 2.83217 5.94206 3.712 5.99521 4.37924C5.99838 4.41908 6 4.45935 6 4.5V10.5C6 11.3284 5.32843 12 4.5 12C3.67157 12 3 11.3284 3 10.5V8.60717C3 7.65232 1.87254 7.30386 1.45467 8.16242C0.522791 10.077 0 12.2275 0 14.5C0 16.7725 0.522791 18.923 1.45467 20.8376C1.87254 21.6961 3 21.3477 3 20.3928V17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5V23.5C6 24.3284 5.32843 25 4.5 25V25C4.49999 25 4.49998 25 4.49999 25C5.14466 25.6142 5.84582 26.1696 6.59488 26.6576C7.2184 27.0639 8 26.5878 8 25.8436V25.5C8 24.6716 8.67157 24 9.5 24C10.3284 24 11 24.6716 11 25.5V27.7924C11 28.252 11.3127 28.6561 11.7642 28.7423C12.6501 28.9114 13.5647 29 14.5 29C15.4353 29 16.3499 28.9114 17.2358 28.7423C17.6873 28.6561 18 28.252 18 27.7924V25.5C18 24.6716 18.6716 24 19.5 24C20.3284 24 21 24.6716 21 25.5V25.8436C21 26.5878 21.7816 27.0639 22.4051 26.6576C23.1542 26.1696 23.8553 25.6142 24.5 25C24.5 25 24.5 25 24.5 25V25C23.6716 25 23 24.3284 23 23.5V17.5C23 16.6716 23.6716 16 24.5 16C25.3284 16 26 16.6716 26 17.5V20.3928C26 21.3477 27.1275 21.6961 27.5453 20.8376C28.4772 18.923 29 16.7725 29 14.5C29 12.2275 28.4772 10.077 27.5453 8.16242C27.1275 7.30386 26 7.65232 26 8.60717V10.5C26 11.3284 25.3284 12 24.5 12C23.6716 12 23 11.3284 23 10.5V4.5C23 4.45935 23.0016 4.41908 23.0048 4.37924C23.0579 3.71199 23.1363 2.83217 22.5808 2.45867C22.5226 2.41949 22.464 2.38072 22.4051 2.34237C21.7816 1.93611 21 2.4122 21 3.15639V3.5C21 4.32843 20.3284 5 19.5 5C18.6716 5 18 4.32843 18 3.5V1.20764C18 0.74802 17.6873 0.343925 17.2358 0.257721C16.3499 0.0885491 15.4353 0 14.5 0C13.5647 0 12.6501 0.0885491 11.7642 0.257721C11.3127 0.343925 11 0.74802 11 1.20764V3.5C11 4.32843 10.3284 5 9.5 5C8.67157 5 8 4.32843 8 3.5V3.15639ZM13 4.5C13 3.67157 13.6716 3 14.5 3C15.3284 3 16 3.67157 16 4.5V10.5C16 11.3284 15.3284 12 14.5 12C13.6716 12 13 11.3284 13 10.5V4.5ZM9.5 10C8.67157 10 8 10.6716 8 11.5V17.5C8 18.3284 8.67157 19 9.5 19C10.3284 19 11 18.3284 11 17.5V11.5C11 10.6716 10.3284 10 9.5 10ZM19.5 10C18.6716 10 18 10.6716 18 11.5V17.5C18 18.3284 18.6716 19 19.5 19C20.3284 19 21 18.3284 21 17.5V11.5C21 10.6716 20.3284 10 19.5 10ZM14.5 16C13.6716 16 13 16.6716 13 17.5V23.5C13 24.3284 13.6716 25 14.5 25C15.3284 25 16 24.3284 16 23.5V17.5C16 16.6716 15.3284 16 14.5 16Z" fill="#2B3350"/>
                    </svg>        
                </div>            
                <select name="select-back" id="select-back">
                    <option value="grid">Сетка</option>
                </select>
                </div>
                </div>
            </div>

            <div class="catalog-list-selects">
                <div class="select-back">
                <span class="select-back-title">Сиденье</span>
                <div class="select-zone">
                <div class="select-img">
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2205 19.9591C21.5298 19.6135 20.9955 19.1416 20.5864 18.517V18.5165C17.8925 14.4028 20.9457 11.3561 23.0058 9.90631C23.6757 9.43436 23.9639 8.59212 23.7216 7.81118L23.014 5.52737C22.7739 4.75245 22.0663 4.22084 21.253 4.20503C18.3167 4.14717 16.3318 2.33002 15.7734 1.10305C15.4688 0.433125 14.7972 0 14.0622 0H9.93766C9.20266 0 8.53109 0.433125 8.22648 1.10305C7.76153 2.12455 5.90238 4.1428 2.7468 4.20498C1.93359 4.22084 1.22594 4.7524 0.98586 5.52732L0.278204 7.81112C0.0359381 8.59206 0.324141 9.43431 0.994063 9.90626C3.05414 11.356 6.10734 14.4027 3.41344 18.517C3.00438 19.1415 2.47008 19.6135 1.77938 19.9591C0.733149 20.4816 0.417985 21.8325 1.12859 22.7712L2.60625 24.7214C3.15586 25.4471 4.14133 25.6757 4.94961 25.265C6.75266 24.349 9.31477 24.0066 11.2813 27.5761C11.5926 28.1408 12.4069 28.1416 12.7185 27.5761C14.6851 24.0066 17.2472 24.349 19.0502 25.265C19.8585 25.6757 20.844 25.4471 21.3936 24.7214L22.8713 22.7712C23.5829 21.8311 23.2652 20.481 22.2205 19.9591ZM11.9999 3.33599C13.3567 3.33599 14.4609 4.44013 14.4609 5.79698C14.4609 7.15384 13.3567 8.25798 11.9999 8.25798C10.6431 8.25798 9.53898 7.15384 9.53898 5.79698C9.53898 4.44013 10.6431 3.33599 11.9999 3.33599ZM11.9999 21.3832C11.5471 21.3832 11.1796 21.0157 11.1796 20.5629C11.1796 20.1101 11.5471 19.7426 11.9999 19.7426C12.4527 19.7426 12.8202 20.1101 12.8202 20.5629C12.8202 21.0157 12.4527 21.3832 11.9999 21.3832ZM15.5016 18.1019H8.49828C8.04547 18.1019 7.67797 17.7344 7.67797 17.2816C7.67797 16.8288 8.04547 16.4613 8.49828 16.4613H15.5016C15.9544 16.4613 16.3219 16.8288 16.3219 17.2816C16.3219 17.7344 15.9544 18.1019 15.5016 18.1019ZM15.5016 14.8206H8.49828C8.04547 14.8206 7.67797 14.4531 7.67797 14.0003C7.67797 13.5475 8.04547 13.18 8.49828 13.18H15.5016C15.9544 13.18 16.3219 13.5475 16.3219 14.0003C16.3219 14.4531 15.9544 14.8206 15.5016 14.8206ZM15.5016 11.5393H8.49828C8.04547 11.5393 7.67797 11.1718 7.67797 10.719C7.67797 10.2662 8.04547 9.89866 8.49828 9.89866H15.5016C15.9544 9.89866 16.3219 10.2662 16.3219 10.719C16.3219 11.1718 15.9544 11.5393 15.5016 11.5393ZM11.9999 6.6173C12.4522 6.6173 12.8202 6.24925 12.8202 5.79698C12.8202 5.34472 12.4522 4.97667 11.9999 4.97667C11.5477 4.97667 11.1796 5.34472 11.1796 5.79698C11.1796 6.24925 11.5477 6.6173 11.9999 6.6173Z" fill="#2B3350"/>
                        </svg>                             
                </div>            
                <select name="select-back" id="select-back">
                    <option value="leatherette">Кожзам</option>
                </select>
                </div>
                </div>
            </div>


            <div class="catalog-list-selects">
                <div class="select-back">
                <span class="select-back-title">Подголовник</span>
                <div class="select-zone">
                <div class="select-img">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_68_361)">
                        <path d="M22.2005 7.02882C22.8672 6.64392 22.8672 5.68166 22.2005 5.29676L13.5259 0.288663C13.2165 0.110037 12.8353 0.110038 12.5259 0.288666L3.85156 5.29677C3.18489 5.68166 3.18489 6.64391 3.85155 7.02882L12.5259 12.0371C12.8353 12.2157 13.2165 12.2157 13.5259 12.0371L22.2005 7.02882Z" fill="#2B3350"/>
                        <path d="M13.8008 24.2682C13.8008 25.038 14.6341 25.5191 15.3008 25.1342L23.9781 20.1243C24.2875 19.9457 24.4781 19.6156 24.4781 19.2583V10.1642C24.4781 9.39436 23.6448 8.91323 22.9781 9.29812L14.3008 14.3078C13.9914 14.4865 13.8008 14.8166 13.8008 15.1739V24.2682Z" fill="#2B3350"/>
                        <path d="M3.07422 9.29814C2.40755 8.91324 1.57422 9.39437 1.57422 10.1642V19.2583C1.57422 19.6156 1.76481 19.9457 2.07421 20.1243L10.7514 25.1342C11.418 25.5191 12.2514 25.038 12.2514 24.2682V15.1738C12.2514 14.8166 12.0608 14.4865 11.7514 14.3078L3.07422 9.29814Z" fill="#2B3350"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_68_361">
                        <rect width="26" height="26" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>                                              
                </div>            
                <select name="select-back" id="select-back">
                    <option value="leatherette">3D</option>
                </select>
                </div>
                </div>
            </div>

            <div class="catalog-list-selects">
                <div class="select-back">
                <span class="select-back-title">Подлокотники</span>
                <div class="select-zone">
                            
                <select name="select-back" id="select-back">
                    <option value="leatherette">Все</option>
                </select>
                </div>
                </div>
            </div>
    `
    const wrap = document.querySelector('.catalog-lists-selects')
    wrap.innerHTML = elem
}

export {catalogSelect}