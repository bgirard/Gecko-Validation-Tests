#!/bin/bash
ssh bgirard@people.mozilla.org "cd public_html/Invalidation && echo Pull \$PWD && git pull && chmod 755 platformdebug.*"
