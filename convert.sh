mkdir public/images/webp

for FILE in public/images/**/*; do 
# echo "$(filename=${FILE##*/}; echo ${filename%.*})"
  # if [[ $FILE == *.webp ]]
  # then
  #   rm $FILE
  if [[ $FILE == *.gif ]]
  # elif [[ $FILE == *.gif ]]
  then
    echo converting ${FILE%.*} to .webp
    gif2webp -q 75 ${FILE%.*}.gif -o public/images/webp/$(filename=${FILE##*/}; echo ${filename%.*}).webp -quiet
  elif [[ $FILE == *.png ]]
  then
    echo converting ${FILE%.*} to .webp
    cwebp -q 75 ${FILE%.*}.png -o public/images/webp/$(filename=${FILE##*/}; echo ${filename%.*}).webp -resize 300 300 -quiet
  else
    echo ${FILE%.*} is not a .webp or .gif or .png
  fi
done
