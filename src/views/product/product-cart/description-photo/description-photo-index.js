import "./description-photo-style.scss"

const desctiptionPhoto = ()=>{

    const wrap = document.querySelector('.description-photo-wrap')
    let elem = `
    <div class="description-photo">
                <div class="description-photo-choise">
                    <img id="photo-1" src="https://s3-alpha-sig.figma.com/img/ea10/bd46/5059ec5f7e284c763688ac44fb733ac2?Expires=1659312000&Signature=c8NrWAcSJ3-XAKOIIXoSki9v7eFRxI9ey9OMxCWZcJhIEaf9rlA114xTyWbH5YZz8kCsVD1nIyzMrTzwvfqhd3fk-~k8z-dl8Yom8SJRpBIuOOjovl9DqMtHMYGe~K2LIWLHYDb~Nj0U2bNAkQBFo1-sdjm-QcHzioFlMhyf7e4OX1NAxkq~SuC-wz732WmI6kXXpbBqSyBzhScnmKC1EZtZYa78Qp0uSfjmVInhv4QV7-dXSLBrsIxabEKduOI98m~tJafJrKJ5osc8HQkNSaX9rgkEHwi955F4ayfXa-3-n2WZbPAoarALO0erJXNkrAYnyDosRN9j5Pk7heIaeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
                <div class="description-photo-choise">
                    <img id="photo-2" src="https://s3-alpha-sig.figma.com/img/ea10/bd46/5059ec5f7e284c763688ac44fb733ac2?Expires=1659312000&Signature=c8NrWAcSJ3-XAKOIIXoSki9v7eFRxI9ey9OMxCWZcJhIEaf9rlA114xTyWbH5YZz8kCsVD1nIyzMrTzwvfqhd3fk-~k8z-dl8Yom8SJRpBIuOOjovl9DqMtHMYGe~K2LIWLHYDb~Nj0U2bNAkQBFo1-sdjm-QcHzioFlMhyf7e4OX1NAxkq~SuC-wz732WmI6kXXpbBqSyBzhScnmKC1EZtZYa78Qp0uSfjmVInhv4QV7-dXSLBrsIxabEKduOI98m~tJafJrKJ5osc8HQkNSaX9rgkEHwi955F4ayfXa-3-n2WZbPAoarALO0erJXNkrAYnyDosRN9j5Pk7heIaeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
                <div class="description-photo-choise">
                    <img id="photo-3" src="https://s3-alpha-sig.figma.com/img/ea10/bd46/5059ec5f7e284c763688ac44fb733ac2?Expires=1659312000&Signature=c8NrWAcSJ3-XAKOIIXoSki9v7eFRxI9ey9OMxCWZcJhIEaf9rlA114xTyWbH5YZz8kCsVD1nIyzMrTzwvfqhd3fk-~k8z-dl8Yom8SJRpBIuOOjovl9DqMtHMYGe~K2LIWLHYDb~Nj0U2bNAkQBFo1-sdjm-QcHzioFlMhyf7e4OX1NAxkq~SuC-wz732WmI6kXXpbBqSyBzhScnmKC1EZtZYa78Qp0uSfjmVInhv4QV7-dXSLBrsIxabEKduOI98m~tJafJrKJ5osc8HQkNSaX9rgkEHwi955F4ayfXa-3-n2WZbPAoarALO0erJXNkrAYnyDosRN9j5Pk7heIaeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
                <div class="description-photo-choise">
                    <img id="photo-4" src="https://s3-alpha-sig.figma.com/img/ea10/bd46/5059ec5f7e284c763688ac44fb733ac2?Expires=1659312000&Signature=c8NrWAcSJ3-XAKOIIXoSki9v7eFRxI9ey9OMxCWZcJhIEaf9rlA114xTyWbH5YZz8kCsVD1nIyzMrTzwvfqhd3fk-~k8z-dl8Yom8SJRpBIuOOjovl9DqMtHMYGe~K2LIWLHYDb~Nj0U2bNAkQBFo1-sdjm-QcHzioFlMhyf7e4OX1NAxkq~SuC-wz732WmI6kXXpbBqSyBzhScnmKC1EZtZYa78Qp0uSfjmVInhv4QV7-dXSLBrsIxabEKduOI98m~tJafJrKJ5osc8HQkNSaX9rgkEHwi955F4ayfXa-3-n2WZbPAoarALO0erJXNkrAYnyDosRN9j5Pk7heIaeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>        
            </div>
    `
    wrap.innerHTML = elem
}
export {desctiptionPhoto}