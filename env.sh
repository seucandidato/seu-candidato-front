#!/bin/sh

rm -rf ./assets/env.js
touch ./assets/env.js

echo "(function(window) {" >> ./assets/env.js
echo '   window["env"] = window["env"] || {};' >> ./assets/env.js
echo "   window[\"env\"][\"ENV\"] = \"$(echo "$ENV")\";" >> ./assets/env.js
echo "   window[\"env\"][\"BACKEND_API\"] = \"$(echo "$BACKEND_API")\";" >> ./assets/env.js

echo "})(this);" >> ./assets/env.js