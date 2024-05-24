document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('start-screen').classList.remove('hidden');
    }, 8000); // Thời gian chờ cho fadeOut hoàn thành
        
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('start-button').classList.remove('hidden');
    }, 7000); // Thời gian chờ trước khi hiện nút "Bắt đầu"
});

document.getElementById('start-button').addEventListener('click', start);
document.getElementById('start-button').addEventListener('click', start);
document.getElementById('yes-button').addEventListener('click', showInputBox);
document.getElementById('no-button').addEventListener('click', showResponseCloud);
document.getElementById('submit-button').addEventListener('click', submitThoughts);

function start() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    displayCaptions();
    generateHearts();
}
function showResponseCloud() {
    document.getElementById('response-cloud').classList.remove('hidden');
}
const captions = [
    {
        text: "Trước hết nghe tui nói nha!",
        image: "path/to/image1.jpg",
        gif:""
    },
    {
        text: "Mấy bữa nay thấy HN rất mệt mỏi trong cái tháng thi này",
        image: "path/to/image2.jpg",
    },
    {
        text: "Tui hong biết phải giúp sao hết",
        image: "path/to/image3.jpg",
    },
    {
        text: "Muốn HN luôn tươi cườiiiii ;-; ",
        image: "path/to/image4.jpg",
        gif:""
    },
    {
        text: "Tui mong rằng chiếc quà nhỏ này sẽ giúp HN",
        image: "path/to/image5.jpg",
    },
    {
        text: "Yêu đời hơn nèeeee",
        image: "path/to/image6.jpg",
        gif:""
    },
    {
        text: "HN hãy như xưa :') cứ hồn nhiên là chính mình",
        image: "path/to/HN.jpg",
    },
    {
        text: "Những môn khó khăn qua rồi nên giờ nghỉ ngơi đi nè!",
        image: "path/to/image8.jpg",
    },
    {
        text: "Tuần tới còn 2 môn ta cùng chiến tiếp",
        image: "path/to/image9.jpg",
    },
    {
        text: "Cảm ơn HN đã chịu khó lắng nghe!",
        image: "",
        gif:"path/gif/gif1.gif"
    },
];

let currentCaption = 0;

function displayCaptions() {
    if (currentCaption < captions.length) {
        let captionElement = document.getElementById('caption');
        let imageElement = document.getElementById('caption-image');
        let gifElement = document.getElementById('caption-gif');
        captionElement.innerHTML = '';
        imageElement.src = captions[currentCaption].image;
        imageElement.classList.remove('hidden');
        
        if (currentCaption === captions.length - 1) { // Nếu là caption cuối cùng
            gifElement.src = captions[currentCaption].gif;
            gifElement.classList.remove('hidden');
        } else {
            imageElement.src = captions[currentCaption].image;
            imageElement.classList.remove('hidden');
        }

        let caption = captions[currentCaption].text;
        let index = 0;

        let interval = setInterval(() => {
            if (index < caption.length) {
                captionElement.innerHTML += caption[index++];
            } else {
                clearInterval(interval);
                currentCaption++;
                setTimeout(displayCaptions, 3000);
            }
        }, 50);
    } else {
        document.getElementById('opinion-box').classList.remove('hidden');
    }
}

function showInputBox() {
    document.getElementById('opinion-box').classList.add('hidden');
    document.getElementById('input-box').classList.remove('hidden');
}

function submitThoughts() {
    const thoughts = document.getElementById('thoughts').value;
    fetch('/submit-thoughts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ thoughts })
    }).then(response => {
        if (response.ok) {
            alert('Cảm ơn Hồng Nhung đã chia sẽ!');
            document.getElementById('input-box').classList.add('hidden');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

function generateHearts() {
    const body = document.body;
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 5}s`;
        body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 300);
}
