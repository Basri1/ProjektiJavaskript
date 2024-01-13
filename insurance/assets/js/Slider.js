// export default function Slider(slides) {
//     let slides_html = '';

//     slides.forEach((element, index) => {
//         slides_html += `
//             <div class="carousel-item ${index === 0 ? 'active' : ''}">
//                 <img src="${element.src}" class="d-block w-100" alt="${element.alt}">
//             </div>
//         `;
//     });

//     return `
//         <div id="slider" class="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-inner">
//                 ${slides_html}
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//             </button>
//         </div>
//     `;
// }


export default function Slider(slides) {
    let slides_html = '';

    slides.forEach((element, index) => {
        slides_html += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${element}" class="d-block w-100" alt="Slide ${index + 1}">
            </div>
        `;
    });

    return `
        <div id="slider" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                ${slides_html}
            </div>
            <!-- Kontrollet e sllajdeve këtu -->
        </div>
    `;
}

const slides = [
    'https://www.blueskyinsure.com/images/auto-home-insurance.jpg'
    
];

document.getElementById('slider-container').innerHTML = Slider(slides);


