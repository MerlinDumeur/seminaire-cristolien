<script type="text/javascript">
    Reveal.addEventListener('fragmenthidden', function(event) {
        const fragment = event.fragment;
        if (fragment.tagName === 'VIDEO') {
            fragment.pause();
            fragment.currentTime = 0;
        }
    });

    Reveal.addEventListener('fragmentshown', (event) => {
        const fragmentIndex = event.fragment.getAttribute('data-fragment-index');
        // Find all videos with the same data-fragment-index
        const videos = document.querySelectorAll(`video.fragment[data-fragment-index="${fragmentIndex}"]`);
        videos.forEach((video) => {
            if (video.tagName === 'VIDEO') {
                video.play().catch((error) => {
                    console.error('Error playing video:', error);
                });
                console.log('Found video:', video);
            }
        });
    });
</script>