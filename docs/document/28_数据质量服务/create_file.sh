#!/bin/bash

files=(
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done
