const section = document.querySelector("section.vid");
const vid = section.querySelector("video");

vid.pause(); // Start video paused

const scroll = () => {
    const distance = window.scrollY;
    const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

    // Modify this multiplier to increase the scroll length
    const multiplier = 2; // Adjust this value to make scrolling longer

    let percentage = (distance / totalScrollHeight) * multiplier;
    percentage = Math.max(0, percentage);
    percentage = Math.min(percentage, 1);

    if (vid.duration > 0) {
        vid.currentTime = vid.duration * percentage;
    }

    // If the user has scrolled to 100% (end of the video)
    if (percentage === 1) {
        window.removeEventListener("scroll", scroll); // Remove scroll event listener
    }
};

window.addEventListener("scroll", scroll);
scroll(); // Initial call to sync
