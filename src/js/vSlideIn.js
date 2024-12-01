const DISTANCE = 100;
const DURATION = 500;
const map = new WeakMap();
const ob = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const animation = map.get(entry.target);
            animation && animation.play();
            ob.unobserve(entry.target);
        }
    }
});
function isBelowViewport(el) {
    return el.getBoundingClientRect().top > window.innerHeight;
}
export default {
    mounted(el) {
        if (!isBelowViewport(el)) {
            return ;
        }
        // Web Animation API
        const animation = el.animate([
            {
                transform: `translateY(${DISTANCE}px)`,
                opacity: 0.5
            },
            {
                transform: 'translateY(0px)',
                opacity: 1
            }],
            {
                duration: DURATION,
                easing: 'ease-out',
                fill: "forwards"
            });
        animation.pause();
        map.set(el, animation);
        // Intersection Observer
        ob.observe(el);
    },
    unmounted(el) {
        ob.unobserve(el);
    }
};