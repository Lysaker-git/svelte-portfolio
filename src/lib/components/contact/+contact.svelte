<script lang="ts">

</script>

<div class="
    backgroundCustom 
    max-w-4xl 
    mx-auto 
    mt-60 
    mb-10 
    grid 
    place-items-center
    ">
    <h2 class="h2 mb-4">Contact me</h2>
    <div class="card p-6 w-full">
        <form>
            <div class="mb-2">
                <label for="name" class="label">Name:</label>
                <input required class="input" type="text" id="name"/>
            </div>
            <div class="mb-2">
                <label for="eMail" class="label">E-mail:</label>
                <input required class="input" type="email" id="eMail"/>
            </div>
            <div class="mb-2">
                <label for="textArea" class="label">Subject:</label>
                <textarea required class="textarea" rows="4" id="textArea"/>
            </div>
            <div class="space-y-2 mb-4">
                <label class="flex items-center space-x-2">
                    <input required class="checkbox" type="checkbox"/>
                    <p>I am not a robot</p>
                </label>
            </div>
            <button  class="btn variant-filled-primary" type="submit">Send</button>
        </form>
    </div>
</div>
<section class="max-w-4xl mx-auto mb-20">
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
        <a class="logo-item" target="_blank" href="https://github.com/Lysaker-git">
            <span><i class="fa-brands fa-github"></i></span>
            <span>Github</span>
        </a>
        <a class="logo-item" target="_blank" href="https://www.linkedin.com/in/robin-lysaker-36295517b/">
            <span><i class="fa-brands fa-linkedin"></i></span>
            <span>Linkedin</span>
        </a>
        <a class="logo-item" target="_blank" href="https://www.facebook.com/robin.lysaker/">
            <span><i class="fa-brands fa-facebook"></i></span>
            <span>Facebook</span>
        </a>
        <!-- ... -->
    </div>
</section>

<style>
    textarea {
        resize: none;
    }
</style>