
document.addEventListener('DOMContentLoaded', () => {
let elements = document.getElementsByClassName('oands');
fadeOut(elements[0] , 1000);
function fadeOut(element , duration) {
    element.style.opacity = 0;
    intervel = duration/100;    
    const intervalID =  setInterval(() => {
        console.log(element.style.opacity)
        element.style.opacity = parseFloat(element.style.opacity) + 0.01;
        if(element.style.opacity >= 1){
            clearInterval(intervalID)
        }    
        console.log(intervel);
    },intervel);
};
});

const element = document.querySelector('[class^="oands-fadeIn"]');
// If the element exists, extract the duration from the class name
if (element) {
    // Extract the class name that includes the duration (e.g., "oands-fadeIn-3000")
    const className = element?.className;
    // Use a regular expression to find the duration value in the class name
    const durationMatch = className?.match(/oands-fadeIn-(\d+)/);
    var duration = durationMatch ? parseInt(durationMatch[1], 10) : 1000;
    fadeIn(element, duration);
}

function fadeIn(element, duration) {
    if(element && duration) {
        let opacity = 0;
        const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps
        function animate() {
            opacity += increment;
            element.style.opacity = opacity;

            if (opacity < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 1;
            }
        }
        animate();
    }
    else {
        console.log("Please enter valid class name and duration");
    }
}
// function timingFunction1(animationType, p1x, p1y, p2x, p2y) {
//     switch (animationType) {
//         case 'ease':
//             return (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
//         case 'ease-in':
//             return (t) => t * t;
//         case 'ease-out':
//             return (t) => t * (2 - t);
//         case 'ease-in-out':
//             return (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//         case 'cubicBezier':
//             return cubicBezier(0.5, p1x, p1y, p2x, p2y);
//     }
// }

// function cubicBezier(t, p1x, p1y, p2x, p2y) {
//     const cX = 3 * p1x,
//         bX = 3 * (p2x - p1x) - cX,
//         aX = 1 - cX - bX;

//     const cY = 3 * p1y,
//         bY = 3 * (p2y - p1y) - cY,
//         aY = 1 - cY - bY;

//     const x = ((aX * t + bX) * t + cX) * t;
//     const y = ((aY * t + bY) * t + cY) * t;

//     return y;
// }
// fadeIn(element, duration, animationType, delay);

// function fadeIn(element, duration, timingFunction, delay) {
//     if (timingFunction) {
//         console.log('inisdde')
//         let startTime = null;
//         function animate(currentTime) {
//             if (!startTime) startTime = currentTime;
//             const elapsed = currentTime - startTime;

//             // Wait until the delay is passed before starting the animation
//             if (elapsed < delay) {
//                 requestAnimationFrame(animate);
//                 return;
//             }

//             const adjustedElapsed = elapsed - delay;
//             const progress = Math.min(adjustedElapsed / duration, 1); // Ensure progress doesn't exceed 1
//             const easedProgress = timingFunction(progress); // Apply easing to the progress
//             element.style.opacity = easedProgress;

//             if (progress < 1) {
//                 requestAnimationFrame(animate); // Continue animating
//             } else {
//                 element.style.opacity = 1; // Ensure it ends fully visible
//             }
//         }
//         requestAnimationFrame(animate); // Start the animation
//     } 
//     else {
//         //fade In linear timing animation when timing function nor delay is not given
//         let opacity = 0;
//         const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps
//         function animate() {
//             opacity += increment;
//             element.style.opacity = opacity;
    
//             if (opacity < 1) {
//                 requestAnimationFrame(animate);
//             } else {
//                 element.style.opacity = 1;
//             }
//         }
//         animate();
//     }
    // else {
    //     // Fade In linear timing animation when timing function is not given
    //     let opacity = 0;
    //     const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps

    //     function animate(currentTime) {
    //         if (!startTime) startTime = currentTime;
    //         const elapsed = currentTime - startTime;

    //         // Wait until the delay is passed before starting the animation
    //         if (elapsed < delay) {
    //             requestAnimationFrame(animate);
    //             return;
    //         }

    //         const adjustedElapsed = elapsed - delay;
    //         opacity = Math.min(adjustedElapsed / duration, 1); // Calculate opacity based on elapsed time
    //         element.style.opacity = opacity;

    //         if (opacity < 1) {
    //             requestAnimationFrame(animate); // Continue animating
    //         } else {
    //             element.style.opacity = 1; // Ensure it ends fully visible
    //         }
    //     }
    //     requestAnimationFrame(animate); // Start the animation
    // }
// }
