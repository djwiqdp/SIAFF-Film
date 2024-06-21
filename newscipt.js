document.addEventListener('DOMContentLoaded', () => {
    const rightPanel = document.getElementById('right-panel');
    const firstBg = document.createElement('div');
    const secondBg = document.createElement('div');

    firstBg.classList.add('background-image', 'first');
    secondBg.classList.add('background-image', 'second');

    rightPanel.appendChild(firstBg);
    rightPanel.appendChild(secondBg);

    rightPanel.addEventListener('scroll', () => {
        const scrollTop = rightPanel.scrollTop;
        const scrollHeight = rightPanel.scrollHeight - rightPanel.clientHeight;
        const scrollFraction = scrollTop / scrollHeight;
        secondBg.style.opacity = scrollFraction;
    });

    // 서서히 또렷해지는 효과
    const texts = document.querySelectorAll('.left-panel h1, .left-panel h2, .left-panel h3, .left-panel p');
    setTimeout(() => {
        texts.forEach(text => {
            text.style.opacity = 1;
            text.style.filter = 'blur(0)';
        });
        rightPanel.classList.add('show');
    }, 1000); // 페이지 로드 후 1초 후에 효과 시작

    // 이미지 클릭 시 변화
    const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg',
                           'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg','img15.jpg'];

    rightPanel.addEventListener('click', (event) => {
        console.log('Right panel clicked'); 

        if (!rightPanel.contains(event.target)) return;

        const randomIndex = Math.floor(Math.random() * imageNames.length);
        const imgSrc = imageNames[randomIndex];

        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('click-image');
        img.style.position = 'absolute'; 
        img.style.left = `${event.clientX - rightPanel.getBoundingClientRect().left}px`;
        img.style.top = `${event.clientY - rightPanel.getBoundingClientRect().top}px`;

        rightPanel.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 5200); 
    });
});




