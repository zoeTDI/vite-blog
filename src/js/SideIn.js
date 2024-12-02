const TRANSITION_DURATION = 80;
const DURATION = 300;
const map = new WeakMap();
export default {
    mounted(el) {
        function isBelowViewport(el) {
            return el.getBoundingClientRect().top > window.innerHeight;
        }

        const ob = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    map.get(entry.target).play();
                    ob.unobserve(entry.target);
                }
            })
        })
        if (isBelowViewport(el)) {
            const animation = el.animate(
                [
                    {
                        transform: "translateY(" + TRANSITION_DURATION + "px)",
                        opacity: 0.5
                    },
                    {
                        transform: "translateY(0)",
                        opacity: 1
                    }
                ],
                {
                    duration: DURATION,
                    easing: "ease-out",
                    fill: "forwards"
                })
            animation.pause();
            ob.observe(el);
            map.set(el, animation);
        }
    },
    unmounted(el) {

    }
}