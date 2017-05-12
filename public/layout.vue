<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        </head>
        <body>
            <nav>
                <p>Items can go here...</p>
            </nav>
            <div>
                <aside>
                    <p>Other items here...</p>
                </aside>
                {{{app}}}
            </div>
            <!-- Polyfills -->
            <script src="https://unpkg.com/core-js/client/shim.min.js"></script>
            <!-- Update these package versions as needed -->
            <script src="https://unpkg.com/zone.js@0.8.4?main=browser"></script>
            <script src="https://unpkg.com/systemjs@0.19.39/dist/system.src.js"></script>
            <!-- This SystemJS configuration loads umd packages from the web -->
            <script src="/src/systemjs.config.server.js"></script>
            <script>
                System.import('/src/app/dist/main.js')
                    .catch(function(err){ console.error(err); });
            </script>
        </body>
    </html>
</template>

<script>
</script>
