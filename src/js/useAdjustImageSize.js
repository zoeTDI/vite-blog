import {onMounted, ref} from "vue";

export function useAdjustImageSize() {
    const noteImage = ref(null);
    const adjustImageSize = () => {
        if (noteImage.value) {
            const img = noteImage.value;
            const naturalWidth = img.naturalWidth
            const naturalHeight = img.naturalHeight;

            if (naturalWidth > (naturalHeight * 1.7)) {
                img.style.width = 'auto';
                img.style.height = '100%';
            } else {
                img.style.width = '100%';
                img.style.height = 'auto';
            }
        }
    }
    onMounted(() => {
        if (noteImage.value && noteImage.value.complete) {
            adjustImageSize();
        }
    })
    return {
        noteImage,
        adjustImageSize
    }
}