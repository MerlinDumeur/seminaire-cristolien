<script type="text/javascript">
document.querySelectorAll('.reveal .slide .stretch-lines').forEach(ul => {
    const itemCount = ul.children.length;
    ul.style.setProperty('--item-count', itemCount);
    // ul.style.padding = `calc((100% - (100% / ${itemCount})) / (${itemCount} + 1)) 0`;
});
</script>