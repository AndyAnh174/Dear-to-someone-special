document.getElementById('start-button').addEventListener('click', start);
document.getElementById('yes-button').addEventListener('click', showInputBox);
document.getElementById('submit-button').addEventListener('click', submitThoughts);

function start() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    displayCaptions();
    generateHearts();
}

const captions = [
    "Bạn là người tuyệt vời nhất!",
    "Mỗi ngày có bạn đều là ngày tuyệt vời!",
    "Nụ cười của bạn làm sáng cả ngày của tôi!",
    "Bạn là nguồn cảm hứng của tôi!",
    "Cảm ơn bạn đã là chính bạn!"
];

let currentCaption = 0;

function displayCaptions() {
    if (currentCaption < captions.length) {
        let captionElement = document.getElementById('caption');
        captionElement.innerHTML = '';
        let caption = captions[currentCaption];
        let index = 0;

        let interval = setInterval(() => {
            if (index < caption.length) {
                captionElement.innerHTML += caption[index++];
            } else {
                clearInterval(interval);
                currentCaption++;
                setTimeout(displayCaptions, 2000);
            }
        }, 100);
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
            alert('Cảm ơn bạn đã chia sẻ!');
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
