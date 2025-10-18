<script type = "module">
    import {Toast} from 'bootstrap.esm.js';

    Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>