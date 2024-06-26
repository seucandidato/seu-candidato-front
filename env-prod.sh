#!/bin/sh

rm -rf ./src/assets/env.js
touch ./src/assets/env.js

echo "(function(window) {" >> ./src/assets/env.js
echo '   window["env"] = window["env"] || {};' >> ./src/assets/env.js
echo "   window[\"env\"][\"ENV\"] = \"$(echo PROD)\";" >> ./src/assets/env.js
echo "   window[\"env\"][\"BACKEND_URL\"] = \"$(echo localhost:3000/)\";" >> ./src/assets/env.js

echo "})(this);" >> ./src/assets/env.js