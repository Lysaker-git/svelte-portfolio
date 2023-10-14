<script lang="ts">

</script>

<forms>
    <div>
        <label for="name" class="label">Name:</label>
        <input class="input" type="text" id="name"/>
    </div>
    <div>
        <label for="eMail" class="label">E-mail:</label>
        <input class="input" type="email" id="eMail"/>
    </div>
    <div>
        <label for="textArea" class="label">Subject:</label>
        <textarea class="textarea" rows="4" id="textArea"/>
    </div>
    <div class="space-y-2">
        <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox"/>
            <p>I am not a robot</p>
        </label>
    </div>
</forms>
<section>
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
        <a class="logo-item" href="https://github.com/Lysaker-git">
            <span><i class="fa-brands fa-github"></i></span>
            <span>Github</span>
        </a>
        <a class="logo-item" href="https://www.linkedin.com/in/robin-lysaker-36295517b/">
            <span><i class="fa-brands fa-linkedin"></i></span>
            <span>Linkedin</span>
        </a>
        <a class="logo-item" href="https://www.facebook.com/robin.lysaker/">
            <span><i class="fa-brands fa-facebook"></i></span>
            <span>Facebook</span>
        </a>
        <!-- ... -->
    </div>
</section>