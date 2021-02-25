for i in *.png;
  do name=`echo "$i" | cut -d'.' -f1`
  echo "$name"
  # ffmpeg -i "$i" -vf scale="600:-1" "optim_${name}.png"
  optipng -o7 "${name}.png"
done


